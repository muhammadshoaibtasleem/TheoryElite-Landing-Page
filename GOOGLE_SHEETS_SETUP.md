# Google Sheets Email Capture Setup

Emails from the Android waitlist will be saved directly to a Google Sheet. Free, no backend needed.

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Theory Elite Waitlist"**
3. In Row 1, add these headers:
   - **A1:** `Email`
   - **B1:** `Timestamp`
   - **C1:** `Source`

## Step 2: Add the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.email,
    data.timestamp,
    data.source
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (Ctrl+S)

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon → select **Web app**
3. Set:
   - **Description:** "Email capture"
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. **Authorize** when prompted (click through "Advanced → Go to ... (unsafe)")
6. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/ABCDEF.../exec
   ```

## Step 4: Add URL to the Landing Page

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Then restart the dev server (`./run.sh`).

## That's it!

Every time someone submits the Android waitlist form, a new row will appear in your Google Sheet with their email, timestamp, and source.

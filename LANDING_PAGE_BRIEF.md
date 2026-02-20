# Theory Elite — Landing Page Design Brief

## Purpose
Build a single-page, high-converting landing page for Theory Elite — a gamified business quiz app with 1v1 battles. The page must drive App Store downloads and collect emails for the waitlist (Android/web users).

## Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- Framer Motion (animations)
- Deploy on Vercel (free)
- No backend needed (email capture via Mailchimp embed or Formspree)

## Design Philosophy
- Dark theme (deep purple/navy background like the app) with vibrant accent colors
- Premium, modern, Apple-level polish
- Smooth scroll animations (elements fade/slide in as user scrolls)
- Mobile-first design (60%+ of traffic will be mobile)
- Fast — under 2 second load time, no heavy libraries
- Inspired by: Duolingo.com, Linear.app, Raycast.com, Arc.net

## Brand Colors
```
Primary Background:  #0A0A14 (near-black with blue undertone)
Card Background:     #12121E (slightly lighter)
Primary Purple:      #7C3AED (vibrant purple — main accent)
Primary Blue:        #3B82F6 (secondary accent)
Gold/Accent:         #F59E0B (coins, achievements, premium)
Success Green:       #10B981 (correct answers, positive actions)
Error Red:           #EF4444 (wrong answers)
Text Primary:        #FFFFFF
Text Secondary:      #94A3B8 (muted gray-blue)
Text Tertiary:       #64748B (very muted)
Gradient:            linear-gradient(135deg, #7C3AED, #3B82F6) — primary CTA gradient
Gold Gradient:       linear-gradient(135deg, #F59E0B, #D97706) — premium/pro elements
```

## Typography
```
Headlines:     Inter or SF Pro Display, Bold/Black, tracking tight
Body:          Inter, Regular/Medium
Accent/Badge:  Inter, Semibold, uppercase, letter-spacing wide
Code/Stats:    JetBrains Mono or SF Mono (for numbers, stats)
```

## Favicon & Meta
- Favicon: App icon (purple gradient with "TE" or book icon)
- Title: "Theory Elite — Master Business Theory Through Quiz Battles"
- Description: "The #1 gamified quiz app for business students. 1v1 battles, flashcards, timed quizzes, and daily challenges across 6 subjects. Download free."
- OG Image: Hero section screenshot (1200x630)

---

# PAGE SECTIONS (Top to Bottom)

---

## 1. NAVIGATION BAR (sticky, glass morphism)

```
Layout: Fixed top, full-width, blur backdrop
Height: 64px
Background: rgba(10, 10, 20, 0.8) with backdrop-blur-xl
Border: 1px solid rgba(255,255,255,0.05) on bottom
```

**Left:** App icon (small, 32px) + "Theory Elite" text logo (bold, white)

**Center (desktop only):** Nav links — Features | Subjects | How It Works | Pricing

**Right:** "Download Free" button (small, pill-shaped, purple gradient)

**Mobile:** Hamburger menu (3 lines) → slide-down overlay with links

**Behavior:** Transparent on top, gains background on scroll. Smooth transition.

---

## 2. HERO SECTION (above the fold — most important section)

```
Layout: Two columns on desktop (text left, phone mockup right), stacked on mobile
Height: 100vh (full viewport)
Background: Radial gradient glow behind the phone mockup (purple/blue, subtle)
```

### Left Column (Text)

**Eyebrow badge** (above headline):
```
Small pill badge with subtle border glow
Icon: sparkle or star
Text: "#1 Business Quiz App"
Style: Uppercase, small text, purple border, semi-transparent purple background
```

**Headline (H1):**
```
Master Business Theory.
Battle Your Friends.
Ace Your Exams.
```
- Font: 56px desktop / 36px mobile, Bold/Black, white
- Each line on its own row
- "Battle Your Friends." in purple gradient text (stands out)
- Animate: Fade up + stagger each line by 0.15s

**Subheadline:**
```
The gamified quiz app that makes studying business addictive.
6 subjects. Real-time 1v1 battles. Daily challenges. Free to download.
```
- Font: 18px, text-secondary color, max-width 500px
- Animate: Fade up after headline

**CTA Buttons (side by side):**
```
[Download on the App Store]  (Apple badge — official black badge, links to App Store)
[Join Android Waitlist]      (outline button, white border, ghost style)
```
- App Store badge: Standard Apple "Download on the App Store" badge
- Android button: Opens email capture modal or scrolls to email section
- Below buttons, small text: "Free to download. No credit card required."

**Social proof row (below CTAs):**
```
★★★★★  4.9 Rating  •  1,000+ Students  •  6 Subjects
```
- Star icons in gold
- Small text, text-tertiary color
- Update numbers as they grow (can start with "Launching Soon" if no reviews yet)

### Right Column (Phone Mockup)

**iPhone mockup** showing the app's home screen (Library view with subject cards visible)

- Use a 3D-angled iPhone frame (tilted ~15 degrees, floating effect)
- Subtle shadow underneath
- Floating elements around the phone (animated):
  - A streak flame icon "7 Day Streak!" (top-left, floating up/down slowly)
  - A battle rank badge "Gold Rank" (top-right)
  - A coin "+50 Coins" (bottom-left)
  - A checkmark "Perfect Score!" (bottom-right)
- These floating elements have a glass morphism card style with blur
- Animate: Phone slides up from bottom, floating elements fade in with stagger

**Mobile layout:** Phone mockup centered below text, smaller, no floating elements (too cluttered on mobile)

---

## 3. LOGO BAR / SOCIAL PROOF (trust strip)

```
Layout: Full-width horizontal strip
Background: Slightly lighter than hero (#0E0E1A)
Padding: 40px vertical
Border: 1px solid rgba(255,255,255,0.03) top and bottom
```

**Content:**
```
"Built for students at"
[University logo 1] [University logo 2] [University logo 3] [University logo 4] [University logo 5]
```

If no university partnerships yet, use:
```
"Trusted by business students worldwide"
[5 star cluster] "Join 1,000+ students studying smarter"
```

OR feature badges:
```
[App Store badge "Editor's Choice"] [Badge "Featured in Education"] [Badge "4.9 ★ Rating"]
```

Use placeholder badges for now — replace with real ones when earned. Keep this section subtle but credible.

---

## 4. FEATURES SECTION — "Everything You Need to Ace Your Exams"

```
Layout: Section title centered, then alternating left-right feature rows
Background: Same dark background
Padding: 100px vertical
```

**Section Header:**
```
Eyebrow: "FEATURES" (purple, uppercase, small, tracking wide)
Headline: "Everything you need to ace your exams"
Subheadline: "Six study modes designed to help you learn faster, remember longer, and score higher."
```

### Feature Row 1: Quiz Battles (LEFT text, RIGHT screenshot)

```
Badge: "REAL-TIME BATTLES" (purple pill)
Headline: "Challenge anyone. Anywhere."
Description: "Go head-to-head with classmates in real-time 1v1 quiz battles.
Wager coins, climb through 6 ranks from Bronze to Elite, and prove
you're the smartest in the room."
Bullet points (with icons):
  ⚡ Quick Battle, Best of 3, Marathon & Accuracy modes
  🏆 6 competitive ranks: Bronze → Elite
  🪙 Wager coins for higher stakes
  📊 Global leaderboards
```
**Screenshot:** iPhone showing the live battle screen (both players visible, question displayed)

### Feature Row 2: Multiple Study Modes (RIGHT text, LEFT screenshot)

```
Badge: "STUDY MODES" (blue pill)
Headline: "Your way. Your pace."
Description: "Whether you've got 2 minutes or 2 hours, there's a mode for you.
Standard quizzes, timed challenges, flashcards, or daily challenges —
pick what works and start studying."
Bullet points:
  📝 Standard Quizzes — Classic Q&A format
  ⏱️ Timed Mode — 30 seconds per question
  🃏 Flashcards — Swipe through key concepts
  🌟 Daily Challenge — 5 fresh questions every day
```
**Screenshot:** iPhone showing the timed quiz screen (timer visible, answer options)

### Feature Row 3: Streaks & Gamification (LEFT text, RIGHT screenshot)

```
Badge: "GAMIFICATION" (gold pill)
Headline: "Study streaks that actually stick."
Description: "Theory Elite makes studying a habit you actually want to keep.
Build your streak, complete daily missions, earn coins and XP,
and unlock 20+ achievement badges."
Bullet points:
  🔥 Daily streaks with bonus rewards (up to 100 coins)
  🎯 Daily missions — new goals every day
  ⭐ 20+ achievements to unlock
  💰 Earn coins to spend on power-ups and avatars
```
**Screenshot:** iPhone showing the streak/missions screen

### Feature Row 4: 6 Business Subjects (RIGHT text, LEFT grid)

```
Badge: "SUBJECTS" (green pill)
Headline: "6 subjects. Hundreds of questions."
Description: "Every major business course covered with expertly crafted questions.
New subjects added regularly."
```
**Instead of a screenshot, show a grid of 6 subject cards:**
```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  📊              │  │  🏷️              │  │  🧠              │
│  Marketing       │  │  Brand           │  │  Consumer        │
│  Management      │  │  Management      │  │  Behavior        │
│  250+ questions  │  │  200+ questions  │  │  200+ questions  │
└─────────────────┘  └─────────────────┘  └─────────────────┘
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  💰              │  │  ⚙️              │  │  📈              │
│  Financial       │  │  Operations      │  │  Business        │
│  Management      │  │  Management      │  │  Analytics       │
│  200+ questions  │  │  200+ questions  │  │  200+ questions  │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```
Each card has:
- Gradient background matching subject accent color
- Icon
- Subject name (bold, white)
- Question count (small, muted)
- Subtle hover effect (lift + glow)

**Animation:** All feature rows animate in on scroll (fade up + slight slide from left/right depending on layout side). Use Framer Motion's `whileInView`.

---

## 5. HOW IT WORKS — "Start Studying in 3 Steps"

```
Layout: 3 columns, each with number + icon + text
Background: Subtle gradient or slightly different shade (#0C0C18)
Padding: 80px vertical
```

**Section Header:**
```
Eyebrow: "HOW IT WORKS"
Headline: "Start studying in under 60 seconds"
```

**3 Steps (horizontal on desktop, vertical on mobile):**

```
Step 1                    Step 2                    Step 3
┌──────────┐             ┌──────────┐             ┌──────────┐
│    01    │             │    02    │             │    03    │
│  📱      │             │  📚      │             │  ⚔️      │
│ Download │             │ Pick a   │             │ Start    │
│ the App  │             │ Subject  │             │ Battling │
│          │             │          │             │          │
│ Free on  │             │ Choose   │             │ Challenge│
│ the App  │             │ from 6   │             │ friends  │
│ Store.   │             │ business │             │ or study │
│ Create   │             │ courses  │             │ solo.    │
│ account  │             │ and pick │             │ Earn XP, │
│ in 10    │             │ your     │             │ climb    │
│ seconds. │             │ mode.    │             │ ranks.   │
└──────────┘             └──────────┘             └──────────┘
```

Each step card:
- Large gradient number ("01", "02", "03") — purple gradient text, 64px
- Icon (emoji or SF Symbol equivalent)
- Title (bold, white, 20px)
- Description (text-secondary, 16px)
- Connecting line/arrow between steps (dotted line, horizontal on desktop)

---

## 6. SOCIAL PROOF / TESTIMONIALS

```
Layout: Horizontal scrolling cards (3 visible on desktop, 1 on mobile)
Background: Same dark
Padding: 80px vertical
```

**Section Header:**
```
Eyebrow: "TESTIMONIALS"
Headline: "Loved by business students"
```

**Testimonial Cards (create realistic but placeholder testimonials — replace with real ones later):**

```
Card 1:
"Theory Elite got me through my marketing final. The battle mode with my
study group made revision actually fun for once."
— Sarah K., Marketing Major, University of Manchester
★★★★★

Card 2:
"I've tried Quizlet, Anki, and every other study app. This is the only one
that keeps me coming back every day. The streaks are addictive."
— James L., MBA Student, London Business School
★★★★★

Card 3:
"The daily challenges are perfect for my commute. 5 questions, 5 minutes,
and I feel like I actually studied."
— Priya M., BBA Student, Delhi University
★★★★★

Card 4:
"My roommate and I battle each other every night before bed. My GPA has
never been higher. This app is a game changer."
— Marcus T., Finance Major, NYU Stern
★★★★★
```

Each card:
- Glass morphism background (rgba white, very subtle, with backdrop blur)
- 1px border (rgba white 0.05)
- Quote text in white, italic
- Name, title in text-secondary
- Gold stars
- Subtle hover: slight lift + border glow

**Note for user:** Replace these with real testimonials as soon as you get them from actual users. Add their profile photos for higher credibility.

---

## 7. APP SCREENSHOTS CAROUSEL

```
Layout: Horizontal scroll/carousel of iPhone screenshots
Background: Gradient section (subtle purple radial glow)
Padding: 80px vertical
```

**Section Header:**
```
Eyebrow: "SEE IT IN ACTION"
Headline: "Beautiful. Addictive. Effective."
```

**Screenshots (5-7 iPhone frames in a row, slightly overlapping, 3D perspective):**
1. Home / Library (subject cards)
2. Quiz in progress (question + answers)
3. Battle screen (1v1 live)
4. Flashcard mode
5. Achievements / badges
6. Avatar shop
7. Stats / analytics

Display as:
- Angled iPhone frames in a horizontal row
- Center screenshot is largest/front, sides angle away (3D carousel effect)
- Auto-scroll slowly, or draggable
- On mobile: Horizontal scroll snap

---

## 8. PRICING SECTION

```
Layout: 2-3 pricing cards centered
Background: Subtle gradient shift
Padding: 100px vertical
```

**Section Header:**
```
Eyebrow: "PRICING"
Headline: "Start free. Upgrade when you're ready."
Subheadline: "Theory Elite is free to download with 2 subjects included. Go Pro for the full experience."
```

**Pricing Cards:**

```
┌─────────────────┐    ┌─────────────────────┐    ┌─────────────────┐
│     FREE         │    │     PRO (Popular)    │    │   PRO ANNUAL     │
│                  │    │   ⭐ Best Value       │    │                  │
│     $0           │    │                      │    │    $29.99        │
│   forever        │    │     $4.99/mo         │    │    /year         │
│                  │    │                      │    │   ($2.50/mo)     │
│ ✓ 2 subjects     │    │ ✓ All 6 subjects     │    │ ✓ Everything in  │
│ ✓ All quiz modes │    │ ✓ Unlimited power-ups│    │   Pro Monthly    │
│ ✓ Daily challenge│    │ ✓ Exclusive avatars  │    │ ✓ Save 50%       │
│ ✓ Battle mode    │    │ ✓ Advanced analytics │    │ ✓ Best value     │
│ ✓ Streaks & XP   │    │ ✓ Everything in Free │    │                  │
│                  │    │                      │    │                  │
│ [Download Free]  │    │ [Start 7-Day Trial]  │    │ [Start 7-Day    │
│                  │    │                      │    │  Trial]          │
└─────────────────┘    └─────────────────────┘    └─────────────────┘
                              ↑ highlighted
                        (purple gradient border,
                         slight scale up,
                         "MOST POPULAR" badge)
```

- Free card: Dark card, white text, outline CTA button
- Pro Monthly card: Purple gradient border, slightly larger, "MOST POPULAR" badge on top, solid purple CTA
- Pro Annual card: Gold accent, "SAVE 50%" badge, gold CTA

All CTA buttons link to App Store (purchases happen in-app, not on web)

---

## 9. FAQ SECTION

```
Layout: Accordion style, centered, max-width 700px
Background: Same dark
Padding: 80px vertical
```

**Section Header:**
```
Eyebrow: "FAQ"
Headline: "Got questions?"
```

**Questions (accordion — click to expand):**

```
Q: Is Theory Elite really free?
A: Yes! Theory Elite is free to download with 2 full subjects
(Marketing Management and Brand Management), all quiz modes,
battle mode, streaks, and daily challenges included. Pro unlocks
all 6 subjects, unlimited power-ups, exclusive avatars, and
advanced analytics.

Q: What subjects are available?
A: Currently 6 subjects: Marketing Management, Brand Management,
Consumer Behavior, Financial Management, Operations Management,
and Business Analytics. We're adding new subjects regularly —
Accounting, Economics, and Business Law are coming soon.

Q: Can I play with friends?
A: Absolutely! You can add friends by username, challenge them to
1v1 quiz battles, compare scores on leaderboards, and climb
through 6 competitive ranks together.

Q: Is there an Android version?
A: Not yet, but it's coming soon! Join our waitlist to be the
first to know when Theory Elite launches on Android.

Q: Can I use it offline?
A: You need an internet connection for battles and leaderboards,
but we're working on offline mode for solo quizzes in a future update.

Q: How is this different from Quizlet?
A: Quizlet is a generic flashcard tool. Theory Elite is purpose-built
for business students with curated expert questions, real-time 1v1
quiz battles, a full gamification system (streaks, ranks, XP,
achievements), and daily challenges. Think Duolingo meets MBA prep.
```

Each accordion item:
- Collapsed: Question text + chevron icon (right side)
- Expanded: Smooth height animation, answer fades in
- Subtle border between items
- Chevron rotates 180 degrees on open

---

## 10. FINAL CTA SECTION (conversion push)

```
Layout: Centered, dramatic
Background: Large purple/blue radial gradient glow (dramatic, fills section)
Padding: 120px vertical
```

**Content:**
```
Headline: "Stop cramming. Start winning."
Subheadline: "Join thousands of business students studying smarter with Theory Elite."

[Download on the App Store]  (large Apple badge)
[Join Android Waitlist]      (outline button)

Small text: "Free to download • No credit card required • 2 subjects included"
```

**Design:**
- Headline is large (48px desktop, 32px mobile), bold, white
- "Start winning." in purple gradient text
- Glowing orb/gradient behind the text (dramatic, like a spotlight)
- CTA buttons are larger than header version
- Floating app icon above the headline (subtle bounce animation)

---

## 11. FOOTER

```
Layout: 4 columns on desktop, stacked on mobile
Background: #08080F (darkest)
Padding: 60px top, 30px bottom
Border: 1px solid rgba(255,255,255,0.05) on top
```

**Column 1 — Brand:**
```
[App Icon] Theory Elite
"Master business theory through quiz battles."

Social icons: [Twitter/X] [Instagram] [TikTok]
```

**Column 2 — Product:**
```
Features
Subjects
Pricing
Download
```

**Column 3 — Resources:**
```
Blog (link to /blog if exists, or #)
Support (mailto: your email)
Privacy Policy (/privacy)
Terms of Service (/terms)
```

**Column 4 — Company:**
```
About
Contact
Press Kit
Careers (optional)
```

**Bottom bar:**
```
© 2026 Theory Students. All rights reserved.
"Made with ❤️ for business students worldwide"
```

---

## 12. EMAIL CAPTURE MODAL (for Android waitlist)

Triggered when user clicks "Join Android Waitlist" anywhere on the page.

```
Overlay: Dark semi-transparent backdrop
Modal: Glass morphism card, centered, max-width 450px
```

**Content:**
```
[Android icon]
Headline: "Android is coming soon!"
Subheadline: "Drop your email and we'll notify you the moment Theory Elite hits Google Play."

[Email input field]  [Notify Me →]

Small text: "No spam, ever. Unsubscribe anytime."
```

- Email input: Dark background, white text, rounded, purple focus ring
- Button: Purple gradient, "Notify Me" with arrow icon
- Success state: Checkmark + "You're on the list! We'll email you at launch."
- Use Formspree or Mailchimp embed for the actual form submission

---

# ANIMATIONS & INTERACTIONS

## Scroll Animations (Framer Motion)
- All sections animate in on scroll using `whileInView`
- Default animation: `opacity: 0 → 1, y: 30 → 0, duration: 0.6`
- Stagger children elements by 0.1s
- Only animate once (not on re-scroll)

## Hover Effects
- Buttons: Slight scale up (1.02) + shadow increase
- Cards: Slight lift (translateY -4px) + border glow
- Nav links: Underline animation (width 0 → 100%)
- Subject cards: Glow effect matching subject color

## Special Animations
- Hero floating elements: Continuous subtle float (translateY oscillation, 3s loop)
- Phone mockup: Gentle floating (translateY 10px oscillation, 4s loop)
- Stats numbers: Count-up animation when section enters viewport
- Streak flame: Subtle pulse/glow animation

## Page Load
- Navigation fades in first (0.2s)
- Hero text staggers in line by line (0.3s, 0.45s, 0.6s)
- Phone mockup slides up (0.5s, slight spring)
- Floating elements pop in with stagger (0.7s onward)
- CTA buttons fade in last (0.8s)

---

# SEO REQUIREMENTS

## Meta Tags
```html
<title>Theory Elite — Master Business Theory Through Quiz Battles</title>
<meta name="description" content="The #1 gamified quiz app for business students. 1v1 battles, flashcards, timed quizzes, and daily challenges across 6 MBA subjects. Download free on iOS.">
<meta name="keywords" content="business quiz app, MBA study, marketing management quiz, finance quiz, quiz battles, exam prep, business student app, flashcards">
<meta property="og:title" content="Theory Elite — Master Business Theory Through Quiz Battles">
<meta property="og:description" content="6 subjects. Real-time 1v1 battles. Daily challenges. The gamified quiz app that makes studying business addictive.">
<meta property="og:image" content="/og-image.png">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

## Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Theory Elite: MBA & Business",
  "operatingSystem": "iOS",
  "applicationCategory": "EducationApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "100"
  }
}
```

## Pages
- `/` — Main landing page (this brief)
- `/privacy` — Privacy policy (copy from PRIVACY_POLICY.md)
- `/terms` — Terms of service (simple terms page)
- `/blog` — Future blog for SEO content

## Performance
- Lighthouse score target: 95+ on all metrics
- Images: WebP format, lazy loaded, properly sized
- Fonts: Preloaded, subset to used characters
- No unused CSS/JS
- Static generation (Next.js SSG) — no server needed

---

# RESPONSIVE BREAKPOINTS

```
Mobile:    < 768px   (single column, stacked layouts)
Tablet:    768-1024px (2 columns where applicable)
Desktop:   > 1024px  (full layout, all animations)
Large:     > 1440px  (max-width container, centered)
```

## Mobile-Specific Adjustments
- Hero: Stack text above phone mockup, no floating elements
- Features: Single column, screenshot above text
- Pricing: Horizontal scroll or stacked cards
- Screenshots carousel: Swipeable, single phone visible
- Nav: Hamburger menu
- Font sizes: Scale down ~70% from desktop
- Reduce padding by ~50%
- Disable complex animations (performance)

---

# ASSETS NEEDED

## From Developer (you)
1. **App Icon** — High-res PNG (1024x1024)
2. **App Screenshots** — 6-8 iPhone screenshots from the app (can be simulator captures)
3. **App Store Link** — URL to the iOS app (once approved)
4. **Support Email** — For footer/contact
5. **Social Media Links** — TikTok, Instagram, Twitter/X URLs

## Generated by Developer (Claude/AI)
1. **iPhone Mockup Frames** — Use CSS/SVG device frames, or free mockup from things like deviceframes.com
2. **OG Image** — 1200x630 social share image
3. **Favicon** — 32x32 + 180x180 Apple touch icon (crop from app icon)
4. **Placeholder Testimonial Avatars** — Use UI Avatars API or simple colored circles with initials

---

# COPY TONE GUIDE

- **Confident but not arrogant** — "The smartest way to study" not "The only way to study"
- **Student-friendly** — Casual, relatable, no corporate speak
- **Action-oriented** — Every section ends with a reason to download
- **Specific** — "6 subjects, 1,200+ questions" not "Lots of content"
- **Benefit-focused** — "Ace your exams" not "Take quizzes"
- **Short sentences** — Punchy. Direct. No fluff.

---

# FULL PAGE FLOW SUMMARY

```
1. Nav Bar (sticky, glass)
2. Hero (headline + phone mockup + CTA) ← 80% of conversions happen here
3. Trust Strip (social proof / university logos)
4. Features (4 alternating rows with screenshots)
5. How It Works (3 simple steps)
6. Testimonials (scrollable cards)
7. Screenshots Carousel (iPhone frames)
8. Pricing (Free vs Pro Monthly vs Pro Annual)
9. FAQ (accordion)
10. Final CTA (dramatic, last conversion push)
11. Footer (links, social, legal)
12. Email Modal (Android waitlist popup)
```

---

# WHAT SUCCESS LOOKS LIKE

- Page loads in < 2 seconds
- Lighthouse score 95+
- Clear App Store download button visible without scrolling
- Email capture for Android users
- Mobile experience is as good as desktop
- SEO-optimized for "business quiz app", "MBA study app" keywords
- Visitor → App Store click rate: 15-25%
- Visitor → Email capture rate: 5-10%

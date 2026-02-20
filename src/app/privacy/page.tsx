import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Theory Elite",
  description: "Theory Elite privacy policy.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-bg-primary py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="text-purple-primary text-sm hover:underline mb-8 inline-block"
        >
          ← Back to Home
        </a>
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none text-text-secondary space-y-6">
          <p>Last updated: February 2026</p>

          <h2 className="text-white text-lg font-semibold">1. Information We Collect</h2>
          <p>
            When you use Theory Elite, we collect information you provide directly (such as your username, email address, and profile information) and information generated through your use of the app (such as quiz scores, battle results, and streaks).
          </p>

          <h2 className="text-white text-lg font-semibold">2. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve Theory Elite, including personalizing your experience, maintaining leaderboards, tracking your progress, and sending you relevant notifications about your streaks and challenges.
          </p>

          <h2 className="text-white text-lg font-semibold">3. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share anonymized, aggregated data for analytics purposes. Your username and quiz stats are visible to other users on leaderboards and in battle mode.
          </p>

          <h2 className="text-white text-lg font-semibold">4. Data Security</h2>
          <p>
            We use industry-standard security measures to protect your data. All data is transmitted using SSL encryption.
          </p>

          <h2 className="text-white text-lg font-semibold">5. Your Rights</h2>
          <p>
            You can request to access, update, or delete your personal data at any time by contacting us at support@theoryelite.com.
          </p>

          <h2 className="text-white text-lg font-semibold">6. Contact</h2>
          <p>
            For questions about this privacy policy, contact us at support@theoryelite.com.
          </p>
        </div>
      </div>
    </main>
  );
}

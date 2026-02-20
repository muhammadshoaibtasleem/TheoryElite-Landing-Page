import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Theory Elite",
  description: "Theory Elite terms of service.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-bg-primary py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="text-purple-primary text-sm hover:underline mb-8 inline-block"
        >
          ← Back to Home
        </a>
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-sm max-w-none text-text-secondary space-y-6">
          <p>Last updated: February 2026</p>

          <h2 className="text-white text-lg font-semibold">1. Acceptance of Terms</h2>
          <p>
            By downloading or using Theory Elite, you agree to be bound by these Terms of Service. If you do not agree, do not use the app.
          </p>

          <h2 className="text-white text-lg font-semibold">2. Use of the App</h2>
          <p>
            Theory Elite is an educational quiz app. You agree to use it for lawful purposes only. You must not attempt to cheat, exploit bugs, or harass other users.
          </p>

          <h2 className="text-white text-lg font-semibold">3. Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account. You must provide accurate information when creating your account.
          </p>

          <h2 className="text-white text-lg font-semibold">4. Subscriptions & Purchases</h2>
          <p>
            Theory Elite offers in-app purchases and subscriptions managed through the Apple App Store. All purchases are subject to Apple&apos;s terms. Refund requests should be directed to Apple.
          </p>

          <h2 className="text-white text-lg font-semibold">5. Intellectual Property</h2>
          <p>
            All content, questions, design, and code in Theory Elite are owned by Theory Students. You may not reproduce, distribute, or create derivative works without permission.
          </p>

          <h2 className="text-white text-lg font-semibold">6. Limitation of Liability</h2>
          <p>
            Theory Elite is provided &ldquo;as is&rdquo; without warranties. We are not liable for any damages arising from your use of the app.
          </p>

          <h2 className="text-white text-lg font-semibold">7. Contact</h2>
          <p>
            For questions about these terms, contact us at support@theoryelite.com.
          </p>
        </div>
      </div>
    </main>
  );
}

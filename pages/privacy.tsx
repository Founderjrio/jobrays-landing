import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted-foreground">
      <h1 className="text-2xl font-bold text-foreground mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy explains how JobRays collects, uses, and protects your personal data. By using
        our site or joining our waitlist, you agree to this policy.
      </p>

      <h2 className="font-semibold mt-6 mb-2">1. What We Collect</h2>
      <p className="mb-4">
        We collect your email address when you join our waitlist. Optionally, we may collect analytics data
        (via Firebase, Google, or PostHog) to improve our product.
      </p>

      <h2 className="font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
      <p className="mb-4">
        We use your email to:
        <ul className="list-disc pl-5 mt-2">
          <li>Send early access invites and launch updates</li>
          <li>Notify you about beta access or platform releases</li>
          <li>Improve our roadmap based on usage insights</li>
        </ul>
      </p>

      <h2 className="font-semibold mt-6 mb-2">3. Use of AI & External Services</h2>
      <p className="mb-4">
        Some responses or features in JobRays are powered by AI (e.g., OpenAI GPT APIs). Your data may be
        processed temporarily by those services but never stored permanently or resold. We use caching to
        optimize privacy and cost.
      </p>

      <h2 className="font-semibold mt-6 mb-2">4. Data Retention & Security</h2>
      <p className="mb-4">
        We store your email and waitlist metadata securely in Google Firestore. We do not sell or share
        your data. Firebase provides encryption and access control.
      </p>

      <h2 className="font-semibold mt-6 mb-2">5. GDPR / UK Data Protection Rights</h2>
      <p className="mb-4">
        If you are a resident of the UK or EU, you may request data access, correction, or deletion at any
        time. Please email{" "}
        <a href="mailto:privacy@jobrays.io" className="underline text-foreground">
          privacy@jobrays.io
        </a>{" "}
        to initiate such requests.
      </p>

      <h2 className="font-semibold mt-6 mb-2">6. Updates to This Policy</h2>
      <p className="mb-4">
        This Privacy Policy may be updated before our public launch. We’ll notify waitlist members if
        significant changes occur.
      </p>

      <h2 className="font-semibold mt-6 mb-2">7. Contact</h2>
      <p>
        You can contact our team at{" "}
        <a href="mailto:privacy@jobrays.io" className="underline text-foreground">
          privacy@jobrays.io
        </a>{" "}
        for privacy concerns.
      </p>
    </main>
  );
}

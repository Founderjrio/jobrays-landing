import React from "react";

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted-foreground">
      <h1 className="text-2xl font-bold text-foreground mb-6">Terms of Service</h1>

      <p className="mb-4">
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the JobRays website, services,
        and any associated waitlist (&quot;Services&quot;). By accessing or using JobRays, you agree to be bound by
        these Terms.
      </p>

      <h2 className="font-semibold mt-6 mb-2">1. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years old to use JobRays. By joining the waitlist or using the site, you
        represent that you meet this requirement.
      </p>

      <h2 className="font-semibold mt-6 mb-2">2. Waitlist and Pre-Launch Access</h2>
      <p className="mb-4">
        By joining our waitlist, you agree to receive limited communications about the JobRays platform,
        including early access, feature previews, and launch updates. This does not constitute an offer of
        paid services, and no payment is processed at this stage.
      </p>

      <h2 className="font-semibold mt-6 mb-2">3. AI-Powered Features (Ray)</h2>
      <p className="mb-4">
        JobRays includes AI-based features powered by large language models (e.g. OpenAI&apos;s GPT-4). The
        career guidance provided is informational and not guaranteed to be accurate or personalized. You
        acknowledge that AI-generated suggestions may contain errors or limitations.
      </p>

      <h2 className="font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All trademarks, branding, graphics, and content on JobRays are owned by us or our licensors. You
        may not reuse or redistribute content without written permission.
      </p>

      <h2 className="font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        JobRays is provided &quot;as is&quot; without warranty. We are not liable for any loss or damage resulting
        from the use of our site, features, or AI outputs. Use is at your own risk.
      </p>

      <h2 className="font-semibold mt-6 mb-2">6. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of India, with fallback to UK or US jurisdiction depending on
        your country of residence. Disputes shall be handled under applicable consumer law.
      </p>

      <h2 className="font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at{" "}
        <a href="mailto:support@jobrays.io" className="underline text-foreground">
          support@jobrays.io
        </a>
        .
      </p>
    </main>
  );
}

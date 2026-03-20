import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "RealEstateAI privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--muted)] mb-10">
          Last updated: March 19, 2026
        </p>

        <div className="space-y-8 text-[var(--muted)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information when you use our
              website:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-white/80">Usage Data:</strong> Pages
                visited, time spent on pages, click patterns, referring URLs, and
                device/browser information collected automatically through
                analytics tools.
              </li>
              <li>
                <strong className="text-white/80">Personal Information:</strong>{" "}
                Email address and name if you voluntarily subscribe to our
                newsletter.
              </li>
              <li>
                <strong className="text-white/80">Cookies:</strong> Small text
                files stored on your device to improve your browsing experience
                and enable analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>To provide and improve our website content and services</li>
              <li>
                To analyze site traffic and usage patterns via Google Analytics
              </li>
              <li>
                To send newsletters and updates if you have opted in to receive
                them
              </li>
              <li>
                To display relevant advertisements through third-party ad
                networks
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="mb-3">
              We use cookies and similar technologies to collect usage data and
              improve your experience. These include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-white/80">Essential Cookies:</strong>{" "}
                Required for the website to function properly.
              </li>
              <li>
                <strong className="text-white/80">Analytics Cookies:</strong>{" "}
                Google Analytics cookies to understand how visitors interact with
                our site.
              </li>
              <li>
                <strong className="text-white/80">Advertising Cookies:</strong>{" "}
                Used by Google AdSense and other ad partners to serve relevant
                ads.
              </li>
            </ul>
            <p className="mt-3">
              You can control cookies through your browser settings. Disabling
              cookies may affect your experience on our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Third-Party Advertising
            </h2>
            <p className="mb-3">
              We use Google AdSense and other third-party advertising networks to
              display ads on our website. These companies may use cookies and web
              beacons to collect information (not including your name, address,
              email address, or telephone number) about your visits to this and
              other websites in order to provide advertisements about goods and
              services of interest to you.
            </p>
            <p>
              Google&apos;s use of advertising cookies enables it and its
              partners to serve ads based on your visit to this site and/or other
              sites on the Internet. You may opt out of personalized advertising
              by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Affiliate Disclosure
            </h2>
            <p>
              Some links on RealEstateAI are affiliate links. This means we may
              earn a commission if you click on a link and make a purchase, at no
              additional cost to you. Our reviews and ratings are editorially
              independent and are not influenced by affiliate relationships. We
              only recommend products we believe provide genuine value to real
              estate professionals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Data Sharing
            </h2>
            <p>
              We do not sell your personal information to third parties. We may
              share anonymized, aggregated data with analytics and advertising
              partners. We may disclose your information if required by law or to
              protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the Internet
              is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Your Rights
            </h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Opt out of personalized advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our website is not directed to children under 13. We do not
              knowingly collect personal information from children. If you
              believe we have collected data from a child, please contact us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated revision date. We encourage
              you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or our data
              practices, please contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:contact@realestate-ai-tools.com"
                className="text-[var(--accent)] hover:underline"
              >
                contact@realestate-ai-tools.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="text-sm text-[var(--accent)] hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

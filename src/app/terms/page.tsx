import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "RealEstateAI terms of service — rules and guidelines for using our website.",
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-[var(--muted)] mb-10">
          Last updated: March 19, 2026
        </p>

        <div className="space-y-8 text-[var(--muted)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using RealEstateAI (&quot;the Website&quot;), you
              accept and agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              RealEstateAI is a review and comparison website that provides
              information, reviews, ratings, and comparisons of AI-powered tools
              for real estate professionals. Our content is intended for
              informational purposes only and should not be considered
              professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Content and Reviews
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                All reviews and ratings represent our editorial opinions based on
                research and testing.
              </li>
              <li>
                We strive for accuracy but make no guarantees that all
                information is current or error-free.
              </li>
              <li>
                Product features, pricing, and availability are subject to
                change by the respective tool providers.
              </li>
              <li>
                We recommend verifying details directly with tool providers
                before making purchasing decisions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Affiliate Links and Advertising
            </h2>
            <p className="mb-3">
              Our Website contains affiliate links and advertisements. When you
              click on an affiliate link and make a purchase, we may earn a
              commission at no additional cost to you. Advertising and affiliate
              partnerships do not influence our editorial reviews or ratings.
            </p>
            <p>
              Third-party advertisements displayed on the Website are managed by
              advertising partners such as Google AdSense. We are not responsible
              for the content of third-party ads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All content on the Website, including text, graphics, logos, and
              design, is the property of RealEstateAI or its content suppliers
              and is protected by intellectual property laws. You may not
              reproduce, distribute, or create derivative works from our content
              without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. User Conduct
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>
                Use the Website for any unlawful purpose or in violation of these
                Terms
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Website
              </li>
              <li>
                Interfere with or disrupt the Website&apos;s infrastructure
              </li>
              <li>
                Scrape, crawl, or otherwise extract content in bulk without
                permission
              </li>
              <li>
                Post or transmit any harmful, threatening, or objectionable
                content
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Third-Party Links
            </h2>
            <p>
              The Website contains links to third-party websites and services.
              We are not responsible for the content, privacy policies, or
              practices of any third-party sites. Visiting third-party links is
              at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p>
              The Website and its content are provided &quot;as is&quot; and
              &quot;as available&quot; without warranties of any kind, either
              express or implied. We do not warrant that the Website will be
              uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, RealEstateAI shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Website, including
              but not limited to loss of profits, data, or business
              opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless RealEstateAI and its
              operators from any claims, damages, or expenses arising from your
              use of the Website or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting to this page. Your
              continued use of the Website after changes constitutes acceptance
              of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws. Any disputes arising under these Terms shall be
              resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              13. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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

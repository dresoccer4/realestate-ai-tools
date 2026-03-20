import Link from "next/link";

const footerLinks = {
  Categories: [
    { href: "/categories/crm", label: "AI CRM" },
    { href: "/categories/virtual-staging", label: "Virtual Staging" },
    { href: "/categories/lead-generation", label: "Lead Generation" },
    { href: "/categories/marketing", label: "Marketing & Content" },
    { href: "/categories/analytics", label: "Property Analytics" },
    { href: "/categories/chatbots", label: "AI Chatbots" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
  Resources: [
    { href: "/reviews", label: "All Reviews" },
    { href: "/compare", label: "Compare Tools" },
    { href: "/blog", label: "Newsletter" },
    { href: "#", label: "Affiliate Disclosure" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-xl font-bold gradient-text">
              RealEstateAI
            </span>
            <p className="text-[var(--muted)] text-sm mt-3 max-w-sm leading-relaxed">
              Helping real estate professionals discover and compare the best
              AI-powered tools to grow their business, close more deals, and
              save time.
            </p>
            <div className="flex gap-4 mt-6">
              {["Twitter", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-[var(--muted)] hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-[var(--accent)]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Subscribe to our newsletter
              </h3>
              <p className="text-xs text-[var(--muted)] mt-1">
                Get weekly updates on new AI tools and real estate tech trends.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] flex-1 sm:w-64"
              />
              <button className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-blue-600 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-[var(--muted)]">
            &copy; 2026 RealEstateAI. All rights reserved. Affiliate
            disclosure: We may earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}

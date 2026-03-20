import { Tool } from "./types";

export const tools: Tool[] = [
  // ==================== CRM TOOLS ====================
  {
    id: "1",
    name: "Follow Up Boss",
    slug: "follow-up-boss",
    description:
      "The leading real estate CRM with AI-generated call transcripts, smart lists, and 250+ integrations. Built for solo agents and small teams who need ease of use without sacrificing power.",
    longDescription:
      "Follow Up Boss (FUB) is one of the most popular CRMs in real estate, known for its ease of use and massive integration ecosystem. It offers AI-generated call transcripts, smart lists for automated lead routing, call logging and recording, and action plans for automated follow-up sequences. With 250+ integrations including every major real estate platform, FUB ensures your workflow stays connected. The 14-day free trial and no-contract policy make it easy to test before committing.",
    category: "crm",
    rating: 4.7,
    reviewCount: 412,
    pricing: [
      {
        name: "Grow",
        price: 69,
        period: "month",
        features: [
          "Per user pricing",
          "AI call transcripts",
          "Smart lists",
          "250+ integrations",
          "14-day free trial",
        ],
      },
      {
        name: "Pro",
        price: 499,
        period: "month",
        features: [
          "Up to 10 users included",
          "All Grow features",
          "Advanced lead routing",
          "Team collaboration tools",
          "Priority support",
        ],
      },
      {
        name: "Platform",
        price: 1000,
        period: "month",
        features: [
          "Up to 30 users included",
          "All Pro features",
          "Custom workflows",
          "Dedicated account manager",
          "API access",
        ],
      },
    ],
    features: [
      "AI-generated call transcripts",
      "Smart lists and automated lead routing",
      "Call logging, recording, and transcription",
      "250+ integrations with real estate tools",
      "Action plans for automated follow-up sequences",
      "No contracts — cancel anytime",
      "7-day-a-week customer support",
      "Mobile app with full CRM access",
    ],
    pros: [
      "Best-in-class ease of use among real estate CRMs",
      "250+ integrations — connects with virtually everything",
      "No contracts and 14-day free trial",
      "7-day-a-week customer support",
    ],
    cons: [
      "Expensive for large teams (30+ agents)",
      "Less advanced AI than newer competitors like Lofty",
      "Built-in dialer costs extra ($39/user/month)",
    ],
    website: "https://www.followupboss.com",
    affiliateUrl: "https://www.followupboss.com", // No formal affiliate program yet (under consideration)
    logo: "📞",
    badge: "Editor's Choice",
    lastUpdated: "2026-03-15",
  },
  {
    id: "2",
    name: "Lofty (formerly Chime)",
    slug: "lofty",
    description:
      "All-in-one AI-powered real estate platform with predictive lead scoring, 33+ built-in lead generation methods, and IDX-integrated websites. Ideal for mid-size to large teams.",
    longDescription:
      "Lofty (formerly Chime) is a comprehensive real estate platform combining CRM, lead generation, marketing, and IDX websites into a single AI-powered ecosystem. Its AI Workforce provides intelligent automation and predictive insights, while real-time lead scoring based on engagement behavior helps agents prioritize. With 33+ built-in lead generation methods, cross-platform 360-degree marketing, and automatic lead routing by price, location, source, or type, Lofty is built for teams that want everything in one place.",
    category: "crm",
    rating: 4.5,
    reviewCount: 287,
    pricing: [
      {
        name: "Core",
        price: 449,
        period: "month",
        features: [
          "AI-powered CRM",
          "IDX website",
          "Lead scoring",
          "Basic lead gen tools",
          "Email marketing",
        ],
      },
      {
        name: "Premier",
        price: 700,
        period: "month",
        features: [
          "All Core features",
          "Advanced AI automation",
          "33+ lead gen methods",
          "360-degree marketing",
          "Lender cost-sharing option",
        ],
      },
      {
        name: "Enterprise",
        price: 1500,
        period: "month",
        features: [
          "All Premier features",
          "Custom AI workflows",
          "Dedicated success manager",
          "Advanced reporting",
          "Multi-office support",
        ],
      },
    ],
    features: [
      "AI Workforce with intelligent automation",
      "Real-time lead scoring based on engagement behavior",
      "33+ built-in lead generation methods",
      "Cross-platform 360-degree marketing",
      "IDX-integrated, SEO-optimized websites",
      "Automatic lead routing by price, location, source",
      "AI-powered virtual assistant",
      "Lender cost-sharing on marketing spend",
    ],
    pros: [
      "True all-in-one platform replacing multiple tools",
      "Powerful AI with predictive insights",
      "Strong built-in lead generation",
      "Lender cost-sharing can offset up to 50% of marketing costs",
    ],
    cons: [
      "Expensive — starting at $449/month",
      "Steep learning curve due to platform breadth",
      "Pricing not publicly listed — varies by team size",
    ],
    website: "https://lofty.com",
    affiliateUrl: "https://lofty.com", // Confirmed affiliate: 10% MRR for 18 months, multi-tier
    logo: "🏢",
    badge: "Most Popular",
    lastUpdated: "2026-03-10",
  },
  {
    id: "3",
    name: "CINC",
    slug: "cinc",
    description:
      "Done-for-you lead generation platform with AI qualification, Google & Facebook ad management, and MLS-integrated search websites. Built for established teams with budget.",
    longDescription:
      "CINC (Commissions Inc) is a premium lead generation and CRM platform that includes leads in every plan — there is no CRM-only option. The platform manages Google and Facebook ad campaigns, uses Autotracks for automated drip campaigns with emails, texts, and task reminders based on lead behavior, and provides MLS-integrated search websites with hyper-local targeting. With 4,000+ Zapier integrations and AI lead qualification, CINC handles the entire lead lifecycle from generation to conversion.",
    category: "lead-generation",
    rating: 4.4,
    reviewCount: 198,
    pricing: [
      {
        name: "Solo",
        price: 900,
        period: "month",
        features: [
          "Leads included",
          "AI lead qualification",
          "Google & Facebook ads",
          "MLS-integrated website",
        ],
      },
      {
        name: "Pro",
        price: 1200,
        period: "month", // Estimated based on custom pricing reports
        features: [
          "All Solo features",
          "Autotracks automation",
          "Team lead routing",
          "Advanced reporting",
          "Priority support",
        ],
      },
      {
        name: "Select",
        price: 1500,
        period: "month", // Estimated — custom pricing
        features: [
          "All Pro features",
          "Custom ad strategy",
          "Dedicated account manager",
          "4,000+ Zapier integrations",
          "White-label options",
        ],
      },
    ],
    features: [
      "Done-for-you Google and Facebook ad management",
      "Autotracks: automated drip campaigns (email, text, tasks)",
      "AI lead qualification and nurturing",
      "MLS-integrated search websites with hyper-local targeting",
      "4,000+ Zapier integrations",
      "Leads included in all plans",
      "Behavioral-based campaign triggers",
      "Team lead routing and management",
    ],
    pros: [
      "Done-for-you lead generation included in every plan",
      "Powerful automation with Autotracks",
      "4,000+ integrations via Zapier",
      "Strong Google and Facebook ad management",
    ],
    cons: [
      "Expensive — starting at ~$900/month",
      "No standalone CRM option (leads bundled in)",
      "Steep minimum investment required",
    ],
    website: "https://www.cincpro.com",
    affiliateUrl: "https://www.cincpro.com", // No public affiliate program
    logo: "🎯",
    lastUpdated: "2026-03-12",
  },

  // ==================== VIRTUAL STAGING ====================
  {
    id: "4",
    name: "REimagineHome",
    slug: "reimaginehome",
    description:
      "AI virtual staging with a chat-based interface that understands intent and context. Features shoppable designs with links to actual furniture retailers and prices.",
    longDescription:
      "REimagineHome stands out with its conversational AI approach to virtual staging. Instead of simple upload-and-generate, the chat-based AI flow understands your intent, context, and follow-ups, allowing step-by-step refinement without restarting. The platform creates shoppable designs complete with furniture links, prices, and retailers. Its structure-preserving technology keeps walls, windows, and ceiling lines fixed while transforming the space. New users get 3 free designs with no credit card required.",
    category: "virtual-staging",
    rating: 4.6,
    reviewCount: 324,
    pricing: [
      {
        name: "Starter",
        price: 14,
        period: "month",
        features: [
          "Credit-based system",
          "Basic design styles",
          "Standard resolution",
          "Email support",
        ],
      },
      {
        name: "Pro",
        price: 49,
        period: "month",
        features: [
          "More credits per month",
          "All design styles",
          "Shoppable designs",
          "Structure-preserving staging",
          "Priority rendering",
        ],
      },
      {
        name: "Business",
        price: 99,
        period: "month",
        features: [
          "Maximum credits",
          "All Pro features",
          "Renovation visualization",
          "Interior design exploration",
          "Priority support",
        ],
      },
    ],
    features: [
      "Chat-based AI understanding intent and context",
      "Shoppable designs with furniture links and prices",
      "Structure-preserving staging (walls, windows stay fixed)",
      "Step-by-step refinement without restarting",
      "Virtual staging and renovation visualization",
      "Interior design exploration mode",
      "3 free designs for new users (no credit card)",
      "Multiple design styles and themes",
    ],
    pros: [
      "Unique conversational AI interface for staging",
      "Shoppable results link to real furniture retailers",
      "High design quality with structure preservation",
      "3 free designs to try before buying",
    ],
    cons: [
      "Higher price point than basic staging tools",
      "Credit-based system can be confusing",
      "Newer platform with less track record",
    ],
    website: "https://www.reimaginehome.ai",
    affiliateUrl: "https://www.reimaginehome.ai", // No public affiliate program
    logo: "🏡",
    lastUpdated: "2026-03-14",
  },
  {
    id: "5",
    name: "Virtual Staging AI",
    slug: "virtual-staging-ai",
    description:
      "One-click AI staging with 15-second rendering at just $16/month. The most affordable way to virtually stage listings with instant results.",
    longDescription:
      "Virtual Staging AI focuses on speed and affordability. With one-click staging and 15-second rendering times, it is one of the fastest options available. Starting at just $16/month for 6 staged images, it is also among the most affordable. The platform supports multiple room types and design styles, making it ideal for individual agents who want quick, budget-friendly staging without the complexity of premium tools.",
    category: "virtual-staging",
    rating: 4.3,
    reviewCount: 456,
    pricing: [
      {
        name: "Starter",
        price: 16,
        period: "month",
        features: [
          "6 staged images/month",
          "Multiple room types",
          "15-second rendering",
          "Basic design styles",
        ],
      },
      {
        name: "Pro",
        price: 32,
        period: "month", // Estimated based on tier scaling
        features: [
          "15 staged images/month",
          "All design styles",
          "HD output",
          "Before/after comparisons",
        ],
      },
      {
        name: "Business",
        price: 64,
        period: "month", // Estimated based on tier scaling
        features: [
          "40 staged images/month",
          "All Pro features",
          "Batch processing",
          "Priority support",
        ],
      },
    ],
    features: [
      "One-click automated virtual staging",
      "15-second rendering time",
      "Multiple room types supported",
      "Multiple design styles",
      "Before/after comparison views",
      "HD resolution output",
      "Simple drag-and-drop interface",
      "Instant download of staged images",
    ],
    pros: [
      "Most affordable staging tool starting at $16/month",
      "Extremely fast — 15-second rendering",
      "Dead simple to use with one-click staging",
      "Great for agents on a tight budget",
    ],
    cons: [
      "Less customization than premium tools like REimagineHome",
      "Limited to 6 images on starter plan",
      "Quality not as high as human-edited staging",
    ],
    website: "https://www.virtualstagingai.app",
    affiliateUrl: "https://www.virtualstagingai.app", // Confirmed affiliate: 30% commission, 60-day cookie, Rewardful
    logo: "🪑",
    badge: "Best Value",
    lastUpdated: "2026-03-08",
  },
  {
    id: "6",
    name: "Collov AI",
    slug: "collov-ai",
    description:
      "Fully automated staging with day-to-dusk conversion, sky replacement, and material overlays at ~$0.27 per image. Fast rendering with a wide style library.",
    longDescription:
      "Collov AI offers a comprehensive virtual staging platform with fully automated rendering, day-to-dusk conversion, sky replacement, furniture addition and removal, room decluttering, and material overlays for floors, walls, and counters. Supporting multiple design styles from Scandinavian to Luxury, the platform is built for high-volume agents and teams. With per-image pricing as low as $0.27 on subscription, it provides excellent value for those processing many listings.",
    category: "virtual-staging",
    rating: 4.4,
    reviewCount: 289,
    pricing: [
      {
        name: "Free Trial",
        price: 0,
        period: "month",
        features: [
          "Limited free images",
          "Basic styles",
          "Standard resolution",
          "Watermarked output",
        ],
      },
      {
        name: "Professional",
        price: 50,
        period: "month",
        features: [
          "~$0.27 per image",
          "All design styles",
          "Day-to-dusk conversion",
          "Sky replacement",
          "Material overlays",
        ],
      },
      {
        name: "Enterprise",
        price: 150,
        period: "month", // Estimated for enterprise tier
        features: [
          "Volume discounts",
          "API access for teams",
          "Custom style training",
          "Priority rendering",
          "Dedicated support",
        ],
      },
    ],
    features: [
      "Fully automated staging with real-time rendering",
      "Day-to-dusk conversion",
      "Sky replacement",
      "Furniture addition and removal",
      "Room decluttering",
      "Material overlays (floors, walls, counters)",
      "Multiple design styles (Scandinavian, Modern, Luxury)",
      "API available for team workflows",
    ],
    pros: [
      "Very affordable at ~$0.27 per image on subscription",
      "Comprehensive features beyond staging (sky, materials)",
      "Fast rendering with wide style library",
      "Free trial to test before committing",
    ],
    cons: [
      "Quality can vary across room types",
      "Newer platform — less established track record",
      "Enterprise pricing not transparent",
    ],
    website: "https://collov.ai",
    affiliateUrl: "https://collov.ai", // Confirmed affiliate: commission per sale
    logo: "🎨",
    lastUpdated: "2026-03-05",
  },

  // ==================== LEAD GENERATION ====================
  {
    id: "7",
    name: "Ylopo",
    slug: "ylopo",
    description:
      "AI-powered lead generation platform with industry-leading AI Voice and AI Text (Raiya) that has handled 25M+ conversations. Proven 461% ROI in year one.",
    longDescription:
      "Ylopo is the premier AI lead generation platform for real estate teams. Its AI Voice feature calls leads 14 times over 90 days with a 45% answer rate, while AI Text (Raiya) has handled over 25 million conversations with a 48% response rate. The AI-squared (AI2) system combines text and voice to re-engage dormant leads. DARE (Dynamic Ads for Real Estate) creates Facebook remarketing campaigns using live MLS data. With leads costing $6-25 each compared to $75-150 for portal leads, Ylopo delivers a proven 461% ROI in year one.",
    category: "lead-generation",
    rating: 4.6,
    reviewCount: 267,
    pricing: [
      {
        name: "Base Platform",
        price: 795,
        period: "month",
        features: [
          "IDX website",
          "DARE Facebook ads",
          "Lead capture",
          "Basic CRM integration",
          "Setup fees apply",
        ],
      },
      {
        name: "With AI Text (Raiya)",
        price: 995,
        period: "month", // Estimated with Raiya add-on
        features: [
          "All Base features",
          "AI Text conversations",
          "48% response rate",
          "25M+ conversation training data",
          "Live transfer on high intent",
        ],
      },
      {
        name: "Full AI Suite",
        price: 1295,
        period: "month", // Estimated with all AI add-ons
        features: [
          "All platform features",
          "AI Voice + AI Text",
          "AI-squared (AI2) re-engagement",
          "DyVA dynamic video ads",
          "Predictive lead scoring",
        ],
      },
    ],
    features: [
      "AI Voice: calls leads 14 times over 90 days (45% answer rate)",
      "AI Text (Raiya): 25M+ conversations, 48% response rate",
      "AI-squared (AI2): combines text + voice for dormant leads",
      "DARE: Dynamic Facebook remarketing with live MLS data",
      "Live transfer when AI detects high intent",
      "Predictive lead scoring",
      "Leads at $6-25 each (vs $75-150 portal leads)",
      "461% ROI in year one (documented)",
    ],
    pros: [
      "Industry-leading AI conversation technology",
      "Proven 461% ROI with documented case studies",
      "Leads cost 5-10x less than portal leads",
      "Massive training data (50M+ conversations)",
    ],
    cons: [
      "Expensive — starting at $795/month plus setup fees",
      "Complex setup requiring commitment to digital marketing",
      "Best results require 3-6 month ramp-up period",
    ],
    website: "https://www.ylopo.com",
    affiliateUrl: "https://www.ylopo.com", // No public affiliate program (has partnership integrations)
    logo: "🚀",
    badge: "Editor's Choice",
    lastUpdated: "2026-03-10",
  },
  {
    id: "8",
    name: "SmartZip / Offrs",
    slug: "smartzip",
    description:
      "Predictive analytics platform analyzing 200+ data points per homeowner to identify likely sellers with 72% accuracy. Uses 1 billion+ data points from 24 sources.",
    longDescription:
      "SmartZip (and its consumer-facing brand Offrs) uses predictive analytics to analyze over 200 data points per homeowner across 24 data sources containing 1 billion+ data points. The platform achieves 72% accuracy in predicting future listings within 12 months — a remarkable hit rate for identifying homeowners most likely to sell. It automates marketing to predicted sellers and integrates blockchain-enabled real estate data for enhanced accuracy.",
    category: "lead-generation",
    rating: 4.3,
    reviewCount: 178,
    pricing: [
      {
        name: "Custom",
        price: 300,
        period: "month", // Estimated — custom pricing not publicly listed
        features: [
          "Predictive seller analytics",
          "200+ data points per homeowner",
          "72% listing prediction accuracy",
          "Automated marketing to sellers",
          "Custom pricing based on territory",
        ],
      },
    ],
    features: [
      "Predictive analytics — 200+ data points per homeowner",
      "72% accuracy predicting listings within 12 months",
      "1 billion+ data points from 24 sources",
      "Automated marketing to predicted sellers",
      "Blockchain-enabled real estate data",
      "Territory-based prospecting",
      "Seller lead identification and scoring",
      "Integration with major CRMs",
    ],
    pros: [
      "72% prediction accuracy — best in class",
      "Data-driven approach with 1B+ data points",
      "Proven track record in predictive analytics",
      "Automated marketing to identified sellers",
    ],
    cons: [
      "Custom pricing — can be expensive",
      "Focused primarily on seller leads",
      "Results vary by market and territory",
    ],
    website: "https://smartzip.com",
    affiliateUrl: "https://smartzip.com", // Confirmed affiliate program — seeking coaching/training partners
    logo: "📡",
    lastUpdated: "2026-03-01",
  },
  {
    id: "9",
    name: "Structurely",
    slug: "structurely",
    description:
      "AI-powered lead follow-up through natural conversation that reduces 50% of sales overhead costs. Delivers 17% more qualified leads and 31% higher answer rates.",
    longDescription:
      "Structurely provides AI-powered lead follow-up through natural, human-like conversation. The platform automatically qualifies and nurtures leads, reducing 50% of sales overhead costs while delivering 17% more qualified leads and 31% higher answer rates. Starting at $450/month with 250 leads included, Structurely is designed for teams that want AI to handle the initial lead conversation, freeing agents to focus on warm, qualified prospects.",
    category: "lead-generation",
    rating: 4.4,
    reviewCount: 156,
    pricing: [
      {
        name: "Growth",
        price: 450,
        period: "month",
        features: [
          "250 leads included",
          "AI natural conversation",
          "Lead qualification",
          "CRM integration",
          "Performance reporting",
        ],
      },
      {
        name: "Scale",
        price: 750,
        period: "month", // Estimated for higher-volume tier
        features: [
          "500+ leads included",
          "All Growth features",
          "Advanced nurturing sequences",
          "Priority support",
          "Custom qualification criteria",
        ],
      },
    ],
    features: [
      "AI-powered lead follow-up via natural conversation",
      "Automated lead qualification and nurturing",
      "50% reduction in sales overhead costs",
      "17% more qualified leads generated",
      "31% higher answer rates",
      "CRM integration and sync",
      "Lead scoring and prioritization",
      "Performance analytics dashboard",
    ],
    pros: [
      "Proven 50% reduction in sales overhead",
      "Natural conversation AI — doesn't feel robotic",
      "Leads included in pricing (250+)",
      "Strong qualification accuracy",
    ],
    cons: [
      "Expensive at $450/month minimum",
      "Leads bundled with pricing — can't use CRM separately",
      "Requires volume to justify the investment",
    ],
    website: "https://www.structurely.com",
    affiliateUrl: "https://www.structurely.com", // No public affiliate program
    logo: "🤖",
    lastUpdated: "2026-02-28",
  },
  {
    id: "10",
    name: "Luxury Presence",
    slug: "luxury-presence",
    description:
      "Premium AI-powered platform for luxury agents with PresenceAI marketing, AI relationship engine, and data from 60M annual website visitors. Used by 30% of WSJ RealTrends top agents.",
    longDescription:
      "Luxury Presence is the premier platform for luxury real estate professionals, used by 30% of WSJ RealTrends top-producing agents. Having raised $37M for Presence CRM in January 2026, the platform offers PresenceAI marketing specialists, an AI relationship engine that finds hidden deals in agent networks, and real-time MLS data drawn from 60 million annual website visitors. The new Presence CRM (rolling out February 2026) is included with all plans, combining AI-powered content creation, marketing automation, and lead generation in a beautifully designed interface.",
    category: "lead-generation",
    rating: 4.7,
    reviewCount: 203,
    pricing: [
      {
        name: "Custom",
        price: 500,
        period: "month", // Estimated — custom pricing, premium positioned
        features: [
          "AI-powered luxury website",
          "PresenceAI marketing",
          "AI relationship engine",
          "Presence CRM included",
          "Custom pricing based on needs",
        ],
      },
    ],
    features: [
      "PresenceAI marketing specialists",
      "AI relationship engine finding hidden deals in networks",
      "Real-time MLS data from 60M annual visitors",
      "Presence CRM included with all plans",
      "AI-powered content creation and marketing",
      "Beautiful luxury-focused design",
      "Used by 30% of WSJ RealTrends top agents",
      "Full agency services available",
    ],
    pros: [
      "Industry-leading design for luxury market",
      "30% of top-producing agents use it",
      "AI relationship engine finds hidden deal opportunities",
      "Presence CRM included with all plans (launched Feb 2026)",
    ],
    cons: [
      "Premium pricing — not for budget-conscious agents",
      "Custom pricing means no price transparency",
      "Luxury positioning may not suit all markets",
    ],
    website: "https://www.luxurypresence.com",
    affiliateUrl: "https://www.luxurypresence.com", // No public affiliate program
    logo: "💎",
    lastUpdated: "2026-03-15",
  },

  // ==================== MARKETING & CONTENT ====================
  {
    id: "11",
    name: "Rechat (Lucy AI)",
    slug: "rechat",
    description:
      "All-in-one real estate super app with Lucy AI assistant that writes replies, creates marketing content, and works proactively. Features CRM, marketing, and transaction management unified.",
    longDescription:
      "Rechat is a comprehensive real estate platform centered around Lucy AI, an assistant that writes replies, creates marketing content, and works proactively on behalf of agents. The platform unifies CRM, marketing automation, and transaction management into a single ecosystem with deep MLS and third-party integrations. White-labeling options make it popular with brokerages wanting a branded experience. With live support averaging under 45-second response times, Rechat backs its technology with exceptional service.",
    category: "marketing",
    rating: 4.5,
    reviewCount: 234,
    pricing: [
      {
        name: "Custom",
        price: 150,
        period: "month", // Estimated — personalized pricing, contact for quote
        features: [
          "Lucy AI assistant",
          "Marketing Center",
          "People Center (CRM)",
          "Deals Center (transactions)",
          "MLS integration",
          "Custom pricing — contact for quote",
        ],
      },
    ],
    features: [
      "Lucy AI: writes replies, creates content, works proactively",
      "Integrated Marketing Center with templates",
      "People Center (CRM) with contact management",
      "Deals Center for transaction management",
      "Deep MLS and third-party integrations",
      "White-labeling for brokerages",
      "Live support with <45 second response time",
      "Unified platform replacing 3-4 separate tools",
    ],
    pros: [
      "Lucy AI is genuinely proactive — not just reactive",
      "Excellent live support (<45 second response time)",
      "White-label options for brokerages",
      "Replaces CRM + marketing + transaction tools",
    ],
    cons: [
      "Pricing not transparent — must contact for quote",
      "May be expensive for individual agents",
      "Learning curve for the full platform suite",
    ],
    website: "https://rechat.ai",
    affiliateUrl: "https://rechat.ai", // No public affiliate program
    logo: "✨",
    lastUpdated: "2026-03-12",
  },
  {
    id: "12",
    name: "Epique AI",
    slug: "epique-ai",
    description:
      "Completely FREE AI content suite for all real estate agents — not just Epique Realty members. Generates bios, blog posts, property descriptions, emails, newsletters, and social media content.",
    longDescription:
      "Epique AI stands out as the only completely free AI content platform for real estate professionals — and it is available to all agents, not just those at Epique Realty. The free suite includes AI-generated Realtor biographies, blog post generation, property descriptions, email campaign creation, newsletter tools, content enhancement, social media quote generation for Instagram, lead generation ideas, image generation, and drip campaign automation. Premium features like Broker Advice AI, Legal AI, and Transaction AI are reserved for Epique Realty agents only.",
    category: "marketing",
    rating: 4.4,
    reviewCount: 567,
    pricing: [
      {
        name: "Free (All Agents)",
        price: 0,
        period: "month",
        features: [
          "AI biography generator",
          "Blog post generator",
          "Property description generator",
          "Email campaign creator",
          "Social media content",
          "Image generation",
        ],
      },
      {
        name: "Premium (Epique Realty Only)",
        price: 0,
        period: "month",
        features: [
          "All free features",
          "Broker Advice AI",
          "Legal AI for state laws",
          "Transaction AI",
          "Advanced automation",
        ],
      },
    ],
    features: [
      "AI-generated Realtor biographies",
      "Blog post generator for real estate topics",
      "Property description generator",
      "Email campaign creator",
      "Newsletter campaign tool",
      "Content enhancement tool",
      "Social media quote generator (Instagram)",
      "Lead generation ideas and drip campaigns",
    ],
    pros: [
      "Completely free for ALL real estate agents",
      "Comprehensive suite — covers bios, blogs, emails, social",
      "No credit card required",
      "Easy to use with minimal learning curve",
    ],
    cons: [
      "Premium features locked to Epique Realty agents only",
      "Quality may not match paid tools for luxury content",
      "Limited customization compared to premium alternatives",
    ],
    website: "https://epique.ai",
    affiliateUrl: "https://epique.ai", // No public affiliate program
    logo: "🆓",
    badge: "Best Value",
    lastUpdated: "2026-03-08",
  },
  {
    id: "13",
    name: "Write.Homes",
    slug: "write-homes",
    description:
      "AI listing description generator with neighborhood guides, email templates, and real estate content marketing automation. Purpose-built for property professionals.",
    longDescription:
      "Write.Homes is a focused AI content tool built specifically for real estate professionals. It generates listing descriptions, neighborhood guides, email templates, and automates content marketing workflows. Unlike general-purpose AI writing tools, Write.Homes is trained on real estate content and understands property terminology, neighborhood features, and what makes listings convert. A free trial is available to test before subscribing.",
    category: "marketing",
    rating: 4.2,
    reviewCount: 189,
    pricing: [
      {
        name: "Free Trial",
        price: 0,
        period: "month",
        features: [
          "Limited generations",
          "Basic listing descriptions",
          "Standard templates",
          "Trial period",
        ],
      },
      {
        name: "Pro",
        price: 29,
        period: "month", // Estimated based on market positioning
        features: [
          "Unlimited listing descriptions",
          "Neighborhood guides",
          "Email templates",
          "Content marketing automation",
          "Multiple writing styles",
        ],
      },
    ],
    features: [
      "AI-generated listing descriptions",
      "Neighborhood guide creation",
      "Email template generator",
      "Content marketing automation",
      "Real estate-specific AI training",
      "Multiple writing styles and tones",
      "MLS-optimized output",
      "Free trial available",
    ],
    pros: [
      "Purpose-built for real estate (not generic AI)",
      "Neighborhood guides are a unique feature",
      "Free trial to test before committing",
      "Easy to use with quick output",
    ],
    cons: [
      "Smaller feature set than comprehensive platforms",
      "Less established than competitors",
      "May need human editing for luxury listings",
    ],
    website: "https://write.homes",
    affiliateUrl: "https://write.homes", // No public affiliate program
    logo: "✍️",
    lastUpdated: "2026-03-01",
  },

  // ==================== ANALYTICS ====================
  {
    id: "14",
    name: "HouseCanary",
    slug: "housecanary",
    description:
      "Institutional-grade AI property analytics with CanaryAI assistant, 136M+ property dataset, and predictive forecasting up to 3 years ahead. Image recognition rates properties from photos.",
    longDescription:
      "HouseCanary provides institutional-grade property analytics powered by CanaryAI, a generative AI assistant built on a dataset of over 136 million properties. The platform offers predictive forecasting up to 3 years ahead, estimated values with confidence scores and valuation rationale, comprehensive comp analysis, and image recognition that rates property condition from photos. The 'Value by 6 Conditions' feature provides quick analysis for multiple scenarios, while property monitoring sends alerts on changes.",
    category: "analytics",
    rating: 4.5,
    reviewCount: 145,
    pricing: [
      {
        name: "Basic",
        price: 50,
        period: "month", // Estimated — exact pricing tier not public
        features: [
          "1 user",
          "2 custom valuation reports/month",
          "Full CanaryAI access",
          "Basic property analytics",
        ],
      },
      {
        name: "Pro",
        price: 200,
        period: "month", // Estimated — most popular plan
        features: [
          "40 custom valuation reports/month",
          "40 AVM PDF reports/month",
          "Monitor 50 properties",
          "Full CanaryAI access",
          "Predictive forecasting",
        ],
      },
      {
        name: "Enterprise",
        price: 500,
        period: "month", // Custom pricing
        features: [
          "Custom users and reports",
          "Dedicated Customer Success rep",
          "API access",
          "Bulk analysis tools",
          "Custom pricing",
        ],
      },
    ],
    features: [
      "CanaryAI: generative AI from 136M+ property dataset",
      "Predictive forecasting up to 3 years ahead",
      "Image recognition rating properties from photos",
      "Value by 6 Conditions quick analysis",
      "Comp analysis with confidence scores",
      "Property monitoring and alerts",
      "AVM with valuation rationale",
      "Individual reports available at $10/report",
    ],
    pros: [
      "Massive 136M+ property dataset — institutional grade",
      "Predictive forecasting 3 years ahead is unique",
      "Image recognition for property condition rating",
      "CanaryAI chatbot makes analytics accessible",
    ],
    cons: [
      "Individual reports at $10/each can add up",
      "Enterprise features require custom (expensive) pricing",
      "Best suited for investors and appraisers over typical agents",
    ],
    website: "https://www.housecanary.com",
    affiliateUrl: "https://www.housecanary.com", // No public affiliate program
    logo: "📊",
    lastUpdated: "2026-03-05",
  },

  // ==================== CHATBOTS ====================
  {
    id: "15",
    name: "Tidio",
    slug: "tidio",
    description:
      "Versatile AI chatbot with NLP, live chat hybrid, and multi-channel support. Free tier available with 3 users and 50 conversations. Affordable plans starting at $29/month.",
    longDescription:
      "Tidio offers a versatile chatbot solution with AI-powered NLP, a live chat and chatbot hybrid approach, and multi-channel support across web, email, and messaging platforms. While not real estate-specific, its customizable chat flows and automated lead capture make it popular among budget-conscious agents. The free tier supports 3 users with 50 live chat conversations per month, making it accessible for agents testing chatbot technology. Paid plans starting at $29/month scale based on users and conversation volume.",
    category: "chatbots",
    rating: 4.3,
    reviewCount: 892,
    pricing: [
      {
        name: "Free",
        price: 0,
        period: "month",
        features: [
          "3 users included",
          "50 livechat conversations/month",
          "Basic chatbot flows",
          "Email integration",
        ],
      },
      {
        name: "Starter",
        price: 29,
        period: "month",
        features: [
          "All Free features",
          "More conversations",
          "Customizable chat flows",
          "Multi-channel support",
          "Lead capture forms",
        ],
      },
      {
        name: "Growth",
        price: 59,
        period: "month", // Estimated mid-tier
        features: [
          "All Starter features",
          "Advanced AI with NLP",
          "Automated responses",
          "Analytics dashboard",
          "Priority support",
        ],
      },
    ],
    features: [
      "AI chatbot with natural language processing",
      "Live chat + chatbot hybrid approach",
      "Multi-channel support (web, email, social)",
      "Automated responses and lead capture",
      "Customizable chat flows",
      "Free tier with 3 users",
      "Easy setup in minutes",
      "CRM integration capabilities",
    ],
    pros: [
      "Free tier makes it accessible for any agent",
      "Affordable paid plans starting at $29/month",
      "Versatile — works for any website type",
      "Easy setup with minimal technical skill needed",
    ],
    cons: [
      "Not real estate-specific — generic chatbot",
      "Free tier limited to 50 conversations/month",
      "Advanced AI features require higher plans",
    ],
    website: "https://www.tidio.com",
    affiliateUrl: "https://www.tidio.com", // No public affiliate program documented
    logo: "💬",
    lastUpdated: "2026-03-01",
  },
  {
    id: "16",
    name: "Convoboss",
    slug: "convoboss",
    description:
      "Real estate-specific chatbot with buyer/seller qualifying questions, automatic intent recognition, and Facebook Messenger integration. Fully customizable flows and lead segmentation.",
    longDescription:
      "Convoboss is a chatbot platform built specifically for real estate with buyer and seller qualifying questions, automatic intent recognition (detecting phrases like 'I want to buy' or 'can I sell my property?'), lead segmentation and tagging, and automated follow-ups. It integrates with websites, Facebook pages, and Facebook Messenger, offering notifications via email and Messenger. The fully customizable text, flow, images, and property listing integration make it one of the most flexible real estate chatbot options.",
    category: "chatbots",
    rating: 4.2,
    reviewCount: 134,
    pricing: [
      {
        name: "Starter",
        price: 49,
        period: "month", // Estimated from tiered plan description
        features: [
          "1 user",
          "300 sessions/month",
          "Buyer/seller qualification",
          "Intent recognition",
        ],
      },
      {
        name: "Pro",
        price: 99,
        period: "month", // Estimated
        features: [
          "3 users",
          "1,000 sessions/month",
          "All Starter features",
          "Facebook Messenger integration",
          "Lead segmentation",
        ],
      },
      {
        name: "Team",
        price: 199,
        period: "month", // Estimated
        features: [
          "10 users",
          "5,000 sessions/month",
          "All Pro features",
          "Custom chat flows",
          "Advanced analytics",
        ],
      },
    ],
    features: [
      "Buyer/seller qualifying questions",
      "Automatic intent recognition",
      "Lead segmentation and tagging",
      "Automated follow-ups",
      "Email and Facebook Messenger notifications",
      "Fully customizable text, flow, and images",
      "Property listing integration",
      "Website and Facebook page integration",
    ],
    pros: [
      "Built specifically for real estate conversations",
      "Automatic intent recognition is highly accurate",
      "Facebook Messenger integration captures social leads",
      "Fully customizable flows and branding",
    ],
    cons: [
      "Smaller company — less established than Tidio",
      "Limited to chat — no voice or SMS",
      "Session-based pricing can limit high-traffic sites",
    ],
    website: "https://convoboss.com",
    affiliateUrl: "https://convoboss.com", // No public affiliate program
    logo: "🗨️",
    lastUpdated: "2026-02-25",
  },

  // ==================== TRANSACTION MANAGEMENT ====================
  {
    id: "17",
    name: "ListedKit",
    slug: "listedkit",
    description:
      "AI transaction management with Ava — the only TC software that automatically reads purchase agreements, reducing contract review from 20+ minutes to 2-3 minutes. Pay just $9.99 per transaction.",
    longDescription:
      "ListedKit features Ava, an AI that automatically reads purchase agreements and extracts key data — the only transaction coordinator software with true automatic contract reading. What used to take 20+ minutes of manual review is reduced to 2-3 minutes. The pay-per-use model at $9.99 per transaction (with the first transaction free, no credit card required) means you only pay when you use it. Task tracking, deadline management, and a client portal for collaboration round out the feature set.",
    category: "transaction",
    rating: 4.5,
    reviewCount: 167,
    pricing: [
      {
        name: "Pay Per Transaction",
        price: 10,
        period: "transaction",
        features: [
          "$9.99 per transaction",
          "AI contract reading (Ava)",
          "Task tracking",
          "Deadline management",
          "First transaction free",
        ],
      },
      {
        name: "Bulk Pricing",
        price: 8,
        period: "transaction", // Estimated bulk discount
        features: [
          "Volume discounts available",
          "All standard features",
          "Client portal",
          "Team collaboration",
          "Priority support",
        ],
      },
    ],
    features: [
      "Ava AI: automatic purchase agreement reading",
      "Reduces contract review from 20+ to 2-3 minutes",
      "Only TC software with true AI contract reading",
      "Task tracking and deadline management",
      "Client portal for collaboration",
      "First transaction free (no credit card required)",
      "Pay-per-use — no monthly waste",
      "Bulk pricing for higher volumes",
    ],
    pros: [
      "Pay-per-use model — no monthly subscription waste",
      "Only TC software with true AI contract reading",
      "First transaction free to test the platform",
      "Dramatically reduces admin time (20+ min to 2-3 min)",
    ],
    cons: [
      "Newer platform with smaller user base",
      "Per-transaction cost adds up for high-volume TCs",
      "Fewer integrations than established competitors",
    ],
    website: "https://www.listedkit.com",
    affiliateUrl: "https://www.listedkit.com", // No public affiliate program
    logo: "📋",
    badge: "Most Popular",
    lastUpdated: "2026-03-10",
  },
  {
    id: "18",
    name: "SkySlope",
    slug: "skyslope",
    description:
      "Industry-leading transaction management platform with AI Auto-Split, Smart Scan for contract data extraction, and AI agent coaching. Used by major brokerages nationwide.",
    longDescription:
      "SkySlope is the industry leader in transaction management for real estate brokerages. Its AI features include Auto-Split and Assign for automatic document routing, Smart Assist for auditors that streamlines compliance review, Smart Scan for contract data extraction, AI email communication tools, and even AI agent coaching capabilities. Starting at $299/month with a 1-year minimum contract, SkySlope is positioned for serious brokerages that need comprehensive, reliable transaction management.",
    category: "transaction",
    rating: 4.4,
    reviewCount: 312,
    pricing: [
      {
        name: "Brokerage",
        price: 299,
        period: "month",
        features: [
          "AI Auto-Split and Assign",
          "Smart Scan data extraction",
          "Smart Assist for auditors",
          "AI email tools",
          "1-year minimum contract",
        ],
      },
      {
        name: "Enterprise",
        price: 499,
        period: "month", // Estimated for enterprise tier
        features: [
          "All Brokerage features",
          "AI agent coaching",
          "Custom compliance workflows",
          "Advanced reporting",
          "Dedicated support",
        ],
      },
    ],
    features: [
      "AI Auto-Split and Assign for document routing",
      "Smart Assist for auditor compliance review",
      "Smart Scan for contract data extraction",
      "AI email communication tools",
      "AI agent coaching capabilities",
      "Comprehensive compliance tracking",
      "Document management and storage",
      "Integration with major brokerages",
    ],
    pros: [
      "Industry leader trusted by major brokerages",
      "Comprehensive AI features across the workflow",
      "Strong compliance and audit capabilities",
      "Reliable with large user base",
    ],
    cons: [
      "Expensive at $299/month minimum",
      "1-year contract required — no monthly option",
      "Overkill for individual agents or small teams",
    ],
    website: "https://skyslope.com",
    affiliateUrl: "https://skyslope.com", // No public affiliate program
    logo: "⛰️",
    lastUpdated: "2026-02-28",
  },

  // ==================== PHOTO & VIDEO ====================
  {
    id: "19",
    name: "Matterport",
    slug: "matterport",
    description:
      "Industry standard for 3D digital twin creation and interactive virtual tours. AI-powered space measurement, dollhouse views, and floor plans with integration across major platforms.",
    longDescription:
      "Matterport is the industry standard for 3D virtual tours in real estate. The platform creates immersive digital twins with AI-powered space measurement, interactive virtual tours, dollhouse views, and automatic floor plan generation. AI object recognition enhances the experience, and integration with major real estate platforms ensures wide distribution. While the Pro camera costs $5,400+, smartphone scanning is now supported. Plans range from free (1 space) to enterprise, with the Professional plan at $69/month being most popular among agents.",
    category: "photo-video",
    rating: 4.7,
    reviewCount: 678,
    pricing: [
      {
        name: "Free",
        price: 0,
        period: "month",
        features: [
          "1 active space",
          "Basic 3D capture",
          "Smartphone scanning",
          "Limited features",
        ],
      },
      {
        name: "Starter",
        price: 10,
        period: "month",
        features: [
          "5 active spaces",
          "3D digital twins",
          "Virtual tours",
          "Basic measurements",
        ],
      },
      {
        name: "Professional",
        price: 69,
        period: "month",
        features: [
          "25 active spaces",
          "All Starter features",
          "AI space measurement",
          "Dollhouse view and floor plans",
          "Platform integrations",
        ],
      },
    ],
    features: [
      "3D digital twin creation",
      "AI-powered space measurement",
      "Interactive virtual tours",
      "Dollhouse view and floor plans",
      "AI object recognition",
      "Integration with major real estate platforms",
      "Smartphone and Pro camera scanning",
      "Add-ons: floor plans ($50), video flythroughs ($150/min)",
    ],
    pros: [
      "Industry standard for 3D virtual tours",
      "Immersive experience that buyers love",
      "Strong platform integrations (Zillow, Realtor.com, etc.)",
      "Free tier and smartphone scanning lower barrier to entry",
    ],
    cons: [
      "Pro camera costs $5,400+ (smartphone is an alternative)",
      "Hosting fees of $20/month per active space",
      "Professional scanning services cost $350-$5,000+",
    ],
    website: "https://matterport.com",
    affiliateUrl: "https://matterport.com", // No public affiliate program
    logo: "📸",
    badge: "Editor's Choice",
    lastUpdated: "2026-03-14",
  },
  {
    id: "20",
    name: "Autoenhance.ai",
    slug: "autoenhance-ai",
    description:
      "AI photo enhancement built for real estate with sky replacement, perspective correction, image relighting, and batch processing. Scalable plans from 50 to 10,000 images/month.",
    longDescription:
      "Autoenhance.ai is purpose-built for real estate photo enhancement with AI-powered sky replacement, perspective correction, image relighting, and batch processing. The platform offers tiered plans scaling from 50 images/month for individual agents up to 10,000 images/month for media companies, with delivery resolution up to 6K on the Expert plan. A pay-as-you-go option charges only for downloaded images at 50% lower than plan rates, making it flexible for variable workloads.",
    category: "photo-video",
    rating: 4.4,
    reviewCount: 234,
    pricing: [
      {
        name: "Essential",
        price: 39,
        period: "month", // Estimated for 50-250 images tier
        features: [
          "50-250 images/month",
          "AI sky replacement",
          "Perspective correction",
          "Standard resolution",
          "For individuals and agents",
        ],
      },
      {
        name: "Advanced",
        price: 99,
        period: "month", // Estimated for 250-1500 images tier
        features: [
          "250-1,500 images/month",
          "All Essential features",
          "4K delivery",
          "Image relighting",
          "Batch processing",
        ],
      },
      {
        name: "Expert",
        price: 249,
        period: "month", // Estimated for 1500-10000 images tier
        features: [
          "1,500-10,000 images/month",
          "All Advanced features",
          "6K delivery",
          "Priority processing",
          "Dedicated support",
        ],
      },
    ],
    features: [
      "AI sky replacement",
      "Perspective correction",
      "Image relighting",
      "Real estate-specific AI training",
      "Batch processing",
      "Professional-grade output up to 6K",
      "Pay-as-you-go option (50% lower than plan rates)",
      "Scalable from 50 to 10,000 images/month",
    ],
    pros: [
      "Scalable plans for any volume — agent to enterprise",
      "Pay-as-you-go option for variable workloads",
      "Up to 6K resolution output on Expert plan",
      "Real estate-specific AI produces accurate results",
    ],
    cons: [
      "Pricing tiers can be confusing to navigate",
      "No free tier — trial only",
      "Less established brand than Matterport",
    ],
    website: "https://autoenhance.ai",
    affiliateUrl: "https://autoenhance.ai", // No public affiliate program
    logo: "🖼️",
    lastUpdated: "2026-03-05",
  },
  {
    id: "21",
    name: "PhotoUp",
    slug: "photoup",
    description:
      "AI-assisted photo editing with dedicated human editors for consistency. HDR blending, color correction, virtual staging, and day-to-dusk conversion starting at $1.25/image.",
    longDescription:
      "PhotoUp combines AI-assisted editing workflows with dedicated human editors to deliver consistent, high-quality real estate photo enhancement. Services include HDR blending, color correction, virtual staging, and day-to-dusk conversion — all starting at approximately $1.25 per image. The hybrid AI + human approach ensures quality that pure AI tools sometimes miss, while keeping costs far below hiring a full-time editor. Credit-based and monthly plans are available to suit different volumes.",
    category: "photo-video",
    rating: 4.5,
    reviewCount: 345,
    pricing: [
      {
        name: "Pay Per Image",
        price: 1,
        period: "image", // Starting at ~$1.25/image
        features: [
          "Starting at ~$1.25/image",
          "HDR blending",
          "Color correction",
          "Human editor consistency",
        ],
      },
      {
        name: "Monthly Plan",
        price: 49,
        period: "month", // Estimated for monthly credit plan
        features: [
          "Credit-based system",
          "All editing services",
          "Virtual staging add-on",
          "Day-to-dusk conversion",
          "Volume discounts",
        ],
      },
    ],
    features: [
      "AI-assisted editing with human editors",
      "HDR blending and color correction",
      "Virtual staging capabilities",
      "Day-to-dusk conversion",
      "Dedicated human editors for consistency",
      "Credit-based and monthly plans",
      "Batch processing for large orders",
      "24-48 hour turnaround time",
    ],
    pros: [
      "Human editors ensure consistent, reliable quality",
      "Very affordable starting at ~$1.25/image",
      "Comprehensive services — editing, staging, day-to-dusk",
      "Great for agents who want hands-off editing",
    ],
    cons: [
      "Slower than pure AI tools (human involvement)",
      "Credit-based system requires planning",
      "Virtual staging is add-on, not included in base price",
    ],
    website: "https://www.photoup.net",
    affiliateUrl: "https://www.photoup.net", // No public affiliate program
    logo: "📷",
    lastUpdated: "2026-03-01",
  },
];

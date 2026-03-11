import {
  BarChart3,
  Cloud,
  CreditCard,
  Database,
  FileText,
  HelpCircle,
  LayoutGrid,
  Layers,
  MessageSquare,
  MessageSquareQuote,
  Monitor,
  Plug,
  ShieldCheck,
  Sparkles,
  Webhook,
  Workflow,
  Zap
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features", icon: LayoutGrid },
  { label: "Integrations", href: "#integrations", icon: Plug },
  { label: "Showcase", href: "#showcase", icon: Monitor },
  { label: "How It Works", href: "#how-it-works", icon: Workflow },
  { label: "Pricing", href: "#pricing", icon: CreditCard },
  { label: "Testimonials", href: "#testimonials", icon: MessageSquareQuote },
  { label: "FAQ", href: "#faq", icon: HelpCircle }
];

export const trustedLogos = [
  "Northwave",
  "Signalux",
  "NovaStack",
  "Kinetic",
  "Brightlabs",
  "PulseCore"
];

export const integrations = [
  {
    icon: MessageSquare,
    title: "Team chat",
    description: "Send alerts and approvals into Slack or Microsoft Teams."
  },
  {
    icon: FileText,
    title: "Docs sync",
    description: "Auto-generate playbooks and update internal knowledge hubs."
  },
  {
    icon: Database,
    title: "Data warehouse",
    description: "Stream product events into Snowflake, BigQuery, or Redshift."
  },
  {
    icon: CreditCard,
    title: "Billing stack",
    description: "Connect Stripe and Chargebee for automated revenue workflows."
  },
  {
    icon: Webhook,
    title: "Custom triggers",
    description: "Use secure webhooks for any custom or internal system."
  },
  {
    icon: ShieldCheck,
    title: "Security layer",
    description: "Centralize audit logs, SCIM provisioning, and SSO signals."
  }
];

export const features = [
  {
    icon: Layers,
    title: "Modular workflow design",
    description: "Build reusable automation blocks that flex with every product launch."
  },
  {
    icon: BarChart3,
    title: "Revenue-grade analytics",
    description: "Track adoption, expansion, and retention with live dashboards and alerts."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security",
    description: "SOC 2 ready, SSO enabled, and built with audit-friendly permissions."
  },
  {
    icon: Sparkles,
    title: "AI copilots",
    description: "Generate workflows, summaries, and action plans in seconds."
  },
  {
    icon: Zap,
    title: "Instant orchestration",
    description: "Trigger automations across your stack with event-driven logic."
  },
  {
    icon: Cloud,
    title: "Global reliability",
    description: "Multi-region deployments with 99.99% uptime and fast response times."
  }
];

export const showcase = [
  {
    title: "Executive dashboard",
    description: "Align leadership with a single view of revenue, health, and risk signals.",
    image: "/images/showcase-dashboard.svg"
  },
  {
    title: "Analytics studio",
    description: "Segment cohorts, drill down trends, and export investor-ready reports.",
    image: "/images/showcase-analytics.svg"
  },
  {
    title: "Workflow builder",
    description: "Map automations visually with templates for onboarding, support, and lifecycle.",
    image: "/images/showcase-workflow.svg"
  }
];

export const steps = [
  {
    title: "Connect your stack",
    description: "Securely integrate tools like Slack, HubSpot, and Stripe in minutes."
  },
  {
    title: "Design your workflow",
    description: "Use templates or AI prompts to build automation flows without code."
  },
  {
    title: "Launch and optimize",
    description: "Monitor performance, iterate fast, and scale with real-time insights."
  }
];

export const pricing = [
  {
    name: "Starter",
    price: "$29",
    detail: "Per user / month",
    description: "For early-stage teams launching their first automated workflows.",
    features: [
      "Up to 5 workspaces",
      "Core automations",
      "Email support",
      "Community templates"
    ],
    cta: "Start free trial"
  },
  {
    name: "Pro",
    price: "$79",
    detail: "Per user / month",
    description: "Advanced orchestration and analytics for scaling product teams.",
    features: [
      "Unlimited workflows",
      "AI workflow builder",
      "Advanced analytics",
      "Priority support",
      "Team permissions"
    ],
    cta: "Get started",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    detail: "Annual billing",
    description: "Security, compliance, and scale for global SaaS organizations.",
    features: [
      "Dedicated success team",
      "Private cloud deployment",
      "Custom SLAs",
      "Security reviews",
      "Unlimited collaborators"
    ],
    cta: "Talk to sales"
  }
];

export const testimonials = [
  {
    name: "Jamie Rhodes",
    role: "VP Product, NovaLayer",
    quote:
      "We replaced four tools and cut ops overhead by 38% within a single quarter.",
    avatar: "/avatars/avatar-1.svg"
  },
  {
    name: "Priya Nair",
    role: "Head of Ops, Lumina",
    quote:
      "The workflow builder is the cleanest experience our teams have adopted this year.",
    avatar: "/avatars/avatar-2.svg"
  },
  {
    name: "Marcus Lee",
    role: "CTO, Gridline",
    quote:
      "Instant insights into churn risks and expansion opportunities changed our roadmap.",
    avatar: "/avatars/avatar-3.svg"
  }
];

export const faqs = [
  {
    question: "How does the platform work?",
    answer:
      "Connect your tools, design workflows in minutes, and deploy automations with live monitoring."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Upgrade, downgrade, or cancel anytime directly from your billing settings."
  },
  {
    question: "Do you offer enterprise plans?",
    answer:
      "Enterprise plans include private deployments, custom SLAs, onboarding, and security reviews."
  },
  {
    question: "Is support included?",
    answer:
      "Every plan includes onboarding resources, with priority response times for Pro and Enterprise."
  }
];

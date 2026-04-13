export type SiteThemeFamily =
  | "ai"
  | "business"
  | "commerce"
  | "creator"
  | "education"
  | "local";

export type SiteThemeLayout =
  | "command"
  | "operations"
  | "editorial"
  | "academy"
  | "service";

export type SiteMetric = {
  value: string;
  label: string;
  detail: string;
};

export type SiteExperiencePanel = {
  title: string;
  value: string;
  detail: string;
  meta: string;
};

export type SiteExperienceItem = {
  title: string;
  description: string;
  meta?: string;
};

export type SiteConfig = {
  appTitle: string;
  siteDescription: string;
  theme: {
    family: SiteThemeFamily;
    layout: SiteThemeLayout;
    visualThesis: string;
    contentPlan: string[];
    interactionThesis: string[];
  };
  navigation: {
    pricingLabel: string;
    loginLabel: string;
    assistantLabel?: string;
  };
  footer: {
    line: string;
  };
  home: {
    badge: string;
    headline: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    proofPoints: string[];
  };
  pricing: {
    badge: string;
    headline: string;
    description: string;
    featuredLabel: string;
    accessLabel: string;
    checkoutLabel: string;
    checkoutUserDescription: string;
    checkoutGuestDescription: string;
    buyButtonLabel: string;
    loginButtonLabel: string;
    readyLabelPrefix: string;
    loadErrorHint: string;
    emptyStateTitle: string;
    emptyStateDescription: string;
    defaultProductName: string;
    defaultProductDescription: string;
    viewDetailsLabel: string;
    viewingDetailsLabel: string;
  };
  templateSurface: {
    templateId: string;
    badge: string;
    headline: string;
    description: string;
    bullets: string[];
  };
  heroMetrics: SiteMetric[];
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    panels: SiteExperiencePanel[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: SiteExperienceItem[];
  };
  featureSections: Array<{
    eyebrow: string;
    title: string;
    description: string;
    items: SiteExperienceItem[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  aiAssistant?: {
    enabled: boolean;
    badge: string;
    title: string;
    description: string;
    assistantName: string;
    welcomeMessage: string;
    placeholder: string;
    submitLabel: string;
    resetLabel: string;
    suggestedPrompts: string[];
    systemPrompt: string;
    model?: string;
  };
  paymentSuccess: {
    eyebrow: string;
    title: string;
    description: string;
    nextStepsTitle: string;
    nextSteps: string[];
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
  };
  paymentCancel: {
    eyebrow: string;
    title: string;
    description: string;
    reasonsTitle: string;
    reasons: string[];
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
  };
};

export const SITE_CONFIG: SiteConfig = {
  appTitle: "LaunchPass",
  siteDescription:
    "Membership-ready Remix starter with passwordless auth, Neon data, and hosted checkout.",
  theme: {
    family: "commerce",
    layout: "editorial",
    visualThesis:
      "A premium launch surface that keeps the offer clear while exposing enough product depth to feel real.",
    contentPlan: [
      "Hero: one paid offer and one immediate action",
      "Support: show the product operating model",
      "Detail: explain what ships after checkout",
      "Final CTA: move the buyer into pricing or login",
    ],
    interactionThesis: [
      "Keep the first viewport poster-like rather than card-heavy.",
      "Use display surfaces to show how the starter becomes a real product.",
      "Treat fulfillment and entitlement messaging as part of conversion.",
    ],
  },
  navigation: {
    pricingLabel: "Pricing",
    loginLabel: "Login",
  },
  footer: {
    line: "Built with D1V",
  },
  home: {
    badge: "Payment-ready Remix foundation",
    headline: "Ship a paid product before the copy deck is even finished.",
    description:
      "Passwordless login, Neon storage, and hosted checkout are already wired. Replace the product layer, keep the platform primitives.",
    primaryCtaLabel: "Open pricing",
    primaryCtaHref: "/pricing",
    secondaryCtaLabel: "Login",
    secondaryCtaHref: "/login",
    proofPoints: [
      "Passwordless email auth with JWT session helpers",
      "Neon PostgreSQL + Drizzle migrations for production data",
      "Hosted checkout flow for one-off or recurring offers",
    ],
  },
  pricing: {
    badge: "Membership",
    headline: "One clear offer. Instant checkout.",
    description: "Sign in, open checkout, and turn access into revenue in seconds.",
    featuredLabel: "Member access",
    accessLabel: "Member benefits unlocked",
    checkoutLabel: "Checkout",
    checkoutUserDescription:
      "Checkout opens instantly for your signed-in account.",
    checkoutGuestDescription:
      "Login first, then return here to create a checkout link instantly.",
    buyButtonLabel: "Buy membership",
    loginButtonLabel: "Login to purchase",
    readyLabelPrefix: "Ready to checkout as",
    loadErrorHint:
      "Check your Payment Hub API token and make sure your account already has at least one active product.",
    emptyStateTitle: "No active products yet",
    emptyStateDescription:
      "Create products in Payment Hub, then refresh this page to turn the checkout flow on.",
    defaultProductName: "Membership",
    defaultProductDescription: "Become a member. Full access starts now.",
    viewDetailsLabel: "View details",
    viewingDetailsLabel: "Viewing details",
  },
  templateSurface: {
    templateId: "launchpass-foundation",
    badge: "Template surface",
    headline: "Replace the offer, keep the rails.",
    description:
      "This foundation is designed to become a product quickly. Swap in your market, keep auth, database, and payments online from day one.",
    bullets: [
      "Edit the homepage copy and action flow for your specific buyer",
      "Connect payment success to order, credit, or entitlement creation",
      "Replace placeholder database models with your product schema",
    ],
  },
  heroMetrics: [
    {
      value: "Auth",
      label: "Already wired",
      detail: "Passwordless email login is ready to use.",
    },
    {
      value: "Data",
      label: "Production capable",
      detail: "Neon and Drizzle provide the persistence layer.",
    },
    {
      value: "Checkout",
      label: "Hosted flow",
      detail: "Turn access into revenue without writing payment UI first.",
    },
  ],
  showcase: {
    eyebrow: "Starter architecture",
    title: "Use one foundation to launch a paid product with less plumbing and more product work.",
    description:
      "The base template is intentionally lean: auth, data, and billing are in place so you can spend your next pass on the market-specific experience.",
    panels: [
      {
        title: "Auth boundary",
        value: "Passwordless",
        detail: "Move users from email code to app access without extra identity setup.",
        meta: "Accounts",
      },
      {
        title: "Database layer",
        value: "Neon + Drizzle",
        detail: "Migrations, seeds, and schema work stay close to the app code.",
        meta: "Persistence",
      },
      {
        title: "Payments",
        value: "Hosted",
        detail: "Start with one clean pricing path before adding subscriptions or orders.",
        meta: "Commerce",
      },
      {
        title: "Environment bootstrap",
        value: "Project-aware",
        detail: "Pull generated project env vars into local `.env` without hand-editing secrets.",
        meta: "DX",
      },
    ],
  },
  workflow: {
    eyebrow: "Foundation workflow",
    title: "Replace only the market layer.",
    description:
      "This starter is strongest when you keep the platform rails and swap in your real entities, surfaces, and fulfillment logic.",
    steps: [
      {
        title: "Define your product entities",
        description: "Replace starter copy with the data model your product actually needs.",
      },
      {
        title: "Map checkout to access",
        description: "Successful payment should create orders, seats, credits, or memberships.",
      },
      {
        title: "Build the post-purchase state",
        description: "Success pages are only the first handoff into the real product experience.",
      },
    ],
  },
  featureSections: [
    {
      eyebrow: "What you inherit",
      title: "The boring but necessary platform work is already here.",
      description:
        "Use the foundation to skip setup drift and move straight into product-specific implementation.",
      items: [
        {
          title: "Passwordless auth",
          description: "JWT session helpers and auth routes are ready to extend.",
          meta: "Identity",
        },
        {
          title: "Database workflow",
          description: "Direct `db:migrate` and `db:seed` scripts keep local setup predictable.",
          meta: "Data",
        },
        {
          title: "Hosted checkout",
          description: "Pricing and checkout link creation are already connected.",
          meta: "Payments",
        },
      ],
    },
    {
      eyebrow: "What you still build",
      title: "The product surface is intentionally open.",
      description:
        "The template is supposed to disappear under your real experience, schema, and business logic.",
      items: [
        {
          title: "Core workflow",
          description: "Swap the landing surface for your dashboard, portal, library, or booking flow.",
          meta: "Experience",
        },
        {
          title: "Entitlements",
          description: "Persist plan access, credits, reservations, or membership status in your own schema.",
          meta: "Access",
        },
        {
          title: "Fulfillment",
          description: "Route successful buyers into onboarding, downloads, appointments, or premium content.",
          meta: "Ops",
        },
      ],
    },
  ],
  faq: [
    {
      question: "What should I customize first?",
      answer:
        "Replace the homepage experience, define your product entities, and map payment success to a real entitlement model.",
    },
    {
      question: "What should stay shared across derivatives?",
      answer:
        "Keep auth, env bootstrap, database workflow, and hosted checkout aligned unless the product truly needs a different primitive.",
    },
    {
      question: "How should this foundation evolve?",
      answer:
        "It should stay lean and reusable while industry templates carry stronger design language and domain-specific modules.",
    },
  ],
  paymentSuccess: {
    eyebrow: "Payment completed",
    title: "Thanks, your checkout was successful",
    description:
      "Your payment has been submitted successfully. Use this screen to direct the buyer into the product, dashboard, or onboarding path.",
    nextStepsTitle: "Suggested next steps for this template",
    nextSteps: [
      "Sync successful payments into your own order table",
      "Grant product access or activate the user subscription",
      "Show transaction history in a user dashboard",
      "Add webhook verification for automatic fulfillment",
    ],
    primaryButtonLabel: "Buy another plan",
    secondaryButtonLabel: "Back to home",
  },
  paymentCancel: {
    eyebrow: "Checkout cancelled",
    title: "Your payment was not completed",
    description:
      "You exited the checkout flow before finishing payment. You can return to pricing and try again whenever you are ready.",
    reasonsTitle: "Common reasons you might see this page:",
    reasons: [
      "You clicked back during checkout.",
      "You closed the hosted payment page.",
      "The payment method was not confirmed.",
      "You intentionally cancelled before paying.",
    ],
    primaryButtonLabel: "Return to pricing",
    secondaryButtonLabel: "Go to homepage",
  },
};

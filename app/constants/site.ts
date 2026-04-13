export type SiteConfig = {
  appTitle: string;
  siteDescription: string;
  navigation: {
    pricingLabel: string;
    loginLabel: string;
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

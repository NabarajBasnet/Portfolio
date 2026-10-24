export const FITBINARY_START = { year: 2024, month: 5 };
export const ONEPASAL_START = { year: 2025, month: 7 };

export function durationSince(start: { year: number; month: number }) {
  const now = new Date();
  const months =
    (now.getFullYear() - start.year) * 12 + (now.getMonth() - start.month);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest > 0) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

export interface Highlight {
  title: string;
  text: string;
}

export interface ProjectLink {
  kind: "play" | "web";
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  status?: string;
  links: ProjectLink[];
  stack: string[];
  highlights: Highlight[];
}

export const projects: Project[] = [
  {
    id: "trainlink",
    name: "Trainlink",
    tagline: "Trainer–client marketplace",
    summary:
      "Mobile-first platform connecting personal trainers with clients, covering booking, payments, sessions, workouts, video calls, and payouts.",
    status: "Live on Play Store",
    links: [
      {
        kind: "play",
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.trainlink.app&pcampaignid=web_share",
      },
      { kind: "web", label: "Website", href: "https://trainlink.cloud" },
    ],
    stack: [
      "NestJS microservices",
      "gRPC",
      "PostgreSQL (TypeORM)",
      "Redis",
      "BullMQ",
      "WebSockets",
      "WebRTC",
      "Stripe + Stripe Connect",
      "AWS S3",
      "React Native (Expo)",
      "Docker",
    ],
    highlights: [
      {
        title: "P2P video calling",
        text: "Calls are peer-to-peer: audio and video flow directly between the trainer's and client's devices over WebRTC, encrypted with DTLS-SRTP, with no media server in between. A socket.io channel acts as the signaling layer — relaying the SDP offer/answer and ICE candidates — while STUN handles NAT traversal so peers can reach each other across networks. Signaling is only accepted between the trainer and client of a session that is currently in progress.",
      },
      {
        title: "Microservices architecture",
        text: "API gateway plus auth, billing, notification, communication, media, and core services, communicating over gRPC.",
      },
      {
        title: "Marketplace payments",
        text: "Stripe Connect onboarding, a per-session earnings ledger, platform commission, and automated transfers to trainers.",
      },
      {
        title: "Concurrency control",
        text: "Atomic conditional SQL updates prevent overselling of package sessions.",
      },
      {
        title: "ACID transactions",
        text: "Payment confirmation updates booking and payment status in a single transaction.",
      },
      {
        title: "Idempotent webhooks",
        text: "Stripe webhooks are signature-verified and deduplicated using stored event IDs.",
      },
      {
        title: "Real-time chat",
        text: "WebSocket chat between trainers and clients.",
      },
      {
        title: "Queue-based notifications",
        text: "BullMQ queues deliver push notifications and automated chat messages asynchronously.",
      },
      {
        title: "Background jobs",
        text: "Delayed jobs enforce booking expiry, and repeatable jobs run scheduled trainer payouts.",
      },
      {
        title: "Session state machine",
        text: "Request → accept/reject → start → in progress → complete, with workout logging tied to sessions.",
      },
      {
        title: "Price snapshotting",
        text: "Price, session count, and commission are frozen on the booking at purchase time.",
      },
      {
        title: "RBAC",
        text: "Permission-based guards at the API gateway.",
      },
      {
        title: "Admin broadcasts",
        text: "Role- and filter-targeted notifications with delivery tracking.",
      },
      {
        title: "Media service",
        text: "S3-backed storage for exercise animations and user media.",
      },
    ],
  },
  {
    id: "fitcloud",
    name: "Fitcloud",
    tagline: "Gym management SaaS",
    summary:
      "Multi-tenant gym management platform with apps for gym owners, staff, and members. Live on the Play Store and in use by real gyms.",
    status: "Live on Play Store",
    links: [
      {
        kind: "play",
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.anonymous.fitcloud.fitbinary&pcampaignid=web_share",
      },
      {
        kind: "web",
        label: "Website",
        href: "https://fitcloud.fitbinary.com/",
      },
    ],
    stack: ["NestJS", "TypeScript", "MongoDB", "Mobile app"],
    highlights: [
      {
        title: "Multi-tenant SaaS",
        text: "Multiple gyms run on a single platform with isolated data.",
      },
      {
        title: "Role-based apps",
        text: "Separate experiences for admins, staff, and members.",
      },
      {
        title: "Decoupled notification service",
        text: "Notifications run as an independent service so failures don't affect core services.",
      },
      {
        title: "Architecture evolution",
        text: "Grew from single-gym software to a multi-tenant SaaS to a microservices-based platform under Fitbinary.",
      },
      {
        title: "Membership lifecycle",
        text: "Memberships, renewals, and due alerts.",
      },
    ],
  },
  {
    id: "fitstock",
    name: "Fitstock",
    tagline: "Multi-branch inventory management SaaS",
    summary:
      "Inventory and sales platform for businesses that operate multiple branches. Live on the Play Store.",
    status: "Live on Play Store",
    links: [
      {
        kind: "play",
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.anonymous.fitstock.fitbinary&pcampaignid=web_share",
      },
      {
        kind: "web",
        label: "Website",
        href: "https://fitstock.fitbinary.com/",
      },
    ],
    stack: ["NestJS", "TypeScript", "MongoDB", "Mobile app"],
    highlights: [
      {
        title: "Multi-branch inventory",
        text: "Stock is tracked per branch, and users can be assigned to multiple branches with a consolidated dashboard.",
      },
      {
        title: "Stock transfer workflow",
        text: "Inter-branch transfers with approve, reject, and cancel states.",
      },
      {
        title: "Barcode system",
        text: "Barcode generation and printing, plus scan-and-sell POS.",
      },
      {
        title: "Audit trail",
        text: "Every inventory change is logged for full traceability.",
      },
      {
        title: "Multi-tenant",
        text: "Organization-level data isolation.",
      },
      {
        title: "Automated stock movement",
        text: "Receiving and outflow (sale, damage, expiry, internal use) update branch inventory automatically.",
      },
      {
        title: "Sales and billing",
        text: "Sales module, invoice generation, and discount management.",
      },
      {
        title: "Reporting",
        text: "Inventory and sales reports, low-stock alerts, and an analytics dashboard.",
      },
    ],
  },
];

export const fitbinaryPlatform = [
  "Shared auth/admin service and a notification service used across products",
  "Dockerized services deployed on a VPS",
];

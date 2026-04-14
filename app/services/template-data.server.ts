import { count, desc } from "drizzle-orm";
import { db } from "~/db/db.server";
import { users, verificationCodes } from "~/db/schema";

export type TemplateSnapshotItem = {
  title: string;
  meta: string;
  detail: string;
};

export type TemplateSnapshotSection = {
  key: string;
  title: string;
  description: string;
  total: number;
  totalLabel: string;
  items: TemplateSnapshotItem[];
};

export type TemplateSnapshot = {
  title: string;
  description: string;
  generatedAt: string;
  sections: TemplateSnapshotSection[];
};

function buildDetail(parts: string[]) {
  return parts.filter(Boolean).join(" | ");
}

async function loadUsersSection(): Promise<TemplateSnapshotSection> {
  const totalRows = await db.select({ value: count() }).from(users);
  const rows = await db.select().from(users).orderBy(desc(users.createdAt)).limit(3);

  return {
    key: "users",
    title: "Users",
    description: "Authenticated accounts stored by the starter.",
    total: Number(totalRows[0]?.value ?? 0),
    totalLabel: "user records",
    items: rows.map((row) => ({
      title: row.displayName ?? row.username,
      meta: row.email ?? "email pending",
      detail: buildDetail([row.id, row.createdAt?.toISOString?.() ?? ""]),
    })),
  };
}

async function loadVerificationCodesSection(): Promise<TemplateSnapshotSection> {
  const totalRows = await db.select({ value: count() }).from(verificationCodes);
  const rows = await db
    .select()
    .from(verificationCodes)
    .orderBy(desc(verificationCodes.createdAt))
    .limit(3);

  return {
    key: "verificationCodes",
    title: "Verification codes",
    description: "Recent login verification requests and status.",
    total: Number(totalRows[0]?.value ?? 0),
    totalLabel: "verification records",
    items: rows.map((row) => ({
      title: row.email,
      meta: row.used,
      detail: buildDetail([row.purpose, row.expiresAt?.toISOString?.() ?? ""]),
    })),
  };
}

export async function getTemplateSnapshot(): Promise<TemplateSnapshot> {
  return {
    title: "Live starter data",
    description:
      "The foundation exposes a database-backed snapshot so the frontend and API can verify real auth data before any industry specialization is added.",
    generatedAt: new Date().toISOString(),
    sections: await Promise.all([
      loadUsersSection(),
      loadVerificationCodesSection(),
    ]),
  };
}

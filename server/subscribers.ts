import fs from "fs/promises";
import path from "path";

export interface SubscriberRecord {
  email: string;
  source?: string;
  page?: string;
  subscribedAt: string;
}

const subscribersFile = process.env.SUBSCRIBERS_FILE
  ? path.resolve(process.cwd(), process.env.SUBSCRIBERS_FILE)
  : path.resolve(process.cwd(), "data", "subscribers.json");

async function ensureStoreExists() {
  await fs.mkdir(path.dirname(subscribersFile), { recursive: true });

  try {
    await fs.access(subscribersFile);
  } catch {
    await fs.writeFile(subscribersFile, "[]\n", "utf-8");
  }
}

async function readSubscribers(): Promise<SubscriberRecord[]> {
  await ensureStoreExists();

  const raw = await fs.readFile(subscribersFile, "utf-8");
  const parsed = JSON.parse(raw) as unknown;

  if (!Array.isArray(parsed)) {
    throw new Error("Subscribers store is not an array.");
  }

  return parsed as SubscriberRecord[];
}

export async function saveSubscriber(
  record: SubscriberRecord,
): Promise<"added" | "exists"> {
  const subscribers = await readSubscribers();
  const normalizedEmail = record.email.trim().toLowerCase();

  const exists = subscribers.some(
    (subscriber) => subscriber.email.trim().toLowerCase() === normalizedEmail,
  );

  if (exists) {
    return "exists";
  }

  subscribers.unshift({
    ...record,
    email: normalizedEmail,
  });

  await fs.writeFile(
    subscribersFile,
    `${JSON.stringify(subscribers, null, 2)}\n`,
    "utf-8",
  );

  return "added";
}

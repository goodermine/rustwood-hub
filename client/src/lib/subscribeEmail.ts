export interface SubscribeEmailPayload {
  email: string;
  source?: string;
  page?: string;
}

export interface SubscribeEmailResponse {
  ok: true;
  status: "added" | "exists";
  message?: string;
}

export async function subscribeEmail(
  payload: SubscribeEmailPayload,
): Promise<SubscribeEmailResponse> {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      page:
        payload.page ??
        (typeof window !== "undefined" ? window.location.pathname : undefined),
    }),
  });

  let data: {
    error?: string;
    message?: string;
    status?: "added" | "exists";
  } = {};

  try {
    data = await response.json();
  } catch {
    // Ignore malformed JSON responses and fall back to a generic message.
  }

  if (!response.ok) {
    throw new Error(
      data.error ?? "Could not save your subscription right now.",
    );
  }

  return {
    ok: true,
    status: data.status ?? "added",
    message: data.message,
  };
}

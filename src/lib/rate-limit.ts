const rateLimit = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requêtes par minute par IP

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimit.get(ip);

  // Nettoyer les anciennes entrées
  if (record && now > record.resetTime) {
    rateLimit.delete(ip);
  }

  const current = rateLimit.get(ip);

  if (!current) {
    rateLimit.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  current.count++;
  return { allowed: true, remaining: MAX_REQUESTS - current.count };
}

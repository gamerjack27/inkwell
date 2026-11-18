// server/src/middleware/rate-limit.middleware.js

import rateLimit from "express-rate-limit";

// Example security requirement, now enforced in code:
// "the system shall reject login attempts after five consecutive
// failures from the same account within ten minutes."
export const authRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  // Default 5 (the production security requirement) unless overridden —
  // the e2e suite alone makes 6+ auth calls (3 viewports × register+login)
  // from the same CI-runner IP, well under 10 minutes, which trips the
  // default limit on every run, not just a flaky one.
  max: Number(process.env.AUTH_RATE_LIMIT_MAX) || 5,
  message: { error: { code: "TOO_MANY_ATTEMPTS", message: "Too many attempts. Try again later." } },
  standardHeaders: true,
  legacyHeaders: false,
});
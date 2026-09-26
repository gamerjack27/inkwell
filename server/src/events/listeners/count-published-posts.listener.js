// server/src/events/listeners/count-published-posts.listener.js
import { EventBus } from "../event-bus.js";
import { PostStats } from "../../stats/post-stats.js";

EventBus.on("post.published", () => {
  PostStats.increment();
});
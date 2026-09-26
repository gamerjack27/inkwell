// server/src/stats/post-stats.js

let totalPublished = 0;

export const PostStats = {
    increment() {
        totalPublished += 1;
    },
    getTotalPublished() {
        return totalPublished;
    },
};
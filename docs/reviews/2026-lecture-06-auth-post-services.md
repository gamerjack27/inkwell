# Review: AuthService, PostService, and Layered Server Architecture (Lecture 6)

**Reviewer prep time:** ~10 minutes
**Defects found:** 1 (commit message does not reference a backlog item ID)
**Outcome:** Accept with minor note

## Checklist results

- [x] No route handler contains business logic that belongs in a Service
- [x] No module outside `repositories/` imports `@prisma/client` directly
- [x] New functions are named for what they do, not how they do it
- [x] No duplicated validation or business logic that should be extracted
- [x] Error handling follows the established typed-error pattern
- [ ] Commit messages are descriptive and reference the backlog item
- [x] `docs/BACKLOG.md` updated if applicable
- [x] No secrets committed

## Notes

The Lecture 6 commit ("feat: implement AuthService, PostService, and Publish
Post editor (Lecture 6)") is descriptive but does not cite a specific backlog
item ID (e.g., US-01, US-02, US-03), which the current checklist asks for.
Not blocking, since this checklist item did not exist until this lecture, but
worth following going forward.
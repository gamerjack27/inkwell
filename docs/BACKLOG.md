# Inkwell Product Backlog

Definition of Done: see README.md

| ID | User Story | Priority | Points | Status | Notes |
|----|------------|----------|--------|--------|-------|
| US-01 | As a visitor, I want to register an account, so that I can publish and interact with content | High | 3 | Requirements Defined | See use-cases.md |
| US-02 | As a registered user, I want to log in and stay logged in securely, so that I don't have to re-authenticate constantly | High | 5 | Requirements Defined | See use-cases.md |
| US-03 | As an author, I want to write and publish a post, so that readers can see my writing | High | 5 | Requirements Defined | Scope negotiated: plain text only, see Section 5.4 |
| US-04 | As a reader, I want to browse a public feed of posts, so that I can discover new writing | High | 3 | Requirements Defined | See use-cases.md |
| US-05 | As a reader, I want to comment on a post, so that I can engage with the author | Medium | 3 | Backlog |
| US-06 | As a reader, I want to follow an author, so that I see their new posts more prominently | Medium | 3 | Backlog |
| US-07 | As an author, I want to see basic analytics on my posts, so that I understand my audience | Low | 5 | Backlog |
| US-08 | As a registered user, I want to reset my password via email, so that I can regain access if I forget it | Medium | 3 | Backlog |
| US-09 | As an author, I want to edit a post after publishing it, so that I can fix mistakes or update content | Medium | 3 | Backlog |

Story point justifications:
US-08 (3 pts): Involves email delivery, token generation/expiry, and a new auth flow which is like log in (US-02) but smaller in scope.
US-09 (3 pts): Requires reusing the existing post creation form plus authorization checks (only the author can edit) which is similar effort to publishing (US-03) without having to make new UI from scratch.
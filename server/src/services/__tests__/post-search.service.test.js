
import { jest } from "@jest/globals";

const mockPostRepository = { createWithTags: jest.fn(), findPublished: jest.fn() };

jest.unstable_mockModule("../../repositories/post.repository.js", () => ({
  PostRepository: mockPostRepository,
}));

const mockSearchStrategy = { search: jest.fn() };

jest.unstable_mockModule("../search/substring-search.strategy.js", () => ({
  SubstringSearchStrategy: mockSearchStrategy,
}));

const { PostService } = await import("../post.service.js");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("PostService.search", () => {
  test("returns matching posts for a query with results (row 1)", async () => {
    mockSearchStrategy.search.mockResolvedValue({
      posts: [{ id: "p1", title: "On Modularity" }],
      hasMore: false,
    });

    const result = await PostService.search({ query: "modularity" });

    expect(result.posts).toHaveLength(1);
    expect(result.posts[0].id).toBe("p1");
  });

  test("returns an empty array for a query with no matches (row 2)", async () => {
    mockSearchStrategy.search.mockResolvedValue({ posts: [], hasMore: false });

    const result = await PostService.search({ query: "nonexistentword" });

    expect(result.posts).toEqual([]);
  });

  test("applies default page and pageSize when omitted (row 3, boundary)", async () => {
    mockSearchStrategy.search.mockResolvedValue({ posts: [], hasMore: false });

    await PostService.search({ query: "design" });

    expect(mockSearchStrategy.search).toHaveBeenCalledWith(
      "design",
      { page: 1, pageSize: 10 }
    );
  });

  test("delegates to searchStrategy with the given query and pagination (row 4, white-box branch)", async () => {
    mockSearchStrategy.search.mockResolvedValue({ posts: [], hasMore: false });

    await PostService.search({ query: "architecture", page: 2, pageSize: 5 });

    expect(mockSearchStrategy.search).toHaveBeenCalledWith(
      "architecture",
      { page: 2, pageSize: 5 }
    );
  });
});
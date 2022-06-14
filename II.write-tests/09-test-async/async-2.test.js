const { getRepos } = require("./async-2");
const { fetcher } = require("./fetcher");
const github = require("./github.json");
jest.mock("./fetcher");

describe("given the getRepos function", () => {
  it("http OK status 200 (with mock)", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    fetcher.mockResolvedValue([{ name: github[0].name }]);
    // act
    return getRepos(url).then((result) => {
      // assert
      expect(result).toContain("aws-lambda-starter");
    });
  });

  it("Resource not found", () => {
    // arrange
    const url = "";
    fetcher.mockResolvedValue([{ status: 404 }]);
    // act and assert
    return getRepos(url).catch((result) => {
      expect(result).rejects.toThrow(error);
    });
  });
});

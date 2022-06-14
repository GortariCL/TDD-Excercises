const fetch = require("node-fetch");
const { getRepos } = require("./async-1");
const github = require("./github.json");
jest.mock("node-fetch");

describe("given the getRepos function", () => {
  it("given the http query with json object will return a resolved promise", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    fetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => [{ name: github[0].name }, { name: github[4].name }],
      });
    });
    // act
    return getRepos(url).then((result) => {
      // assert
      expect(result).toContain("aws-lambda-starter");
      expect(result).toContain("dom-ajax-repo");
    });
  });

  it("given the http query will return Resource not found status 404", () => {
    // arrange
    const url = "";
    fetch.mockImplementation(() => {
      return Promise.reject({ status: 404 });
    });
    // act and assert
    return getRepos(url).catch((result) => {
      expect(result.status).toEqual(404);
    });
  });
});

const { getRepos } = require("./async-2");
const { fetcher } = require("./fetcher");
const github = require("./github.json");
jest.mock("./fetcher");

describe("given the getRepos function", () => {
  it("given the http query with json object will return a resolved promise", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    //fetcher.mockResolvedValue([{ name: github[0].name }]);
    fetcher.mockImplementation(() => {
      return Promise.resolve([{ name: github[0].name }]);
    });
    // act
    return getRepos(url).then((result) => {
      // assert
      expect(result).toContain("aws-lambda-starter");
    });
  });

  it("given the http query will return Resource not found status 404", () => {
    // arrange
    const url = "";
    fetcher.mockImplementation(() =>{
      return Promise.reject({ status: 404 });
    });
    // act and assert
    return getRepos(url).catch((result) => {
      expect(result.status).toEqual(404);
    });
  });
});

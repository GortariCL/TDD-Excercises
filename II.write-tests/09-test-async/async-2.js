const { fetcher } = require("./fetcher");

const getRepos = (repoName) => {
  return fetcher(repoName).then((response) => {
    return response.map((rep) => {
      return rep.name;
    });
  })
  .catch(error => { throw error });
};

module.exports = { 
  getRepos
};

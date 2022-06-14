const fetch = require("node-fetch");

const getRepos = (repoName) => {
  return fetch(repoName)
    .then((data) => data.json())
    .then((response) => {
      return response.map((rep) => {
        return rep.name;
      });
    })
    .catch(error => {throw error});
};

module.exports = {
  getRepos,
};

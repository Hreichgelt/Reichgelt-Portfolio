const baseURL = (repo) =>
  `https://api.github.com/users/hreichgelt/repos`;

export default baseURL;

// https://raw.githubusercontent.com/{owner}/{repo}/{branch}/README.md
// https://raw.githubusercontent.com/hreichgelt/portfolio/main/README.md
// Can we get live site links out of this?
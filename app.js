const github = require('./github.js');
const username = process.argv[2];

console.log(username);

const option = {
  hostname: 'api.github.com',
  path: `/users/${username}/repos`,
  headers: {
    'User-Agent': 'github-app',
  },
};

main();

async function main() {
  github.getRepos(option, (err, repos) => {
    try {
      if (err) {
        console.log('Ошибка в файле app.js github.getRepos');
      }

      repos.forEach((repo) => {
        console.log(repo.name);
        console.log(repo);
      });
    } catch (error) {
      console.log('Ошибка в файле app.js github.getRepos');
      console.error(error);
      console.error('Ошибка: ', err);
    }
  });
}

const github = require('./github.js');
const username = process.argv[2];

main();

async function main() {
  github.getRepos(username, (err, repos) => {
    try {
      if (err) {
        return console.error(err.message);
      }

      repos.forEach((repo, index) => {
        console.log(`[${index + 1}]`, repo.name);
      });
    } catch (error) {
      console.log('Ошибка в файле app.js github.getRepos');
      console.error(error);
      console.error('Ошибка: ', err);
    }
  });
}

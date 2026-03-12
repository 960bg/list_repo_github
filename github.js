const https = require('https');

exports.getRepos = getRepos;

function getRepos(option, fnCallBack) {
  console.log(option);

  // return new Promise((resolve, reject) => {
  https.get(option, (res) => {
    console.log(res.statusCode);
    if (res.statusCode !== 200) {
      // throw new Error("Сервер не готов");
      return fnCallBack('Сервер не готов', res);
      // reject('Сервер не готов');
    }

    return fnCallBack('', res);
  });
  // });
}

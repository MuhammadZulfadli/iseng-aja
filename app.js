const { default: axios } = require("axios");

const message = "Jangan nipu bang";

const url = `https://api.telegram.org/bot6925804218:AAGAGF6rzCPC9IN00OYea9Zeo4N8hIeMwVM/sendMessage?parse_mode=markdown&chat_id=6653344084&text=${message}`;

async function jokes() {
  try {
    while (true) {
      await axios.get(url).then((res) => {
        if (res.status == 200) {
          console.log(res);
        }
      });
    }
  } catch (error) {
    console.log("Ngedown bang?");
    jokes();
  }
}

for (let index = 0; index < 100; index++) {
  jokes();
}

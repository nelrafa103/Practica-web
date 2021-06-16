const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const r = fs.readFileSync("/home/nelcido/Desktop/Practica-web/node_modules/dotenv/lib/main.js");
const index = fs.readFileSync(
  "/home/nelcido/Desktop/Practica-web/global/js/index.mjs"
);
const env = fs.readFileSync("/home/nelcido/Desktop/Practica-web/.env");
const css = fs.readFileSync(
  "/home/nelcido/Desktop/Practica-web/global/sass/css/index.css"
);
const nav = fs.readFileSync(
  "/home/nelcido/Desktop/Practica-web/global/js/components/nav.mjs"
);
const client = fs.readFileSync(
  "/home/nelcido/Desktop/Practica-web/global/js/components/client-side.mjs"
);
//const env = fs.readFileSync("/home/nelcido/Desktop/Practica-web/.env");
const card = fs.readFileSync(
  "/home/nelcido/Desktop/Practica-web/global/js/components/card.mjs"
);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  fs.readFile(
    "/home/nelcido/Desktop/Practica-web/global/html/index.html",
    "utf8",
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      //res.end(process.env.LOCALHOST)
      res.end(data);
    }
  );
  if (req.url === "/home/nelcido/Desktop/Practica-web/global/js/index.mjs") {
    res.setHeader("Content-Type", "text/javascript");
    res.end(index);
  }
  if (
    req.url === "/home/nelcido/Desktop/Practica-web/global/sass/css/index.css"
  ) {
    res.setHeader("Content-Type", "text/css");
    res.end(css);
  }
  if (
    req.url ===
    "/home/nelcido/Desktop/Practica-web/global/js/components/nav.mjs"
  ) {
    res.setHeader("Content-Type", "text/javascript");
    res.end(nav);
  }
  if (
    req.url ===
    "/home/nelcido/Desktop/Practica-web/global/js/components/client-side.mjs"
  ) {
    res.setHeader("Content-Type", "text/javascript");
    res.end(client);
  }
  if (
    req.url ===
    "/home/nelcido/Desktop/Practica-web/global/js/components/card.mjs"
  ) {
    res.setHeader("Content-Type", "text/javascript");
    res.end(card);
  }
});

server.listen(process.env.PORT, hostname, () => {
  console.log(`Server running at http://${process.env.HOSTNAME}:${process.env.PORT}`);
});

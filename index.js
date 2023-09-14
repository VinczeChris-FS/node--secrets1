const express = require("express");

const app = express();

// Hard coded environment variables
PORT = 4000;
const host = "localhost";
FIRST_NAME = "Chris";
LAST_NAME = "Vincze";

app.get("/", (req, res) => {
  res.send(`${FIRST_NAME} ${LAST_NAME}'s Node Secrets Assignment`);
});

app.listen(port, host, () => {
  console.log(`App listening on host ${host} port ${port}`);
});

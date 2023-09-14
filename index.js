const express = require("express");

const app = express();

// Hard coded environment variables
PORT = 4000;
HOST = "localhost";
FIRST_NAME = "Chris";
LAST_NAME = "Vincze";

app.get("/", (req, res) => {
  res.send(`${FIRST_NAME} ${LAST_NAME}'s Node Secrets Assignment`);
});

app.listen(PORT, HOST, () => {
  console.log(`App listening on host ${HOST} port ${PORT}`);
});

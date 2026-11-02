// server/src/index.js
//
// This file's only job is to start the process — import the app and
// start the listener. All app construction now lives in app.js.

import "dotenv/config";
import { app } from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Inkwell API listening on port ${PORT}`);
});
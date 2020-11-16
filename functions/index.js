const functions = require("firebase-functions");
const universal = require(`${process.cwd()}/dist/rtrw-demo/server/main`).app();

exports.ssr = functions.https.onRequest(universal);

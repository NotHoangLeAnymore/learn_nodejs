const express = require("express");
const router = express.Router();
const path = require("path");

router.get(/^\/$|\/index(.html)?/, (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// cách viết của bản Express mới nhất
// router.get(/^\/new-page(?:\.html)?$/, (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "new-page.html"));
// });

//Cách 2: Viết 2 route riêng - nếu không muốn dùng regex
// router.get("/new-page", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
// });

// router.get("/new-page.html", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
// });

// router.get("/old-page", (req, res) => {
//   res.redirect(301, "/new-page.html"); // 302 by default
// });

// router.get("/old-page.html", (req, res) => {
//   res.redirect(301, "/new-page.html"); // 302 by default
// });

module.exports = router;

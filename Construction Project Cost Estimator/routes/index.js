const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     req.url = "/login";
//     router.handle(req, res);
// });
router.get("/vendor", (req, res) => {
    res.render("Vendor", {});
});
router.get("/profile_vendor", (req, res) => {
    res.render("profile", {});
});
router.get("/a", (req, res) => {
    res.render("a", {});
});

router.get("/", (req, res) => {
    res.render("Login", {});
});

router.get("/projects", (req, res) => {
    res.render("projects", {});
});

router.get("/signup", (req, res) => {
    res.render("Signup", {});
});
module.exports = router;


const constructorMethod = app => {
    app.use(router);
};

module.exports = constructorMethod;

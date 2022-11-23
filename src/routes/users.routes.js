const { Router } = require("express");
const { userCreate, getUser, getUserWithCourses, patchUser } = require("../controllers");

const router = Router();

router.post("/users", userCreate);
router.get("/users/:id/courses", getUserWithCourses)
router.get("/users/:id", getUser);
router.patch("/users", patchUser)

module.exports = router;
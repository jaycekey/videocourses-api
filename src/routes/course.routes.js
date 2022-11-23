const { Router } = require("express");
const { courseCreate, patchCourse, getAllCourses } = require("../controllers");

const router = Router();

router.post("/courses", courseCreate);
router.patch("/courses", patchCourse);
router.get("/courses", getAllCourses);

module.exports = router;
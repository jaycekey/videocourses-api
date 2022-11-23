const { Router } = require("express");
const { categoryCreate, categoryDelete } = require("../controllers");

const router = Router();

router.post("/categories", categoryCreate);
router.delete("/categories", categoryDelete);

module.exports = router;
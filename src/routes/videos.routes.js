const { Router } = require("express");
const { videoCreate, videoDelete } = require("../controllers");

const router = Router();

router.post("/videos", videoCreate);
router.delete("/videos", videoDelete);

module.exports = router;
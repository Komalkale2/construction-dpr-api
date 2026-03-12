const router = require("express").Router({mergeParams:true});
const controller = require("../controllers/dprController");
const auth = require("../middleware/authMiddleware");

router.post("/",auth,controller.createDPR);
router.get("/",auth,controller.getDPRs);

module.exports = router;
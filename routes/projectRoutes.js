const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post("/", auth, role("admin","manager"), projectController.createProject);
router.get("/", auth, projectController.getProjects);
router.get("/:id", auth, projectController.getProject);
router.put("/:id", auth, projectController.updateProject);
router.delete("/:id", auth, role("admin"), projectController.deleteProject);

module.exports = router;
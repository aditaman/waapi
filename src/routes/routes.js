const express = require("express");
const router = express.Router();
const whatsappController = require("../controllers/whatsappControllers");
const { route } = require("express/lib/application");

router
  .get("/", whatsappController.VerifyToken)
  .post("/", whatsappController.receivedMessage);

module.exports = router;

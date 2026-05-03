import express from "express";
import { addSchool, listSchools } from "../controllers/schoolController.js";

const router = express.Router();

const methodNotAllowed = (req, res) => {
  res.status(405).json({
    success: false,
    message: "Use POST for this endpoint",
  });
};

router.route("/addSchool").post(addSchool).get(methodNotAllowed);
router.route("/addschool").post(addSchool).get(methodNotAllowed);
router.get("/listSchools", listSchools);
router.get("/listschools", listSchools);

export default router;

const { Router } = require("express");
const apiController = require("../controllers/apiController");

const router = Router();

// CRUD (create, read, update, delete)
router.get("/obtener-inversiones", apiController.get_inversions);
router.post("/crear-inversion", apiController.create_inversion);
router.patch("/actualizar-inversion", apiController.update_inversion);
router.delete("/borrar-inversion/:id", apiController.delete_inversion);

module.exports = router;

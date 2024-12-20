const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
  todoUpdateRouteMiddleware,
  todoDeleteRouteMiddleware,
} = require("../middlewares/todo.middlewares");

router.use(todoRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", todoController.create);
router.put("/", todoUpdateRouteMiddleware, todoController.update);
router.delete("/", todoDeleteRouteMiddleware, todoController.delete);

module.exports = router;
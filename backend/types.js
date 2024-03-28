const zod = require("zod");

// Creating a type validation using zod library.
const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};

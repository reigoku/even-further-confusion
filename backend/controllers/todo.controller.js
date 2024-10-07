const todo = [
    {
      id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
      title: "Meow",
      priority: 1,
      createdAt: 1727098800585,
      updatedAt: null,
      deleted: false,
    },
    {
      id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
      title: "do literally anything",
      priority: 3,
      createdAt: 1727098952739,
      updatedAt: null,
      deleted: false,
    },
  ];
  
  exports.create = (req, res) => {
    const { title } = req.body;
  
    if (!title || title === "") {
      return res
        .status(418)
        .send({ type: "Error", message: "Must include a title" });
    }
  
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      priority: 1, //idk
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };
  
    cats.push(newTodo);
  
    res.send(newTodo);
  };
  
  exports.read = (req, res) => {
    res.send(todo);
  };
  
  exports.update = (req, res) => {};
  
  exports.delete = (req, res) => {};
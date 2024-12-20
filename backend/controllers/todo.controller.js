 todo = [
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
      deleted: true,
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
  
    todo.push(newTodo);
  
    res.send(newTodo);
  };
  
  exports.read = (req, res) => {
    res.send(todo.filter((entry) =>entry.deleted == false));
  };
  
  exports.update = (req, res) => {
    updTodo = todo.map(targetTodo => {if(targetTodo.id == req.body.id){
      return {...targetTodo, title: req.body.title, priority: parseInt(req.body.priority)};
    }
    return targetTodo;
    });
  //realistically the same as the delete query
  todo = updTodo;
  res.send(updTodo);
  };
  
  exports.delete = (req, res) => {
    delTodo = todo.map(targetTodo => {if(targetTodo.id == req.body.id){
        return {...targetTodo, deleted: true};
      }
      return targetTodo;
      });
    console.log(req.body);
    console.log(delTodo);
    //i wonder if not making the todo a constant so this works will be bad for the future
    todo = delTodo;
    res.send(delTodo);
    console.log("check")
    console.log(todo);
  };
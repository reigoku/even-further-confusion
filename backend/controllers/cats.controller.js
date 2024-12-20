cats = [ //this one const made things really damn hard to figure out
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Meow",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Kitty",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { name } = req.body;

  if (!name || name === "") {
    return res
      .status(418)
      .send({ type: "Error", message: "Must include a name" });
  }

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  cats.push(newCat);

  res.send(newCat);
};

exports.read = (req, res) => {
  res.send(cats.filter((entry) =>entry.deleted == false));
};

exports.update = (req, res) => {
  console.log("update");
  updCats = cats.map(targetCats => {if(targetCats.id == req.body.id){
    return {...targetCats, name: req.body.name, updatedAt: Date.now()};
  } //assuming that updatedAt is supposed to be the time of the last update
  return targetCats;
  });
//realistically the same as the delete query
cats = updCats;
res.send(updCats);
};

exports.delete = (req, res) => {
  delCats = cats.map(targetCats => {if(targetCats.id == req.body.id){
      return {...targetCats, deleted: true};
    }
    return targetCats;
    });
  cats = delCats;
  res.send(delCats);
};

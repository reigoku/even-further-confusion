const catsRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  console.log("GET middleware");
  next();
};

const catsUpdateRouteMiddleware = (req, res, next) => {
  console.log("UPDATE middlewares");
  next();
}

const catsDeleteRouteMiddleware = (req, res, next) => {
  console.log("DELETE middlewares");
  next();
}
module.exports = { catsRouteMiddleware, catsGetRouteMiddleware, catsUpdateRouteMiddleware, catsDeleteRouteMiddleware };

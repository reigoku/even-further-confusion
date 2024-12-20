const todoRouteMiddleware = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  };
  
  const todoGetRouteMiddleware = (req, res, next) => {
      
      console.log("GET middlewares");
    next();
  };

  const todoUpdateRouteMiddleware = (req, res, next) => {
    console.log("UPDATE middlewares");
    next();
  }

  const todoDeleteRouteMiddleware = (req, res, next) => {
    console.log("DELETE middlewares");
    next();
  }
  
  module.exports = { todoRouteMiddleware, todoGetRouteMiddleware, todoUpdateRouteMiddleware, todoDeleteRouteMiddleware };
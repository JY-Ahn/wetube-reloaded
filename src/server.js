import express, { Router } from "express"; // npm과 nodeJS가 node_modules에서 express를 찾아온다
import morgan from "morgan";

const PORT = 5003;
const app = express(); // Make express application
const logger = morgan("dev");

//////////////////////// application 설정
const routerLogger = (req, res, next) => {
  console.log(`Route: ${req.path}`);
  next();
};
const methodlogger = (req, res, next) => {
  console.log(`Methode: ${req.method}`);
  next();
};
const handleHome = (req, res, next) => {
  return res.send("I love middlewares");
};
const handleLogin = (req, res, next) => {
  console.log("Welcome to login page");
  return res.send("hello");
};

app.use(logger);
// app.use("/", methodlogger, routerLogger);

app.get("/", handleHome); // logger: Middleware, handleHome: Controller
app.get("/login", handleLogin);

//////////////////////// application  개방
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);

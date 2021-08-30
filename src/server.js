import express, { Router } from "express"; // npm과 nodeJS가 node_modules에서 express를 찾아온다
import morgan from "morgan";
import global from "./routers/globalRouter.js";
import user from "./routers/userRouter.js";
import video from "./routers/videoRouter.js";

const PORT = 5003;
const app = express(); // Make express application
const logger = morgan("dev");
app.use(logger);

app.use("/", global);
app.use("/users", user);
app.use("/videos", video);

//////////////////////// application  개방
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);

const express = require("express");
const path = require("path");

const mainRouter = require("./routes/main");
const routerPedidos = require("./routes/pedidos");
const routerPerfil = require("./routes/perfil");
const app = express();
const port = 3000;

//ejs config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routers
app.use("/perfil", routerPerfil);
app.use("/pedidos", routerPedidos);
app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});

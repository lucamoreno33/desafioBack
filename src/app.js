import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js"
import products from "./routes/productos.router.js";
import carts from "./routes/carts.router.js"
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js"

const app = express();
app.use(express.json());
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname +'/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname +"/public"));
app.use("/",viewsRouter)


app.use(express.urlencoded({ extended: true }));
app.use("/api/products", products)
app.use("/api/carts", carts)

const httpServer = app.listen(8080, () => {
    console.log("Server is runing on port 8080")
})

const socketServer = new Server(httpServer);
socketServer.on("connection", (socket) =>{
    console.log("un usario se ha conectado")
} )


import express, { Application, urlencoded } from "express"; 
import { connect } from "./infra/database";
import { errorMiddleware } from "./middlewares/error.middlewares";
import { EventRoutes } from "../routes/events.routes";

class App {

    public app: Application;
    private eventRoutes = new EventRoutes();

    constructor() {
        // No contrutor devemos nos atentar para chamar as funções na ordem correta
        this.app = express();
        this.middlewaresInitialize(); 
        this.initializeRoutes();
        this.interceptionErrors();
        connect();
    }
    initializeRoutes(){
        // Tudo que usa o método "use" serve para interceptarmos
        this.app.use('/events', this.eventRoutes.router);
    }

    interceptionErrors(){
         this.app.use(errorMiddleware);
    }

    middlewaresInitialize(){
        this.app.use(express.json); // Isso é para transformar os dados em JSON
        this.app.use(express.urlencoded({extended: true})); // Isso funciona para que a URL não quebre quanto tiver espaços
    }
    listen(){
        this.app.listen(8080, ()=>console.log("server is running"));
    }
}
 
export { App };
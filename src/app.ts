import express, { Application, urlencoded } from "express"; 
import { connect } from "./infra/database";
import { errorMiddleware } from "./middlewares/error.middlewares";

class App {
    public app: Application;
    constructor() {
        // No contrutor devemos nos atentar para chamar as funções na ordem correta
        this.app = express();
        this.middlewaresInitialize(); 
        this.initializeRoutes();
        this.interceptionErrors();
        connect();
    }
    initializeRoutes(){
        //this.app.use('/', );
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
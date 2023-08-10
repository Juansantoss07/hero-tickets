import { Router } from "express";
import { EventRepositoryMongoose } from "../src/repositories/EventRepositoryMongoose";
import { EventUseCase } from "../src/useCases/EventUseCase";
import { EventController } from "../src/controllers/EventController";

class EventRoutes {
    
    public router: Router;
    private eventController: EventController;

    constructor() {
        this.router = Router();

        const eventRepository = new EventRepositoryMongoose();
        const eventUseCase = new EventUseCase(eventRepository);
        this.eventController = new EventController(eventUseCase);
        this.initRoutes();
    }

    initRoutes(){
        this.router.post('/',
        this.eventController.create.bind(this.eventController));
    }
}

export { EventRoutes };
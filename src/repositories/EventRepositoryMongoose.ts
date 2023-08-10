// Nesse arquivo estamos criando o Schema do Mongo DB e seu model

import mongoose, { mongo } from "mongoose";
import { EventRepository } from "./EventRepository";

const eventSchema = new mongoose.Schema({
    title: String,
    location: {
        latitude: String,
        longividade: String,
    }, 
    date: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    description: String,
    categories: [String],
    banner: String,
    flyers: [String],
    price: {
        type: Array,
    },
    city: String,
    participants: {
        type: Array,
        ref: 'User'
    }
});

const EventModel = mongoose.model('Event', eventSchema); // Aqui eu crio um model, uso o método model do mongoose e passo dois parâmetros, o primeiro é o nome do meu model (fica por sua escolha e pode ser qualquer nome), o segundo a gente passa o Schema.

class EventRepositoryMongoose implements EventRepository  {
    async add(event: Event): Promise<Event>{ 
        const eventModel = new EventModel(event);

        await eventModel.save();
        return event;
    }
}

export { EventRepositoryMongoose };
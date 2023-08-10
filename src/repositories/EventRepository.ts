// Nesse arquivo criamos uma interface que será usada na class EventRepositoryMongoose e chamamos o método add().

interface EventRepository {

    add(event: Event): Promise<Event>;
}

export { EventRepository };
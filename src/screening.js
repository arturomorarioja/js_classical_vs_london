export class Screening
{
    #availableSeats;
    #ticketPrice;

    constructor(availableSeats, ticketPrice)
    {
        this.#availableSeats = availableSeats;
        this.#ticketPrice = ticketPrice;
    }

    hasAvailableSeats(numberOfSeats)
    {
        return this.#availableSeats >= numberOfSeats;
    }

    reserveSeats(numberOfSeats)
    {
        this.#availableSeats -= numberOfSeats;
    }

    getAvailableSeats()
    {
        return this.#availableSeats;
    }

    getTicketPrice()
    {
        return this.#ticketPrice;
    }
}
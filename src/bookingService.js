export class BookingService
{
    book(screening, numberOfSeats)
    {
        if (!screening.hasAvailableSeats(numberOfSeats))
        {
            return false;
        }

        const price = this.#calculatePrice(screening.getTicketPrice(), numberOfSeats);

        screening.reserveSeats(numberOfSeats);

        return price > 0;
    }

    #calculatePrice(ticketPrice, numberOfSeats)
    {
        return ticketPrice * numberOfSeats;
    }
}
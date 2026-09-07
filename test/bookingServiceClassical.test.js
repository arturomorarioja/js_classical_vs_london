/*
    Classical Approach to Unit Testing

    The unit of behaviour "booking tickets" is tested.
    The public methods in the Screening class are tested via BookingService.book().
*/

import { BookingService } from '../src/bookingService.js';
import { Screening } from '../src/screening.js';

// Positive test
test('booking succeeds when enough seats are available', () =>
{
    const screening = new Screening(10, 20);
    const service = new BookingService();

    const result = service.book(screening, 5);

    expect(result).toBe(true);
    expect(screening.getAvailableSeats()).toBe(5);
});

// Negative test
test('booking fails when not enough seats are available', () =>
{
    const screening = new Screening(10, 20);
    const service = new BookingService();

    const result = service.book(screening, 15);

    expect(result).toBe(false);
    expect(screening.getAvailableSeats()).toBe(10);
});
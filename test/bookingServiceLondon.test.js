/*
    London Approach to Unit Testing

    The different units of code (all public methods) are tested.
    If a public method calls public methods in other classes, the latter are mocked.
*/

import { jest } from '@jest/globals';

import { BookingService } from '../src/bookingService.js';
import { Screening } from '../src/screening.js';

//
// Booking service
//

// Positive test
test('booking succeeds when enough seats are available', () =>
{
    const screening =
    {
        hasAvailableSeats: jest.fn().mockReturnValue(true),
        getTicketPrice: jest.fn().mockReturnValue(20),
        reserveSeats: jest.fn()
    };
    const service = new BookingService();

    const result = service.book(screening, 5);

    expect(result).toBe(true);
    expect(screening.reserveSeats).toHaveBeenCalledTimes(1);
    expect(screening.reserveSeats).toHaveBeenCalledWith(5);
});

// Negative test
test('booking fails when not enough seats are available', () =>
{
    const screening =
    {
        hasAvailableSeats: jest.fn().mockReturnValue(false),
        getTicketPrice: jest.fn(),
        reserveSeats: jest.fn()
    };
    const service = new BookingService();

    const result = service.book(screening, 15);

    expect(result).toBe(false);
    expect(screening.reserveSeats).not.toHaveBeenCalled();
});

//
// Screening
//

test.each([
    [5, true],
    [15, false]
])(
    'checks whether enough seats are available',
    (requestedSeats, expected) =>
    {
        const screening = new Screening(10, 20);

        const result = screening.hasAvailableSeats(requestedSeats);

        expect(result).toBe(expected);
    }
);

test('reserves seats', () =>
{
    const screening = new Screening(10, 20);

    screening.reserveSeats(5);

    expect(screening.getAvailableSeats()).toBe(5);
});

test('returns number of available seats', () =>
{
    const screening = new Screening(10, 20);

    const result = screening.getAvailableSeats();

    expect(result).toBe(10);
});

test('returns ticket price', () =>
{
    const screening = new Screening(10, 20);

    const result = screening.getTicketPrice();

    expect(result).toBe(20);
});
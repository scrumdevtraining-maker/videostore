import {Customer} from "./customer";
import {Movie} from "./movie";
import {Rental} from "./rental";

describe('VideoStore should return', () => {
    const FOREST_GUMP = new Movie('Forest Gump', Movie.REGULAR);
    const AVENGERS = new Movie('Avengers', Movie.NEW_RELEASE);
    const CARS = new Movie('Cars', Movie.CHILDREN);

    const ONE_DAY = 1;
    const TWO_DAYS = 2;
    const FOUR_DAYS = 4;

    let customer: Customer;

    beforeEach(() => {
        customer = new Customer("Christophe");
    });

    it('an empty statement', () => {
        expect(customer.statement())
            .toBe(
                'Rental Record for Christophe\n' +
                'You owed 0.0\n' +
                'You earned 0 frequent renter points \n');
    });

    it('a statement for a regular movie rented one day', () => {
        let regularRental = new Rental(FOREST_GUMP, ONE_DAY);

        customer.addRental(regularRental);

        expect(customer.statement())
            .toBe(
                'Rental Record for Christophe\n\t' +
                'Forest Gump\t2.0\n' +
                'You owed 2.0\n' +
                'You earned 1 frequent renter points \n');
    });

    it('a statement for a regular movie rented four days', () => {
        let regularRental = new Rental(FOREST_GUMP, FOUR_DAYS);

        customer.addRental(regularRental);

        expect(customer.statement())
            .toBe(
                'Rental Record for Christophe\n\t' +
                'Forest Gump\t5.0\n' +
                'You owed 5.0\n' +
                'You earned 1 frequent renter points \n');
    });

    it('a statement for a new release movie rented two days', () => {
        let newReleaseRental = new Rental(AVENGERS, TWO_DAYS);

        customer.addRental(newReleaseRental);

        expect(customer.statement())
            .toBe(
                'Rental Record for Christophe\n\t' +
                'Avengers\t6.0\n' +
                'You owed 6.0\n' +
                'You earned 2 frequent renter points \n');
    })

    it('a statement for a children movie rented two days', () => {
        let childrenRental = new Rental(CARS, TWO_DAYS);

        customer.addRental(childrenRental);

        expect(customer.statement())
            .toBe(
                'Rental Record for Christophe\n\t' +
                'Cars\t1.5\n' +
                'You owed 1.5\n' +
                'You earned 1 frequent renter points \n');
    })

    it('a statement for a children movie rented four days', () => {
        let childrenRental = new Rental(CARS, FOUR_DAYS);

        customer.addRental(childrenRental);

        expect(customer.statement())
            .toBe(
                'Rental Record for Christophe\n\t' +
                'Cars\t3.0\n' +
                'You owed 3.0\n' +
                'You earned 1 frequent renter points \n');
    })

    it('a statement for a all type of movies rented several days', () => {
        let dory = new Movie('Dory', Movie.CHILDREN);
        let carsRental = new Rental(CARS, TWO_DAYS);
        let doryRental = new Rental(dory, FOUR_DAYS);
        let avengersRental = new Rental(AVENGERS, TWO_DAYS);
        let forestGumpRental = new Rental(FOREST_GUMP, FOUR_DAYS);
        let xmen = new Movie('XMen', Movie.REGULAR);
        let xmenRental = new Rental(xmen, ONE_DAY);

        customer.addRental(carsRental);
        customer.addRental(doryRental);
        customer.addRental(avengersRental);
        customer.addRental(forestGumpRental);
        customer.addRental(xmenRental);

        expect(customer.statement())
            .toBe(
                'Rental Record for Christophe\n\t' +
                'Cars\t1.5\n\t' +
                'Dory\t3.0\n\t' +
                'Avengers\t6.0\n\t' +
                'Forest Gump\t5.0\n\t' +
                'XMen\t2.0\n' +
                'You owed 17.5\n' +
                'You earned 6 frequent renter points \n');
    })
});

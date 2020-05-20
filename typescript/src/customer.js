"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var movie_1 = require("./movie");
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
        this._rentals = [];
    }
    Customer.prototype.addRental = function (rental) {
        this._rentals.push(rental);
    };
    Customer.prototype.statement = function () {
        var frequentRenterPoints = 0;
        var totalAmount = 0;
        var result = 'Rental Record for ' + this.name + '\n';
        for (var _i = 0, _a = this._rentals; _i < _a.length; _i++) {
            var each = _a[_i];
            var thisAmount = 0;
            // dtermines the amount for each line
            switch (each.movie.priceCode) {
                case movie_1.Movie.REGULAR:
                    thisAmount += 2;
                    if (each.daysRented > 2) {
                        thisAmount = thisAmount + (each.daysRented - 2) * 1.5;
                    }
                    break;
                case movie_1.Movie.NEW_RELEASE:
                    thisAmount = thisAmount + each.daysRented * 3;
                    break;
                case movie_1.Movie.CHILDREN:
                    thisAmount += 1.5;
                    if (each.daysRented > 3) {
                        thisAmount = thisAmount + (each.daysRented - 3) * 1.5;
                    }
                    break;
            }
            frequentRenterPoints++;
            if (each.movie.priceCode == movie_1.Movie.NEW_RELEASE && each.daysRented > 1) {
                frequentRenterPoints++;
            }
            result += '\t' + each.movie.title + '\t' + thisAmount.toFixed(1) + '\n';
            totalAmount += thisAmount;
        }
        result += 'You owed ' + totalAmount.toFixed(1) + '\n';
        result += 'You earned ' + frequentRenterPoints + ' frequent renter points \n';
        return result;
    };
    return Customer;
}());
exports.Customer = Customer;

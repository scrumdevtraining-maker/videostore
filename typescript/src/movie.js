"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, priceCode) {
        this.title = title;
        this.priceCode = priceCode;
    }
    Movie.REGULAR = 0;
    Movie.NEW_RELEASE = 1;
    Movie.CHILDREN = 2;
    return Movie;
}());
exports.Movie = Movie;

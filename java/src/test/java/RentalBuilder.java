import rental.movie.Movie;
import rental.movie.Rental;

class RentalBuilder {
    private Movie movie;
    private int days;

    public static RentalBuilder aCustomerRents() {
        return new RentalBuilder();
    }

    public RentalBuilder theMovie(Movie movie) {
        this.movie = movie;
        return this;
    }

    public RentalBuilder forADurationOf(int days) {
        this.days = days;
        return this;
    }

    public Rental build() {
        return new Rental(movie, days);
    }
}

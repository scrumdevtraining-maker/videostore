import org.junit.Before;
import org.junit.Test;
import rental.movie.Customer;
import rental.movie.Movie;
import rental.movie.Rental;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class CustomerShould {

    public static final int ONE_DAY = 1;
    public static final int THREE_DAYS = 3;
    public static final int FIVE_DAYS = 5;

    private static final Movie FOREST_GUMP = new Movie("Forest Gump", Movie.REGULAR);
    private static final Movie AVENGERS = new Movie("Avengers", Movie.NEW_RELEASE);
    private static final Movie BABY_BOSS = new Movie("Baby Boss", Movie.CHILDREN);

    private Customer christophe;

    @Before
    public void setUp() throws Exception {
        christophe = new Customer("Christophe THEPAUT");
    }

    @Test
    public void print_statement_for_regular_movie_rented_one_day() {
        Rental aRental = RentalBuilder
                .aCustomerRents()
                .theMovie(FOREST_GUMP)
                .forADurationOf(ONE_DAY)
                .build();

        christophe.addRental(aRental);

        String statement = christophe.statement();

        assertThat(statement, is("Rental Record for Christophe THEPAUT\n\tForest Gump\t2.0\nAmount owed is 2.0\nYou earned 1 frequent retner points"));
    }

    @Test
    public void print_statement_for_regular_movie_rented_three_days() {
        Rental aRental = RentalBuilder
                .aCustomerRents()
                .theMovie(FOREST_GUMP)
                .forADurationOf(THREE_DAYS)
                .build();

        christophe.addRental(aRental);

        String statement = christophe.statement();

        assertThat(statement, is("Rental Record for Christophe THEPAUT\n\tForest Gump\t3.5\nAmount owed is 3.5\nYou earned 1 frequent retner points"));
    }

    @Test
    public void print_statement_for_new_release_movie_rented_one_day() {
        Rental aRental = RentalBuilder
                .aCustomerRents()
                .theMovie(AVENGERS)
                .forADurationOf(ONE_DAY)
                .build();

        christophe.addRental(aRental);

        String statement = christophe.statement();

        assertThat(statement, is("Rental Record for Christophe THEPAUT\n\tAvengers\t3.0\nAmount owed is 3.0\nYou earned 1 frequent retner points"));
    }

    @Test
    public void print_statement_for_new_release_movie_rented_three_days() {
        Rental aRental = RentalBuilder
                .aCustomerRents()
                .theMovie(AVENGERS)
                .forADurationOf(THREE_DAYS)
                .build();

        christophe.addRental(aRental);

        String statement = christophe.statement();

        assertThat(statement, is("Rental Record for Christophe THEPAUT\n\tAvengers\t9.0\nAmount owed is 9.0\nYou earned 2 frequent retner points"));
    }

    @Test
    public void print_statement_for_children_movie_rented_one_day() {
        Rental aRental = RentalBuilder
                .aCustomerRents()
                .theMovie(BABY_BOSS)
                .forADurationOf(ONE_DAY)
                .build();

        christophe.addRental(aRental);

        String statement = christophe.statement();

        assertThat(statement, is("Rental Record for Christophe THEPAUT\n\tBaby Boss\t1.5\nAmount owed is 1.5\nYou earned 1 frequent retner points"));
    }

    @Test
    public void print_statement_for_children_movie_rented_five_days() {
        Rental aRental = RentalBuilder
                .aCustomerRents()
                .theMovie(BABY_BOSS)
                .forADurationOf(FIVE_DAYS)
                .build();

        christophe.addRental(aRental);

        String statement = christophe.statement();

        assertThat(statement, is("Rental Record for Christophe THEPAUT\n\tBaby Boss\t4.5\nAmount owed is 4.5\nYou earned 1 frequent retner points"));
    }

    @Test
    public void print_statement_for_collection_of_movies_rented_several_days() {
        Rental childrenMovieRent = RentalBuilder
                .aCustomerRents()
                .theMovie(BABY_BOSS)
                .forADurationOf(FIVE_DAYS)
                .build();
        christophe.addRental(childrenMovieRent);

        Rental newReleaseMovieRent = RentalBuilder
                .aCustomerRents()
                .theMovie(AVENGERS)
                .forADurationOf(ONE_DAY)
                .build();
        christophe.addRental(newReleaseMovieRent);

        Rental regularMovieRent = RentalBuilder
                .aCustomerRents()
                .theMovie(FOREST_GUMP)
                .forADurationOf(THREE_DAYS)
                .build();
        christophe.addRental(regularMovieRent);

        String statement = christophe.statement();

        assertThat(statement, is("Rental Record for Christophe THEPAUT\n\tBaby Boss\t4.5\n\tAvengers\t3.0\n\tForest Gump\t3.5\nAmount owed is 11.0\nYou earned 3 frequent retner points"));
    }

}

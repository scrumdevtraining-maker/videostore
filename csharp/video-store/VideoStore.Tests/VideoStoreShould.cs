using System;
using Xunit;

namespace VideoStore.Tests
{
    public class VideoStoreShould
    {
        private const int ONE_DAY = 1;
        private const int FOUR_DAYS = 4;

        private Movie FOREST_GUMP = new Movie("Forest Gump", Movie.REGULAR);
        private Movie AVENGERS = new Movie("Avengers", Movie.NEW_RELEASE);
        private Movie CARS = new Movie("Cars", Movie.CHILDREN);

        private Customer customer;

        public VideoStoreShould()
        {
            customer = new Customer("Christophe");
        }

        [Fact]
        public void return_an_empty_statement()
        {
            String result = customer.Statement();
            Assert.Equal(
                "Rental Record for Christophe\n"+
                "You owed 0.0\n"+
                "You earned 0 frequent renter points \n",
                result);
        }

        [Fact]
        public void return_a_statment_for_a_regular_rental()
        {
            Rental regularRental = new Rental(FOREST_GUMP, ONE_DAY);
            customer.AddRental(regularRental);

            String result = customer.Statement();

            Assert.Equal(
                "Rental Record for Christophe\n\t"+
                "Forest Gump\t2.0\n"+
                "You owed 2.0\n"+
                "You earned 1 frequent renter points \n",
                result);
        }

        [Fact]
        public void return_a_statment_for_a_new_release_rental()
        {
            Rental newReleaseRental = new Rental(AVENGERS, ONE_DAY);
            customer.AddRental(newReleaseRental);

            String result = customer.Statement();

            Assert.Equal(
                "Rental Record for Christophe\n\t"+
                "Avengers\t3.0\n"+
                "You owed 3.0\n"+
                "You earned 1 frequent renter points \n",
                result);
        }

        [Fact]
        public void return_a_statment_for_a_children_rental()
        {
            Rental childrenRental = new Rental(CARS, ONE_DAY);
            customer.AddRental(childrenRental);

            String result = customer.Statement();

            Assert.Equal(
                "Rental Record for Christophe\n\t" +
                "Cars\t1.5\n" +
                "You owed 1.5\n" +
                "You earned 1 frequent renter points \n",
                result);
        }

        [Fact]
        public void return_a_statment_for_a_fours_days_regular_rental()
        {
            Rental regularRental = new Rental(FOREST_GUMP, FOUR_DAYS);
            customer.AddRental(regularRental);

            String result = customer.Statement();

            Assert.Equal(
                "Rental Record for Christophe\n\t" +
                "Forest Gump\t5.0\n" +
                "You owed 5.0\n" +
                "You earned 1 frequent renter points \n",
                result);
        }

        [Fact]
        public void return_a_statment_for_a_four_days_children_rental()
        {
            Rental childrenRental = new Rental(CARS, FOUR_DAYS);
            customer.AddRental(childrenRental);

            String result = customer.Statement();

            Assert.Equal(
                "Rental Record for Christophe\n\t" +
                "Cars\t3.0\n" +
                "You owed 3.0\n" +
                "You earned 1 frequent renter points \n",
                result);
        }

        [Fact]
        public void return_a_statment_for_a_four_days_new_release_rental()
        {
            Rental newReleaseRental = new Rental(AVENGERS, FOUR_DAYS);
            customer.AddRental(newReleaseRental);

            String result = customer.Statement();

            Assert.Equal(
                "Rental Record for Christophe\n\t" +
                "Avengers\t12.0\n" +
                "You owed 12.0\n" +
                "You earned 2 frequent renter points \n",
                result);
        }
    }
}

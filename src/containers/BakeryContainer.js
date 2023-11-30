import { useState } from 'react';
import Cake from '../components/Cake';
import victoriaSpongeImage from '../images/victoria_sponge.jpeg';
import teaLoafImage from '../images/tea_loaf.jpeg';
import carrotCakeImage from '../images/carrot_cake.jpeg';


const BakeryContainer = () => {
  const [cakes] = useState([
    {
      cakeName: "Victoria Sponge ",
      ingredients: ["eggs 🥚", "butter 🧈", "sugar 🍬", "self-raising flour 🌅🍚", "baking powder 🧑‍🍳🍚", "milk 🥛"],
      price: 5,
      rating: 5,
      image: victoriaSpongeImage,
    },
    {
      cakeName: "Tea Loaf",
      ingredients: ["eggs 🥚", "oil 🛢️", "dried fruit 🍸🍇", "sugar 🍬", "self-raising flour 🌅🍚", "strong tea ☕️"],
      price: 2,
      rating: 3,
      image: teaLoafImage,
    },
    {
      cakeName: "Carrot Cake",
      ingredients: ["carrots 🥕", "walnuts 🌰", "oil 🛢️", "cream cheese 🍦🧀", "flour 🍚", "sugar 🍬"],
      price: 8,
      rating: 5,
      image: carrotCakeImage,
    }
  ]);

  const [totalSale, setTotalSale] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCakes, setFilteredCakes] = useState([]);

  // function that updates total sales
  const sellCake = (price) => {
    setTotalSale(totalSale + price);
  };


  // function calculate average rating
  const calculateAverageRating = () => {
    const totalRatings = cakes.reduce((total, cake) => total + cake.rating, 0);
    const averageRating = totalRatings / cakes.length;
    return averageRating.toFixed(1);
  };

  // function to search for a cake by name
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // alert if the search term is empty
      alert('Please enter a cake name to search.');
    } else {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filtered = cakes.filter((cake) =>
        cake.cakeName.toLowerCase().includes(searchTermLowerCase)
      );
      setFilteredCakes(filtered);
    }
  };

  // function to get all the cakes in the bakery
  const getAllCakes = () => {
    setFilteredCakes(cakes);
  };

  // function to clear the searched items
  const handleClear = () => {
    setSearchTerm('');
    setFilteredCakes([]);
  }


  return (
    <div>
      <h1>Welcome to the Best Bakes Bakery!</h1>
      <h2>Average Rating: {calculateAverageRating()} ⭐️</h2>
        <div className='searchFunction'>
          <input
            type='text'
            placeholder='Search by cake name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={getAllCakes}>Get All Cakes</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      <p className='totalSale'>Total Sale: £{totalSale}</p>
      <h3>
        {filteredCakes.map((cake) => (
          <Cake key={cake.cakeName} cakeDetails={cake} sellCake={() => sellCake(cake.price)} />
        ))}
      </h3>
        <footer>
          <p>&copy; 2023 Best Bakes Bakery</p>
        </footer>
    </div>
  );
};

export default BakeryContainer;

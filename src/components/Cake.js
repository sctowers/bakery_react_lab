const Cake = ({ cakeDetails, sellCake }) => {
    // destructuring cake details
const { cakeName, ingredients, price, rating, image } = cakeDetails;

const stars = Array(rating).fill('⭐️').join(' ');
const emptyStars = Array(5 - rating).fill('☆').join(' ');

return (
    <div>
        <h3 className="cakeName">{cakeName}</h3>
        <p>Ingredients:</p>
        <ul style={{listStyleType: 'none'}}>
            {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
            ))}
        </ul>
        <p>Price: £{price}</p>
        <p>Rating: {stars} {emptyStars}</p>
        <button onClick={sellCake}>Buy Me!</button>
        <img src={image} alt={cakeName} style={{width: '100%', borderRadius: '25px'}}></img>
        <hr />
    </div>
    );
};

export default Cake;
import { useState } from "react";

const CakeForm = ({ addCake }) => {
    const initialCakeState = {
        cakeName: '',
        ingredients: [],
        price: '',
        rating: '',
        image: '',
    }

    const [newCake, setNewCake] = useState(initialCakeState)

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === 'rating') {
            // ensures rating must be between 1 and 5
            const ratingValue = parseInt(value, 10);
            if (ratingValue >= 1 && ratingValue <= 5) {
                setNewCake({...newCake, [name]: ratingValue})
            }
        } else if (name === 'price') {
            // ensures the price is more than 0
            const priceValue = parseFloat(value)
            if (!isNaN(priceValue) && priceValue > 0) {
                setNewCake({...newCake, [name]: priceValue})
            }
        } else {
            setNewCake({...newCake, [name]: value})
        }

    }

    const handleAddIngredient = () => {
        setNewCake({
            ...newCake,
            ingredients: [...newCake.ingredients, ''],
        });
    };

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = [...newCake.ingredients]
        updatedIngredients.splice(index, 1)
        setNewCake({...newCake, ingredients: updatedIngredients})
    }
    
    const handleIngredientChange = (index, value) => {
        const updatedIngredients = [...newCake.ingredients];
        updatedIngredients[index] = value;
        setNewCake({ ...newCake, ingredients: updatedIngredients });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addCake(newCake);
        setNewCake(initialCakeState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Cake Name:
                <input
                    className="cakeNameInput"
                    placeholder='Add name here'
                    type="text"
                    name="cakeName"
                    value={newCake.cakeName}
                    onChange={handleChange}
                    required
                    />
            </label>
            <hr />
            <label>
                Ingredients:
                <ul>
                    {newCake.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <input
                                placeholder="Add ingredient here"
                                type="text"
                                value={ingredient}
                                onChange={(e) => handleIngredientChange(index, e.target.value)}
                                required
                                />
                                <button type="button" onClick={() => handleRemoveIngredient(index)}>
                                    Remove Ingredient
                                </button>
                        </li>
                    ))}
                </ul>
                <button type="button" onClick={handleAddIngredient}>
                    Add Ingredient
                </button>
            </label>
            <hr />
            <label>
                <hr />
                Price (£):
                <input 
                    placeholder="0.00"
                    type="number"
                    name="price"
                    value={newCake.price}
                    onChange={handleChange}
                    required
                    />
            </label>
            <hr />
            <label>
                Rating ⭐️:
                <input
                    placeholder="?/5"
                    type="number"
                    name="rating"
                    value={newCake.rating}
                    onChange={handleChange}
                    required
                    />
            </label>
            <hr />
            <label>
                Image URL:
                <input
                    placeholder="Optional"
                    type="text"
                    name="image"
                    value={newCake.image}
                    onChange={handleChange}
                    />
            </label>
            <hr />
            <button type="submit">Add Cake</button>
        </form>
    )
}

export default CakeForm;
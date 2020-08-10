import React from 'react';
import PropTypes from 'prop-types';

function Food({name, rating}) {
    return (
        <div>
            <h1>I like {name}</h1>
            <h4>{rating}/5</h4>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        rating: 5
    },
    {
        id: 2,
        name: "Samgyeopsal",
        rating: 4
    },
    {
        id: 3,
        name: "Bibimbap",
        rating: 3
    },
    {
        id: 4,
        name: "Doncasu",
        rating: 2
    },
    {
        id: 5,
        name: "Kimbap",
        rating: "1"
    }
];

function App() {
  return (
      <div className="App">
          {foodILike.map(dish => (
              <Food key={dish.id} name={dish.name} rating={dish.rating} />
          ))}
      </div>

  );
}

export default App;

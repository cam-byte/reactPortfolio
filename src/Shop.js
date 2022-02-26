import React, {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Shop(){

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    }
    const linkStyle = {
      color: 'black'
    }

  return(
    <div>
      {items.map(item => (
        <h1 key={item.name}>
          <Link style = {linkStyle} to={`/shop/${item.name}`}> {capitalizeFirstLetter(item.name)}  </Link>
          </h1>
      ))} 
    </div>      
  );
}

export default Shop;
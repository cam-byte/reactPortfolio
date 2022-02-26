import React, {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop(){

    useEffect(() => {
        fetchItems();
    },[]);

    const [item, setItem] = useState({});

    const fetchItems = async () => {
        const data = await fetch('https://hotels4.p.rapidapi.com/locations/v2/search');
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    }

  return(
    <div>
      {items.map(item => (
        <h1 key={item.IDNation}>
          <Link to={`/shop/${item.IDNation}`}>{item.Population}</Link>
          </h1>
      ))}
    </div>      
  );
}

export default Shop;
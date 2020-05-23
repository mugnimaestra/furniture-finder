import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './components/ProductItem';
import './App.css';

function App() {
  const [furnitures, setFurnitures] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState({
    text: '',
    style: [],
    deliveryTime: [],
  });

  useEffect(() => {
    const getData = async () => {
      await axios.get("https://www.mocky.io/v2/5c9105cb330000112b649af8").then(res => {

        setFurnitures(res.data);
        setFilteredData(res.data.products);
      });
    }
    getData();
  }, [])

  const handleInputSearch = e => {
    const lowerCase = e.target.value.toLowerCase();
    setFilter({ ...filter, text: lowerCase });
    const newFilteredData = furnitures.products.filter(item => {
      return item.name.toLowerCase().includes(lowerCase);
    });
    setFilteredData(newFilteredData);
  }

  const handleCheckBox = e => {
    let newArr = filter.style;
    if (e.target.checked) {
      newArr.push(e.target.name);
      setFilter({ ...filter, style: newArr });
    } else {
      let theIndex = newArr.indexOf(e.target.name);
      if (theIndex > -1) {
        newArr.splice(theIndex, 1);
      }
      setFilter({ ...filter, style: newArr });
    }
  }

  const handleCheckBoxDeliveryTime = e => {
    let newArr = filter.deliveryTime;
    if (e.target.checked) {
      newArr.push(e.target.value);
      setFilter({ ...filter, deliveryTime: newArr });
    } else {
      let theIndex = newArr.indexOf(e.target.value);
      if (theIndex > -1) {
        newArr.splice(theIndex, 1);
      }
      setFilter({ ...filter, deliveryTime: newArr });
    }
  }

  let newFilteredData = filteredData.filter((item) => {
    return item.furniture_style.some((furniStyle) => {
      let isStyleMatch = false;
      if (filter.style.length > 0) {
        filter.style.forEach((stateStyle) => {
          if (stateStyle === furniStyle) {
            isStyleMatch = true;
          }
        });
      } else {
        isStyleMatch = true;
      }
      return isStyleMatch;
    });
  });

  if (filter.deliveryTime.length > 0) {
    const filteredDeliveryData = newFilteredData.filter(item => {
      return filter.deliveryTime.some(furniDeliveryTime => {
        return parseInt(furniDeliveryTime) > parseInt(item.delivery_time);
      })
    });
    newFilteredData = filteredDeliveryData;
  }

  return (
    <div className="App">
      <div className="header-menu">
        <input
          type="text"
          placeholder="Search Furniture"
          onChange={handleInputSearch}
        />
        <div className="flex-container">
          <div className="checkbox-styles">
            {furnitures &&
              furnitures.furniture_styles.map((style) => {
                return (
                  <label key={style} htmlFor={style}>
                    {style}
                    <input
                      type="checkbox"
                      name={style}
                      onChange={handleCheckBox}
                    />
                  </label>
                );
              })}
          </div>
          <div className="delivery-time-dropdown">
            <label>
              1 week
              <input
                onChange={handleCheckBoxDeliveryTime}
                type="checkbox"
                name="oneweek"
                value="7"
              />
            </label>
            <label>
              2 weeks
              <input
                onChange={handleCheckBoxDeliveryTime}
                type="checkbox"
                name="twoweeks"
                value="14"
              />
            </label>
            <label>
              1 month
              <input
                onChange={handleCheckBoxDeliveryTime}
                type="checkbox"
                name="onemonth"
                value="30"
              />
            </label>
            <label>
              2 months
              <input
                onChange={handleCheckBoxDeliveryTime}
                type="checkbox"
                name="twomonths"
                value="60"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="product-container">
        {furnitures &&
          newFilteredData.map((item) => {
            return <ProductItem key={item.name} product={item} />;
          })}
      </div>
    </div>
  );
}

export default App;

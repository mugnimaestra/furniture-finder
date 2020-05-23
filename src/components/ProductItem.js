import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductItemStyle = styled.div`
  width: 330px;
  min-height: 80px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 6px #ccc;
  padding: 0 0.5rem;
  margin: 0 0 1rem 0;
  .title-price {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    span {
      color: #ffa118;
    }
  }
  .description {
    span {
      color: #7aade1;
    }
  }
  .delivery-days {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const parseThousands = (number) => {
  if (typeof number === "number") {
    return `IDR ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  return number;
};

const shortenString = (text, length) => {
  const textLength = length && length > 0 ? length : 114;
  if (text.length <= textLength) {
    return text;
  }
  const result = text.substring(0, textLength);
  return `${result.substring(0, result.lastIndexOf(" "))}...`;
};

const ProductItem = ({ product }) => {

  return (
    <ProductItemStyle>
      <div className="title-price">
        <h3>{product.name}</h3>
        <span>{parseThousands(product.price)}</span>
      </div>
      <div className="description">
        <p>{shortenString(product.description)}</p>
        <span>{product.furniture_style.join(', ')}</span>
      </div>
      <div className="delivery-days">{product.delivery_time} days</div>
    </ProductItemStyle>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
}



export default ProductItem;
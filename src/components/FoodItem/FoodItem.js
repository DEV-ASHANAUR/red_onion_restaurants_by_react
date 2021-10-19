import React from 'react';
import img from '../../assets/lunch/lunch1.png';
const FoodItem = (props) => {
    const {title,description,price,type,image} = props.food;
    return (
        <div class="col">
            <div class="card custom-card">
                <span className='pill-item'>{type}</span>
                <div className='img-wrapper'>
                    <img src={image} class="card-img-top text-center" alt="..." />
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title" style={{fontWeight:'700'}}>{title}</h4>
                    <p class="card-text">{description}</p>
                    <h4 class="card-title" style={{fontWeight:'700'}}>${price}</h4>
                    <button className='order-btn'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
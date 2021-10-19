import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import FoodItem from '../FoodItem/FoodItem';
import './MenuItem.css';

const MenuItem = () => {
    const [menuTab,setMenuTab] = useState('Lunch');
    const [foods] = useFetch();
    const handleMenuTab = (type) => {
        setMenuTab(type);
    }
    const filterData = foods.filter(item => item.type === menuTab)
    // console.log(foods);
    return (
        <div className="container my-5">
            <div className='food-filter py-5'>
                <button className={menuTab === 'Breakfast'?'active-item':''} onClick={()=> handleMenuTab('Breakfast')}>BreakFast</button>
                <button className={menuTab === 'Lunch'?'active-item':''} onClick={()=> handleMenuTab('Lunch')}>Lunch</button>
                <button className={menuTab === 'Dinner'?'active-item':''} onClick={()=> handleMenuTab('Dinner')}>Dinner</button>
            </div>
            <div className="food-item my-5">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        filterData?.map(food => <FoodItem food={food}></FoodItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
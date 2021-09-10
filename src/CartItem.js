import React from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { useGlobalContext } from './context'


const CartItem = ({id, title, price, img, amount}) => {

    const { removeItem, changeAmount } = useGlobalContext()

    return (
        <article className="cart-item">
            <img src={img} alt="" className="item-image" />
            <div className="item-info">
                <h4 className="item-name">{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-button" onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className="item-amount-container">
                <button className="change-amount-button increase-amount" onClick={() => changeAmount(id, "increase")}>
                    <FaChevronUp />
                </button>
                <p className="item-amount">{amount}</p>
                <button className="change-amount-button decrease-amount" onClick={() => changeAmount(id, "decrease")}>
                    <FaChevronDown />
                </button>
            </div>
        </article>
    )

}


export default CartItem

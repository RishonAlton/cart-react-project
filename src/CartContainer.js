import React from 'react'
import { useGlobalContext } from './context'
import CartItem from './CartItem'


const CartContainer = () => {

    const { cart, total, clearCart } = useGlobalContext()

    if(cart.length === 0) {
        return (
            <main className="cart-container">
                <h2 className="main-title">Your Bag</h2>
                <p className="empty-cart-text">is currently empty</p>
            </main>
        )
    }

    return (
        <main className="cart-container">
            <h2 className="main-title">Your Bag</h2>
            <section className="cart">
                {
                    cart.map(item => {
                        return <CartItem key={item.id} {...item} />
                    })
                }
            </section>
            <footer>
                <div className="total-section">
                    <h4>Total</h4>
                    <h4>${total}</h4>
                </div>
                <button className="clear-button" onClick={clearCart}>
                    Clear Cart
                </button>
            </footer>
        </main>
    )

}


export default CartContainer

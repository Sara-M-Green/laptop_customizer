import React, { Component } from 'react';
import CartListItems from '../CartListItems/CartListItems';
import CartTotal from '../CartTotal/CartTotal';

class Cart extends Component {
    render() {        
        return (
          <section className="main__summary">
                <h2>Your cart</h2>
                <CartListItems
                  USCurrencyFormat={this.props.USCurrencyFormat}
                  selected={this.props.selected} />
                <CartTotal 
                  USCurrencyFormat={this.props.USCurrencyFormat}
                  selected={this.props.selected} />
          </section>
        )
    }


}

export default Cart;
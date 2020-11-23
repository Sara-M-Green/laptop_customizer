import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
        
    const total = Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0
    );

        return (
            <section>
                <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {this.props.USCurrencyFormat.format(total)}
                </div>
            </section>
        )
    }
}

export default CartTotal;
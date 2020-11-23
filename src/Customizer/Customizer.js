import React, { Component } from 'react';
import CustomOptions from '../CustomOptions/CustomOptions';

class Customizer extends Component {
    render() {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
                <CustomOptions
                    features={this.props.features}
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    handleUpdate={this.props.handleUpdate}
                />
        </form>
        )
    }  
}

export default Customizer;
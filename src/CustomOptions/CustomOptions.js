import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';

class CustomOptions extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                
                return (
                    <FeatureItem
                        itemHash={itemHash}
                        key={itemHash}
                        item={item}
                        feature={feature}
                        selected={this.props.selected}
                        USCurrencyFormat={this.props.USCurrencyFormat}
                        handleUpdate={this.props.handleUpdate}
                    />
                );
            });
          
                return (
                    <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                    </fieldset>
                );
        });
        
        return (
            <div>
                {features}
            </div>
            
        )
    }
}

export default CustomOptions;
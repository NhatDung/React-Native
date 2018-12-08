import React, { Component } from 'react';
import ProductComponent from '../../../modules/ProductsModule/components/ProductComponent';
export default class ProductsScreen extends Component {
    render() {
        return (
            <ProductComponent navigation={this.props.navigation} />
        );
    }
}




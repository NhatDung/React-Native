import React, { Component } from 'react';
import ProductDetailComponent from '../../../modules/ProductsModule/components/ProductDetailComponent';

export default class ProductsDetailScreen extends Component {
    render() {
        return (
            <ProductDetailComponent navigation={this.props.navigation} />
        );
    }
}

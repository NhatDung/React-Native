import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Star from '../../../components/Star';
import { connect } from 'react-redux';
import { getProducts } from '../actions';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    var id = this.props.product._id;
                    this.props.navigation.navigate('ProductsDetailScreen', { id: id });
                }}
                style={{ height: 150, flexDirection: 'row', paddingTop: 28, padding: 10 }}>
                <View style={{ height: 150, width: 150 }}>
                    <Image source={{ uri: this.props.product.imageUrl }} style={{ height: 150, width: 150 }} />
                </View>
                <View style={{ padding: 4 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        {this.props.product.name}
                    </Text>
                    <View style={{ height: 8 }}></View>
                    <Text>
                        Price: {this.props.product.price}
                    </Text>
                    <View style={{ height: 8 }}></View>
                    <Text>
                        Discount amount: {this.props.product.discount}%
                    </Text>
                    {/* <Star number={this.props.product.rate} /> */}
                </View>
            </TouchableOpacity>
        );
    }
}

class ProductComponent extends Component {
    static navigationOptions = {
        title: 'Home',
        tabBarIcon: <Icon name='home' size={32} />
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
        this.props.getProducts();
        const products = this.props.products
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={this.props.loading}
                            onRefresh={() => { this.props.getProducts() }} />
                    }
                    data={this.props.products}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Product navigation={this.props.navigation} product={item} />}
                />
            </View>
        );
    }
}
// Nối các states vào props (values) của View Component
// Nối các kết quả nhận được
const mapStateToProps = (state) => {
    return ({
        products: state.productsReducer.products,
        loading: state.productsReducer.loading
    })
};
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
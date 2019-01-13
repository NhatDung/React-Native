import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Star from '../../../components/Star';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { getProduct, addToCart } from '../actions'

class ProductDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
        var id = this.props.navigation.state.params.id;
        this.props.getProduct(id);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.props.loading === false && this.props.product &&
                    <Container>
                        {/* <Header /> */}
                        <Button iconLeft light onPress={() => {
                            this.props.navigation.navigate('ProductsScreen', {});
                        }}>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>{this.props.product && this.props.product.name}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={{ uri: this.props.product && this.props.product.imageUrl }} style={{ height: 400, width: 400 }} />
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Text>{this.props.product && this.props.product.name}</Text>
                                    </Left>
                                    <Body>
                                        <Text>Price: {this.props.product && this.props.product.price}$</Text>
                                    </Body>
                                    <Right>
                                        <Star number={this.props.product && this.props.product.rate} />
                                    </Right>
                                </CardItem>
                            </Card>
                            <View style={{ flexDirection: 'row', padding: 24, justifyContent: 'center' }}>
                                <Button rounded success onPress={() => {
                                    this.props.addToCart(this.props.product, 1)
                                }}>
                                    <Text>Add to cart </Text>
                                </Button>
                                <View style={{ width: 28 }}></View>
                                <Button rounded success onPress={() => {
                                    this.props.navigation.navigate('CartScreen', {})
                                }}>
                                    <Text>Go to cart </Text>
                                </Button>
                            </View>
                        </Content>
                    </Container>
                }
            </View>
        );
    }
}
// Nối các states vào props (values) của View Component
// Nối các kết quả nhận được
const mapStateToProps = (state) => {
    return ({
        product: state.productsReducer.product,
        loading: state.productsReducer.loading
    })
};
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
    getProduct: (id) => dispatch(getProduct(id)),
    addToCart: (product, quantity) => dispatch(addToCart(product, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent);
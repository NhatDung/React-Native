import React, { Component } from 'react';
import { Container, Content, SwipeRow, View, Text, Icon, Button } from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions'

class BuyListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Container>
                <Content scrollEnabled={false}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.props.cartItems}
                        renderItem={({ item }) => <SwipeRow
                            rightOpenValue={-75}
                            body={
                                <View>
                                    <Text style={{ paddingLeft: 15 }}>{item.product.name}</Text>
                                    <Text style={{ paddingLeft: 15 }}>{item.product.quantity}</Text>
                                </View>
                            }
                            right={
                                <Button danger onPress={() => { this.props.removeFromCart(item.product._id) }}>
                                    <Icon active name="trash" />
                                </Button>
                            }
                        />}
                    />
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return ({
        cartItems: state.productsReducer.cartItems,
    })
};
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(BuyListComponent);
import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Star extends Component {
    constructor(props) {
        super(props);
        var yellowStar = [];
        var grayStar = [];
        for (var i = 0; i < props.number; i++) {
            yellowStar.push('*');
        }
        for (var j = 0; j < 5 - props.number; j++) {
            grayStar.push('*');
        }
        this.state = {
            yellowStar: yellowStar,
            grayStar: grayStar
        }
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                {
                    this.state.yellowStar.map((item, index) =>
                        <Icon key={index} name="star" style={{ color: '#f1c40f', paddingHorizontal: 1 }} size={20} />)
                }
                {
                    this.state.grayStar.map((item, index) =>
                        <Icon key={index} name="star" style={{ color: '#bdc3c7', paddingHorizontal: 1 }} size={20} />
                    )
                }
            </View>
        );
    }
}

import React, { Component } from 'react';
class Rank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'hi',
            price:90,

        }
    }

    render() {
        return (
            <div>{this.state.name}</div>

        )
    }
}
export default Rank;
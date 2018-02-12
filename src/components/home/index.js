import React, { Component } from 'react';
 
export default class Home extends Component {
    constructor(props) {
        super();
        console.log(props);
    }
    render () {
        return (
            <h2>
                Hi friends
            </h2>
        )
    }
}
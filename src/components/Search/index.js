import React, { Component }  from 'react';

export default class Search extends Component {
    onInputChange(event) {
        console.log(event.target.value);
    };

    render() {
        return (
            <input type="text" onChange={this.onInputChange}/>
        )
    }
};
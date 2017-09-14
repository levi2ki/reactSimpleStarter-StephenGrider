import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    onInputChange(event) {
        
    };

    render() {
        return (
            <input type="text" onChange={this.onInputChange}/>
        )
    }
};
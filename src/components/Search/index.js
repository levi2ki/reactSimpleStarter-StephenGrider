import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    onInputChange = (event) =>{
        this.setState({term: event.target.value})
    };

    render() {
        return (
            <input type="text" value={this.state.term} onChange={this.onInputChange}/>
        );
    }
};
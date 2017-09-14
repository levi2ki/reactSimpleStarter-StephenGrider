import React, {Component} from 'react';

import YTSearch from 'youtube-api-search';

import Search from '../Search';
import VideoList from '../VideoList';


const API_KEY = 'AIzaSyBZUDmae0r-CJ4csCccVVMbHWcM8--7hAY';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};

        YTSearch(
            {key: API_KEY, term: 'surfboards'},
            videos => this.setState({ videos })
        );
    }

    render = () => (
        <div>
            <Search/>
            <VideoList videos={this.state.videos}/>
        </div>
    );
};
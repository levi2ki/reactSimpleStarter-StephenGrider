import _ from 'lodash';
import React, {Component} from 'react';

import YTSearch from 'youtube-api-search';

import Search from '../Search';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';


const API_KEY = 'AIzaSyBZUDmae0r-CJ4csCccVVMbHWcM8--7hAY';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('prank');
    }

    videoSearch(term) {
        YTSearch(
            { key: API_KEY, term: term },
            videos => this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        );
    }

    render = () => {
        const videoSearch = _.debounce(
            (term) => {this.videoSearch(term)},
            300
        );
        return (
        <div>
            <div className="container">
                <Search onSearchChange={ videoSearch }/>
            </div>
            <div className="container">
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        </div>
    )};
};
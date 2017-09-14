import React,{Component} from 'react';
import VideoItem from '../VideoItem';

export default class VideoList extends Component {
    render = () => (

        <ul className="col-md-4 list-group">
            {this.props.videos.map(video => {
                return (
                    <VideoItem key={video.etag} video={video} />
                )
            })}
        </ul>
    );
}
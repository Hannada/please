import React from "react";
import { recieveCurrentUser } from "../../actions/session_actions";
import Welcome  from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"
import VideoIndexContainer from "../video/video_index_container";
import VideoIndexItem from "../video/video_index_items";
import VideoRecs from "../video/video_recs";


class VideoShow extends React.Component {
    constructor(props){
        super(props); 
        // this.state  = {
        //     currentVideo = this.props.video
        // } 
        // this.handleChange = this.handleChange.bind(this); // attempting handlechange 
        // this.updateCurrentVideo = this.updateCurrentVideo.bind(this); 

    }

    componentDidMount(){
        this.props.fetchVideos();                
        this.props.fetchVideo(this.props.match.params.videoId);
    }


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId){
            this.props.fetchVideo(this.props.match.params.videoId)
                .then(this.renderCurrentVideo(this.props.video))
        }
    }

    renderCurrentVideo(video){
        return(
            <video className="main-vid" width="1000" height="550" controls autoPlay>
                <source src={video.vidUrl} type="video/mp4" />
            </video>
        )
    }

    // updateCurrentVideo(e){
    //     debugger
    //     this.props.fetchVideo(e.id)
    //         .then(this.setState({value: e.target.value}))
    // }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }


    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

//     if(this.props.userID !== prevProps.userID) {
//     this.fetchData(this.props.userID);
// }
// Note to attempt using redirect for certain pages later
// else{
//     <Redirect to="/login" />
// }
    

    render(){
        const { video, videos } = this.props;
        if (!video) {
            return null 
        }

        // Having the same video on the page might be confusing it.


        const videosRec = this.props.videos.map(vid => {
            if (this.props.video.id !== vid.id) {


                return (
                    <VideoRecs
                        key={vid.id}
                        video={vid}
                        // onClick = {this.updateCurrentVideo()}
                    />
                );
            }
        });

        // onChange={this.update()} Might be used to invoke?
        return(
            <div className="video-show-main">
                <WelcomeContainer/>
                <div className="show">
                    <div className="vid-info">
                        {/* <video className="main-vid" width="1000" height="550" controls autoPlay>
                            <source src={video.vidUrl} type="video/mp4"/>
                        </video> */}
                        {this.renderCurrentVideo(video)}
                        <div className="vid-title"><img src={window.diceLoginUrl} width="20" height="20" />{video.title}</div>
                        <div className="linebreak"></div>
                        <div> {video.user_name}</div>
                        <div className="vid-description">{video.description}</div>  
                        <div className="linebreak"></div>
                    </div>

                    <div className="sidebar-index">
                        <div className="upnext">Up next</div>
                        {/* <VideoIndexContainer/> */}
                        {videosRec}
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow; 
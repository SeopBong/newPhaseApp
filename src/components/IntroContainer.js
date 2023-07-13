 import './IntroContainer.css';
 import YouTube from 'react-youtube';
 import ReactPlayer from 'react-player'


const IntroContainer = (props) =>{

    return(
        <div className="intro-container">
    
      <ReactPlayer className="player"
      url={"https://www.youtube.com/watch?v=b-0GYIMmm1Q"}
        loop={false}
        playing={false}
        muted={true}
      controls={true}
    />
        </div>
    )
}
export default IntroContainer;
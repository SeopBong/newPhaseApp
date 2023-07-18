import './IntroContainer.css';
import React from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'


const IntroContainer = (props) =>{

 const introWords = [{
   title: "비전검사기를 아직도 고민중이신가요?",
   subtitles: "지금 바로 귀사의 현장에\n뉴페이즈의 비전검사기를 도입하시면 현장을 어떻게 \n변화시킬 수 있는지 한눈에 살펴보세요."
 }];

   return(
       <div className="intro-container">
   
     <ReactPlayer className="player"
     url={"https://www.youtube.com/watch?v=b-0GYIMmm1Q"}
       loop={false}
       playing={false}
       muted={true}
     controls={true}
   />
     <div className='intro-words'>
       {introWords.map((word,index) => (
         <div key={index}>
           <h1 className='intro-title'>{word.title}</h1>
           <pre className='intro-subtitles'>{word.subtitles}</pre>
         </div>
       ))}
     </div>
       </div>
   )
}
export default IntroContainer;
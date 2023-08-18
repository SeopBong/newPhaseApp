import './IntroContainer.css';
import React ,{useState,useEffect}from 'react';
import MainBanners from '../image/Liquid Lens diagram.jpg'

const IntroContainer = (props) =>{

 const introWords = [{
   title: "비전검사기를 아직도 고민중이신가요?",
   subtitles: "지금 바로 귀사의 현장에\n뉴페이즈의 비전검사기를 도입하시면 현장을 어떻게 \n변화시킬 수 있는지 한눈에 살펴보세요."
 }];
  const headWords ="비전검사기를\n아직도 고민중이신가요?"
  const mobileWords = "지금 바로 귀사의 현장에\n뉴페이즈의 비전검사기를 도입하시면 \n현장을 어떻게 변화시킬 수 있는지\n한눈에 살펴보세요.";

  const [showHeadWords, setShowHeadWords] = useState(false);
  const [showMobileWords, setShowMobileWords] = useState(false);

  const handleResize = () => {
    setShowMobileWords(window.innerWidth < 700);
    setShowHeadWords(window.innerWidth < 700);
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


   return(
       <div className="intro-container">
        
        {/* <iframe className='player'
          width="560"
          height="315"
          src="https://www.youtube.com/embed/b-0GYIMmm1Q"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe> */}

        <img className='main-banner' src={MainBanners}></img>

     <div className='intro-words'>
       {introWords.map((word,index) => (
         <div key={index}>
           {/*<h1 className='intro-title'>{word.title}</h1>*/}
           <pre className={showHeadWords? 'intro-title' : ''}>
            {showHeadWords ? headWords: word.title}
           </pre>
          {/*<pre className='intro-subtitles'>{word.subtitles}</pre>*/}
          <pre className={showMobileWords ? 'intro-subtitles' : ''}>
              {showMobileWords ? mobileWords : word.subtitles}
            </pre>

         </div>
       ))}
     </div>
       </div>
   );
};
export default IntroContainer;
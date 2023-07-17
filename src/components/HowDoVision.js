import '../components/HowDoVision.css';
import React,{useState} from 'react';
import ReactDOM from 'react-dom'

//import ImageSrc from '../image/Index_TV.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

import IndexTVImage from '../image/Index_TV.png';
import OKNGImage from '../image/OKNG.jpg';
import InspectionImage from '../image/inspec.jpg';
import VisionScanImage from '../image/vision.png';


const HowDoVision = (props) =>{
    const howWords = [{
        title: "비전검사기로 어떤 것을 할 수 있나요?",
        subtitles: "비전검사는 제품을 촬영하여 영상분석기술을 이용해\n검사하는 장비로 사람 눈으로 구분이 가능한 모든 불량부터\n사람눈으로 어려운 정밀 불량까지 모두 검출할 수 있습니다."
      }];

      const [selectedIcon, setSelectedIcon] = useState(null);
      const [imageSrc, setImageSrc] = useState(null);


    const visionSkills = [
        {
            id: "skills1",
            skills: "불량검증",
            icon: faSquareCheck,
            imageSrc: OKNGImage,
            style: {width: "50%", height: "auto"},
        },
        {
            id: "skills2",
            skills: "치수측정",
            icon: faPenToSquare,
            imageSrc: InspectionImage,
            style: {width: "50%", height: "auto"},

        },
        {
            id: "skills3",
            skills: "정밀확대",
           icon: faMagnifyingGlassPlus,
           imageSrc: VisionScanImage,
           style: {width: "50%", height: "auto"},

        },    
    ];

    const handleIconClick =(icon, src) => {
        setSelectedIcon(icon);
        setImageSrc(src);
      };

    return(
        <div className='how-do-container' >
            {howWords.map((word,index) => (
          <div key={index}>
            <h1 className='how-do-title'>{word.title}</h1>
            <pre>{word.subtitles}</pre>
          </div>
        ))}
            <div className='monitor-img'>
            <img src={IndexTVImage} style={{ width: "100%", height: "auto" }} />
             {imageSrc && (
          <img src={imageSrc}
            style={{
              width: "50%",
              height: "auto",
              position: "absolute",
              top: "calc(50% - 30px)",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        )}
            </div>
            <div className='skill-array' style={{display: "flex"}}>
                {visionSkills.map((item, index)=>
                {
                    const isSelected = selectedIcon === item.icon;
                    
                    return(
                    <div key={item.id} 
                    style={{marginRight: "10px", marginLeft: index !== 0 ? "50px" : 0,}} 
                    onClick={()=>handleIconClick(item.icon, item.imageSrc)}>

                        <FontAwesomeIcon 
                        icon={ item.icon } 
                        size='3x' 
                        style={{color:'rgb(107, 77, 108)', 
                        cursor: 'pointer', 
                        marginBottom: "10px"}}/>
                        <div>{item.skills}</div>
                        
                        </div>
                );
                })}
            </div>
        </div>
    )
}

export default HowDoVision;
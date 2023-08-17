import '../components/HowDoVision.css';
import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom'

//import ImageSrc from '../image/Index_TV.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

import IndexTVImage from '../image/index_Monitor.jpg';
import OKNGImage from '../image/OKNG.jpg';
import InspectionImage from '../image/inspec.jpg';
import VisionScanImage from '../image/vision.png';

const HowDoVision = (props) =>{
    
      const title =  "비전검사기로 어떤 것을 할 수 있나요?";
      const subtitles = "비전검사는 제품을 촬영하여 영상분석기술을 이용해\n검사하는 장비로 사람 눈으로 구분이 가능한 모든 불량부터\n사람눈으로 어려운 정밀 불량까지 모두 검출할 수 있습니다.";
      

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

    const handleIconClick =(icon, imageSrc) => {
        setSelectedIcon(icon);
        setImageSrc(imageSrc);
      };      // 아이콘을 클릭하였을때 이미지가 바뀌는 이벤트

    const handleIconHover = (icon, imageSrc) => {
        setSelectedIcon(icon);
        setImageSrc(imageSrc);
      };        // 아이콘 위에 마우스를 올렸을때 이미지가 바뀌도록
     

    return(
        <div className='how-do-container' >
          <h1 className='head-line'>{title}</h1>
          <pre>{subtitles}</pre>
          <div className='img-container'>
            <img className='monitor-img' src={IndexTVImage}></img>
            {imageSrc && (
                    <img
                      src={imageSrc}
                      className='selected-image'
                      alt='Selected'
                      style={{opacity: imageSrc ? 1: 0}}
                      onMouseLeave={() => setImageSrc(null)} // 이 부분 추가

                    />
                  )}
            </div>

            <div className='icon-sort'>
          {visionSkills.map((item)=>(
            <button key={item.id} 
            className='icon-btn' 
            onClick={()=> handleIconClick(item.icon, item.imageSrc)}
            onMouseEnter={() => handleIconHover(item.icon, item.imageSrc)} // 이 부분 추가

            >
              <FontAwesomeIcon 
              icon={item.icon} 
              size='4x' 
              style={{color:'black'}} 
              />
              <p style={{marginTop:"10px"}}>{item.skills}</p>
            </button>
          ))}
            </div>
        </div>
    )
}

export default HowDoVision;
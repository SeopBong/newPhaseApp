import '../components/HowDoVision.css';
import React from 'react';
import ReactDOM from 'react-dom'

import ImageSrc from '../image/Index_TV.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';



const HowDoVision = (props) =>{
    const howWords = [{
        title: "비전검사기로 어떤 것을 할 수 있나요?",
        subtitles: "비전검사는 제품을 촬영하여 영상분석기술을 이용해\n검사하는 장비로 사람 눈으로 구분이 가능한 모든 불량부터\n사람눈으로 어려운 정밀 불량까지 모두 검출할 수 있습니다."
      }];

    const visionSkills = [
        {
            id: "skills1",
            skills: "불량검증",
            icon: faSquareCheck,
        },
        {
            id: "skills2",
            skills: "치수측정",
            icon: faPenToSquare,
        },
        {
            id: "skills3",
            skills: "정밀확대",
           icon: faMagnifyingGlassPlus,
        },    
    ];

    return(
        <div className='how-do-container'>
            {howWords.map((word,index) => (
          <div key={index}>
            <h1 className='how-do-title'>{word.title}</h1>
            <pre>{word.subtitles}</pre>
          </div>
        ))}
            <div className='monitor-img'>
            <img src={ImageSrc} style={{ width: "70%", height: "auto" }}></img>
            </div>
            <div className='skill-array' style={{display: "flex"}}>
                {visionSkills.map((item, index)=>(
                    <div key={item.id} style={{marginRight: "10px", marginLeft: index !== 0 ? "20px" : 0}}>
                        <FontAwesomeIcon icon={ item.icon } size='3x'/>
                        <div>{item.skills}</div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default HowDoVision;
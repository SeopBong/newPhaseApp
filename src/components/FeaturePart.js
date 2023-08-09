import '../components/FeaturePart.css';
import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import brainImg from '../image/brain.png';

const FeaturePart = () => {
   
  const visionService = [
        {
            id: 'ser1',
            icon: faBrain,
            explanation: '머신러닝 기술 적용',
            addUse: "영상분석 및 검증시 머신러닝 기술을 활용한\n 자체 알고리즘을 활용하여 누구보다 탁월하고 \n완벽한 검증능력을 보여드립니다",
        },
        {
            id: 'ser2',
            icon: faHouseLaptop,
            explanation: 'IOT 서비스 제공',
            addUse: "장비의 사용이력 및 검사결과 등을 실시간으로\n 웹/모바일을 통해 확인 할 수 있도록 IoT \n서비스를 제공해 드립니다",
        },
        {
            id: 'ser3',
            icon: faHandHoldingDollar,
            explanation: '합리적인 가격',
            addUse: "비전검사기가 비싸다는 편견을 버리세요!\n 불필요한 장비 및 라이센스 없이 자체기술로 \n최적의 가격을 선보여 드립니다",
        },
    ]; 
     const words1 = "알파고 AI기술의 기본이 되는 인공신경망 기술은 인간의 두뇌를 흉내내서\n 스스로 학습을 통해 문제 해결능력을 갖게되는 인공지능 알고리즘으로,\n신플렛은 인간처럼 판단하고 학습하며 더욱 완벽한 검증을 하도록\n비전검사기에 인공신경망 기술을 접목하였습니다.";

  const iconAdd = [
    {
      if: "iconAdd1",
      icons: faCircleCheck,
      addExplanation:"고가의 장비를 사용하지 않아도 그 이상의 효과를 보여줍니다",
    },
    {
      if: "iconAdd2",
      icons: faCircleCheck,
      addExplanation:"기존에 검증이 불가능했던 영역에 대하여 광범위한 검증이 가능합니다",
    }
  ]
     
return(
    <div className='vision-service'>
         <div className="icon-container">
        {visionService.map((item, index) => (
          <div
            key={item.id}>
            <FontAwesomeIcon icon={item.icon}
            size={ window.innerWidth <= 900 ? "2x" : "4x"}
            style ={{
                marginBottom: "10px",marginTop:"30px", color: "rgb(107, 77, 108)"
            }} />
            <div className='explan'>{item.explanation}</div>
            <div className='add-use'>{item.addUse.split('\n').map((paragraph, idx) => (<div key={idx}>{paragraph}</div>))}</div>
          </div>
        ))}
      </div>
      <div className='img-container'>
        <img src={brainImg} className='img-brain'></img>
        <div>
        <h1 className='img-container-words'>인공신경망을 아시나요?</h1>
        <pre className='img-container-words-add'>{words1}</pre>
            <div className='icon-add-word'>
              {iconAdd.map((items, idx) => (
                <div key={items.id}>
                  <FontAwesomeIcon icon={items.icons}  size={"x4"} style ={{
                marginBottom: "5px",marginTop:"5px", color: "rgb(107, 77, 108)"
            }} />
            <span className='icon-span-word'>{items.addExplanation}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
     
    </div>
)
}
export default FeaturePart;
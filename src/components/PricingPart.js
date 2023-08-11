import '../components/PricingPart.css';
import React,{useState, useEffect} from 'react';


const PricingPart =(props)=>{
    const contentWord = "비전검사기는 못쓴다는 편견!\n뉴페이즈는 다릅니다!\n더이상 망설이지 마세요!"

    const contentData =[
        {
            id: 'L1',
            title: 'STANDARD',
            subTitle: '기본 검사위주의 단순형',
            price: '2,500 만원',
            data1: '기본적인 검증 알고리즘',
            data2: '수동 로딩/언로딩 방식',
            data3: '카메라 단순 촬영방식 검증',
            data4: '바코드 장비 연계가능',
        },
        {
            id: 'L2',
            title: 'ENTERPRISE',
            subTitle: '정밀 검사용 /IoT 적용타입',
            price: '5,500 만원',
            data1: '기본적인 검증 알고리즘',
            data2: '수동 로딩/언로딩 방식',
            data3: '카메라 단순 촬영방식 검증',
            data4: '바코드 장비 연계가능',
        },
        {
            id: 'L3',
            title: 'DEVELOPER',
            subTitle: '자동화 FA 시스템 주문제작',
            price: '별도견적',
            data1: '기본적인 검증 알고리즘',
            data2: '수동 로딩/언로딩 방식',
            data3: '카메라 단순 촬영방식 검증',
            data4: '바코드 장비 연계가능',
        },
    ]

    return (
        <div className='pricing-container'>
            <p className='content-title'>{contentWord}</p>
            <div className='content-part'>
          
            {contentData.map((item) => (
                    // <div key={item.id} className='content-box'>
                        <div key={item.id} 
                        className={`content-box ${item.id === 'L2' ? 'red-border' : ''}`}>
                        <h3 className='main'>{item.title}</h3>
                        <p>{item.subTitle}</p>
                        <p style={{fontSize:'45px',fontWeight:'bolder'}}>{item.price}</p>
                        <ul>
                            <li>{item.data1}</li>
                            <li>{item.data2}</li>
                            <li>{item.data3}</li>
                            <li>{item.data4}</li>
                        </ul>
                    </div>
                ))}

            </div>
        </div>
         
    )
}

export default PricingPart;
import '../components/Contect.css';
import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contect = () => {

 //스크립트 파일 읽어오기
 const new_script = src => { 
    return new Promise((resolve, reject) => { 
      const script = document.createElement('script'); 
      script.src = src; 
      script.addEventListener('load', () => { 
        resolve(); 
      }); 
      script.addEventListener('error', e => { 
        reject(e); 
      }); 
      document.head.appendChild(script); 
    }); 
  };
  
  useEffect(() => { 
    //카카오맵 스크립트 읽어오기
    const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=aa71aa8e37eeaacd219bfa498ab43ea5');
    
    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => { 
      console.log('script loaded!!!');  
      const kakao = window['kakao']; 
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = { 
          center: new kakao.maps.LatLng(37.406202789920584, 126.69357960350817), //좌표설정
          level: 3 
        }; 
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(37.406202789920584, 126.69357960350817); 
        const marker = new kakao.maps.Marker({ 
          position: markerPosition
        }); 
        marker.setMap(map); 
      });   
    }); 
  }, []);


    const dataList = [
        {
            id:'cont1',
            icon: faPhone,
            useUser: 'CALL US',
            more:'010.8973.0077',
        },
        {
            id:'cont2',
            icon: faComment,
            useUser: 'KAKAO TALK',
            more:'ID: sungmo123',
        },
        {
            id:'cont3',
            icon: faLocationDot,
            useUser: 'ADDRESS',
            more:'인천광역시 남동구\n은청로 4-19,\nc동 201호',
        },
        {
            id:'cont4',
            icon: faEnvelope,
            useUser: 'EMAIL',
            more:'sales@newphase.co.kr',
        },
    ]

    return(
        <div className='contect-container'>
            <h1 className='main-text'>아직도 망설이세요? 일단 문의하세요!</h1>
            <div className='data-container'>
            {dataList.map((item) => (
                <div className='contect-box' key={item.id}>

                    <FontAwesomeIcon icon={item.icon} size='3x' style={{color:'#cb88d8'}} />
                    <p className='use-text'>{item.useUser}</p>
                    <pre className='more-text'>{item.more}</pre>
                </div>
            ))}
            </div>
           <div className='map-container'>
           <div id="map" className="map"/>

           </div>
           <div className='the-end'>© 2023. NEWPHASE. ALL RIGHT RESERVED.</div>
        </div>
    )
}

export default Contect;
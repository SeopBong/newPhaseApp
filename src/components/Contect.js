import '../components/Contect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contect = () => {

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
            more:'인천광역시 남동구 은청로 4-19,\nc동 201호',
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
           
        </div>
    )
}

export default Contect;
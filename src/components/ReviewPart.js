import React,{useState,useEffect} from 'react';
import '../components/ReviewPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';



const ReviewPart = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isEntering, setIsEntering] = useState(true);
    const comment =[        
            {
                commentary:'비전은 에러가 많다는 막연한 불신이 있었는데\n신플렛이 고정관념을 바꿔주었습니다.\n덕분에 단 하나의 불량없이 품질업무를 진행하고 있습니다.',
                from: 'L사 품질차장 - LG전자 협력사',
            },
            {
                commentary:'중국의 IT기술이 한국보다 뛰어나다고 생각했는데,\n신플렛의 알고리즘에 큰 감명을 받았습니다.\n타 업체에서 불가능하다는 검증을 해결해 주었습니다.',
                from: 'V사 공장장 - 중국상해 제조업',
            },
            {
                commentary:'그동안 여러 업체의 비전검사기를 사용해 보았으나,\n신플렛의 장비는 저렴한 가격에 월등한 성능을 보여주기에\n현재는 신플렛만 지속적으로 거래하고 있습니다.',
                from: 'A사 생산부장 - 삼성 SDI 협력사',
            },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setIsEntering(false);
          setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % comment.length);
            setIsEntering(true);
          }, 500); // 애니메이션 종료 후 0.5초 딜레이
        }, 3000);
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <div className='review-container'>
           {comment.map((comment, index) => (
        <div
        key={index}
        className={`slide ${index === activeIndex ? 'active' : ''} ${isEntering ? 'enter' : 'leave'}`}
        >
          <FontAwesomeIcon icon={faCommentDots} size="4x" className="icon" />
          <p className="comment">{comment.commentary}</p>
          <p className="from">{comment.from}</p>
        </div>
      ))}
            </div>
    );
};
export default ReviewPart;
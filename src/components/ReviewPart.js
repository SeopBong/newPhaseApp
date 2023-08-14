import React,{useState,useEffect} from 'react';
import '../components/ReviewPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';



const ReviewPart = (props) => {
    const [selectedCommentIndex, setSelectedCommentIndex] = useState(0);

    const comment =[        
            {
                id:'c1',
                commentary:'블라블라\n 그리고 또 무슨 말을 넣고\n sdj브루ㅜ후후ㅜㅎ',
                icon: faCommentDots,
                from: 'L사 품질차장 - LG전자 협력사',
            },
            {
                id:'c2',
                commentary:'블라블라\n 그리고 또 무슨 말을 넣고\n sdj브루ㅜ후후ㅜㅎ',
                icon: faCommentDots,
                from: 'L사 품질차장 - LG전자 협력사',
            },
            {
                id:'c3',
                commentary:'블라블라\n 그리고 또 무슨 말을 넣고\n sdj브루ㅜ후후ㅜㅎ',
                icon: faCommentDots,
                from: 'L사 품질차장 - LG전자 협력사',
            },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedCommentIndex((prevIndex) =>
                prevIndex === comment.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='review-container'>
           


            {comment.map((item, index) => (
                <div
                    key={item.id}
                    className={`comment-item ${
                        index === selectedCommentIndex ? 'selected slide-animation' : ''
                    }`}
                >
                    <FontAwesomeIcon icon={faCommentDots} size="4x" />
                    <pre style={{marginTop:'20px', fontSize:'20px'}}>{item.commentary}</pre>
                    <p style={{fontWeight:'bold'}}>{item.from}</p>
                </div>
            ))}
            </div>
    );
};
export default ReviewPart;
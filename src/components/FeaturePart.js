import '../components/FeaturePart.css';
import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';


const FeaturePart = () => {
    const visionService = [
        {
            id: 'ser1',
            icon: faBrain,
            explanation: '첫번째서비스는....',
        },
        {
            id: 'ser2',
            icon: faBrain,
            explanation: '두번째서비스는....',
        },
        {
            id: 'ser3',
            icon: faBrain,
            explanation: '세번째서비스는....',
        },
    ];
    const [activeService, setActiveService] = useState(visionService[0]);
    const handleServiceHover = (service) => {
        setActiveService(service);
      };


return(
    <div className='vision-service'>
         <div className="icon-container">
        {visionService.map((item, index) => (
          <div
            key={item.id}
            className={`icon ${activeService.id === item.id ? 'active' : ''}`}
            onMouseEnter={() => handleServiceHover(item)}
          >
            <FontAwesomeIcon icon={item.icon}
            size={"3x"}
            style ={{
                marginBottom: "10px",marginTop:"30px"
            }} 
            />
          </div>
        ))}
      </div>
      <div className="explanation">
        <span>{activeService.explanation}</span>
      </div>
    </div>
)
}
export default FeaturePart;
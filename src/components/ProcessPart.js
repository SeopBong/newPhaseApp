import './ProcessPart.css';
import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const ProcessPart = () => {
    const processApps = [
        {
            id: 'app1',
            icon: faMagnifyingGlass,
            title: "불량유형 파악 및\n검사장비 컨셉 제안",
            onTitle: "불량유형 파악 및 검사장비 컨셉 제안",
            addExplanation: "업체에서 방문 요청시 제조업 현장에 이해도가 높은 현장 경험자를 통해\n개별 업체들의 불량 유형을 정확하게 파악하고 검사하시고자 하는 목적에 최대한 부합 할 수 있는\n최적의 검사장비를 제안해 드리고 있습니다.",
        },
        {
            id: 'app2',
            icon: faDesktop,
            title: "장비설계 및\n전용 알고리즘 구성",
            onTitle: "장비설계 및 전용 알고리즘 구성",
            addExplanation: "업체에서 방문 요청시 제조업 현장에 이해도가 높은 현장 경험자를 통해\n개별 업체들의 불량 유형을 정확하게 파악하고 검사하시고자 하는 목적에 최대한 부합 할 수 있는\n최적의 검사장비를 제안해 드리고 있습니다.",
        },
        {
            id: 'app3',
            icon: faUserGear,
            title: "시운전 및\n현장 디버깅 실시",
            onTitle: "시운전 및 현장 디버깅 실시",
            addExplanation: "업체에서 방문 요청시 제조업 현장에 이해도가 높은 현장 경험자를 통해\n개별 업체들의 불량 유형을 정확하게 파악하고 검사하시고자 하는 목적에 최대한 부합 할 수 있는\n최적의 검사장비를 제안해 드리고 있습니다.",
        },
        {
            id: 'app4',
            icon: faCloudArrowUp,
            title: "클라우드를 활용한\n사후관리 서비스",
            onTitle: "클라우드를 활용한 사후관리 서비스",
            addExplanation: "업체에서 방문 요청시 제조업 현장에 이해도가 높은 현장 경험자를 통해\n개별 업체들의 불량 유형을 정확하게 파악하고 검사하시고자 하는 목적에 최대한 부합 할 수 있는\n최적의 검사장비를 제안해 드리고 있습니다.",
        },]

        const [selectedId, setSelectedId] = useState(null);

        const handleButtonClick = (id) => {
            // 클릭된 버튼의 id를 상태에 저장합니다.
            setSelectedId(id === selectedId ? null : id);
        };

    return (
        <section className="process-section">
      <div className="process-container">
        {processApps.map((item, index) => (
          <div key={item.id} className="process-item">
            <div className="circular-button-container">
            <button
              className={`circular-button ${selectedId === item.id ? 'selected' : ''}`}
              onClick={() => handleButtonClick(item.id)}
            >
              <FontAwesomeIcon icon={item.icon} size={'2x'} style={{color:'rgb(107, 77, 108)'}} />
              <h1 className="title-container">{selectedId === item.id ? item.onTitle : item.title}</h1>
            </button>
            {index < processApps.length - 1 && <div className="dot-line"></div>}
            </div>
            {selectedId === item.id && (
              <div className="explanation-container">{item.addExplanation}</div>
            )}
          </div>
        ))}
      </div>
    </section>
)};

export default ProcessPart;
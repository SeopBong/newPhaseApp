import './ProcessPart.css';
import React,{useState, useEffect} from 'react';
import ProcessExp from '../components/ProcessExp';
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
            addExplanation: "설계경험이 풍부한 전담팀에 의해 업체별 맞춤 장비설계에 들어가며\n불량검증 알고리즘 또한 획일화된 범용프로그램이 아닌 검증제품에 맞춘 전용 알고리즘을 적용하여\n장비의 검사 신뢰도를 높이고 있습니다.",
        },
        {
            id: 'app2',
            icon: faDesktop,
            title: "장비설계 및\n전용 알고리즘 구성",
            onTitle: "장비설계 및 전용 알고리즘 구성",
            addExplanation: "장비 투입전 충분한 테스트를 거침에도 불구하고\n현장에서 발생할 수 있는 만약의 상황에 대비하여 시운전 이후 지속적인 현장 디버깅을 실시하여\n고객의 만족도를 높이고 있습니다.",
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
            addExplanation: "신플렛의 모든 장비는 IoT 시스템이 적용되어 장비투입 이후\n자체적으로 보유하고 있는 클라우드 서버를 활용하여 장비의 사용여부 및 불량 유형분석 등\n지속적인 사후관리 서비스를 제공하고 있습니다.",
        },]
        const [selectedId, setSelectedId] = useState(null);
        const [selectedExplan, setSelectedExplan] = useState(null);

        const handleButtonClick = (id,addExplanation) => {
          setSelectedId(id === selectedId ? null : id);
          setSelectedExplan(id === selectedId ? null : addExplanation)
        };

    return (
        <section className="process-section">
      <div className="process-container">
      
        {processApps.map((item, index) => {
           const titleLines = item.title.split('\n');
           
          return (
            <div
              key={item.id}
              className={`circular-button ${selectedId === item.id ? 'selected' : ''}`}
              onClick={() => handleButtonClick(item.id, item.addExplanation)} // 가지고 올 아이템을 더 가져와서 뿌려주는게 핵심
            > 
            <FontAwesomeIcon
              icon={item.icon} 
              size='3x'
              style={{color:'#fff', 
                cursor: 'pointer', 
                marginBottom: "15px",marginTop:"15px"}} 
              />
              <div className='title-words'>
              {titleLines.map((line, index) => (
                    // 각 줄의 내용을 span 태그로 감싸서 줄바꿈 처리
                    <span key={index}>
                      {line}
                      {index !== titleLines.length - 1 && <br />}
                    </span>
                  ))}
              </div>
            </div>
        
          );
        })}
      </div>

      {selectedExplan && (
        <div className='another'>
          <ProcessExp addExplanation={selectedExplan} />
        </div>
        )}
    </section>
)};

export default ProcessPart;
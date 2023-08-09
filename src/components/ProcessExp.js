import React,{useState, useEffect} from 'react';
import '../components/ProcessExp.css';

const ProcessExp = (props) =>{
    const { addExplanation } = props; // selectedExplan으로부터 explanation 속성 받기
    const {onTitle} = props;

    return(
        <div className='explan-container'>
          <div className='title'>
            <p>{onTitle}</p>
          </div>
      <div className='Exp'>
        <p> {addExplanation}</p>
      </div>
    </div>
  );
}
export default ProcessExp;
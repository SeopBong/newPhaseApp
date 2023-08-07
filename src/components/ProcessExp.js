import React,{useState, useEffect} from 'react';
import '../components/ProcessExp.css';

const ProcessExp = (props) =>{
    const { explanation } = props; // selectedExplan으로부터 explanation 속성 받기

    return(
        <div className='explan-container'>
      <div className='Exp'>{explanation}</div>
      
    </div>
  );
}
export default ProcessExp;
import './Results.scss';
import { useEffect, useRef } from 'react';


function Results(props) {
  const taskName = props.taskName
  const result = props.result
  const ref = useRef(null);

  const scrollToElement = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToElement();
  }, []);
  return (
  
      
    <div ref={ref} className="result-wrapper">

      <p className="result-wrapper__task-name"> {taskName} </p>

      <p className="result-wrapper__result"> {result} </p>

        </div>

   
  );
}

export default Results;

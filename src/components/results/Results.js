import './Results.scss';


function Results(props) {
  const taskName = props.taskName
  const result = props.result


  return (
  
      
    <div  className="result-wrapper">

      <p className="result-wrapper__task-name"> {taskName} </p>

      <p className="result-wrapper__result"> {result} </p>

        </div>

   
  );
}

export default Results;

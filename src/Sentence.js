import './Sentence.scss';
function Sentence(props) {
const line = props.line
  return (
  
      <p className="chat-bot__message">{line}</p>
   
  );
}

export default Sentence;

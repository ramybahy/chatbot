import './Sentence.scss';

function Sentence(props) {
  const line = props.line
  const type = props.type

  return (
  
      <p className={type==="current task" ? "chat-bot__message chat-bot__message--current-task ":"chat-bot__message"}>
        {type==="current task" ? "" : "added task: "}
        {line}</p>
  );
}

export default Sentence;

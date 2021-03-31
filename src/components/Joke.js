import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <div>
      {/* If there's no question passed through props, display: none (the 1st paragraph will not show up.) */}
      <p style={{ display: !props.setup.question && 'none' }} className="cmp-joke__question">Question: {props.setup.question}</p>
      <p className="cmp-joke__punchline">Punchline: {props.setup.punchline}</p>
      <hr />
    </div >
  )
}

export default Joke
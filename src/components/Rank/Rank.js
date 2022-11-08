import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="white f2">
      <div>
        {`${name}, you pressed the submit button ...`}
      </div>
      <div>
        {`${entries}`}
      </div>
    </div>
  )
}

export default Rank;
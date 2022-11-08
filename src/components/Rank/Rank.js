import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="black f2">
      <div>
        {`${name}, the number of examined images is ...`}
      </div>
      <div className="f1">
        {`${entries}`}
      </div>
    </div>
  )
}

export default Rank;
import React from 'react';

function IdCard(props){  
  return(
  <div>
      <p>{props.fullName}</p>
      <p>{props.gender}</p>
      <p>{props.birthday}</p>
      <img src={props.picture} />
    </div>
  )
}

// Your code here



// Remember to export your component
export default IdCard

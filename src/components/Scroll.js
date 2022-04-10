import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '4px solid black',overflow:'hidden'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
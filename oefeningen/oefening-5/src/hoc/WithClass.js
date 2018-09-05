import React from 'react';

const withClass = (props) => (
  <div className={props.classes}>
    {props.childer}
  </div>
);

export default withClass;
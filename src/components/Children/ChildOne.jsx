import React from 'react';

const ChildOne = (props) => {
    console.log(props)
    return (
    <div>
        <div>{`I am `}</div>
        <div>Hello</div>
    </div>
     );
}
 
export default ChildOne;
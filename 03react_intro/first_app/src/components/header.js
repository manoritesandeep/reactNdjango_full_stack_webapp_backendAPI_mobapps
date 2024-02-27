import React from 'react';

function Header(props) {
    return (
        <React.Fragment>
            <h1>Prop1 Header: {props.info} </h1>
            <h2>Prop2 Header Num: {props.num} </h2>
        </React.Fragment>
        )
}

// function Header() {
//     return <h1>This is the Header component</h1>
// }

export default Header;
import React from 'react'


const divStyle = {
    textAlign: 'center',
    padding:'1em',
    backgroundColor: '#1a98f9',
    color:'white'
}
const Header=props=>{
    return <h1 style={divStyle}>{props.title}</h1>
}

export default Header;

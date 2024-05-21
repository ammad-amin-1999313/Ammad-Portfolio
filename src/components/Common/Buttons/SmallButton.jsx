import React from 'react'

const SmallButton = ({children,onClick,className}) => {
  return (
    <button onClick={onClick} className={className} style={{color:'white',padding:'2px 20px',}}  >
      {children}
    </button>
  )
}

export default SmallButton

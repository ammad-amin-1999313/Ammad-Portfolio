import React from 'react'

const LargeButton = ({children,onClick,className}) => {
  return (
    <button onClick={onClick} className={className}  style={{border:'2px solid #C778DD',color:'white',padding:'4px 14px',}} >
      {children}
    </button>
  )
}

export default LargeButton

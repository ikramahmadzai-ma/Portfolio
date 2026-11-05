import React from 'react'

const Button = ({styles}) => {
  return (
    <div>
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-md hover:bg-gradient outline-none ${styles}`}>Get Started</button>
    </div>
  )
}

export default Button

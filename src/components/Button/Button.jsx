import React from 'react'
import styles from './Button.module.css'


const Button = ({icon, isOutline, text, ...rest}) => {

  return (
    <div>
      {/* isOutline adds border when true makes bg transparent */}
      <button {...rest} className={`${isOutline ? styles.outline_button : styles.primary_button}`}> 
        {icon}
        <span>{text}</span>
      </button>
    </div>
  )
}

export default Button
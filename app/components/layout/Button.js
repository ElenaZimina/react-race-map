import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({text, icon, type, onClick}) => {
  return (
    <button className={`popup-button popup-button--${type}`} onClick={onClick}>
      {text}
      {icon && <img src={icon} width='15px' height='14px' />}
    </button>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

import React from 'react'
import './style.css';

export const Title = ({title, custom_class = ''}) => {
  return (
    <h1 className={'title ' + custom_class}>
        {title}
        <div></div>
    </h1>
  )
}

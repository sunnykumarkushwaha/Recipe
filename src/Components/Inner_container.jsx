import React from 'react'
import style from './Inner_container.module.css'
const Inner_container = ({children}) => {
  return (
    <div className={style.Inner_container}>{children}</div>
  )
}

export default Inner_container
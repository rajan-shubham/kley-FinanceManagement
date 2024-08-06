import React from 'react'
import style from './SlideOption.module.css'

export default function SlideOption({ name, icons: Icon }) {
  return (
    <div className={`${style.dashBord}`} >
      <div>
        <Icon style={{ width: '1.4vw', height: '1.5vw' }} />
      </div>
      <a className={`${style.dashBord_Name}`}  >{name}</a>

    </div>
  )
}

// export default SlideOption

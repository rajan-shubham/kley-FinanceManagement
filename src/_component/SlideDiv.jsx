import React from 'react'
import style from './SlideDiv.module.css'

function SlideDiv({ number, name, icons: Icon }) {
  return (

    <div className={`${style.dashBord}`}  >
      <div className={`${style.dashBord_laout}`}   >
        <div>
          <Icon style={{ width: '1.3vw', height: '1.4vw' }} />

        </div>
        <a className={`${style.dashBord_names}`}  >{name}</a>
      </div>
      <div className={`${style.NumberDiv}`}  >
        <a className={`${style.dashBordNo}`}   >{number}</a>
      </div>
    </div>

  )
}

export default SlideDiv

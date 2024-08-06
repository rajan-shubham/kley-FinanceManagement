import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdInbox } from "react-icons/md";
import { RiExpandUpDownLine } from "react-icons/ri";
import SlideOption from './SlideOption';
import { IoCardOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import { HiHomeModern } from "react-icons/hi2";
import { GrAnnounce } from "react-icons/gr";
import { TbPackageExport } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import SlideDiv from './SlideDiv';
import { MdOutlineSettings } from "react-icons/md";
import { VscStopCircle } from "react-icons/vsc";
import { FcRules } from "react-icons/fc";

import style from './DashBoard.module.css'

function DashBoard() {
  return (
<>
  {/* nav of dashbord */}
      <div className={`${style.dash_heading}`} >
        <div className={`${style.logo}`}  >
          <div className={`${style.logo}`}  >
            <div className={`${style.logo1}`}  ></div>
            <div className={`${style.logo2}`}  ></div>
          </div>
          <a className={`${style.kley}`}  >kley.</a>

        </div>
        <div>
          <MdOutlineSpaceDashboard style={{ width: '19px', height: '27px' }} />

        </div>
      </div>

      {/* dashbored other */}
      <div className={`${style.horizental_div}`}  ></div>

      {/* image */}
      <div className={`${style.admin_section}`}  >

        <div className={`${style.auth_detail}`}  >
          <div className={`${style.logo}`} >
            <img className={`${style.img_auth}`} src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" alt="" />
            <div className={`${style.auth_name}`} >
              <a className={`${style.auth_name1}`} >Hidaytama Irsada</a>
              <div className={`${style.logo}`}  >
                <MdInbox style={{ width: '1.2vw', height: '1.1vw' }} />
                <a style={{ fontSize: '1.4rem', fontWeight: '100' }}>Tokomedia</a>
              </div>
            </div>
          </div>
          <RiExpandUpDownLine style={{ width: '1vw', height: '1.2vw' }} />
        </div>
      </div>
      {/* 2nd line */}
      <div className={`${style.horizental_line2}`}  ></div>

      <div className={`${style.dash_option}`}  >
        <br></br>
        <a className={`${style.division1}`}  >General</a>
        <SlideOption name='Overview' icons={MdOutlineSpaceDashboard} />
        <SlideOption icons={IoCardOutline} name='My cards' />
        <SlideOption name=' Transfer' icons={FaArrowRightArrowLeft} />
        <SlideOption name="Transactions" icons={FcRules} style={{ backgroundColor: "blue",fontWeight: '1000'}} />        
        <SlideDiv name='Payments' icons={FaHandHoldingUsd} number={12} />
        <SlideOption name='Exchange' icons={RiExchangeDollarLine} />

        <br></br>

        <a className={`${style.division2}`}  >Industry</a>


        <SlideOption name='Manufacturing' icons={HiHomeModern} />
        <SlideDiv name='Marketing' icons={GrAnnounce} number={135} />
        <SlideOption name='Export / Import' icons={TbPackageExport} />

        <br></br>
        <a className={`${style.division3}`}  >Product</a>



        <SlideOption name='Debit cards' icons={IoCardOutline} />
        <SlideOption name=' Foreign exchange' icons={RiExchangeDollarLine} />
        <SlideOption name='Multi currency account' icons={MdPeopleOutline} />

<div style={{position:'absolute',bottom:'2.5rem'}}>
<SlideOption name='Settings' icons={MdOutlineSettings} />
<SlideOption name='Help center' icons={VscStopCircle} />
<div style={{padding:'.5vw',backgroundColor:'black',borderRadius:'.5vw',marginTop:'4px',marginBottom:'1vw',width:'84%'}}>
<div style={{display:'flex'}}>
<div style={{alignSelf:'self-start'}}>
  <div className={`${style.logo}`}> 
<div className={`${style.logo3}`}  ></div>
<div className={`${style.logo4}`}  ></div></div>
</div>
<div style={{display:'flex',alignItems:'start',flexDirection:'column',paddingLeft:'.5vw'}}>
<a  className={`${style.auth_name2}`} style={{color:'white'}}>Get full access</a>
<a style={{fontSize:'.84rem',color:'white',width:'84%'}}>Experience Full Financial
Insights
</a>
<div style={{display:'flex',alignItems:'center'}}>
<a style={{fontSize:'.9rem',color:'white',paddingTop:'.5vw'}}>Request here ›</a>
</div>
</div>

</div>
</div>
</div>
      </div>

    </>
  )
}

export default DashBoard

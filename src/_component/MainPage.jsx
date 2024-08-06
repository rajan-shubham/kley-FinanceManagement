"use client"
 import React, { useRef } from 'react'
import CardSection from './CardSection';
import TableSection from './TableSection';
import { PiCardsThree } from "react-icons/pi";
import style from './MainPage.module.css'
import { LuSend } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

function MainPage() {

  return (
    <div style={{  margin:'auto',position:'absolute',top:'0',left:'16vw',width:'82%' }}>
      <div className={`${style.MainPgae}`} style={{paddingLeft:'3rem'}} >
        {/* nav part */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className={`${style.mainHeading}`}  >
            <a className={`${style.Transactions}`}  >Transactions</a>
            <a className={`${style.review}`}  >Review and manage all your money transfers in one place</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid black', padding: '3px 6px', borderRadius: '.5vw' }}>
              <LuSend style={{ width: '1vw', height: '.8vw' }} />
              <a style={{ fontSize: '1.3rem', fontWeight: '600', marginLeft: '.5rem' }}>Request Money</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid black', padding: '3px 8px', borderRadius: '.5vw', marginLeft: '1.3rem', backgroundColor: 'black' }}>
              <IoIosAddCircleOutline style={{ width: '1vw', height: '.8vw', color: 'white' }} />
              <a style={{ fontSize: '1.2rem', fontWeight: '500', marginLeft: '.5rem', color: 'white' }}>Add Funds</a>
            </div>
          </div>
        </div>

        <div className={`${style.route_option}`}  >
          <a className={`${style.routers}`}  >Overview</a>
          <div className={`${style.router1}`}  ><a>Transactions</a> <span style={{ width: '4vw ', height: '3px', backgroundColor: 'blue', }}></span> </div>
          <a className={`${style.routers}`} >Cards</a>
          <a className={`${style.routers}`}  >Recurring transactions</a>

        </div>


        <div style={{
          padding: '2vw', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',  

        }}>
          {/* input */}
          <div className={`${style.MainPage_input}`}  >

            <div className={`${style.seletct_option}`}  >
              <PiCardsThree style={{ width: '1vw', height: '.8vw' }} />
              <select className={`${style.verious_options}`} name="" id=""  >
                <option value="">All categories</option>
                <option value="">All categories</option>
                <option value="">All categories</option>
                <option value="">All categories</option>

              </select>
            </div>
            <div className={`${style.horidental_line}`}  ></div>
            <input className={`${style.search_input}`} type="text" placeholder='Search' />
            <FiSearch style={{ width: '1.8vw', height: '1.8vw', marginRight: '2.4rem' }} />
          </div>
 


          {/* // card and transition grid */}
          <div className={`${style.Main_grid}`}  >
            {/* for cards sections */}
            <CardSection />
            {/* for trensition sections */}
            <TableSection />

          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage

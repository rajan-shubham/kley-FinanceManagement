import Image from "next/image";
import styles from "./page.module.css";
import DashBoard from "@/_component/DashBoard";
import MainPage from "@/_component/MainPage";

export default function Home() {
  return (
    <div style={{width:'100%',}} className='maxwidthdiv'> 
      <div className='grid-container'>
         <div className='dashBoard' style={{width:'14%',paddingLeft:'1.2rem',paddingRight:'1,rem',minHeight:'99vh'}} >
            <DashBoard />
         </div>

         <div className='Mainpagecss'  >
            <MainPage />

         </div>
      </div>
      </div>
  );
}

import React from 'react';
import { BsBriefcase, BsDownload, BsCheck2 } from "react-icons/bs"
import { BiTime } from "react-icons/bi"
import { MdOutlineDeleteForever } from "react-icons/md"
import "./Dashboard.css"
import Navbar from '../../Navbar';
const Dashboard = () => {
    
    return (



        <div>
            <Navbar/>
        </div>
        // <div>
            
        //     <section className='top-sec-admin'>
        //     <h2 className=''>Statistics</h2>
        //         <div className='top-sec-all-card-container'>
                
        //         <div className='top-sec-card-container'>
        //             <div>
        //                 <BsBriefcase className='dash-top-icon' />
        //             </div>
        //             <div className='top-sec-card-info'>
        //                 <h4 className='dash-top-title'>Jobs Posted</h4>
        //                 <p className='dash-top-desc'>348</p>
        //             </div>
        //         </div>
        //         <div className='top-sec-card-container'>
        //             <div>
        //                 <BsBriefcase className='dash-top-icon' />
        //             </div>
        //             <div className='top-sec-card-info'>
        //                 <h4 className='dash-top-title'>Application submitted</h4>
        //                 <p className='dash-top-desc'>2348</p>
        //             </div>
        //         </div>
        //         <div className='top-sec-card-container'>
        //             <div>
        //                 <BsBriefcase className='dash-top-icon' />
        //             </div>
        //             <div className='top-sec-card-info'>
        //                 <h4 className='dash-top-title'>Shortlisted Candidates</h4>
        //                 <p className='dash-top-desc'>120</p>
        //             </div>
        //         </div>
        //         <div className='top-sec-card-container'>
        //             <div>
        //                 <BsBriefcase className='dash-top-icon' />
        //             </div>
        //             <div className='top-sec-card-info'>
        //                 <h4 className='dash-top-title'>Reviews</h4>
        //                 <p className='dash-top-desc'>58</p>
        //             </div>
        //         </div>
                
        //         </div>

        //     </section>

        //     <section className='recent-application-section'>
        //         <h2 className='recent-application-section-title'>Recent Applications</h2>

        //         <div className='recent-application-card-container'>
        //             <div>
        //                 <p className='user-name-recent'>@ali_rehman</p>
        //                 <h4 className='job-title-recent'>Junior Graphic Designer (Web)</h4>
        //                 <div className='recent-application-applied-date'>
        //                     <BiTime className='time-icon-recent'/>
        //                     <p className='recent-application-desc'>Applied date: December 21, 2022</p>
        //                 </div>
        //             </div>
        //             <div className='recent-application-icons-container'>
        //                 <span className='icon-recent-application'><BsCheck2 /></span>
        //                 <span className='icon-recent-application'><BsDownload /></span>
        //                 <span className='icon-recent-application'><MdOutlineDeleteForever /></span>
        //             </div>
        //         </div>
        //         <div className='recent-application-card-container'>
        //             <div>
        //                 <p className='user-name-recent'>@baberawan</p>
        //                 <h4 className='job-title-recent'>Senior Node Js Developer (Web)</h4>
        //                 <div className='recent-application-applied-date'>
        //                     <BiTime className='time-icon-recent'/>
        //                     <p className='recent-application-desc'>Applied date: December 18, 2022</p>
        //                 </div>
        //             </div>
        //             <div className='recent-application-icons-container'>
        //                 <span className='icon-recent-application'><BsCheck2 /></span>
        //                 <span className='icon-recent-application'><BsDownload /></span>
        //                 <span className='icon-recent-application'><MdOutlineDeleteForever /></span>
        //             </div>
        //         </div>
        //         <div className='recent-application-card-container'>
        //             <div>
        //                 <p className='user-name-recent'>@user674</p>
        //                 <h4 className='job-title-recent'>Expert App Designer (Android)</h4>
        //                 <div className='recent-application-applied-date'>
        //                     <BiTime className='time-icon-recent'/>
        //                     <p className='recent-application-desc'>Applied date: December 11, 2022</p>
        //                 </div>
        //             </div>
        //             <div className='recent-application-icons-container'>
        //                 <span className='icon-recent-application'><BsCheck2 /></span>
        //                 <span className='icon-recent-application'><BsDownload /></span>
        //                 <span className='icon-recent-application'><MdOutlineDeleteForever /></span>
        //             </div>
        //         </div>



        //     </section>
        // </div>
    );
};

export default Dashboard;
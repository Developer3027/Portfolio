import React, {useState} from 'react';
import { FaFolder, FaFolderOpen, FaPlusSquare } from 'react-icons/fa'

import './styles.css';

const Projects = () => {
    const [nutraShow, setNutraShow] = useState(true);
    const [hermitShow, setHermitShow] = useState(true);
    const [showNutraInfo, setShowNutraInfo] = useState(false);
    const [showHermitInfo, setShowHermitInfo] = useState(false);

    return (
        <div className='container'>
            <div className='projectCard'>
                <div className='folderWrapper'>
                    {nutraShow ? 
                        <FaFolder onMouseEnter={() => setNutraShow(false)} className='icon' /> 
                        : 
                        <FaFolderOpen onMouseLeave={() => setNutraShow(true)} className='icon' />
                    }
                </div>
                <div className='projectInfo'>
                    <h2 className='title'>NutraSite</h2>
                    <p>A ecommerce site for the small bussiness owner. This site is a sport and health supplement concept.</p>
                </div>
                <div className='plusIcon'>
                    <FaPlusSquare onClick={() => {setShowNutraInfo(!showNutraInfo)}} />
                </div>
            </div>
            <div id={showNutraInfo ? "view" : "hide"} className='projectDetails'>
                <p>Ecommerce app built in ReactJs. It uses NodeJs and Express for the server and MongoDb for database storage. I use JWT, Json Web Token to validate users. I use bcrypt to hash passwords for auth. It includes a admin dashboard where shop owners can add, edit and delete product, as well as view customers and orders. It features a review and rating system as well as a shopping cart.</p>
            </div>

            <div className='projectCard'>
                <div className='folderWrapper'>
                    {hermitShow ? 
                        <FaFolder onMouseEnter={() => setHermitShow(false)} className='icon' /> 
                        : 
                        <FaFolderOpen onMouseLeave={() => setHermitShow(true)} className='icon' />
                    }
                </div>
                <div className='projectInfo'>
                    <h2 className='title'>Hermit Plus</h2>
                    <p>Movie app that brings all the hermits together in one place and allows you to easily follow the individual stories.</p>
                </div>
                <div className='plusIcon'>
                    <FaPlusSquare onClick={() => {setShowHermitInfo(!showHermitInfo)}} />
                </div>
            </div>
            <div id={showHermitInfo ? "view" : "hide"} className='projectDetails'>
                <p>Frontend built in ReactJs. Backend uses Firebase for data storage, image storage, and auth. Users can register with email and password, login in with the same or log in with google.</p>
            </div>
        </div>
        
    )
}
export default Projects;

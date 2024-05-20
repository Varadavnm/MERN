import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../../../components/common/Navbar/Navbar'
import CustomCarousal from '../../../components/CustomCarousal/CustomCarousal';
import Blocks from '../../../components/Blocks/Blocks';
import UspBox from '../../../components/UspBox/UspBox';
const Home = () => {
  return (
    <div>
        <Navbar />
        <CustomCarousal />
        <Blocks />
        <UspBox />
    </div>
  )
}

export default Home
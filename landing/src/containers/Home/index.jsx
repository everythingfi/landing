import { useEffect } from "react";
import AboutOther from '../../components/AboutOther'

import SecHeroSection from '../../components/HeroSection'
import OurBlog from '../../components/OurBlog'
import OurTeam from '../../components/OurTeam'
import SecAbout from '../../components/SecAbout'

import { OurBlogInfo, OurTeamInfo } from '../../data/data-containers/HomeDemo1/data-HomeDemo1.js';

import OurJoinUsFirst from '../../data/data-containers/HomeDemo1/data-OurJoinUsFirst.json';
import OurJoinUsSecond from '../../data/data-containers/HomeDemo1/data-OurJoinUsSecond.json';
import FooterPages from '../../layouts/Footer/FooterPages'

import Header from "../../layouts/Header"
import { addRemoveClassBody } from '../../utils'

import { HomeDemo1About1, HomeDemo1Platform1 } from '../../utils/allImgs'

import JoinUs from './JoinUs'

import './style/HomeDemo1.scss'

const HomeContainer = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Everything.fi" />
        <SecHeroSection
          ClassSec="hero-section moving section-padding"
          ClassDiv="col-12 col-lg-5 col-md-12"
          specialHead="Everything.fi"
          title="A Decentralized Renting and Lending Platform"
          link1="Learn More -  Subscribe"
          img={HomeDemo1Platform1}
        />
        <div className="clearfix" />
        <SecAbout
          imgDwon={false}
          title="Sharing 3.0"
          text="Using the power of the blockchain for trustless p2p renting"
          img={HomeDemo1About1}
        />
        <JoinUs
          OurJoinUsFirst={OurJoinUsFirst}
          OurJoinUsSecond={OurJoinUsSecond}
        />
        <AboutOther />
        <OurTeam data={OurTeamInfo} />
        <OurBlog data={OurBlogInfo} />
        <FooterPages />
      </div>
    );
};

export default HomeContainer
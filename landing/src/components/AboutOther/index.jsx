import {
  HomeDemo1Computer
} from '../../utils/allImgs'

const AboutOther = ({ClassTitle="gradient-text blue"}) => {

  return (

    <section className="about-us-area section-padding-0-100 clearfix" id="token">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div className="dream-dots text-left fadeInUp" data-aos="fade-up" data-aos-delay="200">
                <span className={ClassTitle}>Powered by our Native Token</span>
              </div>
              <h4 className="fadeInUp" data-aos="fade-up" data-aos-delay="200">vFI ensures fair usage</h4>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="200">The platform is governed by a DAO, which consists of every vFI holder. It punishes malicious behavior and exploitation attempts, while rewarding everyone playing fair. vFI is being minted accordingly to the size of the platform to ensure a sustainable development.</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp">
              <img draggable="false" src={HomeDemo1Computer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOther;
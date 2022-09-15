const SecAbout = ({imgDwon=false , title , text , img}) => {

  return (
    <>
      {imgDwon ? (
          <section className="about-us-area section-padding-100 clearfix" id="about">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">
                    <div className="dream-dots text-left" data-aos="fade-up" data-aos-delay="300">
                      <span className="gradient-text blue">{title}</span>
                    </div>
                    <h4 data-aos="fade-up" data-aos-delay="300">{text}</h4>
                    <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                    <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p>
                    <a className="btn more-btn mt-30" href="#">Read More</a>
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img draggable="false" src={img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (

          <section className="about-us-area section-padding-100 clearfix" id="about">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img draggable="false" src={img} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">
                    <div className="dream-dots text-left" data-aos="fade-up" data-aos-delay="300">
                      <span className="gradient-text ">{title}</span>
                    </div>
                    <h4 data-aos="fade-up" data-aos-delay="300">{text}</h4>
                    <p data-aos="fade-up" data-aos-delay="300">Blockchain and NFT technology empowers us to rethink old structures and minimize the counterparty risk of traditional systems. While traditionally you had to rely on your local legislations and insurance policies, web3 introduced us to new ways and made societies independent from centralized authorities.</p>
                    <p data-aos="fade-up" data-aos-delay="400">We’re using approved techniques from DeFi (decentralized finance) that are already used to manage hundreds of billions of USD in a safe, trustless manner. You don’t need to worry about who you’re renting your things do, since the code and the community ensures fair behavior from all parties involved.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        )}
    </>
  );
}

export default SecAbout;
import SectionHeading from "../SectionHeading"

const OurBlog = ({data , ClassSpanTitle}) => {

    return (
      <section className="our_blog_area clearfix section-padding-100-0" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading
                title="Blog Posts"
                text="Latest News"
                ClassSpanTitle={ClassSpanTitle}
              />

            </div>
          </div>
          <div className="row justify-content-center">
            {data && data.map((item , key) => (
              <div className="col-12 col-md-6 col-lg-4" key={key}>
                <div className="single-blog-area" data-aos="fade-up">
                  {/* Post Thumbnail */}
                  <div className="blog_thumbnail">
                    <img draggable="false" src={item.img} alt="" />
                  </div>
                  {/* Post Content */}
                  <div className="blog-content">
                    {/* Dream Dots */}
                    <div className="post-meta mt-20">
                      <p>By <a href="#" className="post-author">{item.author}</a> <a href="#">{item.date}</a></p>
                    </div>
                    <a href="#" className="post-title">
                      <h4>{item.title}</h4>
                    </a>
                    <p>{item.text}</p>
                    <a href={item.link} className="btn more-btn mt-15">Read Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurBlog
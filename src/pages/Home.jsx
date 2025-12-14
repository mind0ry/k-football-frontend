import NextMatch from "../components/homeComp/NextMatch";
import PointTable from "../components/homeComp/PointTable";

function Home() {
  return (
    <>
      <div
        className="hero overlay"
        style={{
          backgroundImage: "url('/images/bg_3.jpg')",
          height: "270px",
        }}
      ></div>

      <div className="container">
        <div className="site-section bg-dark">
          <div className="container">
            <div className="row">
              <NextMatch/>
              {/* Ranking Table */}
              <PointTable/>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-6 title-section">
                <h2 className="heading">Videos</h2>
              </div>

              <div className="col-6 text-right">
                <div className="custom-nav">
                  <a href="#" className="js-custom-prev-v2">
                    <span className="icon-keyboard_arrow_left"></span>
                  </a>
                  <span></span>
                  <a href="#" className="js-custom-next-v2">
                    <span className="icon-keyboard_arrow_right"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="owl-4-slider owl-carousel">
              {/* item 1 */}
              <div className="item">
                <div className="video-media">
                  <img
                    src="/images/img_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />

                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">Dogba set for Juvendu return?</h3>
                    </div>
                  </a>
                </div>
              </div>

              {/* item 2 */}
              <div className="item">
                <div className="video-media">
                  <img
                    src="/images/img_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />

                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">
                        Kai Nets Double To Secure Comfortable Away Win
                      </h3>
                    </div>
                  </a>
                </div>
              </div>

              {/* item 3 */}
              <div className="item">
                <div className="video-media">
                  <img
                    src="/images/img_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />

                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">Romolu to stay at Real Nadrid?</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News */}
        <div className="latest-news">
          <div className="container">
            <div className="row">
              <div className="col-12 title-section">
                <h2 className="heading">Latest News</h2>
              </div>
            </div>

            <div className="row no-gutters">
              {/* News block 1 */}
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="#">
                    <img src="/images/img_1.jpg" alt="" className="img-fluid" />
                  </a>

                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">Romolu to stay at Real Nadrid?</h3>

                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img src="/images/person_1.jpg" alt="" />
                        </div>

                        <div className="text">
                          <h4>Mellissa Allison</h4>
                          <span>May 19, 2020 • Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* News block 2 */}
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="#">
                    <img src="/images/img_3.jpg" alt="" className="img-fluid" />
                  </a>

                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">
                        Kai Nets Double To Secure Comfortable Away Win
                      </h3>

                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img src="/images/person_1.jpg" alt="" />
                        </div>

                        <div className="text">
                          <h4>Mellissa Allison</h4>
                          <span>May 19, 2020 • Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* News block 3 */}
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="#">
                    <img src="/images/img_2.jpg" alt="" className="img-fluid" />
                  </a>

                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">Dogba set for Juvendu return?</h3>

                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img src="/images/person_1.jpg" alt="" />
                        </div>

                        <div className="text">
                          <h4>Mellissa Allison</h4>
                          <span>May 19, 2020 • Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="container site-section">
          <div className="row">
            <div className="col-6 title-section">
              <h2 className="heading">Our Blog</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="custom-media d-flex">
                <div className="img mr-4">
                  <img
                    src="/images/img_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>

                <div className="text">
                  <span className="meta">May 20, 2020</span>

                  <h3 className="mb-4">
                    <a href="#">Romolu to stay at Real Nadrid?</a>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus deserunt saepe tempora dolorem.
                  </p>
                  <p>
                    <a href="#">Read more</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="custom-media d-flex">
                <div className="img mr-4">
                  <img
                    src="/images/img_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>

                <div className="text">
                  <span className="meta">May 20, 2020</span>

                  <h3 className="mb-4">
                    <a href="#">Romolu to stay at Real Nadrid?</a>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus deserunt saepe tempora dolorem.
                  </p>
                  <p>
                    <a href="#">Read more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

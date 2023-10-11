import { React } from "react";
import { Link, NavLink } from "react-router-dom";
import Glider from "react-glider";
import "glider-js/glider.min.css";

// Icons \\
// import { IoIosArrowDropleft } from "react-icons/io";
// import { IoIosArrowDropright } from "react-icons/io";

// Styles \\
import "../../assets/styles/cards/cardMenu.scss";

const CardMenu = () => {
  return (
    // <div className="cardMenu">
    //   <div className="cardMenu_items">
    //     <div className="cardMenu_items_arrowIcon">
    //       <Link>
    //         <IoIosArrowDropleft className="arrowIcon" />
    //       </Link>
    //       <Link>
    //         <IoIosArrowDropright className="arrowIcon" />
    //       </Link>
    //     </div>

    //     <div className="cardMenu_items_menu">
    //       <Link clasname="cardLink">
    //         <div className="menu odd1">
    //           <div className="menu_items">
    //             <div className="menu_img">
    //               <img src={menuImg} alt="menuImg" />
    //             </div>

    //             <div className="menu_contnet">
    //               <h3>Baxtsiz hodisa</h3>
    //               <p>OSAGO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link clasname="cardLink" to={"/ixtiyoriy"}>
    //         <div className="menu">
    //           <div className="menu_items">
    //             <div className="menu_img">
    //               <img src={menuImg} alt="menuImg" />
    //             </div>

    //             <div className="menu_contnet">
    //               <h3>Ixtiyoriy avtosug`urta</h3>
    //               <p>KASCO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link clasname="cardLink" to={"/travel"}>
    //         <div className="menu">
    //           <div className="menu_items">
    //             <div className="menu_img">
    //               <img src={menuImg} alt="menuImg" />
    //             </div>

    //             <div className="menu_contnet">
    //               <h3>Travel</h3>
    //               <p>OSAGO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link clasname="cardLink">
    //         <div className="menu odd2">
    //           <div className="menu_items">
    //             <div className="menu_img">
    //               <img src={menuImg} alt="menuImg" />
    //             </div>

    //             <div className="menu_contnet">
    //               <h2>Uy joy sug`urtasi</h2>
    //               <p>OSAGO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link clasname="cardLink">
    //         <div className="menu odd3">
    //           <div className="menu_items">
    //             <div className="menu_img">
    //               <img src={menuImg} alt="menuImg" />
    //             </div>

    //             <div className="menu_contnet">
    //               <h3>Baxtsiz hodisa</h3>
    //               <p>OSAGO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link clasname="cardLink">
    //         <div className="menu">
    //           <div className="menu_items">
    //             <div className="menu_img">
    //               <img src={menuImg} alt="menuImg" />
    //             </div>

    //             <div className="menu_contnet">
    //               <h3>Baxtsiz hodisa</h3>
    //               <p>OSAGO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link clasname="cardLink">
    //         <div className="menu">
    //           <div className="menu_items">
    //             <div className="menu_img">
    //               <img src={menuImg} alt="menuImg" />
    //             </div>

    //             <div className="menu_contnet">
    //               <h3>Baxtsiz hodisa</h3>
    //               <p>OSAGO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link clasname="cardLink">
    //         <div className="menu odd4">
    //           <div className="menu_items">
    //             <div className="menu_img">
    //               <img src={menuImg} alt="menuImg" />
    //             </div>

    //             <div className="menu_contnet">
    //               <h3>Baxtsiz hodisa</h3>
    //               <p>OSAGO</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div>
      <section className="container mx-auto mb-5">
        {/* <div className="icons flex justify-end gap-5">
          <IoIosArrowDropleft className="arrowIcon" />
          <IoIosArrowDropright className="arrowIcon" />
        </div> */}
        <div className="row">
          <div className="ag-format-container">
            <div className="ag-courses_box">
              {/* <Glider
                className="glider-container"
                draggable
                hasDots
                slidesToShow={1}
                scrollLock
              >
                <div>
                  <span className="flex">
                    <div className="ag-courses_item">
                      <Link className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">Osago</div>

                        <NavLink to={"osago"}>
                          <span className="ag-courses-item_date text-white flex items-center z-10 relative">
                            Boshlash{" "}
                            <i className="fa-solid fa-arrow-right-long ms-3"></i>
                          </span>
                        </NavLink>
                      </Link>
                    </div>
                    <div className="ag-courses_item">
                      <Link className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">Osago</div>

                        <NavLink to={"osago"}>
                          <span className="ag-courses-item_date text-white flex items-center z-10 relative">
                            Boshlash{" "}
                            <i className="fa-solid fa-arrow-right-long ms-3"></i>
                          </span>
                        </NavLink>
                      </Link>
                    </div>
                  </span>
                </div>
                <div>
                  <span className="flex">
                    <div className="ag-courses_item">
                      <Link className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          Baxtsiz hodisa
                        </div>

                        <div className="ag-courses-item_date-box">
                          <span className="ag-courses-item_date text-white flex items-center">
                            Boshlash{" "}
                            <i className="fa-solid fa-arrow-right-long ms-3"></i>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="ag-courses_item">
                      <Link className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          Baxtsiz hodisa
                        </div>

                        <div className="ag-courses-item_date-box">
                          <span className="ag-courses-item_date text-white flex items-center">
                            Boshlash{" "}
                            <i className="fa-solid fa-arrow-right-long ms-3"></i>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </span>
                </div>
                <div>
                  <span className="flex">
                    <div className="ag-courses_item">
                      <Link className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          Baxtsiz hodisa
                        </div>

                        <div className="ag-courses-item_date-box">
                          <span className="ag-courses-item_date text-white flex items-center">
                            Boshlash{" "}
                            <i className="fa-solid fa-arrow-right-long ms-3"></i>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="ag-courses_item">
                      <Link className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          Baxtsiz hodisa
                        </div>

                        <div className="ag-courses-item_date-box">
                          <span className="ag-courses-item_date text-white flex items-center">
                            Boshlash{" "}
                            <i className="fa-solid fa-arrow-right-long ms-3"></i>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </span>
                </div>
                <div>
                  <span className="flex">
                    <div className="ag-courses_item">
                      <Link className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          Baxtsiz hodisa
                        </div>

                        <div className="ag-courses-item_date-box">
                          <span className="ag-courses-item_date text-white flex items-center">
                            Boshlash{" "}
                            <i className="fa-solid fa-arrow-right-long ms-3"></i>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="ag-courses_item">
                      <Link className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          Baxtsiz hodisa
                        </div>

                        <div className="ag-courses-item_date-box">
                          <span className="ag-courses-item_date text-white flex items-center">
                            Boshlash{" "}
                            <i className="fa-solid fa-arrow-right-long ms-3"></i>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </span>
                </div>
              </Glider> */}

              <div className="ag-courses_item">
                <Link className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">Osago</div>

                  <NavLink to={"osago"}>
                    <span className="ag-courses-item_date text-white flex items-center z-10 relative">
                      Boshlash{" "}
                      <i className="fa-solid fa-arrow-right-long ms-3"></i>
                    </span>
                  </NavLink>
                </Link>
              </div>

              <div className="ag-courses_item">
                <Link className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">Baxtsiz hodisa</div>

                  <div className="ag-courses-item_date-box">
                    <span className="ag-courses-item_date text-white flex items-center">
                      Boshlash{" "}
                      <i className="fa-solid fa-arrow-right-long ms-3"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardMenu;

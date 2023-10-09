import React from "react";
import { Link } from "react-router-dom";

// Icons \\
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

// Styles \\
import "../../assets/styles/cards/cardMenu.scss";

// Images \\
import menuImg from "../../assets/images/menu_img.svg";

const CardMenu = () => {
  return (
    <div className="cardMenu">
      <div className="cardMenu_items">
        <div className="cardMenu_items_arrowIcon">
          <Link>
            <IoIosArrowDropleft className="arrowIcon" />
          </Link>
          <Link>
            <IoIosArrowDropright className="arrowIcon" />
          </Link>
        </div>

        <div className="cardMenu_items_menu">
          <Link clasname="cardLink">
            <div className="menu odd1">
              <div className="menu_items">
                <div className="menu_img">
                  <img src={menuImg} alt="menuImg" />
                </div>

                <div className="menu_contnet">
                  <h3>Baxtsiz hodisa</h3>
                  <p>OSAGO</p>
                </div>
              </div>
            </div>
          </Link>
          <Link clasname="cardLink" to={"/ixtiyoriy"}>
            <div className="menu">
              <div className="menu_items">
                <div className="menu_img">
                  <img src={menuImg} alt="menuImg" />
                </div>

                <div className="menu_contnet">
                  <h3>Ixtiyoriy avtosug`urta</h3>
                  <p>KASCO</p>
                </div>
              </div>
            </div>
          </Link>
          <Link clasname="cardLink" to={"/travel"}>
            <div className="menu">
              <div className="menu_items">
                <div className="menu_img">
                  <img src={menuImg} alt="menuImg" />
                </div>

                <div className="menu_contnet">
                  <h3>Travel</h3>
                  <p>OSAGO</p>
                </div>
              </div>
            </div>
          </Link>
          <Link clasname="cardLink">
            <div className="menu odd2">
              <div className="menu_items">
                <div className="menu_img">
                  <img src={menuImg} alt="menuImg" />
                </div>

                <div className="menu_contnet">
                  <h2>Uy joy sug`urtasi</h2>
                  <p>OSAGO</p>
                </div>
              </div>
            </div>
          </Link>
          <Link clasname="cardLink">
            <div className="menu odd3">
              <div className="menu_items">
                <div className="menu_img">
                  <img src={menuImg} alt="menuImg" />
                </div>

                <div className="menu_contnet">
                  <h3>Baxtsiz hodisa</h3>
                  <p>OSAGO</p>
                </div>
              </div>
            </div>
          </Link>
          <Link clasname="cardLink">
            <div className="menu">
              <div className="menu_items">
                <div className="menu_img">
                  <img src={menuImg} alt="menuImg" />
                </div>

                <div className="menu_contnet">
                  <h3>Baxtsiz hodisa</h3>
                  <p>OSAGO</p>
                </div>
              </div>
            </div>
          </Link>
          <Link clasname="cardLink">
            <div className="menu">
              <div className="menu_items">
                <div className="menu_img">
                  <img src={menuImg} alt="menuImg" />
                </div>

                <div className="menu_contnet">
                  <h3>Baxtsiz hodisa</h3>
                  <p>OSAGO</p>
                </div>
              </div>
            </div>
          </Link>
          <Link clasname="cardLink">
            <div className="menu odd4">
              <div className="menu_items">
                <div className="menu_img">
                  <img src={menuImg} alt="menuImg" />
                </div>

                <div className="menu_contnet">
                  <h3>Baxtsiz hodisa</h3>
                  <p>OSAGO</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;

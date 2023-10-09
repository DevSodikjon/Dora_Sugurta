import React from "react";
import logo from "../../assets/images/Logo (1).svg";
import "../../assets/styles/majburiy/majburiy.scss";
import { Link } from "react-router-dom";

// Icons \\
import { BsArrowLeft } from "react-icons/bs";
import CardMenu from "../cards/CardMenu";

const Majbury = () => {
  return (
    <div className="majburiy bg-[#058668]">
      <div className="container">
        <div className="majburiy_items">
          <div className="majbury_items_header">
            <header>
              <div className="header_items">
                <div className="header_items_logo">
                  <Link>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>

                <div className="header_item_navbar">
                  <div className="navbar">
                    <ul>
                      <li>
                        <Link className="anchor">Asosiy</Link>
                      </li>
                      <li>
                        <Link className="anchor">Biz haqimizda</Link>
                      </li>
                      <li>
                        <Link className="anchor">Xizmatlar</Link>
                      </li>
                      <li>
                        <Link className="anchor">Yangiliklar</Link>
                      </li>
                      <li>
                        <Link className="anchor">Aloqa</Link>
                      </li>
                    </ul>

                    <div className="login">
                      <Link className="login_btn">Kirish</Link>
                    </div>

                    <div className="select_lang">
                      <select>
                        <option value="0" selected>
                          UZ
                        </option>
                        <option value="1">RUS</option>
                        <option value="1">ENG</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="hero">
              <div className="hero_items">
                <div className="hero_items_content">
                  <Link className="new">Yangi mavsum</Link>
                  <div className="content">
                    <h2>
                      Majburiy <br /> avto sug`urta
                    </h2>
                    <p className="desc">
                      You can read this text, but it doesn’t matter. It’s
                      concept, not <br /> important for your life or life your
                      friends
                    </p>
                  </div>

                  <Link className="buy" to={"/buying"}>
                    <BsArrowLeft /> Sotib olish
                  </Link>
                </div>
              </div>
            </div>

            <div className="menu_box">
              <CardMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Majbury;

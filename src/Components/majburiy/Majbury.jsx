import { React, useState } from "react";
import CardMenu from "../cards/CardMenu";
import "../../assets/styles/majburiy/majburiy.scss";
import { Link } from "react-router-dom";

// Images \\
import logo from "../../assets/images/Logo (1).svg";
import heroImageNew from "../../assets/images/cutted.png";

// Icons \\
import { BsArrowLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseCircleFill } from "react-icons/ri";

const Majbury = () => {
  const [active, setActive] = useState(false);

  const openModal = () => {
    console.log("active");
    return setActive(!active);
  };

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
                        <option value="0">UZ</option>
                        <option value="1">RUS</option>
                        <option value="1">ENG</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="header_mobile pt-6">
              <div className="header_mobile_items">
                <div className="header_mobile_items_logo">
                  <Link>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>

                <div className="header_mobile_items_icon">
                  <RxHamburgerMenu className="burgerIcon" onClick={openModal} />
                </div>
              </div>
            </div>

            <div className="hero">
              <div className="hero_items">
                <div className="hero_items_content">
                  <Link className="new">Yangi mavsum</Link>
                  <div className="content">
                    <h2>
                      Majburiy <br /> avto sug`urta
                    </h2>
                    <Link className="new newMobile">Yangi mavsum</Link>
                    <p className="desc">
                      You can read this text, but it doesn’t matter. It’s
                      concept, not <br /> important for your life or life your
                      friends
                    </p>
                    <Link className="buy" to={"/buying"}>
                      <BsArrowLeft /> Bog'lanish
                    </Link>
                  </div>
                  <div className="hero_image">
                    <img src={heroImageNew} alt="heroImage" />
                  </div>
                </div>
              </div>
            </div>

            <div className="menu_box">
              <CardMenu />
            </div>
          </div>
        </div>
      </div>

      <div className={`navModal_bg ${active ? "active" : ""}`}>
        <div className={`navModal`}>
          <div className="header_item_navbar">
            <div className="navbar">
              <div className="icon_X float-right">
                <RiCloseCircleFill className="closeIcon" onClick={openModal} />
              </div>

              <ul>
                <li>
                  <Link className="anchor">Asosiy</Link>
                </li>
                <hr className="hr_line text-[#005440]" />
                <li>
                  <Link className="anchor">Biz haqimizda</Link>
                </li>
                <hr className="hr_line" />
                <li>
                  <Link className="anchor">Xizmatlar</Link>
                </li>
                <hr className="hr_line" />
                <li>
                  <Link className="anchor">Yangiliklar</Link>
                </li>
                <hr className="hr_line" />
                <li>
                  <Link className="anchor">Aloqa</Link>
                </li>
                <hr className="hr_line" />
              </ul>

              <div className="login">
                <div className="select_lang">
                  <select>
                    <option value="0">UZ</option>
                    <option value="1">RUS</option>
                    <option value="1">ENG</option>
                  </select>
                </div>
                <Link className="login_btn">Kirish</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Majbury;

import React, { useContext, useState } from "react";
import burger from "../../assets/image/burger.jpg";
import x from "../../assets/image/x.png";
import { NavContext } from "../../context/navContext";
import { TitleSharps } from "../../utils/motion";
import { BurgerBox, HamBurger, ListItem, X, List, Links } from "./style";
import "./fashion.css";


const Burger = () => {
  const { activeLinkId } = useContext(NavContext);

  const [icon, setIcon] = useState(false);
  const ClickIcon = () => {
    setIcon(!icon);
  };
  
    const RenderNavLink = (content) => {
      const scrollToId = `${content.title.toLowerCase()}Section`;

      const handleClickNav = () => {
        document
          .getElementById(scrollToId)
          // .scrollIntoView({ behavior: "smooth" });
      };

      return (
        <List key={content.href}>
          <ListItem onClick={ClickIcon} key={content.title}>
            <Links href={content.href}>
              <button
                href={`#${scrollToId}`}
                className={activeLinkId === content.title ? "activeClasses" : ""}
                onClick={handleClickNav}
              >
                {content.title}
              </button>
            </Links>
          </ListItem>
        </List>
      );
    };
  return (
    <>
      {icon === false ? (
        <HamBurger onClick={ClickIcon} src={burger} />
      ) : (
        <X onClick={ClickIcon} src={x} alt="x" />
      )}
      {icon && (
        <BurgerBox>
          <List className="vaydod">
            {TitleSharps.map((value) => RenderNavLink(value))}
          </List>
        </BurgerBox>
      )}
    </>
  );
};

export default Burger;

import { useState } from "react";
import arrowDownIcon from "../../assets/images/icons/nav-arrow-down.svg";

export const Explore = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseClick = () => {
    return setShowMenu(true);
  };

  const handleMouseLeave = () => {
    return setShowMenu(false);
  };

  return (
    <div
      className="header__explore"
      onClick={handleMouseClick}
      onMouseLeave={handleMouseLeave}
    >
      <div className="header__select">
        <span>Descubrir</span>
        <img
          src={arrowDownIcon}
          alt="Flecha para mostrar Menú"
          className="icon--arrowDown"
        />
        {showMenu && (
          <nav className="header__dropdown">
            <ul className="options__list">
              <li className="options__item">
                <a href="nuevos" className="options__link">
                  Nuevos
                </a>
              </li>
              <li className="options__item">
                <a href="oferta" className="options__link">
                  Ofertas
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
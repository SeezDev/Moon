import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

import { Explore } from "../Explore/Explore";
import searchIcon from "../../assets/images/icons/search.svg";

export const FormSearch = ({}) => {
  const { products } = useContext(ProductsContext);

  //! Variables de estado para el buscador
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  //! Función para abrir la lista de productos
  const getGamesFilter = (query) => {
    setSearchQuery(query);

    // Filtrar los productos basados en la query
    const gamesFilter = products.filter((game) =>
      game.title.toLowerCase().includes(query)
    );

    setFilteredProducts(gamesFilter.slice(0, 3));
  };

  const onCloseList = () => {
    setSearchQuery("");
    setFilteredProducts([]);
  };

  const sliceTitle = (title) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="header__form">
      <div className="header__form-container">
        <div className="header__form-label">
          <input
            value={searchQuery}
            onChange={(e) => getGamesFilter(e.target.value.toLowerCase())}
            type="search"
            placeholder="buscar en la tienda"
            name="search"
            id="search"
            className="header__form-input"
          />
          {!searchQuery && (
            <img
              src={searchIcon}
              alt="Icono de búsqueda"
              className="header__form-icon"
            />
          )}
          {searchQuery && (
            <nav className="product-list">
              <ul className="product-list__items">
                {filteredProducts.map(({ id, img, title }) => (
                  <li key={id} className="product-list__item">
                    <Link
                      to={`/shop/${id}`}
                      className="product-list__link"
                      onClick={onCloseList}
                    >
                      <img
                        src={img}
                        alt={title}
                        className="product-list__image"
                      />
                      <span className="product-list__name">
                        {sliceTitle(title)}
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="product-list__results">
                  <span className="product-list__name">
                    Resultados: {filteredProducts.length}
                  </span>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
      <Explore />
    </form>
  );
};
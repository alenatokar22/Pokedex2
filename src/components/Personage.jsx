import React from "react";

export const Personage = ({ pokemon }) => {
  return (
    <div>
      {!pokemon ? null : (
        <div className="page__right ">
          <ul className="page__right-item">
            <li className="page__right-list">
              <div className="page__right-wrapper">
                <img className="page__right-img" />
                <div className="pokemon">
                  <p>
                    {pokemon.name} #{pokemon.id}
                  </p>
                </div>

                <ul className="page__content">
                  <li className="page__content-list">
                    <p className="page__content-title">Type</p>
                    <p className="page__content-text">
                      {pokemon.types[0].type.name}
                    </p>
                  </li>
                  <li className="page__content-list">
                    <p className="page__content-title">Attack</p>
                    <p className="page__content-text">
                      {pokemon.stats[1].base_stat}
                    </p>
                  </li>
                  <li className="page__content-list">
                    <p className="page__content-title">Defense</p>
                    <p className="page__content-text">
                      {pokemon.stats[2].base_stat}
                    </p>
                  </li>
                  <li className="page__content-list">
                    <p className="page__content-title">HP</p>
                    <p className="page__content-text">
                      {pokemon.stats[0].base_stat}
                    </p>
                  </li>
                  <li className="page__content-list">
                    <p className="page__content-title">SP Attack</p>
                    <p className="page__content-text">
                      {pokemon.stats[3].base_stat}
                    </p>
                  </li>
                  <li className="page__content-list">
                    <p className="page__content-title">SP Defense</p>
                    <p className="page__content-text">
                      {pokemon.stats[4].base_stat}
                    </p>
                  </li>
                  <li className="page__content-list">
                    <p className="page__content-title">Speed</p>
                    <p className="page__content-text">
                      {pokemon.stats[5].base_stat}
                    </p>
                  </li>
                  <li className="page__content-list">
                    <p className="page__content-title">Weight</p>
                    <p className="page__content-text">{pokemon.weight}</p>
                  </li>
                  <li className="page__content-list">
                    <p className="page__content-title">Total moves</p>
                    <p className="page__content-text">{pokemon.totalMoves}</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

import React from "react";

export const Page = ({ name, type }) => {
  return (
    <div className="page">
      <img className="page__img" />
      <p className="page__name">{name}</p>
      <p className="page__type">{type}</p>
    </div>
  );
};

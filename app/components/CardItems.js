'use client';

import Link from "next/link";
import React from "react";
import { MdWrapText } from "react-icons/md";
// import { Link } from "react-router-dom";
function CardItems(props) {
  return (
    <>
      <li className="cards__item"></li>
      <Link className="cards__item__link" href={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            src={props.src}
            alts="travel image"
            className="cards__item__img"
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </>
  );
}

export default CardItems;

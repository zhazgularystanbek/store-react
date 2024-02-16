import React, { useEffect } from "react";

import { books } from "../../../db/db";

const Categories = () => {
  let a = [];
  let b = [];
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.map((el) => {
    return a.push(el.category_img);
  });
  books.map((el) => {
    return b.push(el.category);
  });

  //   localStorage.setItem("books", JSON.stringify(books));
  //   JSON.parse(localStorage.getItem("books")).map((el) => {
  //     return a.push(el.category_img);
  //   });
  //   JSON.parse(localStorage.getItem("books")).map((el) => {
  //     return b.push(el.category);
  //   });
  const uniq = [...new Set(a)];
  const uniq2 = [...new Set(b)];

  return (
    <div id="categories">
      <div className="container">
        <h2>Категории</h2>
        <div className="categories">
          <div className="cat-blocks">
            {uniq.map((el, ind) => (
              <div
                className="cBlock"
                style={{
                  backgroundImage: `url(${el})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="cat-name">
                  {uniq2[ind]} <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

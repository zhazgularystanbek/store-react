import React, { useEffect, useState } from "react";
import cor from "../../../assets/images/backet2.png";

const Recomendation = () => {
  let [bookList, setBookList] = useState([]);
  function readData() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    setBookList(books);
  }
  useEffect(() => {
    readData();
  }, []);
  //   let books = JSON.parse(localStorage.getItem("books")) || [];
  //   setBookList(books);
  //   function add() {
  //     let obj = {
  //       category: "Биографии",
  //       category_img: `https://u.livelib.ru/reader/XAPOH/o/8w9c3hhp/BiM2-o.jpeg`,
  //       category_id: 5,
  //       popularity: 2.1,
  //       url: "https://cdn.eksmo.ru/v2/ITD000000001328155/COVER/cover1__w820.jpg",
  //       name: "Месси. Иллюстрированное издание",
  //       price: 3000,
  //     };
  //     let books = JSON.parse(localStorage.getItem("books")) || [];
  //     books.push(obj);
  //     localStorage.setItem("books", JSON.stringify(books));

  //     setBookList(JSON.parse(localStorage.getItem("books")));
  //   }
  //   useEffect(() => {
  //     add();
  //   }, []);

  return (
    <div>
      <div id="recomendation">
        <div className="container">
          <h2>Возможно, Вам понравится</h2>
          <div className="recomendation">
            {bookList.map((el) => (
              <div className="recomend-block">
                <img src={el.url} alt="" />
                <div className="pr-block">
                  <h3 className="price">{el.price} сом</h3>
                  <img src={cor} alt="" className="backetIm" />
                </div>
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendation;

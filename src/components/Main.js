import React from "react";
import { reviews } from "./Data";

const Main = ({ index, setIndex }) => {
    const handleRandom = () => {
        const min = 0;
        const max = reviews.length - 1;
        const random = Math.floor((Math.random() * max + 1) - min);
        setIndex(random);
    }
    const handleClick = (action) => {
        let page = index;
        let repeat = reviews.length - 1;
        if(action === 'left' && index > 0) {
            page--;
            setIndex(page);
        }
        else if(action === 'right' && index  < reviews.length - 1) {
            page++;
            setIndex(page);
            if(page === reviews.length-1) {
                setIndex(0);
            }
        }
        else if(action === 'right' && index < repeat.length-1) {
            setIndex(0);
        }
        else {
            setIndex(repeat);
        }
    }
  return (
    <div>
      {reviews.map((el, i) => {
        if (i === index) {
          return (
            <div key={el.id} className="main">
              <div className="top">
                <i className="fa-solid fa-quote-right"></i>
                <img id="img" src={el.img} alt="portrait" />
              </div>
              <h4 id="fullName">{el.fullName}</h4>
              <p id="specialty">{el.specialty}</p>
              <p id="text">{el.text}</p>
              <span>
                <i onClick={() => handleClick('left')} className="fa-solid fa-angle-left"></i>
                <i onClick={() => handleClick('right')} className="fa-solid fa-angle-right"></i>
              </span>
              <button onClick={handleRandom} id="btn">Surprise Me</button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Main;

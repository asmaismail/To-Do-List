import React from "react";
import MyList from "./Assets/pen.gif";
import Plus from "./Assets/Plus.gif";
// import Plus1 from './Assets/Pluss.mp4'

const Main = () => {
  // const [animate, setAnimate] = useState(false);
  // const handleClick = () => {
  //   setAnimate(true);
  //   setTimeout(() => setAnimate(false), 1000);
  // };
  
  return (
    <>
      <section>
        <div className="main">
          <div className="heading">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={MyList} style={{ height: "55px" }} alt="Pen" />
              <h1 style={{ marginLeft: "10px" }}>To Do List App</h1>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="text" placeholder="Enter your task here..." />
            <span>
              <button
                // onClick={handleClick}
                className="border"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <img src={Plus} alt="img" style={{ height: "45px" }} />
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

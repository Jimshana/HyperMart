import axios from "axios";
import React, { useEffect, useState } from "react";

function Apii() {
  const [buttonclicked, setButtonClicked] = useState("posts");
  const [items, setItems] = useState([]);
  //   console.log(items);
  // const handlebar1 =()=>{
  //   setData('posts');
  // }
  // const handlebar2 =()=>{
  //     setData('comments');
  // }

  useEffect(() => {
    try {
      const getposts = async () => {
        const getresponse = await axios.get(
          `https://jsonplaceholder.typicode.com/${buttonclicked}`
        );
        setItems(getresponse.data);
        console.log(getresponse.data);
      };
      // const getcomments=async()=>{
      //     const getresponse2=await axios.get("https://jsonplaceholder.typicode.com/comments")
      //     setData(getresponse2.data);
      //     console.log(getresponse2.data)
      // }
      getposts();
      // getcomments();
    } catch (error) {
      console.log("something went wrong");
      console.log(error);
    }
  }, [buttonclicked]);

  return (
    <div style={{ background: buttonclicked === "posts" ? "red" : "green" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "50%",
          marginLeft: "25%",
          marginTop: "2%",
        }}
      >
        <button
          onClick={() => {
            setButtonClicked("posts");
          }}
        >
          posts
        </button>
        <button
          onClick={() => {
            setButtonClicked("comments");
          }}
        >
          comments
        </button>
      </div>
      {/* <h1>{buttonclicked==="posts"?"POSTS":"COMMENTS"}</h1> */}
      <h1>{buttonclicked.toUpperCase()}</h1>
      <div>
        {items.map((item) => {
          return <h4>{buttonclicked === "posts" ? item.title : item.name}</h4>;
        })}
      </div>
    </div>
  );
}

export default Apii;

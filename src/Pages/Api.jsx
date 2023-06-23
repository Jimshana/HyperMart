import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Api() {
  // useEffect(() => {
  // axios.get("https://jsonplaceholder.typicode.com/posts")
  // .then((response)=>{
  //     console.log(response.data)
  // })
  // .catch((error)=>{
  //     console.log("something went wrong");
  //     console.log(error);
  // })
  // }, [])
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const getposts = async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log(response.data);
        setPosts(response.data);
      };
      getposts();
    } catch (err) {
      console.log("something went wrong");
      console.log(err);
    }
  }, []);
  console.log(posts);
  return (
  <div>
   {
    posts.map((post)=>{
        return <h4>{post.title}</h4>
    })
   }
  </div>
  )
}

export default Api;

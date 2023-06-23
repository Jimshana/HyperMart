import React, { useEffect, useState } from "react";

function Index() {
  const [see, setSee] = useState(false);
  const [a,seta] = useState(false)

  const handlebar = () => {
    setSee(!see);
  };
  const handlebar2 = () => {
    seta(!a);
  };

  
  useEffect(() => {
    console.log("inside use effect");

    // return () => {
    //     console.log("clean up"+see);
    // };
  },[see]);
  return (
    <>
    <div>
      {see ? (
        <>
          <button onClick={handlebar}>button</button>
          <div>
            <h1>helloooo</h1>
          </div>
        </>
      ) : (
        <>
          <button onClick={handlebar}>button</button>
          <div></div>
        </>
      )}
    </div>
    <div>
      {a? (
        <>
          <button onClick={handlebar2}>button</button>
          <div>
            <h1>world</h1>
          </div>
        </>
      ) : (
        <>
          <button onClick={handlebar2}>button</button>
          <div></div>
        </>
      )}
    </div>

    </>

  );
}

export default Index;

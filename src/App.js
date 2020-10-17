import React, { useState } from "react";
import "./App.css";
import { FaBeer } from "react-icons/fa";
import BlendButton from "./BlendButton";

function App() {
  const [beerClicked, setIsBeerClicked] = useState(false);
  return (
    <div className="App">
      <div className="wrapper one">
        <BlendButton btnText={"Handles no background"} fontSize={"18px"} 
        />
      </div>
      <div className="wrapper two">
        <BlendButton
          btnText={"Parent background-color declared"}
          colorMain={"#FC766AFF"}
          borderRadius={"10px"}
          fontSize={"16px"}
          name={"parent"}
          value={"favorite button"}
          type="reset"
        />
      </div>
      <div className="wrapper three">
        <h2>Handles icons and events.</h2>
        {beerClicked && <h2>Cheers!</h2>}
        <BlendButton
          onClick={() => setIsBeerClicked(true)}
          btnText={<FaBeer />}
          colorMain={"#FEE715FF"}
          borderRadius={"10px"}
          fontSize={"32px"}
        />
      </div>
      <div className="wrapper four">
        <BlendButton
          btnText={"Handles gradient backgrounds"}
          colorMain={"#fff"}
          borderRadius={"20px"}
          fontSize={"20px"}
        />
      </div>
      <div className="wrapper five">
        <BlendButton
          btnText={"Multiple buttons..."}
          colorMain={"#fff"}
          fontSize={"16px"}
        />
        <BlendButton
          btnText={"...in same parent"}
          colorMain={"#fff"}
          fontSize={"16px"}
        />
      </div>
      <div className="wrapper six">
        <BlendButton
          btnText={"Works with background images"}
          colorMain={"red"}
          fontSize={"20px"}
          padding={"10px"}
        />
      </div>
      <div className="wrapper seven">
        <BlendButton name="blend" value="button" style={{color:"red", padding: "3vw", fontFamily: "helvitica", fontSize: "24px"}} />
      </div>
    </div>
  );
}

export default App;

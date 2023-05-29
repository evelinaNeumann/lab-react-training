import React from "react";
import IdCard from "./components/IdCart"

function App () {
  return (
    <div>
      <IdCard
       lastName = "Neum"
       firstName = "Evi"
       gender = "female"
       height = {164}
       birth = {new Date("1989-10-27")}
       picture = "https://example.com/profile.jpg"
       />
    </div>
  );
}

export default App;
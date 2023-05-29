import React from "react";
import IdCard from "./components/IdCart"
import Greetings from "./components/Greetings";
import Random from "./components/Random";

function App () {
  return (
    <div>
      <IdCard
       lastName = "Neum"
       firstName = "Evi"
       gender = "female"
       height = {164}
       birth = {new Date("1989-10-27")}
       picture = "https://i.ibb.co/VQHfV4W/hot-girls-summer.jpg"
       />
       <IdCard
       lastName='Delores '
       firstName='Obrien'
       gender='female'
       height={172}
       birth={new Date("1988-05-11")}
       picture="https://randomuser.me/api/portraits/women/44.jpg"/>

       <Greetings lang="de">Ludwig</Greetings>
       <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

    </div>
  );
}

export default App;
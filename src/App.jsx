import React from "react";
import IdCard from "./components/IdCart"
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";

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

        <BoxColor r={858} g={555} b={18} />
        <BoxColor r={144} g={25} b={454} />

        <CreditCard
        type="Visa"
        number="05448412579018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Vanessa Mustermann"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="4684121249010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Max Mustermann"
        bgColor="#eeeeee"
        color="#222222"
      />

<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>

<DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://i.ibb.co/zx5D4LH/wine-aesthetic.jpg"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />

    </div>
  );
}

export default App;
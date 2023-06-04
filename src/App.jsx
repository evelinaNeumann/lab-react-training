import React, { useState } from 'react';

import IdCard from './components/IdCart';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/SingleColorPicker';
import ClickablePicture from './components/ClickabelPicture';

import { idCardData } from './data/idCardData';
import { greetingData } from './data/greetingData';
import { randomData } from './data/randomData';
import { boxColorData } from './data/boxColorData';
import { creditCardData } from './data/creditCardData';
import { driverCardData } from './data/driverCardData';
import { ratingsData } from './data/ratingsData';

function App() {
  const [activeIteration, setActiveIteration] = useState(1);

  const handleSwitchIteration = (iteration) => {
    setActiveIteration(iteration);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSwitchIteration(1)}>Iteration 1</button>
        <button onClick={() => handleSwitchIteration(2)}>Iteration 2</button>
        <button onClick={() => handleSwitchIteration(3)}>Iteration 3</button>
        <button onClick={() => handleSwitchIteration(4)}>Iteration 4</button>
        <button onClick={() => handleSwitchIteration(5)}>Iteration 5</button>
        <button onClick={() => handleSwitchIteration(6)}>Iteration 6</button>
        <button onClick={() => handleSwitchIteration(7)}>Iteration 7</button>
        <button onClick={() => handleSwitchIteration(8)}>Iteration 8</button>
        <button onClick={() => handleSwitchIteration(9)}>Iteration 9</button>
        <button onClick={() => handleSwitchIteration(10)}>Iteration 10</button>
        <button onClick={() => handleSwitchIteration(11)}>Iteration 11</button>
        <button onClick={() => handleSwitchIteration(12)}>Iteration 12</button>
        <button onClick={() => handleSwitchIteration(13)}>Iteration 13</button>
        <button onClick={() => handleSwitchIteration(15)}>Iteration 15</button>
        <button onClick={() => handleSwitchIteration(16)}>Iteration 16</button>
      </div>
      {activeIteration === 1 && (
        <>
          {idCardData.map((data, index) => (
            <IdCard key={index} {...data} />
          ))}
        </>
      )}
      {activeIteration === 2 && (
        <>
          {greetingData.map((data, index) => (
            <Greetings key={index} lang={data.lang}>
              {data.text}
            </Greetings>
          ))}
        </>
      )}
      {activeIteration === 3 && (
        <>
          {randomData.map((data, index) => (
            <Random key={index} min={data.min} max={data.max} />
          ))}
        </>
      )}
      {activeIteration === 4 && (
        <>
          {boxColorData.map((data, index) => (
            <BoxColor key={index} r={data.r} g={data.g} b={data.b} />
          ))}
        </>
      )}
      {activeIteration === 5 && (
        <>
          {creditCardData.map((data, index) => (
            <CreditCard
              key={index}
              type={data.type}
              number={data.number}
              expirationMonth={data.expirationMonth}
              expirationYear={data.expirationYear}
              bank={data.bank}
              owner={data.owner}
              bgColor={data.bgColor}
              color={data.color}
            />
          ))}
        </>
      )}
      {activeIteration === 6 && (
        <>
          {ratingsData.map((rating) => (
            <Rating key={rating}>{rating}</Rating>
          ))}
        </>
      )}
      {activeIteration === 7 && (
        <>
          <DriverCard
            name={driverCardData.name}
            rating={driverCardData.rating}
            img={driverCardData.img}
            car={driverCardData.car}
          />
        </>
      )}
      {activeIteration === 8 && (
        <>
          <LikeButton />
        </>
      )}
      {activeIteration === 9 && (
        <>    <ClickablePicture
        img="https://i.ibb.co/JdK4LsS/girl-image.jpg"
        imgClicked="https://i.ibb.co/M9n412z/girl-2.jpg"
      /></>
      )}
      {activeIteration === 10 && (
        <>
          <Dice />
        </>
      )}
      {activeIteration === 11 && (
        <>
          <Carousel
            images={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg',
            ]}
          />
        </>
      )}
      {activeIteration === 12 && (
        <>
          <NumbersTable limit={12} />
        </>
      )}
      {activeIteration === 13 && (
        <>
          <Facebook />
        </>
      )}
      {activeIteration === 15 && (
        <>
          <SignupPage />
        </>
      )}
      {activeIteration === 16 && (
        <>
          <RGBColorPicker />
        </>
      )}
  
    </div>
  );
}

export default App;

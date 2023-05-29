import React from "react";

function DriverCard (props) {
    const {name, rating, img, car} = props;

    const starRating = Math.round(rating);
    
    const starStyle = {
        color: "gold",
        marginRight: "2px",
    };

    return (
        <div className = "driver-card">
            <img src ={img} alt ={name}/>
            <div>
                <h2>{name}</h2>
                <div>
                    {Array(starRating).fill(<span style={starStyle}>★</span>)}
                    {Array(5-starRating).fill(<span>☆</span>)}

                </div>
                <p>
                    {car.model}-{car.licensePlate}
                </p>
            </div>
        </div>
    );
}
export default DriverCard;
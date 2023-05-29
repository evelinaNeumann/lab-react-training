import React from "react";
function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props;

    return (
        <div className = "id-cart">
            <img src = {picture} alt ="Profile" />
            <div>
                <strong> Last Name:</strong> {lastName}
            </div>
            <div>
                <strong> First Name:</strong> {firstName}
            </div>
            <div>
                <strong> Gender:</strong> {gender}
            </div>
            <div>
                <strong> Height:</strong> {height} cm
            </div>
            <div>
                <strong> Birth:</strong> {birth.toDateString()}
            </div>            
            
        </div>
    );
}
export default IdCard;
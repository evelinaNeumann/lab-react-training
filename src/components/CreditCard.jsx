import React from "react";

function CreditCard (props){
    const{
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
    }= props;

    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
        width: '300px',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };
    const cardTypeStyle = {
        fontSize: '24px',
        textAlign: 'right',
      };
    
      const cardNumberStyle = {
        fontSize: '28px',
        marginBottom: '20px',
        letterSpacing: '4px',
      };
    
      const cardInfoStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      };
      const cardBankStyle = {
        fontSize: '18px',
      };
    
      const cardExpirationStyle = {
        fontSize: '14px',
      };
    
      const cardOwnerStyle = {
        fontSize: '18px',
        marginTop: '20px',
      };

      const lastFourDigits = number.slice(-4);
      return (
        <div style={cardStyle}>
          <div style={cardTypeStyle}>{type}</div>
          <div style={cardNumberStyle}>**** **** **** {lastFourDigits}</div>
          <div style={cardInfoStyle}>
            <div style={cardExpirationStyle}>
              Expires {expirationMonth}/{expirationYear}
            </div>
            <div style={cardBankStyle}>{bank}</div>
          </div>
          <div style={cardOwnerStyle}>{owner}</div>
        </div>
      );
    }
    
    export default CreditCard;

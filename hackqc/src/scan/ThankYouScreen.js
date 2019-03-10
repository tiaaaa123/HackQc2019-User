import React from 'react';
import { Typography, Button } from '@material-ui/core';

function getMessage(transaction) {
  if (transaction.recipient.type === 'CITIZEN_IN_NEEDS') {
    return `Merci d'avoir donné ${transaction.donation.amount}$ à une personne dans le besoin!`;
  }
  return `Merci d'avoir donné ${transaction.donation.amount}$ à ${transaction.recipient.name}!`;
}

export default function ThankYouScreen({ onCloseDonation, transaction }) {
  console.log(transaction);
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column', marginTop: 50,
    }}
    >
      {transaction &&
        <Typography align="center" variant="h5">
          {getMessage(transaction)}
        </Typography>
      }


      <div style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 50,
      }}
      >
        <Button onClick={onCloseDonation} variant="contained" size="large" color="primary">
          Retour
        </Button>
      </div>
    </div>
  );
}

import React from 'react';
import { Typography, Button } from '@material-ui/core';

function getMessage(transaction, type) {
  if (type === 'organisations') {
    return 'Transaction effectuée avec succès!';
  }
  if (transaction.recipient.type === 'CITIZEN_IN_NEEDS') {
    return `Merci d'avoir donné ${transaction.donation.amount}$ à une personne dans le besoin!`;
  }
  return `Merci d'avoir donné ${transaction.donation.amount}$ à ${transaction.recipient.name}!`;
}

export default function ThankYouScreen({ onCloseDonation, transaction, type }) {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      marginTop: 50,
      marginLeft: 30,
      marginRight: 30,
    }}
    >
      {transaction &&
        <Typography align="center" variant="h5">
          {getMessage(transaction, type)}
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

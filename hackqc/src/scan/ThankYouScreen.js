import React from 'react';
import { Typography, Button } from '@material-ui/core';

export default function ThankYouScreen({ onCloseDonation }) {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column', marginTop: 50,
    }}
    >
      <Typography align="center" variant="h4">
        Merci pour votre donation!
      </Typography>


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

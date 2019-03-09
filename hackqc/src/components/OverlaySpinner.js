import React from 'react';
import { CircularProgress, withStyles } from '@material-ui/core';

const styles = {
  paper: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    overflow: 'hidden',
    color: '#FFFFFF',
  },
};

function OverlaySpinner({ open, onClose = () => { }, classes }) {
  if (open) {
    return (
      <div>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }}
        >
          <CircularProgress style={{ color: '#FFFFFF' }} size={100} value={100} />
        </div>
      </div>
    );
  }
  return null;
}

OverlaySpinner.defaultProps = {
  open: false,
};

export default withStyles(styles)(OverlaySpinner);

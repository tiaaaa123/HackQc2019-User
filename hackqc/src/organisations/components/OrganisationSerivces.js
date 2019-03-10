import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FoodIcon from '@material-ui/icons/RestaurantMenu';
import ClotheIcon from '@material-ui/icons/LocalMall';
import { ListItemIcon } from '@material-ui/core';

export default function OrganisationServices({ organisation, hideLabel, size }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {organisation.hasShelter() &&
        <ListItemIcon>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HomeIcon style={{ fontSize: size }} />
            {!hideLabel &&
              <span style={{ fontSize: 15 }}>Refuge</span>
            }
          </div>
        </ListItemIcon>
      }
      {organisation.hasFood() &&
        <ListItemIcon>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FoodIcon style={{ fontSize: size }} />
            {!hideLabel &&
              <span style={{ fontSize: 15 }}>Nourriture</span>
            }
          </div>
        </ListItemIcon>
      }
      {organisation.hasClothes() &&
        <ListItemIcon>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ClotheIcon style={{ fontSize: size }} />
            {!hideLabel &&
              <span style={{ fontSize: 15 }}>Vêtements</span>
            }
          </div>
        </ListItemIcon>
      }
    </div>
  );
}

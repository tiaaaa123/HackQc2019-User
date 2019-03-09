import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FoodIcon from '@material-ui/icons/RestaurantMenu';
import ClotheIcon from '@material-ui/icons/LocalMall';
import { ListItemIcon } from '@material-ui/core';

export default function OrganisationServices({ organisation, hideLabel }) {
  return (
    <div>
      {organisation.hasShelter() &&
        <ListItemIcon>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HomeIcon />
            {!hideLabel &&
              <span>Refuge</span>
            }
          </div>
        </ListItemIcon>
      }
      {organisation.hasFood() &&
        <ListItemIcon>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FoodIcon />
            {!hideLabel &&
              <span>Nourriture</span>
            }
          </div>
        </ListItemIcon>
      }
      {organisation.hasClothes() &&
        <ListItemIcon>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ClotheIcon />
            {!hideLabel &&
              <span>Vêtements</span>
            }
          </div>
        </ListItemIcon>
      }
    </div>
  );
}

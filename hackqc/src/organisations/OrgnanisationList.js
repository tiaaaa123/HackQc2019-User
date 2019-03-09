import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { List, Divider, AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import OrganisationListItem from './components/OrganisationListItem';
import Client from '../Client';

const lists = [
  {
    reference: '234234',
    name: 'Patatea Chaude dans un four à 350 degrée et laisser pendant 30 min',
    description: 'lorem ipsum dolor si amet,as fsmd,afsfsd,  am,sdfas d,fa,sdf,asm,dfasdm ,fas,mdf,asd,mfam,sdfm,as',
    distance: 34,
  },
  {
    reference: '2345324',
    name: 'Chaude',
    description: 'lorem ipsum dolor si amet',
    distance: 3.4,
  },
  {
    reference: '23',
    name: 'spaghetti',
    description: 'lorem ipsum dolor si amet',
    distance: 1.4,
  },
  {
    reference: '5987',
    name: 'Jambon',
    description: 'lorem ipsum dolor si amet',
    distance: 12.3,
  },
  {
    reference: '265783864234',
    name: 'Jambon',
    description: 'lorem ipsum dolor si amet',
    distance: 12,
  },
  {
    reference: '5467',
    name: 'Jambon',
    description: 'lorem ipsum dolor si amet',
    distance: 0.234,
  },
  {
    reference: '34567456',
    name: 'Jambon',
    description: 'lorem ipsum dolor si amet',
    distance: 0.13,
  },
  {
    reference: '3456',
    name: 'Jambon',
    description: 'lorem ipsum dolor si amet',
    distance: 123,
  },
];

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class OrgnanisationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: undefined,
      organisations: [],
    };
  }

  componentDidMount() {
    this.fetchOrganisations();
  }

  selectOrganisation = (organisation) => {
    this.props.onOrganisationSelected(organisation);
  }

  async fetchOrganisations() {
    try {
      const orderedList = lists.sort((a, b) => a.distance - b.distance);
      this.setState({ organisations: orderedList });
    } catch (e) {
      this.setState({ organisations: lists });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ flex: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">Organizations</Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>

        <Divider />
        <List>
          {this.state.organisations.map(organisation => (
            <OrganisationListItem
              key={organisation.reference}
              organisation={organisation}
              onPress={this.selectOrganisation}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(OrgnanisationList);

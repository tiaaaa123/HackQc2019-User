import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {
  List, Divider, AppBar, Toolbar, Typography, InputBase,
} from '@material-ui/core';
import OrganisationListItem from './components/OrganisationListItem';
import Client from '../Client';
import Organisation from '../domain/Organisation';

const lists = [
  {
    reference: '234234',
    name: 'Patatea Chaude dans un four à 350 degrée et laisser pendant 30 min',
    description: `"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."`,
    services: [
      { type: 'SHELTER' },
    ],
  },
  {
    reference: '2345324',
    name: 'Chaude',
    description: 'lorem ipsum dolor si amet',
    services: [
      { type: 'SHELTER' },
      { type: 'CLOTHES' },
      { type: 'FOOD' },
    ],
  },
  {
    reference: '23',
    name: 'spaghetti',
    description: 'lorem ipsum dolor si amet',
    services: [
      { type: 'SHELTER' },
      { type: 'CLOTHES' },
    ],
  },
  {
    reference: '3456',
    name: 'Jambon',
    description: 'lorem ipsum dolor si amet',
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
      const response = await Client.get('organizations');
      const organisations = response.organizations.map(o => Organisation.parse(o));
      const orderedList = organisations.map(Organisation.parse).sort((a, b) => a.distance - b.distance);
      this.setState({ organisations: orderedList });
    } catch (e) {
      this.setState({ organisations: lists });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ flex: 1, overflowY: 'scroll' }}>
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

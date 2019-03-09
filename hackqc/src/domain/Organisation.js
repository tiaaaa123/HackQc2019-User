// import OrganisationService from './OrganisationService';

class Organisation {
  constructor({ reference, name, description, services, distance }) {
    this.reference = reference;
    this.name = name;
    this.description = description;
    this.services = services;
    this.distance = distance || parseFloat(Math.random() * 10).toFixed(1);
  }
}

Organisation.parse = (plain) => {
  return new Organisation(plain);
};

export default Organisation;

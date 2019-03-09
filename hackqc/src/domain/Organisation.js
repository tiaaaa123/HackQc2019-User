import OrganisationService from './OrganisationService';

class Organisation {
  constructor({
    reference, name, description, services, distance,
  }) {
    this.reference = reference;
    this.name = name;
    this.description = description;
    this.services = services ? services.map(s => new OrganisationService(s)) : [];
    this.distance = distance || parseFloat(Math.random() * 10).toFixed(1);
  }

  hasShelter() {
    return this.services.some((service: OrganisationService) => service.isShelter());
  }

  hasFood() {
    return this.services.some((service: OrganisationService) => service.isFood());
  }

  hasClothes() {
    return this.services.some((service: OrganisationService) => service.isClothes());
  }
}

Organisation.parse = (plain) => {
  return new Organisation(plain);
};

export default Organisation;


export type ServiceType = 'SHELTER' | 'FOOD' | 'CLOTHES';

class OrganisationService {
  type: ServiceType;

  constructor({ type }) {
    this.type = type;
  }

  isShelter() {
    return this.type === 'SHELTER';
  }

  isFood() {
    return this.type === 'FOOD';
  }

  isClothes() {
    return this.type === 'CLOTHES';
  }
}

export default OrganisationService;

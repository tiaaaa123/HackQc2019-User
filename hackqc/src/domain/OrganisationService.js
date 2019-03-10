
export type ServiceType = 'SHELTER' | 'FOOD' | 'CLOTHES';

class OrganisationService {
  type: ServiceType;

  constructor(props) {
    this.type = props;
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

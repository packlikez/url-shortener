import Chance from 'chance'
const chance = new Chance();

const random = {
    uuid: () => chance.guid()
};

export default random
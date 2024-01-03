
import Realm from 'realm';

class CardioModel extends Realm.Object {}
CardioModel.schema = {
  name: 'Product',
  properties: {
    id: 'int',
    workout: 'string',
    duration: 'number',
    distance:'number',
    date: 'date',
  },
};

export default CardioModel;
import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const map = fromJS(object);

  return map.getIn(array);
};

export default accessImmutableObject;

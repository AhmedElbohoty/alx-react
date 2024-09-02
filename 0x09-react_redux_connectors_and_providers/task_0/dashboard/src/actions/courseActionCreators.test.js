import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('courseActionCreators', () => {
  test('Test selectCourse action', () => {
    const index = 0;
    const action = {
      type: SELECT_COURSE,
      index,
    };
    expect(selectCourse(index)).toEqual(action);
  });

  test('Test unSelectCourse action', () => {
    const index = 0;
    const action = {
      type: UNSELECT_COURSE,
      index,
    };
    expect(unSelectCourse(index)).toEqual(action);
  });
});

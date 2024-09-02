import { Map } from 'immutable';
import { courseReducer } from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(Map({}));
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
      ],
    };
    const expectedState = Map({
      entities: {
        courses: {
          1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
          2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        },
      },
      result: [1, 2],
    });
    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = Map({
      entities: {
        courses: {
          1: { id: 1, name: 'ES6', isSelected: false },
          2: { id: 2, name: 'Webpack', isSelected: false },
        },
      },
      result: [1, 2],
    });
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = Map({
      entities: {
        courses: {
          1: { id: 1, name: 'ES6', isSelected: false },
          2: { id: 2, name: 'Webpack', isSelected: true },
        },
      },
      result: [1, 2],
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = Map({
      entities: {
        courses: {
          1: { id: 1, name: 'ES6', isSelected: false },
          2: { id: 2, name: 'Webpack', isSelected: true },
        },
      },
      result: [1, 2],
    });
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = Map({
      entities: {
        courses: {
          1: { id: 1, name: 'ES6', isSelected: false },
          2: { id: 2, name: 'Webpack', isSelected: false },
        },
      },
      result: [1, 2],
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});

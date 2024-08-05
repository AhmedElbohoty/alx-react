import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { StyleSheetTestUtils } from 'aphrodite';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

import * as React from 'react';
import {mount} from 'enzyme';
import {Provider} from "react-redux";
import {createStore} from "redux";

const TestHook: (obj: { callback: () => void }) => null = ({callback}) => {
  callback();
  return null;
};

export const testHook = (callback: () => void) => {
  mount(<TestHook callback={callback}/>);
};

export const testHookWithMockStore = (callback: () => void) => {
  mount(<Provider store={createStore(() => {})}>
    <TestHook callback={callback}/>
  </Provider>);
};
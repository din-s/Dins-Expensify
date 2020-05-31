import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem'
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses'
import '../setupTests'

test('should set expense list item',()=>{

  cosnt wrapper = shallow(< ExpenseListItem props={...expenses[0]} />)

  expect(toJson(wrapper)).toMatchSnapshot()
});
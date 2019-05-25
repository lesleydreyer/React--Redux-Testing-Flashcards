import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
    const app = shallow(<App />);
    it('renders flashcard pro title', () => {
        expect(app.find('h2').text()).toEqual('Flashcard Pro')
    });
    it('renders the StackList', () => {
        //console.log(app.debug())
        expect(app.find('ConnectFunction').exists()).toBe(true);//expect(app.find('Connect(StackList)').exists()).toBe(true);
    })
    it('renders link to create new stack', () => {
        expect(app.find('Link h4').text()).toEqual('Create a New Stack');
    });
})
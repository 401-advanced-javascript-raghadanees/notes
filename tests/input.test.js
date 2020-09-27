'use strict';

const minimist = require('minimist');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'Here is the added note' };                                                              
});                                                                                                                                            

const Input = require('../lib/input');//../lib/input.js

describe('Input Module', () => {

  it('If (action) and (the note) were valid', () => {
    let newInputObj = new Input();
    newInputObj.action = 'add'|| 'a';
    newInputObj.payload = 'here New note';
    expect(newInputObj.valid()).toBeTruthy();
  });

  it('If (action) and (the note) were invalid', () => {
    let newInputObj = new Input();
    newInputObj.action = undefined;
    newInputObj.payload = undefined;
    expect(newInputObj.valid()).toBeFalsy();
  });
    
  it('add() validation for note type if it is not String', () => {
    let newInputObj = new Input();
    expect(newInputObj.getpayload(5)).not.toEqual('ERROR: invalid note');
  });

  it('add() validation for note type if it is String', () => {
    let newInputObj = new Input();
    expect(newInputObj.getpayload('this is valid note')).toEqual('this is valid note');
  });

});
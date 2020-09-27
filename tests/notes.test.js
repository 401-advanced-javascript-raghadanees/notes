'use strict';

const Note = require('../lib/notes');

// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  // test case
  it('execute() works', () => {
    let newNoteObj = new Note({ payload: 'good note', action: '--a' });
    newNoteObj.execute({ payload: 'good note', action: '--a' });
    expect(console.log).not.toHaveBeenCalled();
  });

  it('add() does its work', () => {
    let newNoteObj = new Note({ action: '--a', error: 'ERROR: this is not valid arg' });
    newNoteObj.add({ action: '--a', error: 'ERROR: this is not valid arg' });
    expect(console.log).not.toHaveBeenCalled();
  });

  it('add() does its work', () => {
    let newNoteObj = new Note({ payload: 'good note', action: '--a', note: 'valid note' });
    newNoteObj.add({ payload: 'good note', action: '--a', note: 'valid note' });
    expect(console.log).toHaveBeenCalled();
  });

});

// we did step on github (action) to add workflow of node
// "test": "jest --verbose --coverage"   ضفناها داخل ملف (package.json)  
//وبعدها عملنا npm test
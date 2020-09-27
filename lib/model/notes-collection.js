'use strict';
// require the schema and add notes CRUD operations
const noteSchema = require('./notes-Schema.js');

class Notes {

  constructor(){}

  create(record) {
    let newRecord = new noteSchema(record);
    return newRecord.save();
  }


  get(_id) {
    // if I have a specific ID get that one onlly
    // else find all records
    // {_id} ===> {_id: _id}
    if (_id) {
      return noteSchema.findOne({_id});
      // return noteSchema.findById(_id);
    } else {
      // return noteSchema.find({});
      return noteSchema.find();
    }
  }


  update(_id, record) {
    // return noteSchema.findByIdAndUpdate(_id, record);
    return noteSchema.findOneAndUpdate({_id: _id}, record );
  }

  delete(_id) {
    return noteSchema.findByIdAndDelete(_id);
  }

}

module.exports = Notes;

// Singleton
// exports an instance instead of the class, 
// this instance will be shared
//module.exports = new Notes();


//Test
// npm i @code-fellows/supergoose
// npm i -D jest
// in pavkage.json >>> "test": "jest --verbose --coverage"
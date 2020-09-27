'use strict';

// Bring in some 3rd party libraries to help us out

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    console.log(' args minimist >>>>> ', args);
    this.action = this.getAction(Object.keys(args)[1]);
    this.payload = this.getpayload(args.add || args.a);
  }
  getAction(action) {
    let validActions = /add$|a$/ig;
    if (validActions.test(action)) {
      return action;
    } else {
      console.log('error >>> you should use add or a');
    }
  }

  getpayload(payload) {
    if (payload) {
      return payload;
    } else {
      console.log('error >> you can not input empty note ');
    }
  }
  valid () {
    console.log('this.action : ', this.action);
    console.log('this.payload : ',this.payload );
    return (this.action && this.payload);
  }
}


// function Input() {

//   console.log("process.argv : ", process.argv);

//   // Get the -x style of arguments from the user
//   const args = minimist(process.argv.slice(2));
//   console.log(" args minimist >>>>> ", args)
//   // Use the args to create our properties with helper methods

//   console.log('Object.keys(args)',Object.keys(args)[1]);
//   this.action = this.getAction(Object.keys(args)[1]);
//   this.payload = this.getpayload(args.add||args.a);
//   // console.log('args.add||args.a',args.add||args.a );
// }

// Input.prototype.getAction = function (action) {
//   let validActions = /add$|a$/ig;
// if (validActions.test(action) ){
//   return action
// }else{
//   console.log('error >>> you should use add or a')
// }
// };

// Input.prototype.getpayload = function (payload) {
//   if (payload){
//     return payload
//   }else{
//     console.log('error >> you can not input empty note ');
//   }

// };

module.exports = Input;
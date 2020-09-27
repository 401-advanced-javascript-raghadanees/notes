'use strict';

class Notes{
  constructor(){

  }

  execute(argument){
    if(argument.payload){
      console.log('you used',argument);
    }
  } 

  add(argument){
    let idNum = Math.floor(Math.random()*100);
    if(argument.payload){
      let newNote = {
                    
        id :idNum ,
        note : argument.payload,
      };
                
      console.log('entered note',newNote);
    }
            
            
  }
    
}


// function Notes(argument){}
//     Notes.prototype.execute = function(argument){
//         if(argument.payload){
//             console.log('you used',argument)
//         }
//     };

    
//  Notes.prototype.add = function(argument){
//     let idNum = Math.floor(Math.random()*100);
//         if(argument.payload){
//             let newNote = {
                
//                 id :idNum ,
//                 note : argument.payload
//             };
//             console.log('id', newNote.id);
//             console.log('entered note',newNote)
//         }
        
        
//     };

module.exports = Notes;

///node index.js --add "This is a really cool thing that I wanted to remember for later"

// npm install --save-dev jest

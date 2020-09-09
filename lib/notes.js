'use strict';

const notes = require('./model/notes-schema.js');


class Notes {
    constructor() {

    }
    async execute(objNote) {

        if (objNote.action === 'add' || objNote.action === 'a') {
            this.add(objNote);
            console.log('you used', objNote);
            this.save(objNote);
        } else if (objNote.action === 'list') {
            await this.list(objNote);
            console.log('list objNote>>>', objNote);

        } else if (objNote.action === 'delete') {
            this.delete(objNote);
            this.list(objNote);
        }
    };

    add(argument) {
        let idNum = Math.floor(Math.random() * 100);
        if (argument.payload) {
            let newNote = {

                id: idNum,
                note: argument.payload,
                category: argument.category
            };

            console.log('entered note', newNote);
        }
    }
    async save(objNote) {
        let item = new notes({ text: objNote.payload, category: objNote.category });
        console.log(' obj to be saved into DB', { text: objNote.payload, category: objNote.category });
        let savedItem = await item.save();
        // console.log('saved Note', this.payload); // >> undefined
        console.log('saved note', savedItem);
        return savedItem;

    }
    //  node index.js --list
    async list(objNote) {
        
        let notesList = await notes.find();
        console.log('notesList .... ', notesList);
        return notesList;
    }


    async delete(objNote) {
        //    let deletedNote = await notes.find({_id: this.id});
        //    notes.deleteOne({_id: this.id})

        // console.log('objNote.id ',{ _id: this.id} )
        // let deletedNote = await notes.findByIdAndDelete({_id : this.id});


        //    console.log('deletedNote ',deletedNote );

    }
};



// execute(argument) {

//     if (argument.payload) {
//         console.log('you used', argument)
//     }
// };

// add(argument) {
//     let idNum = Math.floor(Math.random() * 100);
//     if (argument.payload) {
//         let newNote = {

//             id: idNum,
//             note: argument.payload
//         };

//         console.log('entered note', newNote)
//     }


// };

// save()





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

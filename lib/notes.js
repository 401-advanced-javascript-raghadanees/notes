function Notes(argument){}
    Notes.prototype.execute = function(argument){
        if(argument.payload){
            console.log('you used',argument)
        }
    };

    // var d = new Date();
    // id : d.getSeconds()
 Notes.prototype.add = function(argument){
    var d = new Date();
        if(argument.payload){
            let newNote = {
                // id : makeID() ,
                id : d.getSeconds() ,
                note : argument.payload ,
            };
            console.log('id', newNote.id);
            console.log('entered note',newNote)
        }
        
        // function makeID(){
        //     var idArr =[]
        //     var num = 1;
            
        //     for(var i=0; i<idArr.length; i++){
        //         if(idArr[i] == num ){
        //             num = num + 1;
        //         }else {
        //             idArr.push(num)
        //            return num ; 

        //         }

        //     }
        //    console.log('idArr', idArr);
        //    console.log('num', num)
        // }
    };

    module.exports = Notes;

    ///node index.js --add "This is a really cool thing that I wanted to remember for later"
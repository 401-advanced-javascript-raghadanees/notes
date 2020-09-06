function Notes(argument){}
    Notes.prototype.execute = function(argument){
        if(argument.payload){
            console.log('you used',argument)
        }
    };

 Notes.prototype.add = function(argument){
        if(argument.payload){
            let newNote = {
                id : makeID() ,
                note : argument.payload ,
            };
            console.log('id', newNote.id);
            console.log('entered note',newNote)
        }
        
        function makeID(){
            var idArr =[]
            var num = 1;
            
            for(var i=0; i<idArr.length; i++){
                if(idArr[i] == num ){
                    num = num + 1;
                }else {
                    idArr.push(num)
                   return num ; 

                }

            }
           console.log('idArr', idArr);
           console.log('num', num)
        }
    };

    module.exports = Notes;
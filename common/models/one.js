'use strict';

module.exports = function(One) {
    One.NEW = function (name, age, about ,cb) {
        One.create({
            "name": name,
            "age": age,
            "about": about
          })
            .then(trucks => {
                cb(null, trucks);
            })
            .catch(err => {
                  console.log(err);

            });
        }
           One.remoteMethod('NEW',{
                accepts : [{arg : 'name' , type  : 'string'},{arg:'age' ,type:'number'},{arg:'about' ,type:'string'}],
                returns:{ arg:"list" , type:"araay"},
                http:{verb : 'post'}
       
            });
            
       One.OBJECT = function (value , cb){
     One.create(value ,
       function(err ,res){
           if(err){
               cb(err);
           }
           else{
               cb(null ,res);
           }
       }
     )
       }
       One.remoteMethod('OBJECT' ,{
           accepts:{arg:'value' , type:'object'},
           returns:{ arg:'list', type:'array' },
           http:{verb:'post'}
       })

       One.FIND = function( cb){
        One.find().
          then(ones => {
              cb(null ,ones)
          }).
          catch(err => {
              cb(err);
          })
      }
      One.remoteMethod ('FIND' , {
          returns:{arg:'list', type:'array'},
          http:{ verb:'get'}
      })
  

 
      One.UPDATE = function (value , cb){
        One.upsert(value ,
          function(err ,res){
              if(err){
                  cb(err);
              }
              else{
                  cb(null ,res);
              }
          }
        )
          }
          One.remoteMethod('UPDATE' ,{
              accepts:{arg:'value' , type:'object'},
              returns:{ arg:'list', type:'array' },
              http:{verb:'post'}
          })
}


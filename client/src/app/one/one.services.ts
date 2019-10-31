 import { Injectable } from '@angular/core';
import { OneApi } from'../shared/sdk/services/custom/One';
import { list } from '../list';
import { Observable } from 'rxjs';


@Injectable({
    providedIn : 'root'
})

export class OneServices {

constructor(private noteapi : OneApi ) {
    this.getdata();
}
data:any[] = [];

  insertData(fh){
 return this.noteapi.create(fh)
 
}
 
getdata():Observable<list>{
    return  this.noteapi.FIND()
        }

ondelete(id:number){
    return this.noteapi.deleteById<list>(id)
}        
onupdate( obj){
    
    return this.noteapi.UPDATE( obj)
}
getdatabyId(id:number){
    return this.noteapi.findById(id)
}
}











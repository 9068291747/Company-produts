import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from'@angular/forms';
import { OneServices } from'../one/one.services';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fb:FormBuilder , private oneservice:OneServices , private route:ActivatedRoute , private router:Router) { }
  gform:FormGroup;
  respose:any;
  public data:any={}
    one:any
  // var obj =this.gform.value ;
  onsubmiit(){
   this.route.params.subscribe(params => {
      this.oneservice.onupdate(this.gform.value).subscribe( res =>{ return res})
    //  this.router.navigate(['products']);
    });
  }
  
  
 // onsubmiit(){
  //  this.oneservice.onupdate( this.gform.value).subscribe(
  //    res =>{
  //      return res ;
  //    }
  //  )
 // }
  ngOnInit() {
    this.gform= this.fb.group({
      name:'',
      age :null ,
      about : '',
      
  
    })

    this.route.params.subscribe(params => {
       this.oneservice.getdatabyId(params['id']).subscribe( res =>{
         this.data = res;
       })
     
    });
    }
}

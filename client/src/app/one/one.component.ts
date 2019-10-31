import { Component, OnInit ,  } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from'@angular/forms';
import { OneServices } from'./one.services';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private fb:FormBuilder , private oneservice:OneServices ) { 
  }
  gform:FormGroup;
  respose:any;
  public data=[]
  onsubmiit(){ 
      
     this.oneservice.insertData(this.gform.value).subscribe( data=>{return data}) 
      console.log(this.gform.value);
  }

  ngOnInit() {
    this.gform= this.fb.group({
      name:'',
      age :null ,
      about : ''
  
    })
  }

}

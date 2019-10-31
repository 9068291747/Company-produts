import { Component, OnInit } from '@angular/core';
import { OneServices } from "../one/one.services"; 
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private oneservices :OneServices , private router:Router , private route:ActivatedRoute) { }
 public data =[];

getdaata(){
  this.oneservices.getdata()
    .subscribe(resp => {
        
      var newdata = JSON.stringify(resp)
      resp = JSON.parse(newdata)
      this.data = JSON.parse(newdata)
      console.log(this.data);
    }
    ) 
}
id:number
getdelete(id){
  this.oneservices.ondelete(id).subscribe(
      res => {
        this.data.splice(this.id, 1)
        console.log(`deleted id = >${id}`);
      });
}
  ngOnInit() {
    this.getdaata();
    this.router.navigate['/edit:id']
  }

}

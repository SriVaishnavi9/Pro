import { Component, OnInit } from '@angular/core';
 import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  User:any;
  hotelid:string;
  users:any;
  
  
  constructor(private service:HotelService) { }


 public deleteUser(hotelid:number){
 let resp= this.service.deleteUser(hotelid);
resp.subscribe((data)=>this.users=data);
 }

public findUserByHotelId(){
  let resp= this.service.getUserByHotelId(this.hotelid);
  resp.subscribe((data)=>this.users=data);
 }

  ngOnInit() {
    let resp=this.service.getAllUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
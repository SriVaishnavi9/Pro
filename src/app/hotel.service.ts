import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 export class HotelService {


  // getUsers: any;

  
  
  constructor(private http:HttpClient) { }


  public doRegistration(hotel){
     return this.http.post("http://localhost:4242/hotel",hotel);
 }
 public getAllUsers(){
      return this.http.get("http://localhost:4242/hotel");
    }
  
    public getUserByHotelId(hotelid){
    return this.http.get("http://localhost:4242/Hotel/"+hotelid);
   }

   public deleteUser(hotelid){
      return this.http.delete("http://localhost:4242/hotel/"+hotelid);
  }
  }
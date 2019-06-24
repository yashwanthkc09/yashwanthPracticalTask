import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NodeTaskService {

  constructor(private http:HttpClient) { }


fetchUserDetailsCall(){
    return this.http.get('http://localhost:8099/fetchUserDetailsGetCall');
  }//fetchUserDetailsCall

  fetchUserDetailsOnName(selectUserOnName){
    return this.http.get('http://localhost:8099/fetchUserDetailsOnName'+selectUserOnName);
  }//fetchUserDetailsOnName
  
userLogincall(userDetails){
return this.http.post('http://localhost:8099/nodetaskUserSave',userDetails);
}//userLogincall

}

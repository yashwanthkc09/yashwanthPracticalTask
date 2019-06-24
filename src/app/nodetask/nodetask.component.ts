import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NodeTaskService } from '../service/nodetask.service';

@Component({
selector: 'app-node-task',
templateUrl: './nodetask.component.html',
styleUrls: ['./nodetask.component.css'],
})
export class NodeTaskComponent implements OnInit {
displayUser;
golbalUser;
successResponse;

userDetails = {
  'state':''
}


constructor(private userKey: NodeTaskService) {
  this.successResponse = false;
}

ngOnInit() {
  this.fetchUserDetails();
}

autoSelectState(city){
 if(city === 'Bengaluru')
 {
   return this.userDetails.state = 'Karnataka';
 }
 else if(city === 'Mumbai'){
  return this.userDetails.state='Maharashtra';
 }
 else{
   return this.userDetails.state = 'Andhra Pradesh'
 }
 
}
fetchUserDetails() {
  this.userKey.fetchUserDetailsCall()
    .subscribe((res) => {
      let user = res;
      this.displayUser = res;
      this.golbalUser = user;
    })

}//fetchUserDetails

selectUserOnName(selectUserOnName) {
  this.userKey.fetchUserDetailsOnName(selectUserOnName)
    .subscribe((res) => {
      this.displayUser = res;
      console.log(this.displayUser)

    })
}//selectUserOnName


createUser() {
  this.userKey.userLogincall(this.userDetails).
    subscribe((res) => {
      this.fetchUserDetails();
      this.successResponse = true;
    })
}//createUser

}

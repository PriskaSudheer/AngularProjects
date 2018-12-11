import { Component } from "@angular/core";


@Component({
selector:'app-server',
templateUrl:'./server.component.html'

})
export class ServerComponent{
 ServerID :number= 10;
 ServerStatus :String= "offline";

 constructor(){
     this.ServerStatus=Math.random()>0.5? 'online':'offline';
 }
 getServerStatus(){
     return this.ServerStatus;
 }
 getColor(){
 return this.ServerStatus === 'online'? 'green':'red';
 }
}
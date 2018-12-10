import { Component, OnInit } from '@angular/core';
import { createDecipher } from 'crypto';

@Component({
  //selector:' [app-servers]',
  selector: 'app-servers',
 // template: `
  //<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  ServerCreationStatus="No Server Created";
  constructor() {
    setTimeout( ()=>{
      this.allowNewServer=true;
    },2000);
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.ServerCreationStatus="Server created";
  }

}

import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor() { }
  
  openModal(title , desc){
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("modal").style.display = "block";
    document.getElementById("title").innerHTML = title;
    document.getElementById("desc").innerHTML = desc;
  }

  onCloseHandled(){
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("title").innerHTML = "";
    document.getElementById("desc").innerHTML = "";
  }
}

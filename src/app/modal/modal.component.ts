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
	document.getElementById("cancel").style.display = "inline";
	document.getElementById("alert").style.display = "none";
  }
  
  openModalAlert(title , desc){
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("modal").style.display = "block";
    document.getElementById("title").innerHTML = title;
    document.getElementById("desc").innerHTML = desc;
	document.getElementById("cancel").style.display = "none";
	document.getElementById("alert").style.display = "inline";
  }  

  onCloseHandled(){
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("title").innerHTML = "";
    document.getElementById("desc").innerHTML = "";
	document.getElementById("alert").style.display = "none";
  }
  
  onCloseAlertHandled():boolean{
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("title").innerHTML = "";
    document.getElementById("desc").innerHTML = "";
	document.getElementById("cancel").style.display = "none";
	document.getElementById("alert").style.display = "none";
	return true;
  }  
  
}

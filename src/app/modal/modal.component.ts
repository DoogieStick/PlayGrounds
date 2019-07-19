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
  
  openModalAlert(title , desc, controller): Promise<any>{
    
    return new Promise((resolve, reject) => {
        document.getElementById("backdrop").style.display = "block";
        document.getElementById("modal").style.display = "block";
        document.getElementById("title").innerHTML = title;
        document.getElementById("desc").innerHTML = desc;
    	document.getElementById("cancel").style.display = "none";
    	document.getElementById("alert").style.display = "inline";
        document.getElementById("action").addEventListener("click", function(){
            var res = {
                cod : 0,
                controller
            };
            res.cod = 1;
            res.controller = controller;
            resolve(res);
        });
        document.getElementById("close1").addEventListener("click", function(){resolve(2)});
        document.getElementById("close2").addEventListener("click", function(){resolve(2)});
        document.getElementById("close3").addEventListener("click", function(){resolve(2)});
    });
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

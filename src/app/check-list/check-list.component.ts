import { CheckList } from './check-list.model';
import { Component, OnInit } from '@angular/core';
import { CheckListService } from './check-list.service';

@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

    visible = true;
    breakpoint = 768;
    home = 'Check-list';
    checkLists: CheckList[];

    constructor(private checkListService: CheckListService) { }

    ngOnInit() {
        this.getCheckLists();
        if (screen.width < 768) { this.visible = false; }
    }

    getCheckLists() {
        this.checkListService.getCheckListsFromData()
        .then(result => {
            this.checkLists = result.Items;
            document.getElementById('dim').style.display = 'none';
        })
    }

    deleteCheckList(id) {
    }

    onResize(event) {
        const w = event.target.innerWidth;
        (w >= this.breakpoint) ? this.visible = true : this.visible = false;
    }
}

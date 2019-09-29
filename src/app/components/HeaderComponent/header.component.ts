import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'header-comp',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
    @Input() title: any = 'page one' //variable & attribute

    ngOnChanges(changes): void {


    }
}

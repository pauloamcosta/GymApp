import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenavlist',
  templateUrl: './sidenavlist.component.html',
  styleUrls: ['./sidenavlist.component.css']
})
export class SidenavlistComponent implements OnInit {
@Output()
  closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onClose(){
    this.closeSidenav.emit();

  }

}

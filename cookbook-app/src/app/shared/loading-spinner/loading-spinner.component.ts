import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  styleUrls: ['./loading-spinner.component.css'],
  template:
    '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>',
})
export class LoadingSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

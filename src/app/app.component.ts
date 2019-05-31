import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-plugin-UI';

  cities1: any;
  tableData: any;

  constructor() {
    this.tableData = [];
  }

  ngOnInit() {
    // this.cities1 = [
    //   { label: 'Select City', value: null },
    //   { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
    //   { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
    //   { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
    //   { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
    //   { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    // ];
    for (let i = 0; i < 1000; i++) {
      this.tableData = [...this.tableData, { name: `Name ${i}`, id: i }];
    }
  }
}

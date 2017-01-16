import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input('searchPlaceHolder')
  searchText: string = 'Type your search';
  clear(input) {
    input.value = ''
  }
  constructor() { }

  ngOnInit() {
  }

}

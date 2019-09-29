import { Component, OnInit, OnChanges, DoCheck } from '@angular/core'


@Component({
  selector: 'filter-comp', // <filter-comp></filter-comp>,
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit, OnChanges, DoCheck {

  constructor() {

  }
  ngOnInit(): void {


  }

  ngOnChanges(changes: any): void {


  }

  ngDoCheck(): void {


  }

  usersArray: any = [
    { id: 1, name: 'moniem ahmed', gender: 'm' },
    { id: 2, name: 'ahmed mohamed', gender: 'm' },
    { id: 3, name: 'mona mohamed', gender: 'f' },
    { id: 4, name: 'sara ahmed', gender: 'f' },
    { id: 5, name: 'magdy kamel', gender: 'm' },
    { id: 6, name: 'hossam hassan', gender: 'm' },
    { id: 7, name: 'omnia hossam', gender: 'f' },
    { id: 8, name: 'mai hassan', gender: 'f' },
  ]

  filteredArray: any = [...this.usersArray]

  handleFilter(event) {
    const value = event.target.value
    this.filteredArray = this.usersArray.filter((val, ind) => val.name.includes(value))

  }

  removeUser(id) {
    this.usersArray = this.usersArray.filter((val, ind) => val.id !== id)
    this.filteredArray = this.usersArray
  }

}

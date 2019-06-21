import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  name: string
  phone: string
  location: string
  destination: string
  date: string
  time: string

  constructor(private router: Router) { }

  ngOnInit() {
  }
  diplayPage() {
    this.router.navigate(['/menu/display'], {
      queryParams: {
        name: this.name, phone: this.phone, location: this.location,
        destination: this.destination, date: this.date, time: this.time
      }
    })

  }

}

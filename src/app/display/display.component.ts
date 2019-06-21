import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  name: string
  phone: string
  location: string
  destination: string
  date: string
  time: string


  ngOnInit() {

    this.route.queryParams

      .subscribe(params => {
        console.log(params);

        this.name = params.name;
        this.phone = params.phone;
        this.location = params.location;
        this.destination = params.destination;
        this.date = params.date;
        this.time = params.time;
        console.log(this.name);

      });

  }

  onCheckout() {

    this.router.navigate(['/menu/checkout'])
  }
}


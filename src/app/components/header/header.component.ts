import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from 'src/app/models/character';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemsRoutes: Array<Header> = [
    {
      title: 'Characters',
      route: '/characters'
    },
    {
      title: 'Location',
      route: '/location'
    },
    {
      title: 'Episode',
      route: '/epidode'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getRoute(i: any){
    console.log(i.route, 'route')
    this.router.navigate([i.route])
  }
}

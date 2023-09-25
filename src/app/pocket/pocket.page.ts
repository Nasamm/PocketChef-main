import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.page.html',
  styleUrls: ['./pocket.page.scss'],
})
export class PocketPage implements OnInit {
  foods: any;

  constructor() {}

  ngOnInit() {
    fetch('../../assets/food.json').then(res => res.json()).then(json => {
      console.log('results::',json);
      this.foods = json
    })
  }

}

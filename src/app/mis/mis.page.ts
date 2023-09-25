import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis',
  templateUrl: './mis.page.html',
  styleUrls: ['./mis.page.scss'],
})
export class MisPage implements OnInit {

  constructor() { }
  foods: any;
  ngOnInit() {
    fetch('../../assets/misrecetas.json').then(res => res.json()).then(json => {
      console.log('results::', json);
      this.foods = json
    })
  }

}

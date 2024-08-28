import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

    items=[
      {
        id: 1,
        name:'Product A',
        price: 28800,
        detail:'This is product A',
        ImageURL:'https://www.istudio.store/cdn/shop/files/TH_iPhone_15_Pink_PDP_Image_Position-1A_Pink_Color.jpg?v=1707277877&width=1445'
      },
      {
        id: 2,
        name:'Product B',
        price: 24700,
        detail:'This is product B',
        ImageURL:'https://www.istudio.store/cdn/shop/files/iPhone_14_Purple_PDP_Image_Position-1A_Purple_Color_TH.jpg?v=1707279050&width=1445'
      },
      {
        id: 3,
        name:'Product C',
        price: 20100,
        detail:'This is product C',
        ImageURL:'https://www.istudio.store/cdn/shop/files/iPhone_13_Starlight_PDP_Position-1A_Starlight_Color__TH.jpg?v=1707275353'
      },
      {
        id: 4,
        name:'Product D',
        price: 15500,
        detail:'This is product D',
        ImageURL:'https://www.istudio.store/cdn/shop/files/iphone-12-black-001.jpg?v=1724728003'
      }
  ]

  gotodetail(i:any){
    this.detail.navigateForward('/detail',{state:{i}})
  }

}

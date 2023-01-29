import { Component, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'MalluChitty';
  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  //seed = [...Array(12).keys()]
  seed = [
          {id:1,name:'Price 1'},
          {id:2,name:'Price 2'},
          {id:3,name:'Price 3'},
          {id:4,name:'Price 4'},
          {id:5,name:'Price 5'},
          {id:6,name:'Price 6'},
          {id:7,name:'Price 7'},
          {id:8,name:'Price 8'},
          {id:9,name:'Price 9'},
          {id:10,name:'Price 10'},
          {id:11,name:'Price 11'},
          {id:12,name:'Price 12'},
          {id:13,name:'Price 13'},
          {id:14,name:'Price 14'},
          {id:15,name:'Price 15'},
          {id:16,name:'Price 16'},
          {id:17,name:'Price 17'},
          {id:18,name:'Price 18'},
        ]
  idToLandOn: any;
  items!: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER

  ngOnInit(){
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#FF0000', '#FF88FF', '#00FFFF', '#C0C0C0'
    , '#0000FF', '#808080', '#00008B', '#ADD8E6'
    , '#FFA500', '#800080', '#A52A2A', '#FFCC00'
    , '#800000', '#00FF00', '#008000', '#FF00FF'
    , '#808000', '#000000']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value.id-1],
      text: `${value.name}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
  }
  reset() {
    this.wheel.reset()
  }
  before() {
    //alert('Your wheel is about to spin')
  }

  async spin(prize: any) {
    this.idToLandOn = prize
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {
    alert(`iD : ${this.idToLandOn.id}, N : ${this.idToLandOn.name}`);
    this.reset();
  }
}


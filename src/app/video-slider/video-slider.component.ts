import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.css']
})
export class VideoSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ReadMore:boolean = true
  ReadMore2:boolean = true
  visible:boolean = false
  visible2:boolean = false
  onclick()
  {
    this.ReadMore = !this.ReadMore
    this.visible = !this.visible
    
  }
  onclick2(){
    this.ReadMore2 = !this.ReadMore2
    this.visible2 = !this.visible2
  }

}

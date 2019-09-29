import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider-comp',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  ImagesArray: any = [
    'https://media.peugeot.co.uk/image/63/0/hybrid-range-thumbail.536630.6.jpg?autocrop=1',
    'https://img-ik.cars.co.za/legacy//uploads/legacy/tr:n-news_large/peugeot-onyx-concept.jpg',
    'https://pictures.topspeed.com/IMG/crop/201210/2012-peugeot-508-rxh-28_800x0w.jpg'
  ]
  ImageIndex = 0
  ShowBackButton = false
  ShowNextButton = true
  constructor() { }

  ngOnInit(): void { }

  handleBack() {
    this.ImageIndex -= 1

    if (this.ImageIndex === 0) {
      this.ShowBackButton = false
      this.ShowNextButton=true
    } else {
      this.ShowBackButton = true
      this.ShowNextButton=true
    }
  }

  handleNext() {
    this.ImageIndex += 1
    if (this.ImagesArray.length - 1 === this.ImageIndex) {
      this.ShowNextButton = false
      this.ShowBackButton = true
    } else {
      this.ShowNextButton = true
      this.ShowBackButton=true
    }
  }
}

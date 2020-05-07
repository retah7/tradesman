import { Component, OnInit, OnChanges } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-scan-part',
  templateUrl: './scan-part.component.html',
  styleUrls: ['./scan-part.component.scss']
})
export class ScanPartComponent implements OnInit, OnChanges {
  public webcamImages: any = [];
  public selectedOutlineImage;
  public outlineImageList;
  public webcamImage: WebcamImage = null;
  selected = 'option2';

  showCameraView: boolean;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  constructor() { }

  ngOnInit() {
    this.outlineImageList = [
      { image: 'Engine outline 1', src: '../../assets/images/engines-outlines/utc-engine-outline.png' },
      { image: 'Some Other', src: 'https://via.placeholder.com/300.png/09f/fff' }
    ];
  }

  ngOnChanges() {

  }

  toggleCamera() {
    this.showCameraView = !this.showCameraView;
  }

}

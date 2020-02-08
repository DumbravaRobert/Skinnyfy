import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-camera-tab',
  templateUrl: './camera-tab.page.html',
  styleUrls: ['./camera-tab.page.scss'],
})
export class CameraTabPage implements OnInit {
  barcode: any;

  constructor(barcode:BarcodeScanner) { }

  Encode(){
    var textToEncode = window.prompt("Enter text to encode.");
    this.barcode.encode(this.barcode.Encode.TEXT_TYPE, textToEncode).then((data)=>{
      alert(JSON.stringify(data));
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  Scan(){
    this.barcode.scan().then((barcodeData)=>{
      alert(barcodeData.text);
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  ngOnInit() {
  }

}

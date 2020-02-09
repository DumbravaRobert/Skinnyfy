import { Component } from "@angular/core";
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { FoodArrayService } from '../services/foodArray.service';
import { BarCode } from '../models/barCode.model';
 
@Component({
  selector: "app-camera",
  templateUrl: "camera.page.html",
  styleUrls: ["camera.page.scss"]
})
export class CameraPage {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor(private barcodeScanner: BarcodeScanner, private barCodesArray: FoodArrayService) {
    this.encodeData = "";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
 
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        var barCode: BarCode = this.barCodesArray.findByBarCode(+barcodeData.text);
       
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
 
  
}
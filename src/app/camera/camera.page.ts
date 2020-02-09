import { Component } from "@angular/core";
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { FoodArrayService } from '../services/foodArray.service';
import { BarCode } from '../models/barCode.model';
import { CaloriesCountService } from '../services/caloriesCount.service';

@Component({
  selector: "app-camera",
  templateUrl: "camera.page.html",
  styleUrls: ["camera.page.scss"]
})
export class CameraPage {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner,
              private barCodesArray: FoodArrayService,
              private caloriesCountService: CaloriesCountService) {
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
        this.caloriesCountService.addCalorie(barCode.calories);
        alert("Barcode data " + JSON.stringify(barCode));
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
}
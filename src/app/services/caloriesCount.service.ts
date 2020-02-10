import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { BarCode } from '../models/barCode.model';

@Injectable()
export class CaloriesCountService {


    private dbPath = '/scanedBarCodes';

    caloriesRef: AngularFireList<any> = null;
    barCodesList: any[];

    constructor(private db: AngularFireDatabase) {
        this.caloriesRef = db.list(this.dbPath);
    }

    addBarCodeObj(barCode: BarCode): void {
        this.caloriesRef.push({ ...barCode, date: new Date().toISOString() });
    }

    getAllBarcodes() {
        this.caloriesRef.valueChanges().subscribe((values) => {
            // values.forEach((value) => this.barCodesList.push(value));
            this.barCodesList = values;
        })
        console.log('barcode', this.barCodesList);
        return this.barCodesList;
    }

}
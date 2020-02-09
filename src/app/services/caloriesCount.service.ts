import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { BarCode } from '../models/barCode.model';

@Injectable()
export class CaloriesCountService {


    private dbPath = '/calories';

    caloriesRef: AngularFireList<any> = null;

    constructor(private db: AngularFireDatabase) {
        this.caloriesRef = db.list(this.dbPath);
    }

    addCalorie(calorie: BarCode): void {
        var dateFormat = require('dateformat');
        var now = new Date();
        this.caloriesRef.push({ ...calorie, ...{ date: dateFormat(now, "dd, mm, yy")} });
    }
}
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
        this.caloriesRef.push({ ...calorie, date: new Date() });
    }
}
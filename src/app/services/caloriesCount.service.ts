import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable()
export class CaloriesCountService {


    private dbPath = '/calories';

    caloriesRef: AngularFireList<number> = null;

    constructor(private db: AngularFireDatabase) {
        this.caloriesRef = db.list(this.dbPath);
    }

    addCalorie(calorie: number): void {
        this.caloriesRef.push(calorie);
      }
}
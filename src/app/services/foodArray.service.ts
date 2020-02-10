import { Injectable } from '@angular/core';
import { BarCode } from '../models/barCode.model';

@Injectable()
export class FoodArrayService {

    constructor(){}
    
    barCodesArray: BarCode[] = [{
        "barCode": 9006900014292,
        "name": "Orange Juice",
        "calories": 184,
        "group": "drinks"
    },
    {
        "barCode": 4058172325366,
        "name": "banana",
        "calories": 123,
        "group": "fruites"
    },
    {
        "barCode": 9006900013981,
        "name": "chicken",
        "calories": 401,
        "group": "meet"
    },
    {
        "barCode": 1003817198365,
        "name": "potato",
        "calories": 200,
        "group": "vegetables"
    },
    {
        "barCode": 2003819838365,
        "name": "coffee",
        "calories": 50,
        "group": "drinks"
    },
    {
        "barCode": 5702117198365,
        "name": "tea",
        "calories": 40,
        "group": "drinks"
    },
    {
        "barCode": 1653817348322,
        "name": "milk",
        "calories": 300,
        "group": "dairy"
    },
    {
        "barCode": 9866826576734,
        "name": "cheese",
        "calories": 500,
        "group": "dairy"
    },
    {
        "barCode": 1285017196245,
        "name": "pork",
        "calories": 700,
        "group": "meet"
    },
    {
        "barCode": 8935717198255,
        "name": "apple",
        "calories": 100,
        "group": "fruites"
    },
    {
        "barCode": 6720817190123,
        "name": "chocolate",
        "calories": 600,
        "group": "sweets"
    },
    {
        "barCode": null,
        "name": "null",
        "calories": 0,
        "group": "null"
    },
    ]

    getAllBarcodes() {
        return this.barCodesArray;
    }

    getBarCode(index: number) {
        return this.barCodesArray[index];
    }

    findByBarCode(barCode: number) {
        var returnedBarCode: BarCode;
        this.barCodesArray.forEach(barC => {
            if (barC.barCode = barCode) {
                returnedBarCode = barC;
            }
        })
        return returnedBarCode;
    }
}

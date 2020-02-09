import { Injectable } from '@angular/core';
import { BarCode } from '../models/barCode.model';

@Injectable()
export class FoodArrayService {

    constructor(){}
    
    barCodesArray: BarCode[] = [{
        "barCode": 9006900014292,
        "name": "Orange Juice",
        "calories": 184,
        "group": "fruites"
    },
    {
        "barCode": 12345678,
        "name": "banane",
        "calories": 123,
        "group": "fruites"
    },
    {
        "barCode": 12345678,
        "name": "banane",
        "calories": 123,
        "group": "fruites"
    },
    {
        "barCode": 12345678,
        "name": "banane",
        "calories": 123,
        "group": "fruites"
    }
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

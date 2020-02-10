import { Component, OnInit } from '@angular/core';
import { CaloriesCountService } from '../services/caloriesCount.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  scrollList;

  constructor(private caloriesCountService: CaloriesCountService) { }

  ngOnInit() {
    this.scrollList = this.caloriesCountService.getAllBarcodes();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.scrollList.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.page.html',
  styleUrls: ['./detail-category.page.scss'],
})
export class DetailCategoryPage implements OnInit {

  public toggled: boolean = false;

  public selectedSegmentFeatured: string = 'featured'
  public selectedSegmentCollection: string = 'collection'
  public selectedSegmentTrend: string = 'trend'

  constructor() {
    this.toggled = false;
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectedSegmentFeatured = ev.target.value
    this.selectedSegmentCollection = ev.target.value
    this.selectedSegmentTrend = ev.target.value
  }

  public toggle(): void {
    this.toggled = !this.toggled;
  }

  cancelSearch($event){
    this.toggle();
  }

  onChange($event) {
    console.log($event);
  }

}

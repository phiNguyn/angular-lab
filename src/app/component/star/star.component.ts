import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number = 0;
  starWidth: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  stars: any[] = new Array(5);

  constructor() {}

  ngOnInit() {
    this.updateStarWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating']) { // Sử dụng cú pháp dấu ngoặc vuông để truy cập thuộc tính
      this.updateStarWidth();
    }
  }

  updateStarWidth(): void {
    this.starWidth = (this.rating * 90) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Đánh giá của sản phẩm là ${this.rating} sao!`);
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-more-less-text',
  templateUrl: './show-more-less-text.component.html',
  styleUrls: ['./show-more-less-text.component.css']
})
export class ShowMoreLessTextComponent implements OnInit {

  @Input() text: string;
  @Input() limit = 10;
  truncating = true;

  ngOnInit(): void {
  }
}

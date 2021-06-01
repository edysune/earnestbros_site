import { Component, Input, OnInit } from '@angular/core';
import { GlobalConstants } from '../globals/globalConstants';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {

  @Input() title: string = GlobalConstants.SITE_NAME;
  @Input() logo: string | undefined;
  @Input() picture: string = "../../assets/site_pictures/sunset_1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

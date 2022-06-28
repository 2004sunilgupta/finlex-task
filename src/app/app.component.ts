import {Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isThemeDark = false;

  constructor(
    @Inject( DOCUMENT ) private document: Document,
  ) {
  }

  ngOnInit() {
    this.document.body.classList.add('theme-light');
  }

  toggleTheme(){
    if(this.isThemeDark){
      this.document.body.classList.add('theme-light');
      this.document.body.classList.remove('theme-dark');
    } else {
      this.document.body.classList.add('theme-dark');
      this.document.body.classList.remove('theme-light');
    }
    this.isThemeDark = !this.isThemeDark;
  }
}

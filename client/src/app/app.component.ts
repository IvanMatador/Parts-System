import { NavigationComponent } from './header/navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { ChangeDetectorRef, Component, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit/* , OnChanges */ {
  title = 'Parts';

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  @ViewChild(MainComponent) mainComponent: MainComponent;
  @ViewChild(NavigationComponent) navigationComponent: NavigationComponent
  
  isOpened: boolean

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    
  }

  ngOnInit() {
  }

  openMenu() {
    this.isOpened = true;
  }

  closeSidebar() {
    this.isOpened = false;
  }

}

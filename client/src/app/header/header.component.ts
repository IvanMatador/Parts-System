import { Injectable } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { ChangeColorService } from '../services/change-color.service';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //prodCount: number;
  bgColor: string;

  @ViewChild(NavigationComponent) navigationComponent: NavigationComponent;

  @Output() openMenuClick = new EventEmitter();

  constructor(private changeColorService: ChangeColorService) { }

  ngOnInit(): void {
    //this.prodCount = 2;
    this.changeColorService.color$.subscribe(color => this.bgColor = color)
  }

}

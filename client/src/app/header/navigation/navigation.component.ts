import { Component, OnInit, ViewChild } from '@angular/core';
import { MainMenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   /*  this.matMenu = [
      {
        id: 1,
        name: 'Главная',
        iconName: 'home',
        isEnable: true,
        httpRef: '',
      },
      {
        id: 2,
        name: 'Каталог',
        iconName: 'list_alt',
        isEnable: true,
        httpRef: '',
      },
      {
        id: 3,
        name: 'Корзина',
        iconName: 'shopping_cart',
        isEnable: true,
        httpRef: '',
      },
      {
        id: 4,
        name: 'Заказы',
        iconName: 'add_task',
        isEnable: false,
        httpRef: '',
      },
      {
        id: 5,
        name: 'Пополнить баланс',
        iconName: 'account_balance_wallet',
        isEnable: false,
        httpRef: '',
      },
      {
        id: 6,
        name: 'Отчеры',
        iconName: 'grading',
        isEnable: false,
        httpRef: '',
      },
      {
        id: 7,
        name: 'Новости',
        iconName: 'fiber_new',
        isEnable: false,
        httpRef: '',
      },
      {
        id: 8,
        name: 'Прайс-листы',
        iconName: 'request_page',
        isEnable: false,
        httpRef: '',
      },
      {
        id: 9,
        name: 'Справка',
        iconName: 'support_agent',
        isEnable: false,
        httpRef: '',
      },
      {
        id: 10,
        name: 'Опрос',
        iconName: 'help_outline',
        isEnable: true,
        httpRef: '',
      },
      {
        id: 11,
        name: 'Настройки',
        iconName: 'miscellaneous_services',
        isEnable: true,
        httpRef: '',
      },
    ]; */
  }

  clickMenuItem(event) {
    console.log(event)
  }

  fetchAllButtons() {

  }


}

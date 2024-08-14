import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // в declarations регистрируем компоненты, которые относятся к модулю
  ],
  imports: [
    BrowserModule
    // в imports указываем зависимости модуля от других модулей.
    // В данном случае корневой модуль импортит BrowserModule, который позволяет Angular приложению работать в браузере
  ],
  providers: [], // про providers расскажем в дальнейших уроках
  bootstrap: [AppComponent], // bootstrap указывается только в корневом модуле. Указывает, корневой компонент
  exports: [] // указывает, какие сущности несёт с собой модуль, когда этот модуль импортуруют в другой модуль. Подробнее в следующем уроке
})
export class AppModule { }

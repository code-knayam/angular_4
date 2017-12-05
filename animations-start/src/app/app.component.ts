import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  list: string[] = ['item 1'];

  onAdd(item: string) {
    this.list.push(item);
  }

}

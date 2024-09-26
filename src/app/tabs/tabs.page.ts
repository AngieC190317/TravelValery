import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  instructionMessage: string = '';

  showInstruction(message: string) {
    this.instructionMessage = message;
  }

  hideInstruction() {
    this.instructionMessage = '';
  }
}

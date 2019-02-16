import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../providers/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messages: Array<any> = [];

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  deleteItem(message) {
    this.messageService.delMessage(message);
  }

  getMessages() {
    this.messages = this.messageService.getMessages();
  }
}

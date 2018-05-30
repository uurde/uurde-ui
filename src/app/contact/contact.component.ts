import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit(contact) {
    this._contactService.createContact(contact.value);
  }
}

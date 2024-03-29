import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '@src/app/interfaces/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.buildForm();
  }

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  async onSubmit() {
    console.log("onSubmit", this.contactForm);
    if (this.contactForm.valid) {
      console.log("form is valid", this.contactForm.value);

      const contactData: Contact = new Contact(
        this.contactForm.get("name")?.value,
        this.contactForm.get("lastName")?.value,
        this.contactForm.get("email")?.value,
        this.contactForm.get("phone")?.value,
        this.contactForm.get("subject")?.value,
        this.contactForm.get("message")?.value
      );

      console.log("onSubmit().contactData", contactData);
      await this.contactService.contact(contactData);
    } else {
      console.error("form is not valid", this.contactForm.value);
    }
  }
}

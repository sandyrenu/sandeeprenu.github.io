import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    const serviceID = 'service_06xn052';      
    const templateID = 'template_t19axwb';    
    const publicKey = 'TotLua7zxJuB00pcv';   

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('✅ Message sent successfully!');
        this.formData = { name: '', email: '', message: '' };
      }, (error) => {
        alert('❌ Failed to send message. Error: ' + JSON.stringify(error));
      });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 accordionItems = [
    {
      title: 'Project One: Rate Limiter',
      content: 'Built a distributed API rate limiter using Redis, Spring Boot, and middleware queues like RabbitMQ.',
      open: true,
    },
    {
      title: 'Project Two: Person Detection with CNN',
      content: 'Used Python and Keras to train a model for detecting individuals in surveillance footage, improving accuracy and safety monitoring.',
      open: false,
    },
    // Add more items here...
  ];

  toggleAccordion(index: number) {
    this.accordionItems[index].open = !this.accordionItems[index].open;
  }
}

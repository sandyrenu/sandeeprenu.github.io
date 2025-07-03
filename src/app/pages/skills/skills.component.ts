import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface Skill {
  name: string;
  level: number; // 0–100
}

interface Category {
  id: string;
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CommonModule, MatTabsModule, MatProgressBarModule ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  categories: Category[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      skills: [
        { name: 'Angular',    level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS',   level: 90 },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      skills: [
        { name: 'Java',        level: 75 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Node.js',     level: 65 },
      ]
    },
    {
      id: 'devops-tools',
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git',    level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Azure',  level: 70 },
        { name: 'Redis',  level: 60 },
      ]
    },
  ];
}

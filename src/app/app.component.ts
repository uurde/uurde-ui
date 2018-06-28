import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { ContactService } from './services/contact.service';
import { ProjectService } from './services/projects.service';
import { ResumeService } from './services/resume.service';
import { SkillService } from './services/skill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ugur Degirmenci';
  
  projects: any;
  projectTypes: any;
  resumes: any;
  skills: any;
  project;
  resume;
  skill;
  user;

  siteLoading;

  today: number = Date.now();

  constructor(private _aboutService: AboutService, private _contactService: ContactService, private _projectService: ProjectService, private _resumeService: ResumeService, private _skillService: SkillService) { }

  ngOnInit() {
    this.getProjects();
    this.getProjectTypes();
    this.getResumes();
    this.getSkills();
    this.getUser();
  }

  getUser() {
    this.siteLoading = true;
    this._aboutService.getAbout(2).subscribe(data => {
      this.user = data
    },
      null,
      () => { this.siteLoading = false; });
  }

  onSubmit(contact) {
    this._contactService.insertContact(contact.value);
  }

  getProjects() {
    this.siteLoading = true
    this._projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    },
      null,
      () => { this.siteLoading = false; });
  }

  getProjectTypes() {
    this.siteLoading = true
    this._projectService.getProjectTypes().subscribe(data => {
      this.projectTypes = data;
    },
      null,
      () => { this.siteLoading = false; });
  }

  getResumes() {
    this.siteLoading = true
    this._resumeService.getAllResumes().subscribe(data => {
      this.resumes = data;
    },
      null,
      () => { this.siteLoading = false; });
  }

  getSkills() {
    this.siteLoading = true
    this._skillService.getAllSkills().subscribe(data => {
      this.skills = data;
    },
      null,
      () => { this.siteLoading = false; });
  }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AboutService } from './services/about.service';
import { ContactService } from './services/contact.service';
import { ProjectService } from './services/projects.service';
import { ResumeService } from './services/resume.service';
import { SkillService } from './services/skill.service';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AboutService,
    ContactService,
    ProjectService,
    ResumeService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

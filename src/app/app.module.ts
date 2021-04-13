import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonalFormComponent } from './ui/personal-form/personal-form.component';
import { PersonalElementComponent } from './ui/personal-element/personal-element.component';

@NgModule({
  declarations: [AppComponent, PersonalFormComponent, PersonalElementComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

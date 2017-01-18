import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPreviewerComponent } from './color-previewer/color-previewer.component';
import { ColorSampleComponent } from './color-sample/color-sample.component';
import { CustomeDirectiveComponent } from './custome-directive/custome-directive.component';
import { CollapseOnClickDirective } from './directives/collapse-on-click.directive';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgEventsExampleComponent } from './ng-events-example/ng-events-example.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import {SortPipe} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ColorPickerComponent,
    ColorPreviewerComponent,
    ColorSampleComponent,
    CustomeDirectiveComponent,
    CollapseOnClickDirective,
    NgForExampleComponent,
    NgIfExampleComponent,
    NgEventsExampleComponent,
    PipesExampleComponent,
    SortPipe
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

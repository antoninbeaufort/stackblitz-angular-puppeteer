import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <<<< import it here
import { App } from './main';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    FormsModule, // <<<< And here
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}

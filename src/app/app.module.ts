/**
 * The app.module.ts file is the root module of an Angular application. 
 * It is responsible for bootstrapping the application and configuring its dependencies.
 * why we are using ReactiveFormsModule?
 * ANS:The first step to use reactive-forms is to include ReactiveFormsModule in app.module.ts
 *     under imports section you need to include ReactiveFormsModule.
 *     Inclusion of a module helps to access the TypeScript classes,
 *     directives and pipes available in that module.
 *     To building a reactive-form, we need a set of classes and directives from ReactiveFormsModule
 *     that's why we include it in app.module.ts
 *     ReactiveFormsModule also ensure that the module is imported from '@angular/forms'
 */
import { NgModule } from '@angular/core'; // Decorator that marks a class as a module
import { BrowserModule } from '@angular/platform-browser'; // Module that provides essential browser-specific services, such as DOM rendering, event handling, and Angular Universal support.

import { AppRoutingModule } from './app-routing.module'; // Module that configures the router for the application.
import { AppComponent } from './app.component'; // The root component of the application.
import { RegisterComponent } from './components/register/register.component'; // Component that displays the register form.
import { ReactiveFormsModule } from '@angular/forms'; // Module that provides support for reactive forms.

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [], // Services that are provided by the module.
  bootstrap: [AppComponent] // Root component of the application.
})
export class AppModule { }


/**
 * The register.component.ts file is used to define the component for the register form.
 * A component in Angular is a reusable block of code.
 * There are two main types of components in Angular: template components and directive components.
 * 
 * 
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

//when class implements an interface, it should defined all the properties and functions. Based on this
//principle of object oriented programming, any class implementing 'OnInit' interface should implement 
//ngOnInit() function.
//Since RegisterComponent is implementing OnInit() interface so it will force the class to implement
//ngOnInit() method. An interface is like a blueprint for a class. It defines a set of methods.
//ngOnInit() method is a part of the concept of the 'Component Lifecycle Hooks'
export class RegisterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
//FormGroup and FormControl are classes and registerForm is an instance of FormGroup class
  registerForm = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    gender: new FormControl(""),
    pwd: new FormControl(""),
    rpwd: new FormControl("")
  });

  registerSubmit() {
    console.log(this.registerForm);
  }
}

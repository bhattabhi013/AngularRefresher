import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-login-component',
templateUrl: './login-component.component.html',
styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
name = 'abhishek';
valUserName = '';
valPassName = '';
change(event) {
console.log('event us ' + JSON.stringify(event));
console.log('value is ' + event.srcElement.value);
}
onLogin(text) {
console.log('Login pressed' + text);
console.log('valUserName pressed' + this.valUserName);
console.log('valPassName pressed' + this.valPassName);

if (this.valUserName === this.valPassName) {
console.log('shi hai boss');
this.navigateForm();
}
}
constructor(private router: Router) {}
navigateForm() {
try {
  this.router.navigate(['/input']);
} catch (Err) {
  console.log('Error at navigate' + Err);
}
}

ngOnInit() {
}

}

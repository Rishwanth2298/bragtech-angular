import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';
import {Router} from '@angular/router';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  loading = false;
  buttonText = "Submit";
  submitted = false;
  
  
userModel = new User('','',0,"",'');

nameFormControl = new FormControl("", [
  Validators.required,
  Validators.minLength(3)
]);
emailFormControl = new FormControl("", [
  Validators.required,
  Validators.email
]);
phoneFormControl = new FormControl("", [
  Validators.required,
  Validators.pattern('^\\s*(?:\\+?(\\d{0}))?[-. (]*(\\d{6})[-. )]*(\\d{3})[-. ]*(\\d{2})(?: *x(\\d+))?\\s*$')
]);
websiteFormControl = new FormControl("");
messageFormControl = new FormControl("", [
  Validators.required,
  Validators.maxLength(500)
]);
  FormControl: any;
  myForm: any;
 

onSubmit(){
  if (this.myForm.valid) {
    alert("form submitted");
    this.myForm.reset();
  }
  
}
  OnlyNumbersAllowed(event:any):boolean
    {
      const charCode = (event.which)?event.which : event.keycode

      if(charCode > 31 && (charCode < 48 || charCode > 57))
      {
        console.log('charCode restricted is' + charCode);
        return false;
      }
      return true;
    }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
 
  constructor(private wowService: NgwWowService,private router : Router,private _enrollmentService: EnrollmentService ) { }

  alert: boolean=false;
  goToPage(pageName:string) : void {
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit(): void {
    this.wowService.init();
  }

    reset() {
        this.wowService.init();
    }
    register() {
      this.loading = true;
      this.buttonText = "submitting..";
      let user = {
        name: this.nameFormControl.value,
        email: this.emailFormControl.value,
        phone: this.phoneFormControl.value,
        website: this.websiteFormControl.value,
        message: this.messageFormControl.value
      }
      this._enrollmentService.sendEmail("https://brag-tech.herokuapp.com/", user).subscribe(
        data => {
          let res:any = data; 
          console.log(
            `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
          );
         
 
        }, 
        
        err => {
          console.log(err);
          this.loading = false;
          this.buttonText = "Submit";
        },() => {
          this.loading = false;
          this.buttonText = "Submit";
        }
      );




      Swal.fire({
        title: 'Successfull ',
        text: 'Your Message was sent Successfully',
        icon: 'success',
        showCancelButton:false,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Go to Home Page'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(["/"]);
        
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          
        }
      })
    }
   
    
  }






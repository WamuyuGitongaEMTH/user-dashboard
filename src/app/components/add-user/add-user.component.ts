import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: [''],
    });
  }

  //shortcut to access the controls inside the FormGroup
  get f() {
    return this.userForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.success = false;

    if (this.userForm.invalid) return;

    console.log('✅ User Form Submitted:', this.userForm.value);
    this.success = true;

    // Auto-hide the success message
    setTimeout(() => {
      this.success = false;
    }, 3000);

    this.userForm.reset();
    this.submitted = false;
  }
}

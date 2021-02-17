import { JsonPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  userForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendUser = () => {
    console.log('Send user', this.userForm.value)
  }
}

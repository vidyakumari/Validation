import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    registerationForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerationForm = this.formBuilder.group({
            firstName:new FormControl ('', [Validators.required]),
            lastName:new FormControl ('', [Validators.required]),
            email:new FormControl ('', [Validators.required, Validators.email]),
            phone_number:new FormControl ('', [Validators.required, Validators.minLength(10)]),
            address:new FormControl('', [ Validators.required]),
            addline1:new FormControl('', [Validators.required]),
            addline2:new FormControl('', [Validators.required]),
            District:new FormControl('', [Validators.required]),
            state:new FormControl('', [Validators.required]),
            pincode:new FormControl('', [Validators.required,Validators.minLength(6)])
        });
    }

  
    get f() { return this.registerationForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerationForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }
}

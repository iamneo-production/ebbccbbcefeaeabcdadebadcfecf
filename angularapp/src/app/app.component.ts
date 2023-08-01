import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  userForm!: FormGroup;
  ngOnInit()
  {
    this.userForm=new FormGroup({
      'inputFirstname':new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.minLength(3),Validators.pattern('[a-z]*')]),
      'gender':new FormControl(null,Validators.required),
      'country':new FormControl(null,Validators.required),
      'city':new FormControl(null,Validators.required),
      'inputAge':new FormControl(null)
    });
  }
  checkAgeValid(country:string,age:string){
    if((country=='US' || country=='CA' || country=='IN' || country=='') && (age=='' || isNaN(parseInt(age))))
    return true;
    return false;
  }
}

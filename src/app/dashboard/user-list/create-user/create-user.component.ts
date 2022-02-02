import { Users } from './../../model/users.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: Users = {
    name: "",  
    status: "active"
  }

  constructor(private usersService: UsersService, private router: Router,
    private dialogRef: MatDialogRef<CreateUserComponent>,) { }

  ngOnInit() {
  }

  createUser(): void {
    this.usersService.create(this.user).subscribe(() => {      
      this.usersService.showMessage('Produto criado !!')
      this.dialogRef.close();
    })
  }  
 

}

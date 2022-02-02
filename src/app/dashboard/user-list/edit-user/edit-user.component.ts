import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../model/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  
  user: Users = new Users();
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users,
  ) { 
    this.user.id = this.data.id;
    this.user.name = this.data.name;
    this.user.email = this.data.email;
    this.user.gender = this.data.gender;
    this.user.status = this.data.status;
  }

  ngOnInit() {
  }

  updateUser(): void {
    this.usersService.update(this.user).subscribe(() => {
      this.usersService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(["dashboard"]);
      this.dialogRef.close();
    });
  }
}

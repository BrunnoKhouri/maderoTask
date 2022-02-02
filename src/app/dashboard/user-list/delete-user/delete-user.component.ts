import { Users } from './../../model/users.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Users,
    private usersService: UsersService,
    private dialogRef: MatDialogRef<DeleteUserComponent>,
  ) { }

  ngOnInit() {
  }

  deleteUser(): void{
    this.usersService.delete(`${this.data.id}`).subscribe(() => {
      this.usersService.showMessage('Usuário excluido com sucesso!');
    });
    this.dialogRef.close();
  }
}

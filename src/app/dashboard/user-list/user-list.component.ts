import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from './../model/users.model';
import { UsersService } from './../services/users.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'gender', 'status', 'action'];
  dataSource = new MatTableDataSource<Users>();

  constructor(private usersService: UsersService, private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.tableLoading();
  }

  private tableLoading(): void {
    this.usersService.read().subscribe(users => {
      this.dataSource = new MatTableDataSource<Users>(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;      
    });
  }

  navigateToUserCreate(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe((mustUpdate) => {
      (mustUpdate)
      this.tableLoading();
    });
  }
  navigateToUserUpdate(usersUpdate: Users): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '700px',
      data: usersUpdate
    });
    dialogRef.afterClosed().subscribe((mustUpdate) => {
      (mustUpdate)
      this.tableLoading();
    });
  }

  navigateToUserDelete(usersDelete: Users): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '800px',
      data: usersDelete
    });
    dialogRef.afterClosed().subscribe((mustUpdate) => {
      (mustUpdate)
      this.tableLoading();
    });
  }

}

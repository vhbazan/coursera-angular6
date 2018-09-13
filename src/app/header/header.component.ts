import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material'; 
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginForm() {
    console.log("opeinning form")
    this.dialog.open(LoginComponent, {width: '400px', height: '350px'});
  }

}

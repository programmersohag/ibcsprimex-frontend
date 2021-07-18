import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService) { }

  ngOnInit() {
  }

  handleLogout() {
    this.authenticationService.logout();
  }

}

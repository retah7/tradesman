import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthGuard } from 'src/app/shared';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pushRightClass: string;
  public user;

  constructor( public router: Router, private auth: AuthGuard) {

      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });
  }

  ngOnInit() {
      this.pushRightClass = 'push-right';
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);

      document.getElementById('main_container').classList.toggle('collapsed');
      document.getElementById('sidebar').classList.toggle('collapsed');
  }

  onLoggedout() {
      this.auth.logOut();
  }

}

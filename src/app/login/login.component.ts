import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../part-scanner/services/api.service';
import { AuthGuard } from '../shared';
import { routerTransition } from '../router.animations';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  loginDetails: any = {};

  constructor(
        public router: Router,
        private apiService: ApiService,
        private auth: AuthGuard,
  ) { }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/part-scanner');
    }
  }

  onSubmit() {
    console.log('click submit');
    // this.apiService.login(this.loginDetails).subscribe((loginRes) => {

    //     if ( loginRes.success ) {
    //         console.log(loginRes);
    //         this.auth.logIn(loginRes);
    //     } else {
    //         alert('login credential not found');
    //     }
    // });
    const loginRes = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiYXdpX2NsaWVudF9pZCI6MiwiYXdpcm9zIjoiZGVtb0Bhd2lyb3MuY29tIiwibGV2ZWwiOiJhd2lfdXNlciIsImlhdCI6MTU4MzEyNzQzMSwiZXhwIjoxNTgzMjEzODMxfQ.lSjk7-kvM4tqd0uKmB-paMRErtOzhGL2mqvRRoE6sFU';
    this.auth.logIn(loginRes);
  }

}

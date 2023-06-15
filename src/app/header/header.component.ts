import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logout() {
    // this.router.navigate(['/auth/admin-login']);
    // this.authService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  // Holds the selected user's full details
  user: any;

  // Inject the ActivatedRoute to access route parameters,
  // and the UserService to retrieve user data
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    /**
     * Get the user ID from the route URL parameter (e.g., /dashboard/2)
     * Convert it to a number, then fetch the matching user from the service.
     * The user object will be displayed in the component template.
     */
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(id);
  }
}

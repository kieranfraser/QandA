/**
 * Created by kfraser on 15/03/2016.
 */
import {Component, Inject, forwardRef, OnInit} from '@angular/core';
import {DashboardComponent} from "./dashboard.component";

@Component({
    selector: 'lecturer-auth-cmp',
    templateUrl: 'dashboard/templates/lecturer_auth_modal.html',
})

/**
 * This component is a modal that appears when the user clicks on the all
 * classes button on the dashboard.
 */
export class LecturerAuthComponent implements OnInit{

    unsent: boolean = true;

    constructor(@Inject(forwardRef(() => DashboardComponent)) private _parent:DashboardComponent) {}

    /**
     * ToDo: don't allow lecturers send again or don't let them open this modal.
     */
    ngOnInit(){
        this.unsent = true;
    }

  /**
   * Todo: must add back in the functionality to send an email to the user.
   */
    getAuthorised(){
        console.log("Authorise user");
        /*console.log(JSON.parse(localStorage.getItem('profile')));

        var json = JSON.stringify(JSON.parse(localStorage.getItem('profile')));
        this.httpService.sendAuthEmail(json).subscribe(
            data => console.log(JSON.stringify(data)),
            error => alert(error),
            () => console.log("Email Sent!")
        );*/
        this.unsent = false;
    }

}

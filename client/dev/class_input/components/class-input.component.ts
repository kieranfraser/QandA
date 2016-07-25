/**
 * Created by kfraser on 27/02/2016.
 */
import {Component, Inject, forwardRef, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Lecture} from "../../models/lecture";
import {ClassListComponent} from "../../class_list/components/class-list.component";
import {TagInputComponent} from "../../form_utilities/components/tag-input.component";


declare var firebase: any;

@Component({
    selector: 'class-input',
    templateUrl: 'class_input/templates/class_input.html',
    directives: [TagInputComponent]
})

/**
 * ToDo: Decide whether pushing a class is better than setting in firebase.
 */
export class ClassInputComponent implements OnInit {


    className:string = "";
    /**
     * Inject the dashboard to change the toggle button for viewing the
     * class creation well (disappears on submission).
     * @param _parent - Dashboard component
     */
    constructor(@Inject(forwardRef(() => ClassListComponent)) private _parent:ClassListComponent) {

    }

    /**
     * Lecture is synonymous with class
     */
    newClass: Lecture;
    tags: string[] = [];

    ngOnInit() {}

    /**
     * Used to create a new class - TODO: change from profile to user when user is completed
     * Creator of the class is added as a participant.
     * @param value - input class name
     */
    addClass(){
      this.newClass = new Lecture(this.className, [], [], this.tags);

      //var newClassKey = firebase.database().ref('classes').push().key;
      //firebase.database().ref('classes/' + newClassKey).set(this.newClass);
      firebase.database().ref('classes/' + this.newClass.name).set(this.newClass);

      this.className = "";
      this.tags = [];
    }
}

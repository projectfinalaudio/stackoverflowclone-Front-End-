// FILE PATHS
const logo = "../../../assets/logos/web/png/logo_colored.png" as string;

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
    IconDefinition,
    faBars,
    faSearch,
    faLifeRing,
    faDesktop,
    faAngleDown,
    faQuestion,
    faBriefcase,
    faFileLines,
    faTag,
    faUser,
    faBookmark,
    faMessage,
    faEye,
    faLocation,
    faGlobe,
    faQuestionCircle,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import { AskQuestionComponent } from "../../pop-ups/questions/ask-question/ask-question.component";
import { PopUpService } from "src/app/shared/services/pop-up.service";
import { EditQuestionComponent } from "../../pop-ups/questions/edit-question/edit-question.component";

@Component({
    selector: "home",
    templateUrl: "dashboard.component.html",
    styleUrls: ["dashboard.component.css"],
    standalone: true,
    imports: [CommonModule, RouterModule, FontAwesomeModule, AskQuestionComponent, EditQuestionComponent],
})
export class AdminDashboardComponent implements OnInit {
    /* DEFAULT PROPERTIES */
    isActive: boolean = false;

    /* ICONS */
    logo = logo;
    menuIcon: IconDefinition = faBars;
    searchIcon: IconDefinition = faSearch;
    helpIcon: IconDefinition = faLifeRing;
    desktopIcon: IconDefinition = faDesktop;
    downIcon: IconDefinition = faAngleDown;
    questionMarkIcon: IconDefinition = faQuestion;
    questionMarkIconAlt: IconDefinition = faQuestionCircle;
    briefCaseIcon: IconDefinition = faBriefcase;
    documentIcon: IconDefinition = faFileLines;
    tagIcon: IconDefinition = faTag;
    userIcon: IconDefinition = faUser;
    bookmarkIcon: IconDefinition = faBookmark;
    inboxIcon: IconDefinition = faMessage;
    eyeIcon: IconDefinition = faEye;
    pinIcon: IconDefinition = faLocation;
    globeIcon: IconDefinition = faGlobe;
    trashIcon: IconDefinition = faTrash;

    // INJECT MODULAR SERVICES
    constructor(private popUpService: PopUpService) { }

    ngOnInit() {
        
    }
}
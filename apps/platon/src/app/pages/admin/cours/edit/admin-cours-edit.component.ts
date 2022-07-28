import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-admin-cours-edit',
    templateUrl: './admin-cours-edit.component.html',
    styleUrls: ['./admin-cours-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCoursEditComponent implements OnInit {


    sections: CoursSection[] = [];
    selected?: number;
    name?: string;

    ngOnInit(): void {

    }

    didAddSection(): void{
        this.sections.push({
            name: ''
        })
    }

    didSelect(index: number) {
        this.selected = index;
        this.name = this.sections[index].name;
    }

    didSelectedNameChange(event: string) {
        if (this.selected !== undefined) {
            this.sections[this.selected].name = event;
        }
    }
}


interface CoursSection {
    name: string;
}

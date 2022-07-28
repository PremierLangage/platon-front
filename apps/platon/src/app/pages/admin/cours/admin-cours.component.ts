import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CardDisplay, CardItem } from "@platon/shared/ui/card";


@Component({
    selector: 'app-admin-cours',
    templateUrl: './admin-cours.component.html',
    styleUrls: ['./admin-cours.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCoursComponent implements OnInit {

    display: CardDisplay = 'row';

    items: CardItem[] = [
        {
            title: 'Hello World',
            description: 'Simple description.',
            tags: [
                {
                    icon: 'code-sandbox',
                    text: 'Python',
                    color: 'default'
                },
                {
                    icon: 'code-sandbox',
                    text: 'Devlopement',
                    color: 'default'
                },
                {
                    text: 'Other things',
                    color: 'default'
                }
            ]
        },
        {
            title: 'Other cours',
            description: 'Other cours description.'
        },
        {
            title: 'Programmation en C',
            description: 'Loremp ipsum for prog c description, maybe longer than the others.'
        }
    ]
    constructor() { }

    ngOnInit(): void {

    }

}

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class AdminCoursDetailSectionService {

    private readonly sections = new BehaviorSubject<Section[]>(this.defaultSections);

    get defaultSections(): Section[] {
        return [];
    }

    get sectionsChange(): Observable<Section[]> {
        return this.sections.asObservable();
    }

    setSections(sections?: Section[]): void {
        if (sections) {
            this.sections.next(sections);
        }
    }

    getSection(id: number): Section {
        return this.sections.value[id];
    }

    pushSection(): void {
        this.sections.value.push({ name: '' });
    }

}

export interface Section {
    name?: string;
    content?: string;
}

import { OutputData } from '@editorjs/editorjs';

export interface CoursContent {
    sections?: CoursSectionContent[];
}

export interface CoursSectionContent {
    position: number;
    name: string;
    content: OutputData;
}

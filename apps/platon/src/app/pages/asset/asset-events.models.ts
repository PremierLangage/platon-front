import { EventEmitter } from "@angular/core";

export abstract class AssetEvents {

    finish = new EventEmitter<string>();
    next = new EventEmitter<string>();
    previous = new EventEmitter<string>();

}

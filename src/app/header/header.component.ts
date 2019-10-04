import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector : "app-header",
    templateUrl: "./header.component.html"
})
export class AppHeader {
    collapsed = true;

    @Output() featureType = new EventEmitter<string>();

    onSelect = (feature: string) => {
        this.featureType.emit(feature);
    }
}
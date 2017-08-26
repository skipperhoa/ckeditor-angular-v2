import { Component } from "@angular/core";
import { CKEditorModule } from 'ng2-ckeditor';

@Component({
    selector: 'my-ckeditor',
    template: `
  <ckeditor
    [(ngModel)]="ckeditorContent"
    [config]="{uiColor: '#99000',
    filebrowserImageBrowseUrl :'/assets/ckfinder/ckfinder.html?type=Images',
    filebrowserImageBrowseLinkUrl:'/assets/ckfinder/ckfinder.html',
    filebrowserImageUploadUrl:'/assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    filebrowserUploadUrl:'/assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'}"
    [readonly]="false"
    (change)="onChange($event)"
    (ready)="onReady($event)"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    debounce="500">
  </ckeditor>
  `
})
export class CkeditorComponent {
    public ckeditorContent: string;
    constructor() {
        this.ckeditorContent = `<p>My HTML</p>`;
    }
}
import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {AlbumComponent} from "./album.component";
import {ContactComponent} from "./contact.component";

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumComponent, useAsDefault: true },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html'
})
export class AppComponent {
}
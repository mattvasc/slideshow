import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbnailsMenuComponent } from './thumbnails-menu/thumbnails-menu.component';
import { UserComponent } from './user/user.component';
import { EditPresentationComponent } from './edit-presentation/edit-presentation.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ManagePresentationsComponent } from './manage-presentations/manage-presentations.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TesteComponent } from './teste/teste.component';

const appRoutes: Routes = [
	{ path: 'edit',      component: EditPresentationComponent },
	{ path: 'manage',      component: ManagePresentationsComponent },
	{ path: 'present',      component: EditPresentationComponent },
	{ path: '',
	redirectTo: '/manage',
	pathMatch: 'full'
},
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		ThumbnailsMenuComponent,
		UserComponent,
		EditPresentationComponent,
		WorkspaceComponent,
		ManagePresentationsComponent,
		ToolbarComponent,
		PageNotFoundComponent,
		TesteComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		FontAwesomeModule,
		RouterModule.forRoot(  appRoutes  ),
		NgbModule
	],
	providers: [],
	entryComponents: [TesteComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }


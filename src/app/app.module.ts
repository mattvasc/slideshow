import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbnailsMenuComponent } from './thumbnails-menu/thumbnails-menu.component';
import { UserComponent } from './user/user.component';
import { EditPresentationComponent } from './edit-presentation/edit-presentation.component';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ManagePresentationsComponent } from './manage-presentations/manage-presentations.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		ThumbnailsMenuComponent,
		UserComponent,
		EditPresentationComponent,
		LoginComponent,
		WorkspaceComponent,
		ManagePresentationsComponent,
		ToolbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

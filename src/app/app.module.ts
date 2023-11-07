import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
@NgModule({
	declarations: [AppComponent, SidebarComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		GridModule,
		SidebarModule,
		ListViewModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

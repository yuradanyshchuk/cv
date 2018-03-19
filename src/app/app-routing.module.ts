import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

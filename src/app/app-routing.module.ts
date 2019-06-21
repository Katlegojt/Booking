import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BookComponent } from './book/book.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EndScreenComponent } from './end-screen/end-screen.component';

const routes: Routes = [{ path: '', component: LoginComponent }, { path: 'register', component: RegisterComponent }, {
  path: 'menu', component: MenuComponent,
  children: [{ path: 'book', component: BookComponent }, { path: 'home', component: HomeComponent }, { path: 'about', component: AboutComponent },
   { path: 'contact', component: ContactComponent }, { path: 'display', component: DisplayComponent },{path:'checkout', component:CheckoutComponent},
  {path:'end-screen', component:EndScreenComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './components/profile/profile.component'
import { LoginComponent } from './components/login/login.component'
import { CompAComponent } from './components/comp-a/comp-a.component'
import { UsersComponent } from './components/users/users.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: CompAComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}

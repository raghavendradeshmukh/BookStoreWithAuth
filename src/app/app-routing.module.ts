import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/store/auth.guard';

const routes: Routes = [{
  path: 'books',
  loadChildren: () =>
    import('./books/books.module').then((b) => b.BooksModule),
  canActivate: [AuthGuard]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

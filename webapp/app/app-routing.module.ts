import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/helper/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/weblogin',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./page/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home', showPreHeader: false, showPostHeader: true, showPreFooter: false, showPostFooter: true, showSidebar: true }
  }
  ,
  
  
  

  {
    path: 'logout',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./page/weblogin/weblogin.module').then(
        m => m.WebLoginModule
      ),
    data: {
      title: 'Logout', showPreFooter: true, showPreHeader: true, showPostHeader: false, showPostFooter: false, showSidebar: false
    }

  }
  ,

  

  {

    path: 'aboutus',

    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./page/aboutus/aboutus.module').then(
        m => m.AboutUsModule
      ),
    data: {
      title: 'About Us', showPreHeader: false, showPostHeader: true, showPreFooter: false, showPostFooter: true, showSidebar: true
    }
  }
  ,

  {

    path: 'home',

    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./page/home/home.module').then(
        m => m.HomeModule
      ),
    data: {
      title: 'Home1', showPreHeader: false, showPostHeader: true, showPreFooter: false, showPostFooter: true, showSidebar: true
    }
  }
  ,

  {

    path: 'weblogin',


    loadChildren: () =>
      import('./page/weblogin/weblogin.module').then(
        m => m.WebLoginModule
      ),
    data: {
      title: 'Web Login', showPreHeader: true, showPostHeader: false, showPreFooter: true, showPostFooter: false, showSidebar: false
    }
  }
  ,

 
  {
    path: 'weblogin',
    loadChildren: () =>

      import('./page/weblogin/weblogin.module').then(
        m => m.WebLoginModule
      ),
    data: {
      title: 'Login', showPreHeader: false, showPostHeader: false, showPostFooter: false, showSidebar: false
    }
  }
  ,
  
  {
    path: 'weblogin',
    loadChildren: () =>

      import('./page/weblogin/weblogin.module').then(
        m => m.WebLoginModule
      ),
    data: {
      title: 'Login', showPreHeader: false, showPostHeader: false, showPostFooter: false, showSidebar: false
    }
  }
  ,
  {
    path: 'weblogin',
    loadChildren: () =>

      import('./page/weblogin/weblogin.module').then(
        m => m.WebLoginModule
      ),
    data: {
      title: 'Login', showPreHeader: false, showPostHeader: false, showPostFooter: false, showSidebar: false
    }
  }

  ,
  {
    path: 'pdfviewer',
    loadChildren: () =>
      import('./page/pdfviewer/pdfviewer.module').then(
        m => m.PdfviewerModule
      ),
    data: {
      title: 'pdfviewer', showPreHeader: false, showPostHeader: true, showPreFooter: false, showPostFooter: true, showSidebar: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

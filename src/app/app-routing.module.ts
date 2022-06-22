import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  
  {
    path: 'addimmobilier',
    loadChildren: () => import('./addimmobilier/addimmobilier.module').then( m => m.AddimmobilierPageModule)
  },
  {
    path: 'addinfo',
    loadChildren: () => import('./addinfo/addinfo.module').then( m => m.AddinfoPageModule)
  },
  {
    path: 'addoffre',
    loadChildren: () => import('./addoffre/addoffre.module').then( m => m.AddoffrePageModule)
  },
  
  {
    path: 'ajoutannonce',
    loadChildren: () => import('./ajoutannonce/ajoutannonce.module').then( m => m.AjoutannoncePageModule)
  },
  {
    path: 'categorie',
    loadChildren: () => import('./categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'dashbord',
    loadChildren: () => import('./dashbord/dashbord.module').then( m => m.DashbordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'homemembre',
    loadChildren: () => import('./homemembre/homemembre.module').then( m => m.HomemembrePageModule)
  },
  {
    path: 'immobilier',
    loadChildren: () => import('./immobilier/immobilier.module').then( m => m.ImmobilierPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'membre',
    loadChildren: () => import('./membre/membre.module').then( m => m.MembrePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'voiture',
    loadChildren: () => import('./voiture/voiture.module').then( m => m.VoiturePageModule)
  },
  
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'annoncelist',
    loadChildren: () => import('./annoncelist/annoncelist.module').then( m => m.AnnoncelistPageModule)
  },
  {
    path: 'welkom',
    loadChildren: () => import('./welkom/welkom.module').then( m => m.WelkomPageModule)
  },
  {
    path: 'catadmin',
    loadChildren: () => import('./catadmin/catadmin.module').then( m => m.CatadminPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'adminaddannonce',
    loadChildren: () => import('./adminaddannonce/adminaddannonce.module').then( m => m.AdminaddannoncePageModule)
  },
  {
    path: 'addcategrie',
    loadChildren: () => import('./addcategrie/addcategrie.module').then( m => m.AddcategriePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  
  exports: [RouterModule]
  
})
export class AppRoutingModule {}

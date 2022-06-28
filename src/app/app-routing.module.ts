import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
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
  },
  {
    path: 'addcar',
    loadChildren: () => import('./addcar/addcar.module').then( m => m.AddcarPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'occation',
    loadChildren: () => import('./occation/occation.module').then( m => m.OccationPageModule)
  },
  {
    path: 'notifmembre',
    loadChildren: () => import('./notifmembre/notifmembre.module').then( m => m.NotifmembrePageModule)
  },
  {
    path: 'autre',
    loadChildren: () => import('./autre/autre.module').then( m => m.AutrePageModule)
  },
  {
    path: 'oldcar',
    loadChildren: () => import('./oldcar/oldcar.module').then( m => m.OldcarPageModule)
  },
  {
    path: 'editcar',
    loadChildren: () => import('./editcar/editcar.module').then( m => m.EditcarPageModule)
  },
  {
    path: 'editprofil',
    loadChildren: () => import('./editprofil/editprofil.module').then( m => m.EditprofilPageModule)
  },
  {
    path: 'editimmob',
    loadChildren: () => import('./editimmob/editimmob.module').then( m => m.EditimmobPageModule)
  },
  {
    path: 'editinfo',
    loadChildren: () => import('./editinfo/editinfo.module').then( m => m.EditinfoPageModule)
  },
  {
    path: 'editoldcar',
    loadChildren: () => import('./editoldcar/editoldcar.module').then( m => m.EditoldcarPageModule)
  },
  {
    path: 'editjob',
    loadChildren: () => import('./editjob/editjob.module').then( m => m.EditjobPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  
  exports: [RouterModule]
  
})
export class AppRoutingModule {}

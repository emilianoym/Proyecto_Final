import { Routes } from '@angular/router';
import { AlbumView } from '../views/album-view/album-view';
import { Home } from '../views/home/home';
import { Albums } from '../views/albums/albums';
import { AllAlbums } from '../views/all-albums/all-albums';
import { NewPostView } from '../views/new-post-view/new-post-view';
import { LogIn } from '../views/log-in/log-in';
import { Registro } from '../views/registro/registro';
import { UserView } from '../views/user-view/user-view';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../views/home/home').then(m => m.Home)
  },
  {
    path: 'album/:id',
    loadComponent: () =>
      import('../views/album-view/album-view').then(m => m.AlbumView)
  },
  {
    path: 'albums',
    loadComponent: () =>
      import('../views/albums/albums').then(m => m.Albums)
  },
  {
    path: 'post',
    loadComponent: () =>
      import('../views/post/post').then(m => m.Post)
  },
  {
    path: 'albums/all-albums',
    loadComponent: () =>
      import('../views/all-albums/all-albums').then(m => m.AllAlbums)
  },
  {
    path: 'new-post',
    loadComponent: () =>
      import('../views/new-post-view/new-post-view').then(m => m.NewPostView)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../views/log-in/log-in').then(m => m.LogIn)
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full' },
  {
    path: 'register',
    loadComponent: () =>
      import('../views/registro/registro').then(m => m.Registro)
  },
  {
    path: 'user',
    loadComponent: () =>
      import('../views/user-view/user-view').then(m => m.UserView)
  }



];

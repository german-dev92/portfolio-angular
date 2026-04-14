import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects/tfm',
    loadComponent: () => import('./pages/projects/tfm/project-tfm-page.component').then((m) => m.ProjectTfmPageComponent),
  },
  {
    path: 'projects/real-estate',
    loadComponent: () =>
      import('./pages/projects/real-estate/project-real-estate-page.component').then((m) => m.ProjectRealEstatePageComponent),
  },
  {
    path: 'projects/hotel-reviews',
    loadComponent: () =>
      import('./pages/projects/hotel-reviews/project-hotel-reviews-page.component').then((m) => m.ProjectHotelReviewsPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

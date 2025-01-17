import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/pages/home/home.component';
import { LoginComponent } from './user/pages/auth/login/login.component';
import { SignupComponent } from './user/pages/auth/signup/signup.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'home'  , component: HomeComponent },
  { path: 'login'  , component: LoginComponent },
  { path: 'signup' , component: SignupComponent },
  { path: ""       , redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
];


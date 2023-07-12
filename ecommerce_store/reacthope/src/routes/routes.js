// import { Component } from 'react';
import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import AddProduct from '../components/admin/product/AddProduct';
import ViewProduct from '../components/admin/product/ViewProduct';

const routes = [ 
    {path: '/admin', exact: true, name:'Admin'}, 
    {path: '/admin/dashboard', exact: true, name:'Dashboard', component: Dashboard},
    {path: '/admin/profile', exact: true, name: 'Profile', component: Profile},
    {path: '/admin/addproduct', exact: true, name:'AddProduct', component: AddProduct},
    {path: '/admin/viewproduct', exact: true, name: 'ViewProduct', component: ViewProduct},
    
];
export default routes;
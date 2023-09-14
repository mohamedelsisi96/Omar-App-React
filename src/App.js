import React from 'react'
import {  Component  } from 'react'


import About from './About/About';
import Portofolio from './Portofolio/Portofolio';
import Contact from './Contact/Contact';
import Mainlayout from './Mainlayout/Mainlayout';
import Notfound from './Notfound';
import { RouterProvider , createBrowserRouter, createHashRouter } from 'react-router-dom';
import Start from './Start/Start';
import Productes from './Productes/Productes';


export default class App extends Component {
  routes=createHashRouter([
    {
      path:'/' , element: <Mainlayout /> , children:[
        {index:true,element:<Start/>},
        {path:'about',element:<About />},
        {path:'portofolio',element:<Portofolio />},
        {path:'productes',element:<Productes />},
        {path:'contact',element:<Contact />},
        {path:'*',element:<Notfound />}
      ]
  },
])
  render() {
 
    return (
      <>
     
   <RouterProvider router={this.routes} />
   </>
    )
  }
}


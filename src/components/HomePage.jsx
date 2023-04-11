import React from 'react';
import About from './homepage/About';
import Faq from './homepage/Faq';
import Reviews from './homepage/Reviews';
import HomePageForm from './homepage/HomePageForm';

export default function HomePage() {
   return (
      <main className="main">
         <HomePageForm />
         <About />
         <Faq />
         <Reviews />
      </main>
   );
}

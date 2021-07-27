import React from 'react';
import nutrasiteScreenshot from '../../../images/nutrasite-screenshot.png';
import './styles.css';

const Nutrasite = () => {
  return (
    <>
      <section className='nutra__container'>
        <div className='nutra__wrapper'>
          <h2>NutraSite</h2>&nbsp;
          <h3>Under Construction</h3>
          <div className='nutra__screenshot'>
            <img src={nutrasiteScreenshot} alt='design of app' />
          </div>
          <h4>
            <a
              href='https://www.figma.com/file/YPd9Eef7Vd9VEoQAK32ulO/NutraSite?node-id=0%3A1'
              target='_blank'
              rel='noreferrer'
              className='nutra__highlight'>
              Figma File
            </a>
          </h4>
          <p>
            This is a link to the Figma file for the current design concept of
            the app.
          </p>
          &nbsp;
          <h4>
            <a
              href='https://github.com/Developer3027/NutraSite'
              target='_blank'
              rel='noreferrer'
              className='nutra__highlight'>
              Code repo for NutraSite
            </a>
          </h4>
          <p>
            The app is not deployed as I am working on security and don't want
            to deal with phantom users. Currently the site does not follow the
            design as it is still being built. The main page showing the product
            cards is still waiting on the backend api being built. The cards are
            data driven by the information put in by the admin.
          </p>
          &nbsp;
          <p>
            The first concept of the design can be found in a AWS bucket. The
            2nd and 3rd are currently lost. If you would like, it can be found
            here.{' '}
            <a
              href='http://nutrasite.s3-website.us-east-2.amazonaws.com'
              target='_blank'
              rel='noreferrer'
              className='nutra__highlight'>
              Original NutraSite Concept
            </a>
          </p>
          <p>
            NutraSite is a ecommerce site that has gone under several reworks
            and redesigns. I have landed on this latest version which has a more
            modern and sleek feel in my opinion. The aim with this site is not a
            full blown shop that sells anything, but rather targets smaller,
            more focused shops.
          </p>
          &nbsp;
          <p>
            The original idea came to me as the pandemic closed the US. I wanted
            to provide a way for local shops in the area to be able to continue
            to sell without having physical traffic into the shop by giving a
            shop owner the ability to put the shop online. Local shops would
            have special inventory and target a specific client. Customers are
            more likely to be loyal and frequent. These shops are vital to the
            local economy.
          </p>
          &nbsp;
          <p>
            But from Pizza Shop to Nutrition Shop, how to take that online has
            been my challenge. I would want the shop to do several things to be
            effective. I needed a way for shop owners to be able to add and
            track inventory. Customers should be able to see past purchases and
            it would be nice if they could set purchases up to reoccur, or at
            minimum remember a favorite item. Small shops would have regular
            customers known by employees and the system should recognize this.
            Discounts or some sort of vip status could be used.
          </p>
          &nbsp;
          <p>
            If no traffic is coming in then delivery makes the best since for
            the small shop owner. Delivery enables that personal touch the small
            shop caters too. If the customer lives to far away then mailing
            would be recommended of course, but a small shop could actually grow
            business with a well designed delivery service. So to make the most
            of a delivery and online store experience, one would need some sort
            of interactive chat for customer service.
          </p>
          &nbsp;
          <p>
            I have decided to build this app with React and Firebase. I have a
            base for the app and am working on security. You will be able to
            sign in with google or set up a email and password. I have set up a
            facebook page and will look into sign in with facebook. I have
            advanced to building the backend interface and api using firebase.
          </p>
        </div>
      </section>
    </>
  );
};

export default Nutrasite;

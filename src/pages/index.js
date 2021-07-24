import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import RootImage from '../components/RootImage'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Roundhay Park'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="intro" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Location</h2>
              </header>
              <p>
                Roundhay Park covers over 700 acres of land. An over 1 million
                people visit each year.
              </p>
              <p>
                The park annually hosts bonfires, food events and has had
                performances from the likes of Ed Sheehan & The Rolling Stones.
              </p>
              <a
                className="button special"
                href="https://discoverleeds.co.uk/things-to-see-and-do/outdoors/roundhay-park/#introduction"
              >
                More information on Roundhay Park
              </a>
            </div>
            <div className="col-6">
              <span className="image fit">
                <RootImage filename="pic01.jpg" alt="Roundhay Park Field" />
              </span>
            </div>
          </div>
        </section>

        <section id="things-to-do" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <RootImage
                  filename="pic02.jpg"
                  alt="Fishing at Roundhay Park"
                />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Things to do</h2>
              </header>
              <p>
                Roundhay Park is free for all and boasts beautiful lakes and
                streams, specialist flower gardens, a variety of sports pitches
                (football, rugby, cricket, tennis, grass cycling track) and a
                skate park.
              </p>
              <p>
                Fishing is permitted on Waterloo Lake (the larger of the two).
                Roundhay Park used to be a premier match water, holding major
                fishing competitions. It currently holds large number of Carp
                and Pike. A license is not required to fish here.
              </p>
            </div>
          </div>
        </section>

        <section id="things-to-do-2" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <p>
                Is running your thing? Roundhay park hosts a weekkly Park Run
                every Saturday at 9am. More at the Park Run website:{' '}
                <a
                  href="https://www.parkrun.org.uk/roundhay/aboutus"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.parkrun.org.uk/roundhay/aboutus
                </a>
              </p>
              <p>
                Dog walking is very popular in the park, offering lots of places
                for your canine to safely explore and roam. White Rose Canoeing
                Club based on the main lake offer a £5 ‘come and try’ session.
              </p>
              <a
                className="button special"
                href="https://discoverleeds.co.uk/things-to-see-and-do/outdoors/roundhay-park/#things-to-do"
              >
                More things to do at Roundhay Park
              </a>
            </div>
            <div className="col-6">
              <span className="image fit">
                <RootImage
                  filename="pic03.jpg"
                  alt="Running around Roundhay Park Lake"
                />
              </span>
            </div>
          </div>
        </section>

        <section id="food-drink" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <RootImage filename="pic04.jpg" alt="Roundhay Fox Pub" />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Food and Drink</h2>
              </header>
              <p>
                We would always recommend a picnic on a sunny day, but if you
                have not brought any food - we have some great suggestions!
              </p>
              <p>
                Why not stop for a bite at the Lakeside Cafe, located by the
                Lakeside Car park or treat yourself to a Fancy afternoon tea at
                The Garden Room, situated within the Mansion. Tuck into some pub
                grub at the Roundhay Fox or head to the family owned
                Mediterranean Restaurant Del Verde for a sophisticated meal.
              </p>
              <a
                className="button special"
                href="https://discoverleeds.co.uk/things-to-see-and-do/outdoors/roundhay-park/#food-and-drink"
              >
                Food and drink near Roundhay Park
              </a>
            </div>
          </div>
        </section>

        <section id="amenities" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Amenities</h2>
              </header>
              <p>
                The Lakeside Cafe houses the Public toilets and baby changing
                facilities. here are also customer toilets located within
                Tropical World just around the corner as well as The Roundhay
                Fox & The Mansion.
              </p>
              <p>
                There are 5 car parks at Roundhay Park - all of them are free to
                park. There are also 3 disabled parking bays on Mansion Lane.
              </p>
              <a
                className="button special"
                href="https://discoverleeds.co.uk/things-to-see-and-do/outdoors/roundhay-park/#amenities"
              >
                Amenities at Roundhay Park
              </a>
            </div>
            <div className="col-6">
              <span className="image fit">
                <RootImage
                  filename="pic05.jpg"
                  alt="Car parking at Roundhay Park"
                />
              </span>
            </div>
          </div>
        </section>

        <section id="history" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <RootImage
                  filename="pic06.jpg"
                  alt="Old historic photo of Roundhay Park castle"
                />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>History of Roundhay Park</h2>
              </header>
              <p>
                Roundhay Park was once a hunting ground gifted to Ilbert De Lacy
                by William the Conqueror in the 11th Century. Since then it has
                been passed to many noblemen and was once owned by Henry IV and
                Henry VIII.
              </p>
              <p>
                It was under Thomas Nicholson’s ownership in the 19th century
                that the two lakes were dug by veteran soldiers.
              </p>
              <p>
                Waterloo Lake was built by soldiers after their return from the
                Napoleonic Wars after the Battle of Waterloo. In 1871 Roundhay
                Park was put up for sale and bought by Leeds City Council for
                £139,000.
              </p>
              <a
                className="button special"
                href="https://discoverleeds.co.uk/things-to-see-and-do/outdoors/roundhay-park/#history"
              >
                History of Roundhay Park
              </a>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export default Homepage

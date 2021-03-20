<template>
  <div>
    <header class="position-relative">
      <b-img
        class="header-img"
        src="~assets/images/property/header.jpg"
        alt="side view of house"
      />
      <div class="custom-container">
        <h1>Property Details</h1>
      </div>
    </header>

    <div class="custom-container p-4">
      <section>
        <h2 class="text-center">FOR SALE</h2>
        <p>
          Civil war era farmhouse, with barn, out buildings and tillable
          acreage, woods and perennial (always-flowing) stream through the
          property.
        </p>
      </section>

      <section class="row">
        <div class="col-lg-6">
          <h2>HOUSE</h2>
          <p>
            The house sits high, overlooking a large, nicely landscaped, white
            fenced yard with gorgeous views of the lush, productive fields
            (currently being leased) and a neighboring 18 hole golf course, with
            mountains in the distance.
          </p>
          <p>
            In the family home there are 4 large bedrooms and 3 ½ baths (1 full,
            2 three-quarter, and 1 half-bath), a spacious eat-in kitchen
            adjoining a large formal dining room, a large living room, and a
            bright, cozy sitting room with a beautiful stone fireplace and a
            half bath.
          </p>
          <p>
            The full, finished, walk-out basement includes a large
            family/tv/game room with a brick fireplace and lots of storage
            (including a closet where laundry drops through a chute from the
            bedroom level), a small greenhouse, an additional guest bedroom or
            office, a three piece bathroom, a large laundry room with ample
            storage, a furnace room, a workshop, and a cold cellar.
          </p>
        </div>
        <b-img
          class="col-lg-6"
          src="~assets/images/property/house.jpg"
          alt="side view of house"
        />
      </section>

      <section class="row flex-wrap-reverse">
        <b-img
          class="col-lg-5"
          src="~assets/images/property/garage.jpg"
          alt="inside of garage"
        />
        <div class="col-lg-7">
          <h2>GARAGE</h2>
          <p>
            There is an insulated and finished bonus room above the attached 2.5
            car garage that could be used as an additional playroom, office or
            craft area and has storage space under the eaves.
          </p>
        </div>
      </section>

      <section class="row">
        <div class="col-lg-6">
          <h2>BARN</h2>
          <p>
            The lower level of the 30 X 60 bank barn has double barn doors on
            each end, 2 standing stalls, 3 pens, and a large open area that
            could be enclosed (with full length, cement feeding troughs along
            both sides). The barn’s large, open, upper level, with curved
            laminated rafters, also has a set of two, wide barn doors, accessed
            from the uphill side of the barn. There are stairs that can also be
            used as a hay bale chute.
          </p>
        </div>
        <b-img
          class="col-lg-6"
          src="~assets/images/property/barn.jpg"
          alt="barn exterior"
        />
      </section>

      <section class="row flex-wrap-reverse">
        <b-img
          class="col-lg-5"
          src="~assets/images/property/workshop.jpg"
          alt="inside of workshop"
        />
        <div class="col-lg-7">
          <h2>WORKSHOP</h2>
          <p>
            There is a full length workshop by the barn, with a covered area
            between the two, and overhead garage doors on each end of the
            workshop.
          </p>
        </div>
      </section>

      <section class="row">
        <div class="col-lg-7">
          <h2>OUTBUILDINGS</h2>
          <p>
            The outbuildings include 2 large and 1 smaller pole buildings and a
            detached garage with an attic shop area, all near the barn. There is
            also a large pole building in the meadow, near a stream that runs
            through the entire property.
          </p>
        </div>
        <b-img
          class="col-lg-5"
          src="~assets/images/property/outbuildings.jpg"
          alt="outbuildings from drone view"
        />
      </section>

      <section>
        <h2>LOCATION</h2>
        <p>
          The farm is located just outside Milton, PA, in Northumberland County.
          It is in close proximity to Bucknell University and under an hour and
          a half drive to Penn State University. Evangelical Community Hospital
          is just under 7 miles away and Geisinger Medical Center is just over
          15 miles away. It is also just a few hours from New York,
          Philadelphia, Washington D.C., with easy access to route I-80.
        </p>
        <iframe
          height="400px"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23462.31910890794!2d-76.85238457418735!3d41.01914629829463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cf0d2f4cf23c55%3A0xb67e5d036e6477c1!2s704%20Klinetob%20Rd%2C%20Milton%2C%20PA%2017847!5e1!3m2!1sen!2sus!4v1567349677392!5m2!1sen!2sus"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </section>

      <section class="py-5">
        <h2 class="text-center mb-5">FIND OUT MORE</h2>
        <div class="d-flex justify-content-center mt-3 flex-wrap">
          <b-button variant="outline-dark" to="/house">House Tour</b-button>
          <b-button variant="outline-dark" to="/farm">Farm Tour</b-button>
          <b-button variant="outline-dark" to="/history">Farm History</b-button>
          <b-button variant="primary" to="/contact">Contact Us</b-button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 60px;
}
h2 {
  font-size: 50px;
}
h3 {
  font-size: 40px;
}
section {
  margin-top: 60px;
  padding-top: 60px;
  border-top: 1px solid #eee;
}
header {
  width: 100%;
}
header img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
section img {
  object-fit: cover;
  object-position: center;
}
header h1 {
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 5rem;
  padding: 10px;
  text-shadow: 2px 2px 2px rgb(71 71 71);
}

.highlight {
  color: green;
}

.btn {
  margin: 5px;
}

* {
  font-size: 1.5rem;
}
</style>

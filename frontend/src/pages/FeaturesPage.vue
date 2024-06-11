<template>
  <q-page class="page-container">
    <section>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plus"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-magnifying-glass"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-headset"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-shield"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-file"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="align-items-center">
      <h4 class="title text-center h4-pricing">Choose affordable prices</h4>
      <p class="text-center pricing-subtitle">Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
    </div>
    <br><br>
    <div class="row text-center">
      <div class="col-lg-7">
        <h5 class="h5-pricing" style="margin-right: 200px">
          Monitoring By Application Number
        </h5>
        <p class="pricing-content text-center" style="text-align: left">
          Detailed and specific monitoring of individual applications by their Application Numbers. Includes monitoring of bibliographic data, legal status, documents, and much more.
        </p>
      </div>
      <div class="col-lg-" style="margin-right: 250px;">
        <q-img
          src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          style="width:500px;height: auto"
        />
      </div>
    </div>
    <br><br><br><br><br>
    <div class="row text-center">
      <div class="col-lg-7">
        <q-img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          style="width:500px;height: auto"
        />
      </div>
      <div class="col-lg-3">
        <h5 class="h5-pricing" style="text-align: left">
          Monitoring By Application Number
        </h5>
        <p class="pricing-content text-center" style="text-align: left">
          Detailed and specific monitoring of individual applications by their Application Numbers. Includes monitoring of bibliographic data, legal status, documents, and much more.
        </p>
      </div>
    </div>
    <br><br><br>

  </q-page>
</template>

<script>
export default {
  name: "FeaturesPage"
};
</script>
<style>

section {
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  width: 75%;
  display: grid;
  place-items: center;
}

.column {
  width: 100%;
  padding: 0 1em 1em 1em;
  text-align: center;
}
.card {
  width: 100%;
  height: 100%;
  padding: 2em 1.5em;
  background-color:white;
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;
}
h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f194c;
  margin: 1em 0;
}
p {
  color: #575a7b;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.03em;
}
.icon-wrapper {
  background-color: #3a4f72;
  position: relative;
  margin: auto;
  font-size: 30px;
  height: 2.5em;
  width: 2.5em;
  color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
}
.card:hover {
  background-position: 0 100%;
}
.card:hover .icon-wrapper {
  background-color: #ffffff;
  color: #3a4f72;
}

@media screen and (min-width: 768px) {
  section {
    padding: 0 2em;
  }
  .column {
    flex: 0 50%;
    max-width: 50%;
  }
}
@media screen and (min-width: 992px) {
  .column {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}
</style>

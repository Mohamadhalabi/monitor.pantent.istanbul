<template>
  <q-page class="page-container">
    <div class="pricing-page q-pa-xl" style="padding: 64px 64px">
      <q-container class="page-container">
        <section id="pricing" style="margin-top: 50px;min-height: 800px">
          <div class="container">
            <div class="row text-center">
              <div class="col-lg-12 col-md-12 ml-auto mr-auto">
                <div class="section-title">
                  <div class="title-effect">
                    <div class="bar bar-top"></div>
                    <div class="bar bar-right"></div>
                    <div class="bar bar-bottom"></div>
                    <div class="bar bar-left"></div>
                  </div>
                  <h6 class="h6-pricing">Pricing Plan</h6>
                  <h4 class="title h4-pricing">Choose affordable prices</h4>
                  <p class="pricing-subtitle">Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
                </div>
              </div>
            </div>
            <div class="row align-items-center" style="place-content: center">
              <table class="pricing-table">
                <tr style="background-color:#3a4f72;color: white;font-size: 18px">
                  <th style="padding: 13px 8px">Update Frequency:</th>
                  <th>Monthly</th>
                  <th>By monthly</th>
                  <th>Weekly</th>
                  <th>Quarterly</th>
                </tr>
                <tbody>
                <tr style="background-color: #dee0e6">
                  <td style="padding: 13px 8px;font-size: 18px">Monitoring by Application number</td>
                  <td style="padding: 20px 12px"><span class="price">$2</span><span class="table-subtitle"> per month & application</span></td>
                  <td style="padding: 20px 12px"><span class="price">$4</span><span class="table-subtitle"> per month & application</span></td>
                  <td style="padding: 20px 12px"><span class="price">$6</span><span class="table-subtitle"> per month & application</span></td>
                  <td style="padding: 20px 12px"><span class="price">$8</span><span class="table-subtitle"> per month & application</span></td>
                </tr>
                <tr>
                  <td style="padding: 13px 8px;font-size: 18px">Monitoring By Search Pattern	</td>
                  <td style="padding: 20px 12px"><span class="price">$6</span><span class="table-subtitle"> per month & application</span></td>
                  <td style="padding: 20px 12px"><span class="price">$8</span> <span class="table-subtitle"> per month & application</span></td>
                  <td style="padding: 20px 12px"><span class="price">$12</span> <span class="table-subtitle"> per month & application</span></td>
                  <td style="padding: 20px 12px"><span class="price">$20</span> <span class="table-subtitle"> per month & application</span></td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="align-items-center">
              <h4 class="title text-center h4-pricing">Choose affordable prices</h4>
              <p class="text-center pricing-subtitle">Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
            </div>
            <div class="row text-center">
              <div class="col-lg-6">
                <h5 class="h5-pricing">
                  Monitoring By Application Number
                </h5>
                <p class="pricing-content">
                  Detailed and specific monitoring of individual applications by their Application Numbers. Includes monitoring of bibliographic data, legal status, documents, and much more.
                </p>
              </div>
              <div class="col-lg-6">
                <h5 class="h5-pricing">
                  Monitoring By Search Pattern
                </h5>
                <p class="pricing-content">
                  Monitoring of newly published applications by a search pattern, such as classification, title, applicant, inventor, legal status, and much more. Reliably detects new applications fitting the search parameters.
                </p>
              </div>
            </div>
          </div>
        </section>
      </q-container>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PricingPage"
};
</script>

<style scoped>

h2,h4 {
  font-family: 'Dosis', sans-serif;
  font-style: normal;
  margin-bottom: 10px;
  font-weight: 500;
  color: #1c1d3e;
}


</style>

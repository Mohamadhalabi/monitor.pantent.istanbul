<template>
  <q-page class="page-container">
    <q-page-container>
      <div class="q-pa-md">
        <div class="row" style="margin-top: 220px;min-height: 720px">
          <div class="col-3 col-md-5 col-sm-12 col-xs-12 patent-application">
            <h3 class="text-h5 index-h5-title">Monitoring patent applications through automation.</h3>
            <h1 class="text-h3 index-h3-title">Get critical business intelligence delivered straight to your inbox.</h1>
            <ul class="index-list">
              <li>Enter applications or keywords to receive email alerts</li>
              <li>USPTO PAIR, EPO Register, WIPO (PCT)</li>
              <li>Track office actions, documents, continuity data, family, ...</li>
              <li>Printable PDF reports (e.g. weekly, monthly, quarterly)</li>
            </ul>
            <q-btn class="q-ml-lg index-button" label="Dashboard" to="/dashboard" />
          </div>
          <div class="col-3 col-md-5 col-sm-12 col-xs-12 index-image">
            <img src="../assets/monitoring.jpg" style="border-radius: 4px" class="max-width-50" />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

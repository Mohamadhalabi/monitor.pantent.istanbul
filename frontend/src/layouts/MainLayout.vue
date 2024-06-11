<template>
  <q-layout ref="layout" view="hHh Lpr lff">
    <q-header elevated class="bg-white text-grey-8">
      <q-toolbar>
        <q-toolbar-title shrink class="row items-center no-wrap">
          <a href="/">
            <q-img
              src="../assets/logo.jpg"
              class="q-ml-lg"
              width="200px"
              height="80px"
              alt="monitor.patist"
              rel="preload"
              loading="lazy"
            />
          </a>
        </q-toolbar-title>
        <q-space style="flex-grow: 1 !important" />
        <q-tabs class="gt-sm">
          <q-btn
            class="nav-menu"
            flat
            color="dark"
            label="Home"
            to="/"
          />
          <q-btn
            class="nav-menu"
            flat
            color="dark"
            label="Features"
            to="/features"
          />
          <q-btn
            class="nav-menu"
            flat
            color="dark"
            label="Pricing"
            to="/pricing"
          />
          <q-btn
            class="nav-menu"
            flat
            color="dark"
            label="Sign in"
            to="/login"
          />
          <q-btn
            class="nav-menu"
            flat
            color="dark"
            label="Sign up"
            to="/register"
          />
        </q-tabs>
        <q-space />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view
      />
    </q-page-container>

  </q-layout>

  <q-footer bordered class="bg-white site-footer">
    <!-- Site footer -->
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-12  col-sm-12 col-xs-12">
          <p style="margin-top:40px" class="about-footer">Monitor Patent is an intellectual property tool, focusing on providing full automation on quoting common patent services in Türkiye.
          </p>
          <p class="text-justify footer-address">
            Address: İstiklal Cd. No:189,K:2 D:3, Beyoğlu,
            34433, İstanbul / Türkiye
          </p>
          <br>
<!--          <a href = "mailto: info@patent.istanbul">-->
<!--            <img src="/images/mail-logo.png" class="q-ml-md"  style="max-width: 50px" alt="patent.istanbul" />-->
<!--          </a>-->
<!--          <q-btn unelevated label="Contact Us" class="footer-contact-us"  to="/contact" />-->
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6" style="">
          <span class="footer-titles">Pages</span>
          <ul class="footer-links">
            <li><q-btn unelevated label="Home" to="/" /></li>
            <li><q-btn unelevated label="Features" to="/features" /></li>
            <li><q-btn unelevated label="Prices" to="/prices" /></li>
            <li><q-btn unelevated label="Privacy Policy" class="privacy-policy-btn" to=""  /></li>
          </ul>
        </div>
        <div class="col-lg-3   col-md-4 col-xs-12">
          <span class="footer-titles">Dashboard</span>
          <ul class="footer-links">
            <!--              <li><q-btn unelevated :label="$t('cookie.title')" class="cookie-btn" @click="showCookieOptions" /></li>-->
            <li><q-btn unelevated label="Sign in" to="/login" /></li>
            <li><q-btn unelevated label="Sign up" to="/register" /></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-12">
<!--          <span class="footer-titles">Services</span>-->
<!--          <ul class="footer-links">-->
<!--            <li><q-btn class="footer-services" unelevated label="European Patent Validation" to="/european-patent-validation-in-turkiye" /></li>-->
<!--            <li><q-btn class="footer-services" unelevated label="PCT Entry" to="/pct-national-phase-entry-in-turkiye" /></li>-->
<!--            <li><q-btn class="footer-services" unelevated label="Patent Renewal" to="/patent-renewals-in-turkiye" /></li>-->
<!--            <q-btn unelevated label="API" to="/api" />-->
<!--          </ul>-->
        </div>
      </div>
      <hr>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
            <a href="#">Monitor Patent Türkiye</a>.
          </p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <ul class="social-icons">
<!--            <img src="/images/logo_band_colored.png" class="iyzico-image" loading="lazy" alt="patent.istanbul" />-->
          </ul>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: 'MainLayout',

  data() {
    return {
      leftDrawer: false
    }
  }
}
</script>

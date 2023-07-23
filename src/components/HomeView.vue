<!-- HomeView.vue -->

<template>
  <div class="home-page">
    <h1>NCH Homepage</h1>

    <p>
      <!-- Add your introductory text here -->
    </p>

    <!-- Add your content, features, and sections below -->
    <panel-section>
      <!-- Content for the first panel section -->
      <h2>Panel Section 1</h2>
      <p>This is the content for Panel Section 1.</p>
    </panel-section>

    <panel-section>
      <!-- Content for the second panel section -->
      <h2>Panel Section 2</h2>
      <p>This is the content for Panel Section 2.</p>
    </panel-section>

    <panel-section>
      <!-- Content for the third panel section -->
      <h2>Panel Section 3</h2>
      <p>This is the content for Panel Section 3.</p>
    </panel-section>
  </div>
</template>

<script>
import PanelSection from './PanelSection.vue';

export default {
  name: 'HomeView',
  components: {
    PanelSection,
  },
  // Add your data, methods, computed properties, and other options here
  data() {
    return {
      // Add your data properties here
    };
  },
  methods: {
    // Add your methods here
  },
  computed: {
    // Add your computed properties here
  },
  // Add any other options specific to this component
};
</script>

<style>
/* Add your custom styles here */
.home-page {
  /* Add your styles for the home page here */
}
</style>

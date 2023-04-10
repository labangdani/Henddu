<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div>
      <h5 class="title">Edit Profile</h5>
      <div class="row">
        <div class="col-md-5 pr-md-1">
          <input
            label="Company (disabled)"
            placeholder="Company"
            v-model="model.company"
            disabled
          >
        </div>
        <div class="col-md-3 px-md-1">
          <input
            label="Username"
            placeholder="Username"
            v-model="model.username"
          >
        </div>
        <div class="col-md-4 pl-md-1">
          <input
            label="Email address"
            type="email"
            placeholder="mike@email.com"
          >
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 pr-md-1">
          <input
            label="First Name"
            v-model="model.firstName"
            placeholder="First Name"
          >
        </div>
        <div class="col-md-6 pl-md-1">
          <input
            label="Last Name"
            v-model="model.lastName"
            placeholder="Last Name"
          >
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <input
            label="Address"
            v-model="model.address"
            placeholder="Home Address"
          >
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 pr-md-1">
          <input label="City" v-model="model.city" placeholder="City">
        </div>
        <div class="col-md-4 px-md-1">
          <input
            label="Country"
            v-model="model.country"
            placeholder="Country"
          >
        </div>
        <div class="col-md-4 pl-md-1">
          <input label="Postal Code" placeholder="ZIP Code"> 
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <input>
            <label>About Me</label>
            <textarea
              rows="4"
              cols="80"
              class="form-control"
              placeholder="Here can be your description"
              v-model="model.about"
            >
            </textarea>
        </div>
      </div>
      <button type="primary" fill>Save</button>
    </div>
  </template>
  <script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  };
  </script>
  <style>
</style>
  
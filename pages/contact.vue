<template>
  <main>
    <div class="container">
      <h1 class="py-4">Contact</h1>
      <div class="row">
        <iframe
          class="col-lg-6"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23462.31910890794!2d-76.85238457418735!3d41.01914629829463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cf0d2f4cf23c55%3A0xb67e5d036e6477c1!2s704%20Klinetob%20Rd%2C%20Milton%2C%20PA%2017847!5e1!3m2!1sen!2sus!4v1567349677392!5m2!1sen!2sus"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
        <div class="col-lg-6 d-flex flex-column align-items-start">
          <h2 class="mb-3">Contact Info</h2>
          <h4>Joan Harrison</h4>
          <a href="tel:5555555555">(555) 555-5555</a>
          <a href="mailto:joan@joan.joan">joan@joan.joan</a>
          <h4 class="mt-4">Or send an inquiry</h4>
          <b-form @submit.prevent="submitInquiry">
            <div class="d-flex">
              <div class="m-1">
                <label for="name">Name</label>
                <b-form-input v-model="name" id="name" />
              </div>
              <div class="m-1">
                <label for="phone">Phone</label>
                <b-form-input v-model="phone" id="phone" />
              </div>
              <div class="m-1">
                <label for="email">Email</label>
                <b-form-input type="email" v-model="email" id="email" />
              </div>
            </div>
            <label for="message">Enter Message</label>
            <b-form-textarea
              v-model="message"
              id="message"
              placeholder="Enter your message..."
              rows="3"
            ></b-form-textarea>
            <b-button type="submit" class="my-3" variant="outline-primary">{{btnText}}</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
      btnText: 'Send'
    }
  },
  methods: {
    submitInquiry() {
      const { name, phone, email, message } = this
      this.btnText = 'Sending...'
      axios
        .post(
          '/.netlify/functions/mailgun-form',
          {
            name,
            phone,
            email,
            message
          },
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then(({ data }) => (this.btnText = 'Successfully Sent!'))
        .catch(
          ({ data }) =>
            (this.btnText =
              'Something broke.  Will punish the developer harshly for this.')
        )
    }
  }
}
</script>

<style scoped>
</style>
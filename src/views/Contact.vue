<template>
  <div id="contact">
    <h1>This is an contact page</h1>
    <md-button
      class="md-primary md-raised"
      @click="contactBtn = true">
      <md-icon class="md-size-2x">add</md-icon>
      contact
    </md-button>

    <md-dialog
      :md-active.sync="contactBtn"
    >
      <form class="">
        <FormCard header-color="contact">
          <!-- <p slot="description" class="description">Or Be Classical</p> -->
          <h4 slot="title" class="card-title">contact us</h4>

          <md-field class="md-form-group" slot="select">
            <label>Major Issue...</label>
            <md-select v-model="majorIssue"
                       name="majorIssue"
                       placeholder="MajorIssue">
              <md-option value="1">1</md-option>
              <md-option value="2">2</md-option>
              <md-option value="3">3</md-option>
            </md-select>
          </md-field>

          <md-field class="md-form-group" slot="inputs">
            <md-icon>face</md-icon>
            <label>Nick Name...</label>
            <md-input v-model="nickname"></md-input>
          </md-field>

          <md-field class="md-form-group" slot="inputs">
            <md-icon>phone</md-icon>
            <label>Contact Data...</label>
            <md-input v-model="contactData" type="contactData"></md-input>
          </md-field>

          <md-field class="md-form-group" slot="textarea">
            <label>Issue description ...</label>
            <md-textarea v-model="issueDescription"></md-textarea>
          </md-field>

          <md-button slot="footer" type="reset">
            <!-- <md-icon>reset</md-icon> -->
             reset
          </md-button>
          <md-button slot="footer" type="submit">
            <!-- <md-icon>submit</md-icon> -->
             submit
          </md-button>
        </FormCard>
      </form>

      <!-- <md-dialog-actions>
        <md-button class="md-primary" @click="signInBtn = false">Close</md-button>
        <md-button class="md-primary" @click="signInBtn = false">Save</md-button>
      </md-dialog-actions> -->
    </md-dialog>
  </div>
</template>

<script>
// components元件
import FormCard from '@/components/FormCard.vue'

export default {
  name: 'Contact',
  data () {
    return {
      contactBtn: false,
      majorIssue: null,
      contact: null,
      contactData: null,
      issueDescription: null
    }
  },
  components: {
    FormCard
  }
}
</script>

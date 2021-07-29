<template>
  <div id="contact">

    <md-button class="md-primary md-raised md-fab md-fab-bottom-right" @click="contactBtn = true">
      <md-icon class="md-size-2x">add</md-icon>
    </md-button>

    <md-dialog :md-active.sync="contactBtn">
      <md-dialog-title style=" text-align:center; ">contact us</md-dialog-title>
      <md-dialog-content class="md-scrollbar">
        <form class="w-contact-modal">
            <!-- majorIssue -->
            <md-field class="md-form-group">
              <label>Major Issue...</label>
              <md-select
                v-model="contactForm.majorIssue"
                name="majorIssue"
                placeholder="MajorIssue"
              >
                <md-option value="1">1</md-option>
                <md-option value="2">2</md-option>
                <md-option value="3">3</md-option>
              </md-select>
            </md-field>

            <!-- account -->
            <md-field class="md-form-group">
              <md-icon>face</md-icon>
              <label>Your Account...</label>
              <md-input v-model="contactForm.account"></md-input>
            </md-field>

            <!-- contactData -->
            <md-field class="md-form-group">
              <md-icon>phone</md-icon>
              <label>Contact Data...</label>
              <md-input v-model="contactForm.contactData" type="contactData"></md-input>
            </md-field>

            <!-- issueDescription -->
            <md-field class="md-form-group">
              <label>Issue description ...</label>
              <md-textarea v-model="contactForm.issueDescription"></md-textarea>
            </md-field>

            <!-- button -->
            <div class="md-layout md-alignment-center-space-between">
              <md-button type="reset" class=" md-layout-item md-size-45 md-raised md-primary">
                <!-- <md-icon>reset</md-icon> -->
                reset
              </md-button>
              <md-button type="submit" class=" md-layout-item md-size-45 md-raised md-accent">
                <!-- <md-icon>submit</md-icon> -->
                submit
              </md-button>
            </div>
        </form>
      </md-dialog-content>
    </md-dialog>

    <div class="md-layout md-gutter">
      <div class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-100  md-xsmall-size-100">
        <div class="md-title">常見問題</div>
        <accordion>
          <accordion-item>
            <template slot="accordion-trigger">
              <h3>Question 1</h3>
            </template>
            <template slot="accordion-content">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </template>
          </accordion-item>

          <accordion-item>
            <template slot="accordion-trigger">
              <h3>Question 2</h3>
            </template>
            <template slot="accordion-content">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </template>
          </accordion-item>

          <accordion-item>
            <template slot="accordion-trigger">
              <h3>Question 3</h3>
            </template>
            <template slot="accordion-content">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </template>
          </accordion-item>
      </accordion>
      </div>

      <div class="md-layout-item md-large-size-66 md-medium-size-66 md-small-size-100  md-xsmall-size-100">
        <div class="md-layout md-gutter md-alignment-center">
        <!-- md-layout-nowrap w-contact-content -->
          <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
            <md-card class="md-accent" md-with-hover>
              <md-card-content class="md-layout md-alignment-center">
                <div class="md-layout-item md-size-15">
                <md-avatar class="md-large md-elevation-5">
                  <Avatar />
                </md-avatar>
                </div>
                <div class="md-layout-item md-size-85">
                  <div class="md-layout md-alignment-center-space-between">
                    <div class="md-title">Nick name</div>
                    <div class="md-subhead">110.07.29</div>
                  </div>
                  <span>
                    Lorem adipisci aspernatur saepe quo possimus deserunt accusantium cum explicabo, vero cumque fugiat praesentium enim hic dolorem. Excepturi fuga mollitia alias?
                  </span>
                  <!-- <md-button class="md-icon-button">
                    <md-icon>volunteer_activism</md-icon>
                  </md-button>

                  <md-button class="md-icon-button">
                    <md-icon>cloud_download</md-icon>
                  </md-button> -->
                </div>
              </md-card-content>
            </md-card>
          </div>
          <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
            <md-card class="md-accent" md-with-hover>
              <md-card-content class="md-layout md-alignment-center">
                <div class="md-layout-item md-size-15">
                <md-avatar class="md-large md-elevation-5">
                  <Avatar />
                </md-avatar>
                </div>
                <div class="md-layout-item md-size-85">
                  <div class="md-layout md-alignment-center-space-between">
                    <div class="md-title">Nick name</div>
                    <div class="md-subhead">110.07.29</div>
                  </div>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                    quod neque optio et delectus obcaecati  laudantium!
                  </span>
                  <!-- <md-button class="md-icon-button">
                    <md-icon>volunteer_activism</md-icon>
                  </md-button>

                  <md-button class="md-icon-button">
                    <md-icon>cloud_download</md-icon>
                  </md-button> -->
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// components元件
// import FormCard from '@/components/FormCard.vue'
import Avatar from '@/components/Avatar.vue'
import Accordion from '@/components/accordion.vue'
import AccordionItem from '@/components/accordion-item.vue'

export default {
  name: 'Contact',
  data () {
    return {
      contactBtn: false,
      contactForm: {
        majorIssue: '',
        account: '',
        contactData: '',
        issueDescription: ''
      }
    }
  },
  components: {
    Avatar,
    Accordion,
    AccordionItem
  }
}
</script>

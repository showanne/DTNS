<template>
  <div id="contact">

    <md-button class="md-raised md-fab md-fab-bottom-right" @click="contactBtn = true">
      <!-- <md-icon class="md-size-2x">add</md-icon> -->
      <md-icon class="md-size-2x"
        :md-src="require('../assets/icon/action-addContact.svg')"
      ></md-icon>
    </md-button>

    <!-- 輸入問題表格 modal -->
    <md-dialog :md-active.sync="contactBtn">
      <md-dialog-title style=" text-align:center; ">contact us</md-dialog-title>
      <md-dialog-content class="md-scrollbar">
        <form class="w-contact-modal"
          @submit.prevent="submitIssue"
          @reset="clearForm">
            <!-- majorIssue -->
            <md-field class="md-form-group">
              <label>
                <md-icon>help_outline</md-icon>
                Major Issue...
              </label>
              <md-select
                v-model="contactForm.majorIssue"
                name="majorIssue">
                <md-option><!-- 第一個空白選項 --></md-option>
                <md-option value="&nbsp; 編輯權限">&nbsp; 編輯權限</md-option>
                <md-option value="&nbsp; 網頁功能">&nbsp; 網頁功能</md-option>
                <md-option value="&nbsp; 文章編輯">&nbsp; 文章編輯</md-option>
                <md-option value="&nbsp; 其他">&nbsp; 其他</md-option>
              </md-select>
            </md-field>

            <!-- nickname -->
            <md-field class="md-form-group">
              <md-icon>face</md-icon>
              <label>Your Nickname...</label>
              <md-input v-model="contactForm.nickname"></md-input>
            </md-field>

            <!-- issueDescription -->
            <md-field class="md-form-group">
              <label>Issue description ...</label>
              <md-textarea v-model="contactForm.issueDescription"  md-counter="40"></md-textarea>
            </md-field>

            <!-- button -->
            <div class="md-layout md-alignment-center-space-between">
              <md-button type="reset" class="md-layout-item md-size-45 md-raised md-primary" :disabled="sending">
                <!-- <md-icon>reset</md-icon> -->
                reset
              </md-button>
              <md-button type="submit" class="md-layout-item md-size-45 md-raised md-accent">
                <!-- <md-icon>submit</md-icon> -->
                submit
              </md-button>
            </div>
        </form>
      </md-dialog-content>
    </md-dialog>

    <div class="md-layout">
      <!-- 常見問題 accordion -->
      <div id="question" class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-100  md-xsmall-size-100">
        <div class="md-headline">
          常見問題
          </div>
        <accordion>
          <accordion-item>
            <template slot="accordion-trigger">
              <div class="md-subheading">
                <md-icon :md-src="require('../assets/icon/question.svg')"></md-icon>
                為什麼我只能編輯2個模板？
              </div>
            </template>
            <template slot="accordion-content">
              <span>需登入解鎖更多模板唷 ^^</span>
            </template>
          </accordion-item>

          <accordion-item>
            <template slot="accordion-trigger">
              <div class="md-subheading">
                <md-icon :md-src="require('../assets/icon/question.svg')"></md-icon>
                我該如何看到我剛新增的文章？
              </div>
            </template>
            <template slot="accordion-content">
              <span>
                <ol>
                  <li>最新編輯會在 <router-link to="/collection">分享牆</router-link> 隨機出現唷 ^^</li>
                  <li>或是可以到會員中心的文章管理去檢視文章唷 ^^</li>
                </ol>
              </span>
            </template>
          </accordion-item>

          <accordion-item>
            <template slot="accordion-trigger">
              <div class="md-subheading">
                <md-icon :md-src="require('../assets/icon/question.svg')"></md-icon>
                還沒打完不小心按到送出，該如何修改？
              </div>
            </template>
            <template slot="accordion-content">
              <span>
                <ul>
                  <li>如果您是會員，可以到會員中心的文章管理去編輯文章</li>
                  <li>如果您不是會員，目前不支援對已送出的文章進行再編輯的唷！</li>
                </ul>
              </span>
            </template>
          </accordion-item>
      </accordion>
      </div>

      <!-- 各問題 card -->
      <div id="questionCard" class="md-layout-item md-large-size-66 md-medium-size-66 md-small-size-100 md-xsmall-size-100">
        <div class="md-headline">
          問題討論
          </div>
        <div class="md-layout md-alignment-center">
          <!-- style="flex-direction: column;" -->
        <!-- md-layout-nowrap w-contact-content -->
          <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
            <md-card class="md-accent" md-with-hover>
              <md-card-content class="md-layout md-alignment-center">
                <div class="md-layout-item md-size-15">
                    <Avatar class="md-large md-elevation-5" />
                </div>
                <div class="md-layout-item md-size-85">
                  <div class="md-layout md-alignment-center-space-between">
                    <div class="md-title">
                      Nickname
                      <span class="md-caption">#1</span>
                    </div>
                    <div class="md-subhead">110.08.08</div>
                  </div>
                  <div class="md-subheading">
                    輸入的欄位輸入的欄位輸入的欄位輸入的欄位輸入的輸入的欄位的欄位輸入的欄位的欄位位
                  </div>
                  <div class="md-body-2 mt-large-3" style="margin-top: 0.8rem; color: darkkhaki;">
                    <md-icon>support_agent</md-icon>
                    已做調整，再請您試試唷！
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
          <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
            <md-card class="md-accent" md-with-hover>
              <md-card-content class="md-layout md-alignment-center">
                <div class="md-layout-item md-size-15">
                    <Avatar class="md-large md-elevation-5" />
                </div>
                <div class="md-layout-item md-size-85">
                  <div class="md-layout md-alignment-center-space-between">
                    <div class="md-title">
                      Nickname
                      <span class="md-caption">#1</span>
                    </div>
                    <div class="md-subhead">110.08.08</div>
                  </div>
                  <div class="md-subheading">
                    輸入的欄位好像怪怪的...
                  </div>
                  <div class="md-body-2 mt-large-3" style="margin-top: 0.8rem; color: darkkhaki;">
                    <md-icon>support_agent</md-icon>
                    已做調整，再請您試試唷！
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
          <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100">
            <md-card class="md-accent" md-with-hover>
              <md-card-content class="md-layout md-alignment-center">
                <div class="md-layout-item md-size-15">
                  <Avatar class="md-large md-elevation-5" />
                </div>
                <div class="md-layout-item md-size-85">
                  <div class="md-layout md-alignment-center-space-between">
                    <div class="md-title">
                      Nickname
                      <span class="md-caption">#1</span>
                    </div>
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
                  <Avatar class="md-large md-elevation-5" />
                </div>
                <div class="md-layout-item md-size-85">
                  <div class="md-layout md-alignment-center-space-between">
                    <div class="md-title">
                      Nickname
                      <span class="md-caption">#1</span>
                    </div>
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
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
// import FormCard from '@/components/FormCard.vue'
import Avatar from '@/components/Avatar.vue'
// import Anonymous from '@/components/Anonymous.vue'
import Accordion from '@/components/accordion.vue'
import AccordionItem from '@/components/accordion-item.vue'

export default {
  name: 'Contact',
  mixins: [validationMixin],
  data () {
    return {
      contactBtn: false,
      contactForm: {
        majorIssue: '',
        nickname: '',
        issueDescription: ''
      },
      // 送出訊息
      sending: false
    }
  },
  validations: {
    contactForm: {
      tiissueDescriptiontle: {
        required,
        maxLength: maxLength(40),
        minLength: minLength(1)
      }
    }
  },
  components: {
    Avatar,
    // Anonymous,
    Accordion,
    AccordionItem
  },
  methods: {
    async submitIssue () {
      this.sending = true
      await this.axios.post('/post', this.contactForm)
    },
    clearForm () {
      this.contactForm = {
        majorIssue: '',
        nickname: '',
        issueDescription: ''
      }
    }
  }
}
</script>

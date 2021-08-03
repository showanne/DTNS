<template>
  <div id="edit" class="md-scrollbar">
    <!-- <h1>This is an edit page</h1> -->

    <div class="md-layout md-alignment-space-around">
      <!-- 模板選擇 -->
      <div id="temp"
        class="md-layout-item md-xlarge-size-15 md-large-size-20 md-medium-size-33 md-small-size-100 md-xsmall-size-100"
      >
        <div class="md-layout md-alignment-space-between-center">
          <!-- 有漸層背景及文字 <md-card-media-cover md-text-scrim> -->

          <div v-for="(temp, T) in tempList"
            :key="T" @click="tempShow(T)"
            class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-50 md-small-size-15 md-xsmall-size-15"
          >
            <md-card md-with-hover v-if="temp.show">
              <md-ripple>
                <md-card-media-cover>
                  <md-card-media md-ratio="10:19">
                    <img
                      :src="
                        require('../assets/icon/temp-' + temp.subhead + '.svg')
                      "
                      :alt="temp.subhead"
                    />
                  </md-card-media>

                  <md-card-area>
                    <md-card-header>
                      <span class="md-subhead md-small-hide">
                        {{ temp.name }}
                      </span>
                    </md-card-header>
                  </md-card-area>
                </md-card-media-cover>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>

      <!-- 編輯 -->
      <div id="tempEdit"
        class="md-layout-item md-xlarge-size-85 md-large-size-80 md-medium-size-66 md-small-size-100 md-xsmall-size-100"
      >
        <form @reset="clearForm"
          @submit.prevent="submitEdit">
          <md-card>
            <md-card-header>
              <h4 class="title">
                <!-- Edit temp name -->
                {{ tempList[tempForm.template].name }}
              </h4>
              <!-- <p class="category">小標文字</p> -->
            </md-card-header>

            <md-card-content>
              <form @submit.prevent="submitEdit" @reset="clearForm">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-size-90 md-small-size-80 md-xsmall-size-100">
                    <md-field>
                      <label>Title</label>
                      <md-textarea v-model="tempForm.title" md-autogrow></md-textarea>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-10 md-small-size-20 md-xsmall-size-25">
                    <label class="label">share</label>
                    <md-switch v-model="tempForm.share"
                      class="md-primary" ></md-switch>
                  </div>

                  <div class="md-layout-item md-size-100 md-xsmall-size-75">
                    <md-field>
                      <label>images</label>
                      <md-file v-model="tempForm.image" accept="image/*" />
                    </md-field>
                  </div>

                  <div class="md-layout-item md-size-100">
                    <md-field>
                      <label>Textarea</label>
                      <md-textarea v-model="tempForm.textarea"></md-textarea>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-size-100">
                    <md-field>
                      <label>text</label>
                      <md-input v-model="tempForm.text"></md-input>
                      <span class="md-helper-text">Helper text</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-size-100">
                    <md-field>
                      <md-select
                        v-model="tempForm.select"
                        name="select"
                        id="select"
                        placeholder="select"
                      >
                        <md-option
                          v-for="(Sitem, s) in selectList[tempForm.select]"
                          :value="Sitem"
                          :key="s"
                          >{{ Sitem }}</md-option
                        >
                      </md-select>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-size-100">
                    <md-datepicker
                      v-model="tempForm.datepicker"
                      md-immediately
                    />
                  </div>
                </div>

                <div class="">
                  <md-button class="md-raised" type="reset">
                    RESET
                  </md-button>
                  <md-button class="md-raised" type="submit">
                    Submit
                  </md-button>
                </div>
              </form>
            </md-card-content>
          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      tempList: [
        { show: true, name: '便利貼', subhead: 'postIt' },
        { show: true, name: '美字美句分享', subhead: 'share' },
        { show: this.$store.getters.user.isSignIn, name: '待辦事項', subhead: 'todo' },
        { show: this.$store.getters.user.isSignIn, name: '心情隨筆', subhead: 'diary' },
        { show: this.$store.getters.user.isSignIn, name: '筆記', subhead: 'notes' },
        // { show: this.$store.getters.user.isSignIn, name: '小說', subhead: 'novel' },
        { show: this.$store.getters.user.isSignIn, name: '儲物清單', subhead: 'storage' }
      ],
      selectList: [
        ['開心', '不好', '傷心'], // mood
        ['很重要', '近期須完成', '普通'] // finish
      ],
      tempForm: {
        _id: '', // 方便編輯
        template: 0,
        title: 'text',
        share: true,
        image: null,
        textarea: '',
        text: '',
        select: 1,
        datepicker: Number(new Date()),
        date: new Date().toLocaleString('zh-TW', { hour12: false }) // "2021/8/3 12:28:23"
      }
    }
  },
  methods: {
    tempShow (num) {
      console.log(num)
      this.tempForm.template = num
    },
    submitEdit () {},
    clearForm () {
      this.tempForm.template = ''
      this.tempForm.title = ''
      this.tempForm.share = true
      this.tempForm.image = ''
      this.tempForm.textarea = ''
      this.tempForm.text = ''
      this.tempForm.select = ''
      this.tempForm.datepicker = ''
    }
  },
  computed: {

  }
}
</script>

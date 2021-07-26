<template>
  <div id="edit">
    <!-- <h1>This is an edit page</h1> -->

    <div class="md-layout md-gutter md-alignment-space-around">
      <div id="temp" class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-100">
        <div class="md-layout">
          <!-- 有漸層背景及文字
            <div class="md-layout-item md-size-50 md-xsmall-size-15">
              <md-card md-with-hover>
                <md-ripple>
                  <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="1:1">
                      <img :src="require('../assets/icon/iconpostIt.svg')" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                      <md-card-header>
                        <span class="md-title">G</span>
                        <span class="md-subhead">postIt</span>
                      </md-card-header>
                    </md-card-area>
                  </md-card-media-cover>
                </md-ripple>
              </md-card>
            </div> -->

          <div class="md-layout-item md-size-50 md-xsmall-size-15">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-media-cover>
                  <md-card-media md-ratio="1:1">
                    <img
                      :src="require('../assets/icon/iconpostIt.svg')"
                      alt="Skyscraper"
                    />
                  </md-card-media>

                  <md-card-area>
                    <md-card-header>
                      <span>postIt</span>
                    </md-card-header>
                  </md-card-area>
                </md-card-media-cover>
              </md-ripple>
            </md-card>
          </div>

          <div class="md-layout-item md-size-50 md-xsmall-size-15">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-media-cover>
                  <md-card-media md-ratio="1:1">
                    <img
                      :src="require('../assets/icon/iconshare.svg')"
                      alt="Skyscraper"
                    />
                  </md-card-media>

                  <md-card-area>
                    <md-card-header>
                      <span>share</span>
                    </md-card-header>
                  </md-card-area>
                </md-card-media-cover>
              </md-ripple>
            </md-card>
          </div>

          <div class="md-layout-item md-size-50 md-xsmall-size-15">
            <md-card md-with-hover>
              <md-ripple>
                <md-card-media-cover>
                  <md-card-media md-ratio="1:1">
                    <img
                      :src="require('../assets/icon/iconnotes.svg')"
                      alt="Skyscraper"
                    />
                  </md-card-media>

                  <md-card-area>
                    <md-card-header>
                      <span>notes</span>
                    </md-card-header>
                  </md-card-area>
                </md-card-media-cover>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>

      <div id="tempEdit" class="md-layout-item md-large-size-66 md-medium-size-66 md-small-size-100">
        <md-card>
          <md-card-header>
            <h4 class="title">Edit temp name</h4>
            <!-- <p class="category">小標文字</p> -->
          </md-card-header>

          <md-card-content>
            <form @submit.prevent="submitEdit" @reset="clearForm">
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100 md-size-66">
                  <md-field>
                    <label>Title</label>
                    <md-input v-model="title"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-switch v-model="share" class="md-primary">share</md-switch>
                </div>

                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>images</label>
                    <md-file v-model="image" accept="image/*" />
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>Textarea</label>
                    <md-textarea v-model="textarea"></md-textarea>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                  <md-field>
                    <label>text</label>
                    <md-input v-model="text"></md-input>
                    <span class="md-helper-text">Helper text</span>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                  <md-field>
                    <md-select
                      v-model="select"
                      name="select"
                      id="select"
                      placeholder="select"
                    >
                      <md-option v-for="(Sitem, s) in select.finish"
                      :value="Sitem" :key="s"
                      >{{ Sitem }}</md-option>
                    </md-select>
                  </md-field>
                </div>

                <div class="md-layout-item md-size-100">
                   <md-datepicker v-model="datepicker" md-immediately />
                </div>

              </div>

            <md-button class="md-raised" type="reset">
              RESET
            </md-button>
            <md-button class="md-raised" type="submit">
              Submit
            </md-button>
            </form>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      temp: [
        { name: '便利貼', subhead: 'postIt', src: '' },
        { name: '美字美句分享', subhead: 'share', src: '' },
        { name: '待辦事項', subhead: 'todo', src: '' },
        { name: '心情隨筆', subhead: 'diary', src: '' },
        { name: '筆記', subhead: 'notes', src: '' },
        { name: '小說', subhead: 'novel', src: '' },
        { name: '儲物清單', subhead: 'storage', src: '' }
      ],
      title: 'text',
      share: true,
      image: '',
      textarea: '',
      text: '',
      select: {
        mood: ['開心', '不好', '傷心'],
        finish: ['很重要', '近期須完成', '普通']
      },
      datepicker: Number(new Date())
    }
  },
  methods: {
    submitEdit () {},
    clearForm () {
      this.title = ''
      this.share = true
      this.image = ''
      this.textarea = ''
      this.text = ''
      this.select = ''
      this.datepicker = ''
    }
  }
}
</script>

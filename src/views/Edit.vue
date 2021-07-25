<template>
  <div id="edit">
    <!-- <h1>This is an edit page</h1> -->

    <div class="md-layout md-gutter md-alignment-space-around">
      <div id="temp" class="md-layout-item md-size-33 md-layout">
        <!-- 有漸層背景及文字
        <div class="md-layout-item md-size-50">
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

        <div class="md-layout-item md-size-50">
          <md-card md-with-hover>
            <md-ripple>
              <md-card-media-cover>
                <md-card-media md-ratio="1:1">
                  <img :src="require('../assets/icon/iconpostIt.svg')" alt="Skyscraper">
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

        <div class="md-layout-item md-size-50">
          <md-card md-with-hover>
            <md-ripple>
              <md-card-media-cover>
                <md-card-media md-ratio="1:1">
                  <img :src="require('../assets/icon/iconshare.svg')" alt="Skyscraper">
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

        <div class="md-layout-item md-size-50">
          <md-card md-with-hover>
            <md-ripple>
              <md-card-media-cover>
                <md-card-media md-ratio="1:1">
                  <img :src="require('../assets/icon/iconnotes.svg')" alt="Skyscraper">
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

      <div class="md-layout-item md-size-66">
        <form>
          <md-field>
            <label>Initial Value</label>
            <md-input v-model="initial"></md-input>
          </md-field>

          <md-field>
            <label>Type here!</label>
            <md-input v-model="type"></md-input>
            <span class="md-helper-text">Helper text</span>
          </md-field>

          <md-field>
            <label>With label</label>
            <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
          </md-field>

          <md-field>
            <label>Number</label>
            <md-input v-model="number" type="number"></md-input>
          </md-field>

          <md-field>
            <label>Textarea</label>
            <md-textarea v-model="textarea"></md-textarea>
          </md-field>

          <span>選單</span>
          <md-field>
            <md-select v-model="country" name="country" id="country" placeholder="Country">
              <md-option value="australia">Australia</md-option>
              <md-option value="brazil">Brazil</md-option>
              <md-option value="japan">Japan</md-option>
              <md-option value="united-states">United States</md-option>
            </md-select>
          </md-field>

          <md-field>
            <label for="movies">Movies</label>
            <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>

          <span>檔案上傳</span>
          <md-field>
            <label>Single 單選</label>
            <md-file v-model="single" />
          </md-field>

          <md-field>
            <label>Multiple 多選</label>
            <md-file v-model="multiple" multiple />
          </md-field>

          <md-field>
            <label>Only images 只能傳圖片</label>
            <md-file v-model="single" accept="image/*" />
          </md-field>

          <md-button class="md-raised" type="reset">
            RESET
          </md-button>
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
      initial: 'text',
      type: null,
      withLabel: null,
      number: null,
      textarea: null,
      country: null,
      selectedMovies: [],
      single: null,
      multiple: null
    }
  }
}
</script>

<template>
  <div id="memberReply">
    memberReplymemberReply
    <div class="md-layout md-alignment-centered">
      <div class="md-md-layout-item">
        <md-card>
           <md-field>
              <label>send</label>
              <md-input v-model="send"></md-input>
              <md-icon>send</md-icon>
            </md-field>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberReply',
  data () {
    return {
      send: ''
    }
  }
}
</script>

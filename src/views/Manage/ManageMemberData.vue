<template>
  <div id="manageMemberData">
    <md-table v-model="memberData" @md-selected="onSelect">
      <md-table-toolbar>
        <!-- <h1 class="md-title">MemberData</h1> -->
      </md-table-toolbar>

      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }"
        :md-disabled="item.name.includes('Admin')"
        md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="Name / Account" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Avatar" md-sort-by="avatar">
          <md-avatar v-if="item.avatar" class="md-large">
            <img :src="item.avatar" :alt="item.name" width="90">
          </md-avatar>
        </md-table-cell>
        <md-table-cell md-label="Line" md-sort-by="line">{{ item.line }}</md-table-cell>
        <md-table-cell md-label="Token" md-sort-by="token" v-if="token">
          <!-- v-if="token" 是否登入中 -->
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ManageMemberData',
  data () {
    return {
      selected: {},
      memberData: []
    }
  },
  methods: {
    onSelect (items) {
      this.selected = items
    },
    getAlternateLabel (count) {
      let plural = ''

      if (count > 1) {
        plural = 's'
      }

      return `${count} user${plural} selected`
    }
  }
}
</script>

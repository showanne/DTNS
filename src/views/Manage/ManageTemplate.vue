<template>
  <div id="manageTemplate">
    <md-table v-model="tempList" md-fixed-header>
      <!-- <md-table-toolbar>
        <h1 class="md-title">Template</h1>
      </md-table-toolbar> -->

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="index" md-sort-by="index" md-numeric>{{ item.index }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Subhead" md-sort-by="subhead">{{ item.subhead }}</md-table-cell>
        <md-table-cell md-label="Show" md-sort-by="show">
          <md-switch v-model="item.show" class="md-primary">
          </md-switch>
        </md-table-cell>
        <md-table-cell md-label="Input" md-sort-by="input">{{ item.input }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ManageTemplate',
  data () {
    return {
      tempList: [
        { index: 0, show: true, name: '便利貼', subhead: 'postIt', input: '' },
        { index: 1, show: true, name: '美字美句分享', subhead: 'share', input: '' },
        { index: 2, show: false, name: '待辦事項', subhead: 'todo', input: '' },
        { index: 3, show: false, name: '心情隨筆', subhead: 'diary', input: '' },
        { index: 4, show: false, name: '筆記', subhead: 'notes', input: '' },
        { index: 5, show: false, name: '小說', subhead: 'novel', input: '' },
        { index: 6, show: false, name: '儲物清單', subhead: 'storage', input: '' },
        { index: 7, show: false, name: '敬請期待', subhead: 'continue', input: '' }
      ]
    }
  }
}
</script>

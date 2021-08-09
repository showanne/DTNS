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
          <!-- {{ item.show === 'true' ? '開放' : '僅登入可見' }} -->
          <md-switch v-model="item.show" class="md-primary"></md-switch>
        </md-table-cell>
        <md-table-cell md-label="Input" md-sort-by="input">{{ item.input }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ManageTemplate'
}
</script>

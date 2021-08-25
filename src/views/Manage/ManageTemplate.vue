<template>
  <div id="manageTemplate">
    <md-table v-model="tempList" md-height="unset" md-fixed-header>
      <!-- <md-table-toolbar>
        <h1 class="md-title">Template</h1>
      </md-table-toolbar> -->

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="編號" md-sort-by="index" md-numeric>{{ item.index }}</md-table-cell>
        <md-table-cell md-label="模板名稱" md-sort-by="name">{{ item.name }}</md-table-cell>
        <!-- <md-table-cell md-label="Subhead" md-sort-by="subhead">{{ item.subhead }}</md-table-cell> -->
        <md-table-cell md-label="是否開放" md-sort-by="show">
          <!-- {{ item.show === 'true' ? '開放' : '僅登入可見' }} -->
          <md-switch v-model="item.show" class="md-primary"></md-switch>
        </md-table-cell>
        <md-table-cell md-label="各模板欄位" md-sort-by="input">
          <!-- {{ item.input }} -->
            <md-chip class="md-accent"
             v-for="(input, i) in item.input"
             :key="i" md-deletable>
              {{ input.field }}
            </md-chip>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ManageTemplate'
}
</script>

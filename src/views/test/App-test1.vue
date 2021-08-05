<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
          <!-- <span>Nav</span> -->
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <!-- <span class="md-list-item-text">Inbox</span> -->
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <!-- <span class="md-list-item-text">Sent Mail</span> -->
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <!-- <span class="md-list-item-text">Trash</span> -->
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <!-- <span class="md-list-item-text">Spam</span> -->
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam doloribus soluta accusantium nemo dolore accusamus odit magni eos, nisi, reiciendis sint mollitia ratione minus a deserunt autem enim aspernatur similique!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quo architecto saepe mollitia quasi consectetur, ullam veniam quaerat vero. Voluptate quia ducimus ad omnis accusamus deserunt repellat ab possimus eius voluptas quo voluptatibus, neque eum numquam suscipit rem? Rerum exercitationem optio corporis recusandae aut excepturi aspernatur voluptates animi commodi dolorem non deserunt debitis laudantium unde rem sed ipsa vel, amet tenetur porro quos culpa id laborum dignissimos. Modi perferendis sum dolor, sit amet consectetur adipisicing elit. Veniam doloribus soluta accusantium nemo dolore accusamus odit magni eos, nisi, reiciendis sint mollitia ratione minus a deserunt autem enim aspernatur similique!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quo architecto saepe mollitia quasi consectetur, ullam veniam quaerat vero. Voluptate quia ducimus ad omnis accusamus deserunt repellat ab possimus eius voluptas quo voluptatibus, neque eum numquam suscipit rem? Rerum exercitationem optio corporis recusandae aut excepturi aspernatur voluptates animi commodi dolorem non deserunt debitis laudantium unde rem sed ipsa vel, amet tenetur porro quot excepturi aspernatur voluptates animi commodi dolorem non deserunt debitis laudantium unde rem sed ipsa vel, amet tenetur porro quos culpa id laborum dignissimos. Modi perferendis sum dolor, sit amet consectetur adipisicing elit. Veniam doloribus soluta accusantium nemo dolore accusamus odit magni eos, nisi, reiciendis sint mollitia ratione minus a deserunt autem enim aspernatur similique!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quo architecto saepe mollitia quasi consectetur, ullam veniam quaerat vero. Voluptate quia ducimus ad omnis accusamus deserunt repellat ab possimus eius voluptas quo voluptatibus, neque eum numquam suscipit rem? s culpa id laborum dignissimos. Modi perferendis voluptates repellat assumenda pariatur a architecto, saepe ipsam, cupiditate voluptas temporibus corrupti, nam adipisci aliquam dicta. Minima, neque nisi? Autem quas sapiente alias iste dolor non. Nemo, culpa. Dolore perspiciatis nobis consequatur ut, natus sed adipisci et ducimus quod a hic cum ullam sequi culpa itaque, architecto praesentium necessitatibus quaerat. Laudantium porro maxime, voluptatem sed optio, quod adipisci, id blanditiis officia eveniet molestiae aliquid esse. Totam, laborum repudiandae aperiam temporibus repellendus accusantium at ipsa porro earum assumenda incidunt commodi, tempore labore laudantium quia. Deserunt ab aperiam facere error maiores ipsa, ullam ea? Harum, dicta! Possimus, eveniet. Illo doloremque doloribus accusantium impedit dolor quidem totam nisi magnam rerum, temporibus nostrum tempore distinctio pariatur possimus inventore voluptatem aperiam consequuntur harum dicta modi? Ratione rerum voluptas eum itaque omnis, corporis nesciunt blanditiis, reprehenderit quis ex, a animi perspiciatis alias minima molestiae rem laudantium repellendus? Eos dignissimos voluptates aperiam vitae impedit repellendus voluptatum eum delectus, dolore tempore modi? Architecto, fuga nihil voluptatibus quibusdam delectus rerum? Laudantium laboriosam ullam aspernatur incidunt tempore? Debitis, veniam vero! Magnam, natus. Perspiciatis vitae accusantium accusamus quia quos optio! Sit, quam nemo id sapiente aliquid sunt laudantium earum nam itaque placeat iste quaerat ullam officia, hic quos culpa pariatur, aliquam facere officiis at commodi. Cumque molestiae ab voluptate cum consequatur magnam, ipsa accusamus nisi dolore inventore repellendus in quis possimus reiciendis nobis quidem distinctio maiores veniam deserunt laudantium eum. Aliquid modi deserunt voluptas, aperiam suscipit iusto ullam id eos hic magnam nobis alias in rerum sint veritatis laudantium incidunt quos consequuntur deleniti? Cumque, reiciendis aliquam. Ullam deserunt veniam sequi laudantium optio asperiores placeat ducimus distinctio ipsa exercitationem aut neque recusandae, blanditiis porro! Optio similique minima consequatur temporibus voluptatem. Perspiciatis modi odio beatae maiores, veniam ipsa nesciunt blanditiis harum asperiores provident soluta, doloremque id animi facilis sed. Quasi culpa impedit asperiores maxime autem iusto temporibus illo? Voluptatem perspiciatis nemo sequi vitae natus voluptatibus, harum, minus eveniet modi cupiditate animi fugiat nisi odio! Cumque, totam. Totam quos consequuntur eum nostrum, dolores saepe eveniet, at aperiam officiis ad quo omnis hic, quasi libero minima optio neque atque ipsam illum excepturi dolore! Officia, sit? Sequi, error at! Illo ratione dolores vel repudiandae explicabo exercitationem saepe. Tempora consequatur est vel temporibus non animi, eaque hic itaque similique praesentium autem quas nam magnam officiis? Illo officia explicabo error nobis voluptas fuga quibusdam, in aperiam odit itaque atque minus. Soluta sit laboriosam nihil! Sunt recusandae ut optio ea nisi voluptates atque, maiores obcaecati consectetur quam quos tempora cupiditate assumenda nemo enim voluptas sit sapiente placeat ipsum dolorem ab dolore. Earum sit magni distinctio quos quo, fuga, deleniti quod totam quasi quidem eaque error necessitatibus eos accusamus maxime officia recusandae molestiae doloremque voluptatibus delectus dolorem consequatur. Unde totam corrupti incidunt quibusdam earum, obcaecati recusandae laborum illo ratione mollitia eos sint, tempora natus velit. Doloremque, debitis corporis magni optio voluptatem quis atque ducimus tempore quae eos animi, laboriosam qui temporibus est dolores, dolore commodi nesciunt eaque non odit consequatur eius fugiat! Ab, fugit magnam. In, accusamus facere. Sunt possimus, laborum minus neque nam non quis error inventore repellendus quisquam ab eaque ducimus quasi ipsum totam animi! Aspernatur consequatur perspiciatis labore pariatur harum. Sequi iure, natus ea libero blanditiis vel?
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'PersistentMini',
  data: () => ({
    menuVisible: true
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 90px;
    max-width: calc(100vw - 125px);
  }

  // .md-content{
  //   min-height: calc(100vh - 64px);
  //   background-color: #FFFDF5 !important;
  //   @media (max-width: 960px) {
  //     min-height: calc(100vh - 48px);
  //   }
  // }
</style>

<template>
    <div class="tags-view-container">
      <scroll-pan class="tags-view-wrapper">
        <router-link
          v-for="tag in visitedViews"
          :key="tag.path"
          tag="span"
          :to="{path: tag.path}"
          class="tags-view-item"
        >
          {{tag.title}}
        </router-link>
      </scroll-pan>
    </div>
</template>

<script>
import ScrollPan from './ScrollPane/index'
export default {
  name: 'TagsView',
  components: { ScrollPan },
  mounted () {
    this.addTags()
  },
  watch: {
    $route () {
      this.addTags()
    }
  },
  computed: {
    visitedViews () {
      return this.$store.state.tagsView.visitedViews
    }
  },
  data () {
    return {
    }
  },
  methods: {
    addTags () {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      padding: 0 8px;
      margin-left: 5px;
      margin-top: 4px;
      cursor: pointer;
      color: #495060;
      font-size: 12px;
      background: #fff;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
    }
  }
}
</style>

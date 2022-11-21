<template>
    <div class="pagination-container">
      <el-pagination
        background
        :total="5"
        layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>
    </div>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style scoped>
.pagination-container {
  padding: 32px 16px;
}
</style>

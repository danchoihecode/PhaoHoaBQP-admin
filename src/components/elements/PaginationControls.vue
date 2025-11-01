<template>
  <div class="pagination-controls">
    <label for="rows-per-page" class="rows-per-page-label">Rows per page:</label>
    <div class="custom-select-container">
      <select id="rows-per-page" :value="rowsPerPage" @change="handleRowsPerPageChange" class="rows-per-page-select">
        <option :value="3">3</option>
        <option :value="5">5</option>
        <option :value="10">10</option>
        <option :value="20">20</option>
      </select>
      <div class="custom-arrow"></div>
    </div>
    <span class="pagination-info">{{ currentPage }} of {{ totalPages }}</span>
    <button class="pagination-button" @click="prevPage" :disabled="currentPage === 1">
      Prev
    </button>
    <button class="pagination-button" @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    rowsPerPage: {
      type: Number,
      required: true
    },
  },
  emits: ['update:rowsPerPage', 'prevPage', 'nextPage'],
  methods: {
    handleRowsPerPageChange(event) {
      this.$emit('update:rowsPerPage', parseInt(event.target.value, 10));
    },
    prevPage() {
      this.$emit('prevPage');
    },
    nextPage() {
      this.$emit('nextPage');
    }
  }
};
</script>

<style>
.pagination-controls {
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  margin-top: 20px;
}

.rows-per-page-label {
  font-family: 'San Francisco Display', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  text-align: left;
  color: #3F4254;
  margin-right: 0.5rem;
}

.custom-select-container {
  position: relative;
  display: inline-block;
  width: 60px;
}

.rows-per-page-select {
  width: 100%;
  background-color: white;
  color: inherit;
  border: none;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  appearance: none;
  cursor: pointer;
  outline: none;
  font-family: 'San Francisco Display', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.9px;
}

.custom-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 7px solid #6D6E70; 
  pointer-events: none;
}

.pagination-button {
  background-color: #4a91e2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 0.5rem;
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination-info {
  margin: 0 1rem;
}
</style>

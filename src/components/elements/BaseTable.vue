<template>
  <div id="baseTable">
    <div class="relative overflow-x-auto rounded-[12px] mx-[2px]" id="hiddenScroll"
      :class="!truncate ? 'pb-[100px]' : ''">
      <table class=" w-full overflow-auto divide-y divide-dashed divide-gray_01">
        <thead>
          <tr>
            <th scope="col" class="header-style lg:p-[10px] md:p-[6px] p-[3px] whitespace-nowrap text-left text-gray"
              v-for="(header, i) in headers" :key="i" :class="[header && header.align, header && header.width]">
              <div :class="[
                'whitespace-break-spaces',
                header && header.width,
                (header.title === 'Tên sản phẩm' || header.title === 'Tên kho' || header.title === 'Địa chỉ' || header.title === 'Tên danh mục' || header.title === 'Tên nhãn hàng') ? 'text-left' : (header.title === 'Actions' ? 'text-right' : 'text-center'),
              ]">
                <slot :name="`header_${header.key}`" :index="i" :title="header.title" :class="header && header.width">
                  <div class="title">{{ header.title }}</div>
                </slot>
              </div>
            </th>
          </tr>
        </thead>
        <tbody v-if="items.length > 0" class="divide-y divide-dashed divide-gray_01">
          <tr class="table-row" v-for="(item, i) in items" :key="i">
            <td
              class="lg:p-[10px] md:p-[6px] p-[3px] lg:text-sm md:text-xs text-[10px] text-black whitespace-nowrap tbody-cell"
              v-for="(header, j) in headers" :key="j" :class="[
                header && header.padding ? header.padding : 'mx-3',
                header.class,
                truncate ? 'truncate' : '',
                header && header.width,
                'tbody-cell',
              ]">
              <div :class="[
                'whitespace-break-spaces'
              ]">
                <slot :name="header.key" :item="item" :index="i" :class="header && header.width">
                  <div :class="[header.key === 'stock_status' ? (item[header.key] === 'Còn hàng' ? 'stocking' : 'out-of-stock') : '',
                  (header.title === 'Tên danh mục' || header.title === 'Tên kho' || header.title === 'Tên sản phẩm' || header.title === 'Địa chỉ' || header.title === 'Tên nhãn hàng') ? 'text-left' : 'text-center'
                  ]">
                    {{ item[header.key] }}
                  </div>

                </slot>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else class="divide-y divide-gray_01 divide-dashed">
          <tr>
            <td class="text-center py-4 px-4 text-base text-black whitespace-nowrap" :colspan="headers.length">
              {{ $t('no_data_in_table') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits(['onPageChange']);
const props = defineProps({
  headers: {
    type: Array,
    default: [],
  },
  items: {
    type: Array,
    default: [],
  },
  truncate: {
    type: Boolean,
    default: true,
  },
});
</script>
<style lang="scss" scoped>
#baseTable table tbody:first-child tr {
  td {
    border-top: none;
  }
}

#baseTable {
  .header-style {
    font-family: 'San Francisco Display', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.09px;
    text-align: left;
    color: #6F6F71;
  }

  .tbody-cell {
    font-family: 'San Francisco Display', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    color: #68696D;
  }

  .table-row {
    border-width: 1px 0px 1px 0px;
    border-style: solid;
    border-color: #A1A1A1;

  }
}

.stocking {
  color: #0A3C86;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
}

.out-of-stock {
  color: #D92027;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
}
</style>

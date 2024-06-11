<template>
  <div v-if="hasGroups" class="group-wrapper">
    <div class="group-label">
      <b-form-checkbox
        size="lg"
        :checked="allItemsOfGroupChecked(col.group)"
        :indeterminate="partialItemsOfGroupChecked(col.group)"
        @change="(c) => selectAllItemsOfGroup(c, col.group)"
      >
      <h5 class="label-name">
        {{ col.label }}
      </h5>
      </b-form-checkbox>
    </div>
    <label v-for="(item, i) in col.items" :id="`tooltip-${item.item.key}`" role="colitem" :class="[isColTemporary(item) ? 'hide-temp-col' : 'group-col w-100 m-0 py-1 px-2 ml-2']"
      :key="i">
      <b-form-checkbox
        v-model="item.display"
      >
      <p class="d-flex align-items-center">
        {{ typeof item.header.content == 'function' ? item.header.content() : item.header.content }}
        <i v-if="item.header.info && infoType === 'tooltip'"
        v-b-tooltip="{ hover: true, html: true, title: item.header.info, boundary: 'window' }"
        class="fa fa-info-circle info-icon ml-1"></i>
      </p>
      </b-form-checkbox>
      <custom-metric-popover
        v-if="(typeof item.customMetric !== 'undefined')"
        :col="item"
        :resetCustomMetricLoading="resetCustomMetricLoading"
        :updateCustomMetric="updateCustomMetric"
        :editCustomMetric="editCustomMetric"
      />
      <column-popover
        v-if="infoType === 'popover'"
        :col="item"
        :editCustomMetric="editCustomMetric"
        customClass="reset-metric-popover info-popover"
      />
    </label>
  </div>
  <div v-else :class="[isColTemporary(col) ? 'hide-temp-col' : 'w-100 m-0 py-1 px-2 ml-2']">
    <label :id="`tooltip-${col.item.key}`" role="colitem" class="w-100 m-0 py-1 px-2">
      <b-form-checkbox
        v-model="col.display"
      >
      <p class="d-flex align-items-center">
        {{ typeof col.header.content == 'function' ? col.header.content() : col.header.content }}
        <i v-if="infoType === 'tooltip'"
        v-b-tooltip="{ hover: true, html: true, title: col.header.info, boundary: 'window' }"
        class="fa fa-info-circle info-icon ml-1"></i>
      </p>
      </b-form-checkbox>
      <custom-metric-popover
        v-if="(typeof col.customMetric !== 'undefined')"
        :col="col"
        :resetCustomMetricLoading="resetCustomMetricLoading"
        :updateCustomMetric="updateCustomMetric"
        :editCustomMetric="editCustomMetric"
      />
      <column-popover
        v-if="infoType === 'popover'"
        :col="col"
        :editCustomMetric="editCustomMetric"
        customClass="reset-metric-popover info-popover"
      />
    </label>
  </div>
</template>

<script>
import CustomMetricPopover from './CustomMetricPopover.vue';
import ColumnPopover from './ColumnPopover.vue';

export default {
  name: 'ColumnVisibility',
  props: {
    hasGroups: { type: Boolean, default: false },
    allItemsOfGroupChecked: { type: Function, default: () => { } },
    partialItemsOfGroupChecked: { type: Function, default: () => { } },
    selectAllItemsOfGroup: { type: Function, default: () => { } },
    editCustomMetric: { type: Function, default: () => { } },
    col: { type: Object, default: () => { } },
    resetCustomMetricLoading: { type: Boolean, default: false },
    updateCustomMetric: { type: Function, default: () => { } },
    infoType: { type: String, default: 'tooltip' },
    isColTemporary: { type: Function, default: () => { } },
  },
  components: {
    CustomMetricPopover,
    ColumnPopover,
  },
}
</script>

<style lang="scss">
.reset-metric-popover {
  .arrow {
    display: none;
  }

  .popover-body {
    .primary-button {
      min-width: 12rem;

      &.primary-button--danger {
        background: #eb5050 !important;
        border-color: #eb5050 !important;
      }
    }

    .secondary-button {
      &[disabled] {
        color: #6a737c;
        background-color: white;
        border-color: #E5E5E5;
        cursor: not-allowed;
      }
    }
  }
}
</style>
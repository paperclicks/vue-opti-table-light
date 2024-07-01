// eslint-disable-next-line no-unused-vars
import { nativeFields, presetList, currentPreset } from '../../dev/data';

export default {
  name: { type: String, required: true },
  selectable: { type: Boolean, default: false },
  sticky: { type: Boolean, default: false },
  hover: { type: Boolean, default: false },
  headerFields: { type: Array, required: true },
  items: { type: Array, required: true },
  page: { type: Number, default: 1 },
  pages: { type: Number, default: 1 },
  resizedColumns: { type: Object, default: () => ({}) },
  selectLabel: { type: String, default: 'items' },
  searchClass: { type: String, default: '' },
  sort: { type: Object, default: () => ({ key: '', order: '', field: '' }) }, // ?
  showSearch: { type: Boolean, default: true },
  showPagination: { type: Boolean, default: true },
  enableExport: { type: Boolean, default: true },
  exportLabel: { type: String, default: 'export' },
  enableColumns: { type: Boolean, default: true },
  enableColumnsLabel: { type: String, default: 'Columns' },
  defaultRows: { type: Number, default: 10 }, // Not dynamic, need full reload
  tableModel: null, // v-model
  rowKey: null,
  // searchValue: { type: String, default: '' },
  serverSidePagination: { type: Boolean, default: false },  // Not dynamic
  loading: { type: Boolean, default: false },
  saveSettings: { type: [Function, null], default: null },
  totals: { type: Object },
  exportCsvItems: { type: Function, default: () => [] }, // Only Server-Side
  columnFilterEnable: { type: Boolean, default: false },
  columnFilter: { type: Object, default: () => ({}) }, // .sync
  columnFilterReset: { type: Boolean, default: true },
  updateCustomMetric: { type: Function, default: () => {} },
  updateComparisonColumns: { type: Function, default: () => {} },
  customMetricOptions: { type: Array, default: () => [] },
  metricGroupOptions: { type: Array, default: () => [] },
  showTooltipBeforeText:{type: Boolean, default: false },
  hasGroups: { type: Boolean, default: false },
  hasComparisonColumns: { type: Boolean, default: false },
  hasPresets: { type: Boolean, default: false },
  hasCustomMetrics: { type: Boolean, default: true },
  nativeFields: { type: Array, default: () => [] },
  deletePreset: { type: Function, default: () => {} },
  presetList: { type: Object, default: () => ({}) },
  savePreset: { type: Function, default: () => {} },
  editPreset: { type: Function, default: () => {} },
  clonePreset: { type: Function, default: () => {} },
  selectedPreset: { type: Object, default: () => ({}) },
  infoType: { type: String, default: 'tooltip' },
  focusSelectedRows:{type: Boolean, default: false },
  showHeaderPopover: { type: Boolean, default: false },
};
/* eslint-disable no-unused-vars */
const nativeFields = [
  {
    value: 'tr',
    group: 'tr',
    useInCustomMetric: true,
    priority: 2,
    label: 'Tracker Metrics',
  },
  {
    value: 'ts',
    group: 'ts',
    priority: 1,
    useInCustomMetric: true,
    label: 'Traffic Source Metrics',
  },
  {
    value: 'ga',
    group: 'ga',
    priority: 4,
    useInCustomMetric: true,
    label: 'Google Analytics Metrics',
  },
  {
    value: 'ga4',
    group: 'ga4',
    useInCustomMetric: true,
    priority: 3,
    label: 'Google Analytics 4 Metrics',
  },
  {
    value: 'cc',
    group: 'cc',
    useInCustomMetric: true,
    priority: 6,
    label: 'Custom Conversion Metrics',
  },
  {
    value: 'cm',
    priority: 5,
    group: 'cm',
    label: 'Custom Metric Metrics',
  },
  {
    value: 'pf',
    group: 'pf',
    priority: 7,
    useInCustomMetric: true,
    label: 'Search Feed Metrics',
  },
  // {
  //   value: 'test_1',
  //   group: 'test_1',
  //   priority: 7,
  //   useInCustomMetric: true,
  //   label: 'Test 1',
  // },
  // {
  //   value: 'test_2',
  //   group: 'test_2',
  //   priority: 7,
  //   useInCustomMetric: true,
  //   label: 'Test 2',
  // },
  // {
  //   value: 'test_3',
  //   group: 'test_3',
  //   priority: 7,
  //   useInCustomMetric: true,
  //   label: 'Test 3',
  // },
  // {
  //   value: 'test_4',
  //   group: 'test_4',
  //   priority: 7,
  //   useInCustomMetric: true,
  //   label: 'Test 4',
  // },
  // {
  //   value: 'test_5',
  //   group: 'test_5',
  //   priority: 7,
  //   useInCustomMetric: true,
  //   label: 'Test 5',
  // },
  // {
  //   value: 'test_6',
  //   group: 'test_6',
  //   priority: 7,
  //   useInCustomMetric: true,
  //   label: 'Test 6',
  // },
];

const currentPreset = {
  name: "Test 1",
  id: 1,
  fields: [
    {
      header: {
        content: "Clicks",
      },
      item: {
        key: "ts_clicks",
        sortable: false,
        filter: false,
        group: "ts",
        type: "other",
      },
      display: true,
      options: {
        format: "string",
        precision: 3,
        style: "",
      },
      comparable: false,
    },
    {
      header: {
        content: "Revenue",
      },
      item: {
        key: "ts_revenue",
        sortable: false,
        filter: false,
        group: "ts",
        type: "other",
      },
      display: true,
      options: {
        format: "string",
        precision: 3,
        style: "",
      },
      comparable: false,
    },
    {
      header: {
        content: "Impressions",
      },
      item: {
        key: "ts_impressions",
        sortable: false,
        filter: false,
        group: "ts",
        type: "other",
      },
      display: true,
      options: {
        format: "string",
        precision: 3,
        style: "",
      },
      comparable: false,
    },
  ],
};
const presetList = {
  user_presets: [
    {
      name: "Test 1",
      id: 1,
      fields: [
        {
          header: {
            content: "Clicks",
          },
          item: {
            key: "ts_clicks",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Revenue",
          },
          item: {
            key: "ts_revenue",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Impressions",
          },
          item: {
            key: "ts_impressions",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
      ],
    },
    {
      name: "Test 2",
      id: 2,
      fields: [
        {
          header: {
            content: "Clicks",
          },
          item: {
            key: "ts_clicks",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Revenue",
          },
          item: {
            key: "ts_revenue",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Impressions",
          },
          item: {
            key: "ts_impressions",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
      ],
    },
    {
      name: "Test 3",
      id: 3,
      fields: [
        {
          header: {
            content: "Clicks",
          },
          item: {
            key: "ts_clicks",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Revenue",
          },
          item: {
            key: "ts_revenue",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Impressions",
          },
          item: {
            key: "ts_impressions",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
      ],
    },
  ],
  admin_presets: [
    {
      name: "Optimizer 1",
      id: 4,
      description: "View metrics related to how often your ads are delivered. View common performance metrics.",
      fields: [
        {
          header: {
            content: "Budget",
          },
          item: {
            key: "budget",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Daily Budget",
          },
          item: {
            key: "daily_budget",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Cost",
          },
          item: {
            key: "cost",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
      ],
    },
    {
      name: "Optimizer 2",
      id: 5,
      description: "View metrics related to how often your ads are delivered",
      fields: [
        {
          header: {
            content: "Clicks",
          },
          item: {
            key: "ts_clicks",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Revenue",
          },
          item: {
            key: "ts_revenue",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Impressions",
          },
          item: {
            key: "ts_impressions",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
      ],
    },
    {
      name: "Optimizer 3",
      id: 6,
      description: "View metrics related to how often your ads are delivered",
      fields: [
        {
          header: {
            content: "Clicks",
          },
          item: {
            key: "ts_clicks",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Revenue",
          },
          item: {
            key: "ts_revenue",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
        {
          header: {
            content: "Impressions",
          },
          item: {
            key: "ts_impressions",
            sortable: false,
            filter: false,
            group: "ts",
            type: "other",
          },
          display: true,
          options: {
            format: "string",
            precision: 3,
            style: "",
          },
          comparable: false,
        },
      ],
    },
  ],
}

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
  currentPreset: { type: Object, default: () => {} },
  deletePreset: { type: Function, default: () => {} },
  preset_list: { type: Object, default: () => {} },
  savePreset: { type: Function, default: () => {} },
  editPreset: { type: Function, default: () => {} },
  clonePreset: { type: Function, default: () => {} },
  infoType: { type: String, default: 'tooltip' },
  focusSelectedRows:{type: Boolean, default: false },
  showHeaderPopover: { type: Boolean, default: false },
};


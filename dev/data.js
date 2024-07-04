import { performanceItems } from "./items";

export default function () {
    return {
      serverSidePagination: true,
      currentPage: 1,
      pageCount: 1,
      items: [],
      pageSize: 10,
      loading: false,
      preloader: true,
      tableModel: {
        selectedRows: [],
        displayColumns: [],
        columnsOrder: [],
      },
      table: {
        fields: [
          {
              "header": {
                  "content": "Camp. ID"
              },
              "item": {
                  "key": "traffic_source_campaign_id",
                  "sortable": true,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": true,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Account Name"
              },
              "item": {
                  "key": "traffic_source_account_name",
                  "sortable": false,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": true,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Custom Metric 10",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr + 50\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_10",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 2,
                  "style": "color"
              },
              "comparable": false,
              "customMetric": "ctr + 50"
          },
          {
              "header": {
                  "content": "TRIAL STARTED"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions3",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Purchase"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions4",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Offer Page View"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions1",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Sign Up Page"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions2",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Payment Page"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions6",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Purchase Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue4",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Signup Initiated (pending user) Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue6",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Checkout Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue3",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Offer Page View Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue1",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "bpicori"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions5",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Add To Cart Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue2",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "bpicori Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue5",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Lead"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions7",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "App_test"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions8",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "1Test2"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions9",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Click"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions10",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Call Initiated"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions11",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "cc"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions12",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "j3"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions13",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "test12"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions14",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Search"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions15",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Lead Events"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions16",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Redirect"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions17",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "View"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions18",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "ViewRT"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions19",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Converted Call"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomConversions20",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Lead_test Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue7",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "App_test Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue8",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "1Test2 Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue9",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Click Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue10",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Call Initiated Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue11",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "cc Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue12",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "j3 Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue13",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "test12 Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue14",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Search Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue15",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Lead Events Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue16",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Redirect Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue17",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "ViewRT Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue19",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Converted Call Revenue"
              },
              "item": {
                  "filter": true,
                  "key": "cfcustomRevenue20",
                  "sortable": true,
                  "group": "cc",
                  "type": "metric"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Name",
                  "info": "The name of the item as reported from the traffic source."
              },
              "item": {
                  "key": "name",
                  "sortable": true,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": true,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Status",
                  "info": "The current status of the item. Status can be Running or Paused"
              },
              "item": {
                  "key": "status",
                  "sortable": true,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Spending Limit",
                  "info": "The Spending limit of a campaign. Can be Monthly, Lifetime or None (no spending limit)"
              },
              "item": {
                  "key": "additional_fields.budget",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Budget",
                  "info": "The budget of the campaign. Can be Daily, Monthly, or Lifetime."
              },
              "item": {
                  "key": "additional_fields.daily_budget",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Bid",
                  "info": "The amount you are paying based on the bidding model (CPC, CPM, CPA etc)"
              },
              "item": {
                  "key": "additional_fields.bid",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 4,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Target CPA"
              },
              "item": {
                  "key": "additional_fields.target_cpa",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Payout",
                  "info": "[Payout] = [Revenue (Tracker)] / [Conversions (Tracker]; The average revenue that each conversion is generating. Payout is automatically calculated using the Revenue (Tracker) and Conversions (Tracker), but you can also override the automatic payout by clicking on the Payout cell and entering a static value manually."
              },
              "item": {
                  "key": "payout",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Avg. Cpc",
                  "info": "[Avg. CPC] = [Amount Spent] / [Clicks]; The average cost-per-click calculated based on the total cost and number of ad clicks reported by the traffic source."
              },
              "item": {
                  "key": "avg_cpc",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Amount Spent",
                  "info": "The ad spend amount as reported by the traffic source (ad network)."
              },
              "item": {
                  "key": "cost",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": ""
              },
              "comparable": true
          },
          {
              "header": {
                  "content": "Conversions (Tracker)",
                  "info": "The number of conversion events reported by the tracking platform. Note: this does not include custom conversions. Only the main conversion event."
              },
              "item": {
                  "key": "tr_conversions",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Revenue (Tracker)",
                  "info": "The generated revenue as reported by the tracking platform. Note: this does not include revenues from custom conversions. It only includes the main Revenue column of your tracker."
              },
              "item": {
                  "key": "tr_revenue",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Net (Tracker)",
                  "info": "[Net (Tracker)] = [Revenue (Tracker)] - [Amount Spent]; The calculated net profit based on the Amount Spent reported by the traffic source and the Revenue (Tracker) reported by the tracking platform."
              },
              "item": {
                  "key": "tr_net",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": "color"
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Roi (Tracker)",
                  "info": "[Roi (Tracker)] = ( [Net (Tracker)] / [Amount Spent] ) x 100; The calculated return on investment based on the Amount Spend reported by the traffic source, and Revenue (Tracker) reported by the tracking platform."
              },
              "item": {
                  "key": "tr_roi",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 2,
                  "style": "color"
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Estimated Spent",
                  "info": "[Est. Spent] = [Avg. Cpc] x [Clicks (Tracker)]; NOTE: Estimated Spend is only available if you have connected a tracking platform.  To make up for the delay some traffic sources have in reporting the accurate spend for the day, we try to estimate its value using the average Cpc and multiplying it by the amount of clicks reported by your trackign platform, Clicks (Tracker)."
              },
              "item": {
                  "key": "est_cost",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Est. Net",
                  "info": "Because Taboola stats are delayed, we calculate an estimated net as: Est. Net = Revenue - Est. Cost"
              },
              "item": {
                  "key": "est_net",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": "color"
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Est. Roi",
                  "info": "Because Taboola stats are delayed, we calculate an estimated ROI as: Est. ROI = Est. Net / Est. Cost"
              },
              "item": {
                  "key": "est_roi",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 3,
                  "style": "color"
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Epc (Tracker)",
                  "info": "[Epc (Tracker)] = [Revenue (Tracker)] / [Clicks (Tracker)]; The calculated earning per click based on the Revenue (Tracker) and Clicks (Tracker) reported by the tracking platform."
              },
              "item": {
                  "key": "tr_epc",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Epc",
                  "info": "[Epc] = [Revenue (Tracker)] / [Clicks]; The earning per click based on the Revenue (Tracker), reported by the tracking platform, and ad Clicks you paid for on the traffic source.  The reason why this version of Epc is needed is because sometimes tracking platforms might report more or less clicks, compared to the traffic source, so the Epc might not be as accurate as the one calculated on traffic source clicks."
              },
              "item": {
                  "key": "epc",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Cpa (Tracker)",
                  "info": "[Cpa (Tracker)] = [Amount Spent] / [Conversions (Tracker)]; The calculated cost per action (acquisition) based on the number of conversions reported by the tracking platform and the amount spent reported by the traffic source."
              },
              "item": {
                  "key": "tr_cpa",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Impressions",
                  "info": "The number of ad impressions reported by the traffic source (ad network)."
              },
              "item": {
                  "key": "impressions",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": true
          },
          {
              "header": {
                  "content": "Viewable Impressions",
                  "info": "The total number of viewable impressions as reported by the traffic source.  Each time your campaign item is on the screen for 1 second, it’s counted as one impression"
              },
              "item": {
                  "key": "viewable_impressions",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Clicks",
                  "info": "The number of ad clicks reported by the traffic source (ad network)."
              },
              "item": {
                  "key": "ts_clicks",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Clicks (Tracker)",
                  "info": "The amount of Ad Clicks (campaign link visits) reported by the tracking platform."
              },
              "item": {
                  "key": "tr_clicks",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Landing Page Clicks",
                  "info": "The amount of visitors which clicked on a call-to-action link inside your landing page (click to an offer link), as reported by the tracking platform."
              },
              "item": {
                  "key": "lp_clicks",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Landing Page Ctr",
                  "info": "[Landing Page Ctr] = ( [Landing Page Clicks] / [ Clicks (Tracker)] ) x 100; The calculated landing page click-through rate percentage, based on landing page clicks and total clicks reported by the tracking platform."
              },
              "item": {
                  "key": "lp_ctr",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Ctr",
                  "info": "Ctr = Clicks/Impressions. CTR is calculated by dividing the number of clicks by the number of impressions, as reported by the traffic source, for your campaigns and campaign items."
              },
              "item": {
                  "key": "ctr",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 2,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Click Loss",
                  "info": " {             \"default\": {                 \"variables\": {                     \"formula\": {                         \"value\": \"click_loss=ts_clicks - tr_clicks\",                         \"type\": \"FORMULA\"                     }                 },                 \"text\": \"{{formula}}. The difference between clicks reported by your traffic source and clicks reported by your tracking platform. Some times, for various reasons, your tracking platform may report less or more clicks than what your ad network is reporting.\"             }         }"
              },
              "item": {
                  "key": "click_loss",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Conversions",
                  "info": "The number of conversions tracked and reported by the traffic source (ad network)."
              },
              "item": {
                  "key": "ts_conversions",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Revenue",
                  "info": "The revenue reported by the traffic source (ad network). This revenue is usually tracked by the ad network's pixel, or sent to the ad network via a server-2-server postback."
              },
              "item": {
                  "key": "ts_revenue",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": ""
              },
              "comparable": true
          },
          {
              "header": {
                  "content": "Net",
                  "info": "[Net] = [Revenue] - [Amount Spent]; The calculated net profit based on the ad spend and revenue reported by the traffic source (ad network)."
              },
              "item": {
                  "key": "ts_net",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": "color"
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Roi",
                  "info": "[Roi] = ( [Net] / [Amount Spent] ) x 100; The calculated return on investment based on the ad spend and revenue reported by the traffic source (ad network)."
              },
              "item": {
                  "key": "ts_roi",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 2,
                  "style": "color"
              },
              "comparable": true
          },
          {
              "header": {
                  "content": "Cpa",
                  "info": "[Cpa] = [Amount Spent] / [Conversions]  The calculated cost per action based on the ad spend and the number of conversions reported by the traffic source (ad network)."
              },
              "item": {
                  "key": "ts_cpa",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Epc",
                  "info": "[Epc] = [Revenue] / [Clicks]; The calculated earning per click based on the reported number of ad clicks and revenue from the traffic source (ad network)."
              },
              "item": {
                  "key": "ts_epc",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Cvr",
                  "info": "[Cvr] = ( [Clicks] / [Conversions] ) x 100; The calculated conversion rate based on the ad clicks and the number of conversions reported by the traffic source (ad network)."
              },
              "item": {
                  "key": "ts_cvr",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 2,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Cvr (Tracker)",
                  "info": "[Cvr (Tracker)] = ( [Conversions (Tracker)] / [Clicks (Tracker)] ) x 100; The calculated conversion rate based on the number of clicks and conversions reported by the tracking platform"
              },
              "item": {
                  "key": "tr_cvr",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "eCPM",
                  "info": "eCPM = (Cost/Impression)*1000"
              },
              "item": {
                  "key": "ecpm",
                  "sortable": true,
                  "type": "metric",
                  "filter": false,
                  "group": "ts"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "LP CR",
                  "info": "Landing Page Conversion Rate= (TR Conversions/ LP Clicks)*100"
              },
              "item": {
                  "key": "lp_cr",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "percentage",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "LP CPC",
                  "info": "Cost per LP Click"
              },
              "item": {
                  "key": "cp_lp_clicks",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "tr"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Search Feed Revenue",
                  "info": "Revenue reported by your search feed provider"
              },
              "item": {
                  "key": "publisher_revenue",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "pf"
              },
              "display": true,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Search Feed Clicks",
                  "info": "Clicks reported by your search feed provider"
              },
              "item": {
                  "key": "publisher_clicks",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "pf"
              },
              "display": true,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Search Feed Conversions",
                  "info": "Conversions reported by your search feed provider"
              },
              "item": {
                  "key": "publisher_conversions",
                  "sortable": true,
                  "type": "metric",
                  "filter": true,
                  "group": "pf"
              },
              "display": true,
              "options": {
                  "format": "numeric",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Learning State"
              },
              "item": {
                  "key": "learning_state",
                  "sortable": true,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Traffic Source"
              },
              "item": {
                  "key": "traffic_source_unique_name",
                  "sortable": true,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Bid Strategy"
              },
              "item": {
                  "key": "bid_strategy",
                  "sortable": true,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Start Date",
                  "info": "Campaign start date"
              },
              "item": {
                  "key": "startDate",
                  "sortable": true,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Realtime Clicks",
                  "info": "Taboola real-time clicks"
              },
              "item": {
                  "key": "performance_ts_clicks_live",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Realtime Conversions",
                  "info": "Taboola real-time conversions"
              },
              "item": {
                  "key": "performance_ts_conversions_live",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Realtime Revenue",
                  "info": "Taboola real-time revenue."
              },
              "item": {
                  "key": "performance_ts_revenue_live",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Realtime Spend",
                  "info": "Taboola real-time spend"
              },
              "item": {
                  "key": "performance_cost_live",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Realtime Viewable Imp.",
                  "info": "Taboola real-time viewable impressions"
              },
              "item": {
                  "key": "performance_viewable_impressions_live",
                  "sortable": true,
                  "type": "other",
                  "filter": true,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "numeric",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false
          },
          {
              "header": {
                  "content": "Assertive Yield Test",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"1 + cost\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_1",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "number",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "1 + cost"
          },
          {
              "header": {
                  "content": "Custom_metric_2",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"( impressions + 3 )\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_2",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "number",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "( impressions + 3 )"
          },
          {
              "header": {
                  "content": "Test publisher clicks",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"publisher_clicks * 2\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_3",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "number",
                  "precision": 0,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "publisher_clicks * 2"
          },
          {
              "header": {
                  "content": "Test publisher revenue",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"publisher_revenue + ts_revenue + tr_revenue\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_4",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "publisher_revenue + ts_revenue + tr_revenue"
          },
          {
              "header": {
                  "content": "Custom EPV",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"tr_revenue / 2\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_5",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "number",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "tr_revenue / 2"
          },
          {
              "header": {
                  "content": "Test bpicori",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"2 + impressions + tr_conversions\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_6",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "number",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "2 + impressions + tr_conversions"
          },
          {
              "header": {
                  "content": "CTR*CPC",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr * 1 + 22 / ( 0 - 1 )\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_7",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "number",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "ctr * 1 + 22 / ( 0 - 1 )"
          },
          {
              "header": {
                  "content": "test fb",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"impressions + ts_clicks\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_8",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "number",
                  "precision": 3,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "impressions + ts_clicks"
          },
          {
              "header": {
                  "content": "Dynamic Payout",
                  "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"tr_revenue / tr_conversions\",\"type\":\"FORMULA\"}}}}"
              },
              "item": {
                  "filter": true,
                  "key": "custom_metric_9",
                  "sortable": true,
                  "type": "metric",
                  "group": "cm"
              },
              "display": false,
              "options": {
                  "format": "currency",
                  "precision": 2,
                  "style": ""
              },
              "comparable": false,
              "customMetric": "tr_revenue / tr_conversions"
          },
          {
              "header": {
                  "content": "Account ID"
              },
              "item": {
                  "key": "traffic_souce_account_id",
                  "sortable": true,
                  "type": "other",
                  "filter": false,
                  "group": "other"
              },
              "display": false,
              "options": {
                  "format": "string",
                  "precision": 3,
                  "style": ""
              }
          }
        ],
        fields2: [
            {
                "header": {
                    "content": "Camp. ID"
                },
                "item": {
                    "key": "traffic_source_campaign_id",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": true,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Account Name"
                },
                "item": {
                    "key": "traffic_source_account_name",
                    "sortable": false,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": true,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Custom Metric 10",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr + 50\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_10",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "percentage",
                    "precision": 2,
                    "style": "color"
                },
                "comparable": false,
                "customMetric": "ctr + 50"
            },
            {
                "header": {
                    "content": "TRIAL STARTED"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions3",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Purchase"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions4",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Offer Page View"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions1",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Sign Up Page"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions2",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
        ],
        items: performanceItems,
        totals: {
          "name.first": 40,
          balance: 250,
          age: 36,
        },
        options: {
          pagination: false,
        },
      },
      myToggle: false,
      tableSelect: [],
      columnFilter: {},
      sticky: true,
      resizedColumns: {},
      nativeFields:  [
        {
          value: "tr",
          group: "tr",
          useInCustomMetric: true,
          priority: 2,
          label: "Tracker Metrics",
        },
        {
          value: "ts",
          group: "ts",
          priority: 1,
          useInCustomMetric: true,
          label: "Traffic Source Metrics",
        },
        {
          value: "ga",
          group: "ga",
          priority: 4,
          useInCustomMetric: true,
          label: "Google Analytics Metrics",
        },
        {
          value: "ga4",
          group: "ga4",
          useInCustomMetric: true,
          priority: 3,
          label: "Google Analytics 4 Metrics",
        },
        {
          value: "cc",
          group: "cc",
          useInCustomMetric: true,
          priority: 6,
          label: "Custom Conversion Metrics",
        },
        {
          value: "cm",
          priority: 5,
          group: "cm",
          label: "Custom Metric Metrics",
        },
        {
          value: "pf",
          group: "pf",
          priority: 7,
          useInCustomMetric: true,
          label: "Search Feed Metrics",
        },
    ],
    presetList: {
        user_presets: [
            {
              id: "6668379018f6683bea6bfe92",
              name: "Test 1",
              fields: [
                {
                    "header": {
                        "content": "Camp. ID"
                    },
                    "item": {
                        "key": "traffic_source_campaign_id",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": true,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Account Name"
                    },
                    "item": {
                        "key": "traffic_source_account_name",
                        "sortable": false,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": true,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Custom Metric 10",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr + 50\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_10",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": false,
                    "customMetric": "ctr + 50"
                },
                {
                    "header": {
                        "content": "TRIAL STARTED"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions3",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Purchase"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions4",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Offer Page View"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions1",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Sign Up Page"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions2",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Payment Page"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions6",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Purchase Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue4",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Signup Initiated (pending user) Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue6",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Checkout Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue3",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Offer Page View Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue1",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "bpicori"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions5",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Add To Cart Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue2",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "bpicori Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue5",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Lead"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions7",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "App_test"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions8",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "1Test2"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions9",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Click"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions10",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Call Initiated"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions11",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "cc"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions12",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "j3"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions13",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "test12"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions14",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions15",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Lead Events"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions16",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Redirect"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions17",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "View"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions18",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "ViewRT"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions19",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Converted Call"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions20",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Lead_test Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue7",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "App_test Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue8",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "1Test2 Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue9",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Click Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue10",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Call Initiated Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue11",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "cc Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue12",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "j3 Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue13",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "test12 Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue14",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue15",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Lead Events Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue16",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Redirect Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue17",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "ViewRT Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue19",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Converted Call Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue20",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Name",
                        "info": "The name of the item as reported from the traffic source."
                    },
                    "item": {
                        "key": "name",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": true,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Status",
                        "info": "The current status of the item. Status can be Running or Paused"
                    },
                    "item": {
                        "key": "status",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Spending Limit",
                        "info": "The Spending limit of a campaign. Can be Monthly, Lifetime or None (no spending limit)"
                    },
                    "item": {
                        "key": "additional_fields.budget",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Budget",
                        "info": "The budget of the campaign. Can be Daily, Monthly, or Lifetime."
                    },
                    "item": {
                        "key": "additional_fields.daily_budget",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Bid",
                        "info": "The amount you are paying based on the bidding model (CPC, CPM, CPA etc)"
                    },
                    "item": {
                        "key": "additional_fields.bid",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 4,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Target CPA"
                    },
                    "item": {
                        "key": "additional_fields.target_cpa",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Payout",
                        "info": "[Payout] = [Revenue (Tracker)] / [Conversions (Tracker]; The average revenue that each conversion is generating. Payout is automatically calculated using the Revenue (Tracker) and Conversions (Tracker), but you can also override the automatic payout by clicking on the Payout cell and entering a static value manually."
                    },
                    "item": {
                        "key": "payout",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Avg. Cpc",
                        "info": "[Avg. CPC] = [Amount Spent] / [Clicks]; The average cost-per-click calculated based on the total cost and number of ad clicks reported by the traffic source."
                    },
                    "item": {
                        "key": "avg_cpc",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Amount Spent",
                        "info": "The ad spend amount as reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "cost",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": true
                },
                {
                    "header": {
                        "content": "Conversions (Tracker)",
                        "info": "The number of conversion events reported by the tracking platform. Note: this does not include custom conversions. Only the main conversion event."
                    },
                    "item": {
                        "key": "tr_conversions",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Revenue (Tracker)",
                        "info": "The generated revenue as reported by the tracking platform. Note: this does not include revenues from custom conversions. It only includes the main Revenue column of your tracker."
                    },
                    "item": {
                        "key": "tr_revenue",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Net (Tracker)",
                        "info": "[Net (Tracker)] = [Revenue (Tracker)] - [Amount Spent]; The calculated net profit based on the Amount Spent reported by the traffic source and the Revenue (Tracker) reported by the tracking platform."
                    },
                    "item": {
                        "key": "tr_net",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Roi (Tracker)",
                        "info": "[Roi (Tracker)] = ( [Net (Tracker)] / [Amount Spent] ) x 100; The calculated return on investment based on the Amount Spend reported by the traffic source, and Revenue (Tracker) reported by the tracking platform."
                    },
                    "item": {
                        "key": "tr_roi",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Estimated Spent",
                        "info": "[Est. Spent] = [Avg. Cpc] x [Clicks (Tracker)]; NOTE: Estimated Spend is only available if you have connected a tracking platform.  To make up for the delay some traffic sources have in reporting the accurate spend for the day, we try to estimate its value using the average Cpc and multiplying it by the amount of clicks reported by your trackign platform, Clicks (Tracker)."
                    },
                    "item": {
                        "key": "est_cost",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Est. Net",
                        "info": "Because Taboola stats are delayed, we calculate an estimated net as: Est. Net = Revenue - Est. Cost"
                    },
                    "item": {
                        "key": "est_net",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Est. Roi",
                        "info": "Because Taboola stats are delayed, we calculate an estimated ROI as: Est. ROI = Est. Net / Est. Cost"
                    },
                    "item": {
                        "key": "est_roi",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 3,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Epc (Tracker)",
                        "info": "[Epc (Tracker)] = [Revenue (Tracker)] / [Clicks (Tracker)]; The calculated earning per click based on the Revenue (Tracker) and Clicks (Tracker) reported by the tracking platform."
                    },
                    "item": {
                        "key": "tr_epc",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Epc",
                        "info": "[Epc] = [Revenue (Tracker)] / [Clicks]; The earning per click based on the Revenue (Tracker), reported by the tracking platform, and ad Clicks you paid for on the traffic source.  The reason why this version of Epc is needed is because sometimes tracking platforms might report more or less clicks, compared to the traffic source, so the Epc might not be as accurate as the one calculated on traffic source clicks."
                    },
                    "item": {
                        "key": "epc",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Cpa (Tracker)",
                        "info": "[Cpa (Tracker)] = [Amount Spent] / [Conversions (Tracker)]; The calculated cost per action (acquisition) based on the number of conversions reported by the tracking platform and the amount spent reported by the traffic source."
                    },
                    "item": {
                        "key": "tr_cpa",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Impressions",
                        "info": "The number of ad impressions reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "impressions",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": true
                },
                {
                    "header": {
                        "content": "Viewable Impressions",
                        "info": "The total number of viewable impressions as reported by the traffic source.  Each time your campaign item is on the screen for 1 second, it’s counted as one impression"
                    },
                    "item": {
                        "key": "viewable_impressions",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Clicks",
                        "info": "The number of ad clicks reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Clicks (Tracker)",
                        "info": "The amount of Ad Clicks (campaign link visits) reported by the tracking platform."
                    },
                    "item": {
                        "key": "tr_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Landing Page Clicks",
                        "info": "The amount of visitors which clicked on a call-to-action link inside your landing page (click to an offer link), as reported by the tracking platform."
                    },
                    "item": {
                        "key": "lp_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Landing Page Ctr",
                        "info": "[Landing Page Ctr] = ( [Landing Page Clicks] / [ Clicks (Tracker)] ) x 100; The calculated landing page click-through rate percentage, based on landing page clicks and total clicks reported by the tracking platform."
                    },
                    "item": {
                        "key": "lp_ctr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Ctr",
                        "info": "Ctr = Clicks/Impressions. CTR is calculated by dividing the number of clicks by the number of impressions, as reported by the traffic source, for your campaigns and campaign items."
                    },
                    "item": {
                        "key": "ctr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Click Loss",
                        "info": " {             \"default\": {                 \"variables\": {                     \"formula\": {                         \"value\": \"click_loss=ts_clicks - tr_clicks\",                         \"type\": \"FORMULA\"                     }                 },                 \"text\": \"{{formula}}. The difference between clicks reported by your traffic source and clicks reported by your tracking platform. Some times, for various reasons, your tracking platform may report less or more clicks than what your ad network is reporting.\"             }         }"
                    },
                    "item": {
                        "key": "click_loss",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Conversions",
                        "info": "The number of conversions tracked and reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_conversions",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Revenue",
                        "info": "The revenue reported by the traffic source (ad network). This revenue is usually tracked by the ad network's pixel, or sent to the ad network via a server-2-server postback."
                    },
                    "item": {
                        "key": "ts_revenue",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": true
                },
                {
                    "header": {
                        "content": "Net",
                        "info": "[Net] = [Revenue] - [Amount Spent]; The calculated net profit based on the ad spend and revenue reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_net",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Roi",
                        "info": "[Roi] = ( [Net] / [Amount Spent] ) x 100; The calculated return on investment based on the ad spend and revenue reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_roi",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": true
                },
                {
                    "header": {
                        "content": "Cpa",
                        "info": "[Cpa] = [Amount Spent] / [Conversions]  The calculated cost per action based on the ad spend and the number of conversions reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_cpa",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Epc",
                        "info": "[Epc] = [Revenue] / [Clicks]; The calculated earning per click based on the reported number of ad clicks and revenue from the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_epc",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Cvr",
                        "info": "[Cvr] = ( [Clicks] / [Conversions] ) x 100; The calculated conversion rate based on the ad clicks and the number of conversions reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_cvr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Cvr (Tracker)",
                        "info": "[Cvr (Tracker)] = ( [Conversions (Tracker)] / [Clicks (Tracker)] ) x 100; The calculated conversion rate based on the number of clicks and conversions reported by the tracking platform"
                    },
                    "item": {
                        "key": "tr_cvr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "eCPM",
                        "info": "eCPM = (Cost/Impression)*1000"
                    },
                    "item": {
                        "key": "ecpm",
                        "sortable": true,
                        "type": "metric",
                        "filter": false,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "LP CR",
                        "info": "Landing Page Conversion Rate= (TR Conversions/ LP Clicks)*100"
                    },
                    "item": {
                        "key": "lp_cr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "LP CPC",
                        "info": "Cost per LP Click"
                    },
                    "item": {
                        "key": "cp_lp_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search Feed Revenue",
                        "info": "Revenue reported by your search feed provider"
                    },
                    "item": {
                        "key": "publisher_revenue",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "pf"
                    },
                    "display": true,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search Feed Clicks",
                        "info": "Clicks reported by your search feed provider"
                    },
                    "item": {
                        "key": "publisher_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "pf"
                    },
                    "display": true,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search Feed Conversions",
                        "info": "Conversions reported by your search feed provider"
                    },
                    "item": {
                        "key": "publisher_conversions",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "pf"
                    },
                    "display": true,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Learning State"
                    },
                    "item": {
                        "key": "learning_state",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Traffic Source"
                    },
                    "item": {
                        "key": "traffic_source_unique_name",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Bid Strategy"
                    },
                    "item": {
                        "key": "bid_strategy",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Start Date",
                        "info": "Campaign start date"
                    },
                    "item": {
                        "key": "startDate",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Clicks",
                        "info": "Taboola real-time clicks"
                    },
                    "item": {
                        "key": "performance_ts_clicks_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Conversions",
                        "info": "Taboola real-time conversions"
                    },
                    "item": {
                        "key": "performance_ts_conversions_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Revenue",
                        "info": "Taboola real-time revenue."
                    },
                    "item": {
                        "key": "performance_ts_revenue_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Spend",
                        "info": "Taboola real-time spend"
                    },
                    "item": {
                        "key": "performance_cost_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Viewable Imp.",
                        "info": "Taboola real-time viewable impressions"
                    },
                    "item": {
                        "key": "performance_viewable_impressions_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Assertive Yield Test",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"1 + cost\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_1",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "1 + cost"
                },
                {
                    "header": {
                        "content": "Custom_metric_2",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"( impressions + 3 )\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_2",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "( impressions + 3 )"
                },
                {
                    "header": {
                        "content": "Test publisher clicks",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"publisher_clicks * 2\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_3",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "publisher_clicks * 2"
                },
                {
                    "header": {
                        "content": "Test publisher revenue",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"publisher_revenue + ts_revenue + tr_revenue\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_4",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "publisher_revenue + ts_revenue + tr_revenue"
                },
                {
                    "header": {
                        "content": "Custom EPV",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"tr_revenue / 2\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_5",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "tr_revenue / 2"
                },
                {
                    "header": {
                        "content": "Test bpicori",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"2 + impressions + tr_conversions\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_6",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "2 + impressions + tr_conversions"
                },
                {
                    "header": {
                        "content": "CTR*CPC",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr * 1 + 22 / ( 0 - 1 )\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_7",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "ctr * 1 + 22 / ( 0 - 1 )"
                },
                {
                    "header": {
                        "content": "test fb",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"impressions + ts_clicks\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_8",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "impressions + ts_clicks"
                },
                {
                    "header": {
                        "content": "Dynamic Payout",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"tr_revenue / tr_conversions\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_9",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "tr_revenue / tr_conversions"
                },
                {
                    "header": {
                        "content": "Account ID"
                    },
                    "item": {
                        "key": "traffic_souce_account_id",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    }
                }
            ]
            },
            {
              id: "6668379018f6683bea6bfe93",
              name: "Test 2",
              fields: [
                {
                    "header": {
                        "content": "Camp. ID"
                    },
                    "item": {
                        "key": "traffic_source_campaign_id",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": true,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Account Name"
                    },
                    "item": {
                        "key": "traffic_source_account_name",
                        "sortable": false,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": true,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Custom Metric 10",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr + 50\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_10",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": false,
                    "customMetric": "ctr + 50"
                },
                {
                    "header": {
                        "content": "TRIAL STARTED"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions3",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Purchase"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions4",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Offer Page View"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions1",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Sign Up Page"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions2",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Payment Page"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions6",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Purchase Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue4",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Signup Initiated (pending user) Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue6",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Checkout Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue3",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Offer Page View Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue1",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "bpicori"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions5",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Add To Cart Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue2",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "bpicori Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue5",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Lead"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions7",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "App_test"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions8",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "1Test2"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions9",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Click"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions10",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Call Initiated"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions11",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "cc"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions12",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "j3"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions13",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "test12"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions14",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions15",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Lead Events"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions16",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Redirect"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions17",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "View"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions18",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "ViewRT"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions19",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Converted Call"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomConversions20",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Lead_test Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue7",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "App_test Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue8",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "1Test2 Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue9",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Click Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue10",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Call Initiated Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue11",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "cc Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue12",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "j3 Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue13",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "test12 Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue14",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue15",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Lead Events Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue16",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Redirect Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue17",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "ViewRT Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue19",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Converted Call Revenue"
                    },
                    "item": {
                        "filter": true,
                        "key": "cfcustomRevenue20",
                        "sortable": true,
                        "group": "cc",
                        "type": "metric"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Name",
                        "info": "The name of the item as reported from the traffic source."
                    },
                    "item": {
                        "key": "name",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": true,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Status",
                        "info": "The current status of the item. Status can be Running or Paused"
                    },
                    "item": {
                        "key": "status",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Spending Limit",
                        "info": "The Spending limit of a campaign. Can be Monthly, Lifetime or None (no spending limit)"
                    },
                    "item": {
                        "key": "additional_fields.budget",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Budget",
                        "info": "The budget of the campaign. Can be Daily, Monthly, or Lifetime."
                    },
                    "item": {
                        "key": "additional_fields.daily_budget",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Bid",
                        "info": "The amount you are paying based on the bidding model (CPC, CPM, CPA etc)"
                    },
                    "item": {
                        "key": "additional_fields.bid",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 4,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Target CPA"
                    },
                    "item": {
                        "key": "additional_fields.target_cpa",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Payout",
                        "info": "[Payout] = [Revenue (Tracker)] / [Conversions (Tracker]; The average revenue that each conversion is generating. Payout is automatically calculated using the Revenue (Tracker) and Conversions (Tracker), but you can also override the automatic payout by clicking on the Payout cell and entering a static value manually."
                    },
                    "item": {
                        "key": "payout",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Avg. Cpc",
                        "info": "[Avg. CPC] = [Amount Spent] / [Clicks]; The average cost-per-click calculated based on the total cost and number of ad clicks reported by the traffic source."
                    },
                    "item": {
                        "key": "avg_cpc",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Amount Spent",
                        "info": "The ad spend amount as reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "cost",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": true
                },
                {
                    "header": {
                        "content": "Conversions (Tracker)",
                        "info": "The number of conversion events reported by the tracking platform. Note: this does not include custom conversions. Only the main conversion event."
                    },
                    "item": {
                        "key": "tr_conversions",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Revenue (Tracker)",
                        "info": "The generated revenue as reported by the tracking platform. Note: this does not include revenues from custom conversions. It only includes the main Revenue column of your tracker."
                    },
                    "item": {
                        "key": "tr_revenue",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Net (Tracker)",
                        "info": "[Net (Tracker)] = [Revenue (Tracker)] - [Amount Spent]; The calculated net profit based on the Amount Spent reported by the traffic source and the Revenue (Tracker) reported by the tracking platform."
                    },
                    "item": {
                        "key": "tr_net",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Roi (Tracker)",
                        "info": "[Roi (Tracker)] = ( [Net (Tracker)] / [Amount Spent] ) x 100; The calculated return on investment based on the Amount Spend reported by the traffic source, and Revenue (Tracker) reported by the tracking platform."
                    },
                    "item": {
                        "key": "tr_roi",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Estimated Spent",
                        "info": "[Est. Spent] = [Avg. Cpc] x [Clicks (Tracker)]; NOTE: Estimated Spend is only available if you have connected a tracking platform.  To make up for the delay some traffic sources have in reporting the accurate spend for the day, we try to estimate its value using the average Cpc and multiplying it by the amount of clicks reported by your trackign platform, Clicks (Tracker)."
                    },
                    "item": {
                        "key": "est_cost",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Est. Net",
                        "info": "Because Taboola stats are delayed, we calculate an estimated net as: Est. Net = Revenue - Est. Cost"
                    },
                    "item": {
                        "key": "est_net",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Est. Roi",
                        "info": "Because Taboola stats are delayed, we calculate an estimated ROI as: Est. ROI = Est. Net / Est. Cost"
                    },
                    "item": {
                        "key": "est_roi",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 3,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Epc (Tracker)",
                        "info": "[Epc (Tracker)] = [Revenue (Tracker)] / [Clicks (Tracker)]; The calculated earning per click based on the Revenue (Tracker) and Clicks (Tracker) reported by the tracking platform."
                    },
                    "item": {
                        "key": "tr_epc",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Epc",
                        "info": "[Epc] = [Revenue (Tracker)] / [Clicks]; The earning per click based on the Revenue (Tracker), reported by the tracking platform, and ad Clicks you paid for on the traffic source.  The reason why this version of Epc is needed is because sometimes tracking platforms might report more or less clicks, compared to the traffic source, so the Epc might not be as accurate as the one calculated on traffic source clicks."
                    },
                    "item": {
                        "key": "epc",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Cpa (Tracker)",
                        "info": "[Cpa (Tracker)] = [Amount Spent] / [Conversions (Tracker)]; The calculated cost per action (acquisition) based on the number of conversions reported by the tracking platform and the amount spent reported by the traffic source."
                    },
                    "item": {
                        "key": "tr_cpa",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Impressions",
                        "info": "The number of ad impressions reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "impressions",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": true
                },
                {
                    "header": {
                        "content": "Viewable Impressions",
                        "info": "The total number of viewable impressions as reported by the traffic source.  Each time your campaign item is on the screen for 1 second, it’s counted as one impression"
                    },
                    "item": {
                        "key": "viewable_impressions",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Clicks",
                        "info": "The number of ad clicks reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Clicks (Tracker)",
                        "info": "The amount of Ad Clicks (campaign link visits) reported by the tracking platform."
                    },
                    "item": {
                        "key": "tr_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Landing Page Clicks",
                        "info": "The amount of visitors which clicked on a call-to-action link inside your landing page (click to an offer link), as reported by the tracking platform."
                    },
                    "item": {
                        "key": "lp_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Landing Page Ctr",
                        "info": "[Landing Page Ctr] = ( [Landing Page Clicks] / [ Clicks (Tracker)] ) x 100; The calculated landing page click-through rate percentage, based on landing page clicks and total clicks reported by the tracking platform."
                    },
                    "item": {
                        "key": "lp_ctr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "percentage",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Ctr",
                        "info": "Ctr = Clicks/Impressions. CTR is calculated by dividing the number of clicks by the number of impressions, as reported by the traffic source, for your campaigns and campaign items."
                    },
                    "item": {
                        "key": "ctr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Click Loss",
                        "info": " {             \"default\": {                 \"variables\": {                     \"formula\": {                         \"value\": \"click_loss=ts_clicks - tr_clicks\",                         \"type\": \"FORMULA\"                     }                 },                 \"text\": \"{{formula}}. The difference between clicks reported by your traffic source and clicks reported by your tracking platform. Some times, for various reasons, your tracking platform may report less or more clicks than what your ad network is reporting.\"             }         }"
                    },
                    "item": {
                        "key": "click_loss",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Conversions",
                        "info": "The number of conversions tracked and reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_conversions",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Revenue",
                        "info": "The revenue reported by the traffic source (ad network). This revenue is usually tracked by the ad network's pixel, or sent to the ad network via a server-2-server postback."
                    },
                    "item": {
                        "key": "ts_revenue",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": true
                },
                {
                    "header": {
                        "content": "Net",
                        "info": "[Net] = [Revenue] - [Amount Spent]; The calculated net profit based on the ad spend and revenue reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_net",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Roi",
                        "info": "[Roi] = ( [Net] / [Amount Spent] ) x 100; The calculated return on investment based on the ad spend and revenue reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_roi",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": "color"
                    },
                    "comparable": true
                },
                {
                    "header": {
                        "content": "Cpa",
                        "info": "[Cpa] = [Amount Spent] / [Conversions]  The calculated cost per action based on the ad spend and the number of conversions reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_cpa",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Epc",
                        "info": "[Epc] = [Revenue] / [Clicks]; The calculated earning per click based on the reported number of ad clicks and revenue from the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_epc",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Cvr",
                        "info": "[Cvr] = ( [Clicks] / [Conversions] ) x 100; The calculated conversion rate based on the ad clicks and the number of conversions reported by the traffic source (ad network)."
                    },
                    "item": {
                        "key": "ts_cvr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "percentage",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Cvr (Tracker)",
                        "info": "[Cvr (Tracker)] = ( [Conversions (Tracker)] / [Clicks (Tracker)] ) x 100; The calculated conversion rate based on the number of clicks and conversions reported by the tracking platform"
                    },
                    "item": {
                        "key": "tr_cvr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "percentage",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "eCPM",
                        "info": "eCPM = (Cost/Impression)*1000"
                    },
                    "item": {
                        "key": "ecpm",
                        "sortable": true,
                        "type": "metric",
                        "filter": false,
                        "group": "ts"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "LP CR",
                        "info": "Landing Page Conversion Rate= (TR Conversions/ LP Clicks)*100"
                    },
                    "item": {
                        "key": "lp_cr",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "percentage",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "LP CPC",
                        "info": "Cost per LP Click"
                    },
                    "item": {
                        "key": "cp_lp_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "tr"
                    },
                    "display": true,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search Feed Revenue",
                        "info": "Revenue reported by your search feed provider"
                    },
                    "item": {
                        "key": "publisher_revenue",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "pf"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search Feed Clicks",
                        "info": "Clicks reported by your search feed provider"
                    },
                    "item": {
                        "key": "publisher_clicks",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "pf"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Search Feed Conversions",
                        "info": "Conversions reported by your search feed provider"
                    },
                    "item": {
                        "key": "publisher_conversions",
                        "sortable": true,
                        "type": "metric",
                        "filter": true,
                        "group": "pf"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Learning State"
                    },
                    "item": {
                        "key": "learning_state",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Traffic Source"
                    },
                    "item": {
                        "key": "traffic_source_unique_name",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Bid Strategy"
                    },
                    "item": {
                        "key": "bid_strategy",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Start Date",
                        "info": "Campaign start date"
                    },
                    "item": {
                        "key": "startDate",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Clicks",
                        "info": "Taboola real-time clicks"
                    },
                    "item": {
                        "key": "performance_ts_clicks_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Conversions",
                        "info": "Taboola real-time conversions"
                    },
                    "item": {
                        "key": "performance_ts_conversions_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Revenue",
                        "info": "Taboola real-time revenue."
                    },
                    "item": {
                        "key": "performance_ts_revenue_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Spend",
                        "info": "Taboola real-time spend"
                    },
                    "item": {
                        "key": "performance_cost_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Realtime Viewable Imp.",
                        "info": "Taboola real-time viewable impressions"
                    },
                    "item": {
                        "key": "performance_viewable_impressions_live",
                        "sortable": true,
                        "type": "other",
                        "filter": true,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "numeric",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false
                },
                {
                    "header": {
                        "content": "Assertive Yield Test",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"1 + cost\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_1",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "1 + cost"
                },
                {
                    "header": {
                        "content": "Custom_metric_2",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"( impressions + 3 )\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_2",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "( impressions + 3 )"
                },
                {
                    "header": {
                        "content": "Test publisher clicks",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"publisher_clicks * 2\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_3",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 0,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "publisher_clicks * 2"
                },
                {
                    "header": {
                        "content": "Test publisher revenue",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"publisher_revenue + ts_revenue + tr_revenue\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_4",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "publisher_revenue + ts_revenue + tr_revenue"
                },
                {
                    "header": {
                        "content": "Custom EPV",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"tr_revenue / 2\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_5",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "tr_revenue / 2"
                },
                {
                    "header": {
                        "content": "Test bpicori",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"2 + impressions + tr_conversions\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_6",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "2 + impressions + tr_conversions"
                },
                {
                    "header": {
                        "content": "CTR*CPC",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr * 1 + 22 / ( 0 - 1 )\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_7",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "ctr * 1 + 22 / ( 0 - 1 )"
                },
                {
                    "header": {
                        "content": "test fb",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"impressions + ts_clicks\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_8",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "number",
                        "precision": 3,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "impressions + ts_clicks"
                },
                {
                    "header": {
                        "content": "Dynamic Payout",
                        "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"tr_revenue / tr_conversions\",\"type\":\"FORMULA\"}}}}"
                    },
                    "item": {
                        "filter": true,
                        "key": "custom_metric_9",
                        "sortable": true,
                        "type": "metric",
                        "group": "cm"
                    },
                    "display": false,
                    "options": {
                        "format": "currency",
                        "precision": 2,
                        "style": ""
                    },
                    "comparable": false,
                    "customMetric": "tr_revenue / tr_conversions"
                },
                {
                    "header": {
                        "content": "Account ID"
                    },
                    "item": {
                        "key": "traffic_souce_account_id",
                        "sortable": true,
                        "type": "other",
                        "filter": false,
                        "group": "other"
                    },
                    "display": false,
                    "options": {
                        "format": "string",
                        "precision": 3,
                        "style": ""
                    }
                }
            ]
            },
          ],
          admin_presets: [
            {
              id: "1",
              name: "Optimizer 1",
              description:
                "View metrics related to how often your ads are delivered. View common performance metrics.",
              isAdmin: true,
            },
            {
              id: "2",
              name: "Optimizer 2",
              description:
                "View metrics related to how often yourfkdsfksdkf ads are delivered. View common performance metrics.",
              isAdmin: true,
            },
            {
              id: "3",
              name: "Optimizer 3",
              description: "View metrics related to how often your ads are delivered. View common performance metrics.",
              isAdmin: true,
            },
          ],
    },
    selectedPreset: {
        id: "6668379018f6683bea6bfe93",
        name: "Test 2",
        fields: [
            {
                "header": {
                    "content": "Camp. ID"
                },
                "item": {
                    "key": "traffic_source_campaign_id",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": true,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Account Name"
                },
                "item": {
                    "key": "traffic_source_account_name",
                    "sortable": false,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": true,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Custom Metric 10",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr + 50\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_10",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "percentage",
                    "precision": 2,
                    "style": "color"
                },
                "comparable": false,
                "customMetric": "ctr + 50"
            },
            {
                "header": {
                    "content": "TRIAL STARTED"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions3",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Purchase"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions4",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Offer Page View"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions1",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Sign Up Page"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions2",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Payment Page"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions6",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Purchase Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue4",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Signup Initiated (pending user) Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue6",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Checkout Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue3",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Offer Page View Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue1",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "bpicori"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions5",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Add To Cart Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue2",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "bpicori Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue5",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Lead"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions7",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "App_test"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions8",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "1Test2"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions9",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Click"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions10",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Call Initiated"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions11",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "cc"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions12",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "j3"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions13",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "test12"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions14",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Search"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions15",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Lead Events"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions16",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Redirect"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions17",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "View"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions18",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "ViewRT"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions19",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Converted Call"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomConversions20",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Lead_test Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue7",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "App_test Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue8",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "1Test2 Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue9",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Click Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue10",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Call Initiated Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue11",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "cc Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue12",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "j3 Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue13",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "test12 Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue14",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Search Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue15",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Lead Events Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue16",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Redirect Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue17",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "ViewRT Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue19",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Converted Call Revenue"
                },
                "item": {
                    "filter": true,
                    "key": "cfcustomRevenue20",
                    "sortable": true,
                    "group": "cc",
                    "type": "metric"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Name",
                    "info": "The name of the item as reported from the traffic source."
                },
                "item": {
                    "key": "name",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": true,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Status",
                    "info": "The current status of the item. Status can be Running or Paused"
                },
                "item": {
                    "key": "status",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Spending Limit",
                    "info": "The Spending limit of a campaign. Can be Monthly, Lifetime or None (no spending limit)"
                },
                "item": {
                    "key": "additional_fields.budget",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Budget",
                    "info": "The budget of the campaign. Can be Daily, Monthly, or Lifetime."
                },
                "item": {
                    "key": "additional_fields.daily_budget",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Bid",
                    "info": "The amount you are paying based on the bidding model (CPC, CPM, CPA etc)"
                },
                "item": {
                    "key": "additional_fields.bid",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 4,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Target CPA"
                },
                "item": {
                    "key": "additional_fields.target_cpa",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Payout",
                    "info": "[Payout] = [Revenue (Tracker)] / [Conversions (Tracker]; The average revenue that each conversion is generating. Payout is automatically calculated using the Revenue (Tracker) and Conversions (Tracker), but you can also override the automatic payout by clicking on the Payout cell and entering a static value manually."
                },
                "item": {
                    "key": "payout",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Avg. Cpc",
                    "info": "[Avg. CPC] = [Amount Spent] / [Clicks]; The average cost-per-click calculated based on the total cost and number of ad clicks reported by the traffic source."
                },
                "item": {
                    "key": "avg_cpc",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Amount Spent",
                    "info": "The ad spend amount as reported by the traffic source (ad network)."
                },
                "item": {
                    "key": "cost",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": ""
                },
                "comparable": true
            },
            {
                "header": {
                    "content": "Conversions (Tracker)",
                    "info": "The number of conversion events reported by the tracking platform. Note: this does not include custom conversions. Only the main conversion event."
                },
                "item": {
                    "key": "tr_conversions",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Revenue (Tracker)",
                    "info": "The generated revenue as reported by the tracking platform. Note: this does not include revenues from custom conversions. It only includes the main Revenue column of your tracker."
                },
                "item": {
                    "key": "tr_revenue",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Net (Tracker)",
                    "info": "[Net (Tracker)] = [Revenue (Tracker)] - [Amount Spent]; The calculated net profit based on the Amount Spent reported by the traffic source and the Revenue (Tracker) reported by the tracking platform."
                },
                "item": {
                    "key": "tr_net",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": "color"
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Roi (Tracker)",
                    "info": "[Roi (Tracker)] = ( [Net (Tracker)] / [Amount Spent] ) x 100; The calculated return on investment based on the Amount Spend reported by the traffic source, and Revenue (Tracker) reported by the tracking platform."
                },
                "item": {
                    "key": "tr_roi",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "percentage",
                    "precision": 2,
                    "style": "color"
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Estimated Spent",
                    "info": "[Est. Spent] = [Avg. Cpc] x [Clicks (Tracker)]; NOTE: Estimated Spend is only available if you have connected a tracking platform.  To make up for the delay some traffic sources have in reporting the accurate spend for the day, we try to estimate its value using the average Cpc and multiplying it by the amount of clicks reported by your trackign platform, Clicks (Tracker)."
                },
                "item": {
                    "key": "est_cost",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Est. Net",
                    "info": "Because Taboola stats are delayed, we calculate an estimated net as: Est. Net = Revenue - Est. Cost"
                },
                "item": {
                    "key": "est_net",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": "color"
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Est. Roi",
                    "info": "Because Taboola stats are delayed, we calculate an estimated ROI as: Est. ROI = Est. Net / Est. Cost"
                },
                "item": {
                    "key": "est_roi",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "percentage",
                    "precision": 3,
                    "style": "color"
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Epc (Tracker)",
                    "info": "[Epc (Tracker)] = [Revenue (Tracker)] / [Clicks (Tracker)]; The calculated earning per click based on the Revenue (Tracker) and Clicks (Tracker) reported by the tracking platform."
                },
                "item": {
                    "key": "tr_epc",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Epc",
                    "info": "[Epc] = [Revenue (Tracker)] / [Clicks]; The earning per click based on the Revenue (Tracker), reported by the tracking platform, and ad Clicks you paid for on the traffic source.  The reason why this version of Epc is needed is because sometimes tracking platforms might report more or less clicks, compared to the traffic source, so the Epc might not be as accurate as the one calculated on traffic source clicks."
                },
                "item": {
                    "key": "epc",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Cpa (Tracker)",
                    "info": "[Cpa (Tracker)] = [Amount Spent] / [Conversions (Tracker)]; The calculated cost per action (acquisition) based on the number of conversions reported by the tracking platform and the amount spent reported by the traffic source."
                },
                "item": {
                    "key": "tr_cpa",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Impressions",
                    "info": "The number of ad impressions reported by the traffic source (ad network)."
                },
                "item": {
                    "key": "impressions",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": true
            },
            {
                "header": {
                    "content": "Viewable Impressions",
                    "info": "The total number of viewable impressions as reported by the traffic source.  Each time your campaign item is on the screen for 1 second, it’s counted as one impression"
                },
                "item": {
                    "key": "viewable_impressions",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Clicks",
                    "info": "The number of ad clicks reported by the traffic source (ad network)."
                },
                "item": {
                    "key": "ts_clicks",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Clicks (Tracker)",
                    "info": "The amount of Ad Clicks (campaign link visits) reported by the tracking platform."
                },
                "item": {
                    "key": "tr_clicks",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Landing Page Clicks",
                    "info": "The amount of visitors which clicked on a call-to-action link inside your landing page (click to an offer link), as reported by the tracking platform."
                },
                "item": {
                    "key": "lp_clicks",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Landing Page Ctr",
                    "info": "[Landing Page Ctr] = ( [Landing Page Clicks] / [ Clicks (Tracker)] ) x 100; The calculated landing page click-through rate percentage, based on landing page clicks and total clicks reported by the tracking platform."
                },
                "item": {
                    "key": "lp_ctr",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "percentage",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Ctr",
                    "info": "Ctr = Clicks/Impressions. CTR is calculated by dividing the number of clicks by the number of impressions, as reported by the traffic source, for your campaigns and campaign items."
                },
                "item": {
                    "key": "ctr",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "percentage",
                    "precision": 2,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Click Loss",
                    "info": " {             \"default\": {                 \"variables\": {                     \"formula\": {                         \"value\": \"click_loss=ts_clicks - tr_clicks\",                         \"type\": \"FORMULA\"                     }                 },                 \"text\": \"{{formula}}. The difference between clicks reported by your traffic source and clicks reported by your tracking platform. Some times, for various reasons, your tracking platform may report less or more clicks than what your ad network is reporting.\"             }         }"
                },
                "item": {
                    "key": "click_loss",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Conversions",
                    "info": "The number of conversions tracked and reported by the traffic source (ad network)."
                },
                "item": {
                    "key": "ts_conversions",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Revenue",
                    "info": "The revenue reported by the traffic source (ad network). This revenue is usually tracked by the ad network's pixel, or sent to the ad network via a server-2-server postback."
                },
                "item": {
                    "key": "ts_revenue",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": ""
                },
                "comparable": true
            },
            {
                "header": {
                    "content": "Net",
                    "info": "[Net] = [Revenue] - [Amount Spent]; The calculated net profit based on the ad spend and revenue reported by the traffic source (ad network)."
                },
                "item": {
                    "key": "ts_net",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": "color"
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Roi",
                    "info": "[Roi] = ( [Net] / [Amount Spent] ) x 100; The calculated return on investment based on the ad spend and revenue reported by the traffic source (ad network)."
                },
                "item": {
                    "key": "ts_roi",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "percentage",
                    "precision": 2,
                    "style": "color"
                },
                "comparable": true
            },
            {
                "header": {
                    "content": "Cpa",
                    "info": "[Cpa] = [Amount Spent] / [Conversions]  The calculated cost per action based on the ad spend and the number of conversions reported by the traffic source (ad network)."
                },
                "item": {
                    "key": "ts_cpa",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Epc",
                    "info": "[Epc] = [Revenue] / [Clicks]; The calculated earning per click based on the reported number of ad clicks and revenue from the traffic source (ad network)."
                },
                "item": {
                    "key": "ts_epc",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Cvr",
                    "info": "[Cvr] = ( [Clicks] / [Conversions] ) x 100; The calculated conversion rate based on the ad clicks and the number of conversions reported by the traffic source (ad network)."
                },
                "item": {
                    "key": "ts_cvr",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "percentage",
                    "precision": 2,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Cvr (Tracker)",
                    "info": "[Cvr (Tracker)] = ( [Conversions (Tracker)] / [Clicks (Tracker)] ) x 100; The calculated conversion rate based on the number of clicks and conversions reported by the tracking platform"
                },
                "item": {
                    "key": "tr_cvr",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "percentage",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "eCPM",
                    "info": "eCPM = (Cost/Impression)*1000"
                },
                "item": {
                    "key": "ecpm",
                    "sortable": true,
                    "type": "metric",
                    "filter": false,
                    "group": "ts"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "LP CR",
                    "info": "Landing Page Conversion Rate= (TR Conversions/ LP Clicks)*100"
                },
                "item": {
                    "key": "lp_cr",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "percentage",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "LP CPC",
                    "info": "Cost per LP Click"
                },
                "item": {
                    "key": "cp_lp_clicks",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "tr"
                },
                "display": true,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Search Feed Revenue",
                    "info": "Revenue reported by your search feed provider"
                },
                "item": {
                    "key": "publisher_revenue",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "pf"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Search Feed Clicks",
                    "info": "Clicks reported by your search feed provider"
                },
                "item": {
                    "key": "publisher_clicks",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "pf"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Search Feed Conversions",
                    "info": "Conversions reported by your search feed provider"
                },
                "item": {
                    "key": "publisher_conversions",
                    "sortable": true,
                    "type": "metric",
                    "filter": true,
                    "group": "pf"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Learning State"
                },
                "item": {
                    "key": "learning_state",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Traffic Source"
                },
                "item": {
                    "key": "traffic_source_unique_name",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Bid Strategy"
                },
                "item": {
                    "key": "bid_strategy",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Start Date",
                    "info": "Campaign start date"
                },
                "item": {
                    "key": "startDate",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Realtime Clicks",
                    "info": "Taboola real-time clicks"
                },
                "item": {
                    "key": "performance_ts_clicks_live",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Realtime Conversions",
                    "info": "Taboola real-time conversions"
                },
                "item": {
                    "key": "performance_ts_conversions_live",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Realtime Revenue",
                    "info": "Taboola real-time revenue."
                },
                "item": {
                    "key": "performance_ts_revenue_live",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Realtime Spend",
                    "info": "Taboola real-time spend"
                },
                "item": {
                    "key": "performance_cost_live",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Realtime Viewable Imp.",
                    "info": "Taboola real-time viewable impressions"
                },
                "item": {
                    "key": "performance_viewable_impressions_live",
                    "sortable": true,
                    "type": "other",
                    "filter": true,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "numeric",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false
            },
            {
                "header": {
                    "content": "Assertive Yield Test",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"1 + cost\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_1",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "number",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "1 + cost"
            },
            {
                "header": {
                    "content": "Custom_metric_2",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"( impressions + 3 )\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_2",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "number",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "( impressions + 3 )"
            },
            {
                "header": {
                    "content": "Test publisher clicks",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"publisher_clicks * 2\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_3",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "number",
                    "precision": 0,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "publisher_clicks * 2"
            },
            {
                "header": {
                    "content": "Test publisher revenue",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"publisher_revenue + ts_revenue + tr_revenue\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_4",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "publisher_revenue + ts_revenue + tr_revenue"
            },
            {
                "header": {
                    "content": "Custom EPV",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"tr_revenue / 2\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_5",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "number",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "tr_revenue / 2"
            },
            {
                "header": {
                    "content": "Test bpicori",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"2 + impressions + tr_conversions\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_6",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "number",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "2 + impressions + tr_conversions"
            },
            {
                "header": {
                    "content": "CTR*CPC",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"ctr * 1 + 22 / ( 0 - 1 )\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_7",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "number",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "ctr * 1 + 22 / ( 0 - 1 )"
            },
            {
                "header": {
                    "content": "test fb",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"impressions + ts_clicks\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_8",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "number",
                    "precision": 3,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "impressions + ts_clicks"
            },
            {
                "header": {
                    "content": "Dynamic Payout",
                    "info": "{\"default\":{\"text\":\"This is a custom metric. It's value is calculated by the formula: {{formula}}\",\"variables\":{\"formula\":{\"value\":\"tr_revenue / tr_conversions\",\"type\":\"FORMULA\"}}}}"
                },
                "item": {
                    "filter": true,
                    "key": "custom_metric_9",
                    "sortable": true,
                    "type": "metric",
                    "group": "cm"
                },
                "display": false,
                "options": {
                    "format": "currency",
                    "precision": 2,
                    "style": ""
                },
                "comparable": false,
                "customMetric": "tr_revenue / tr_conversions"
            },
            {
                "header": {
                    "content": "Account ID"
                },
                "item": {
                    "key": "traffic_souce_account_id",
                    "sortable": true,
                    "type": "other",
                    "filter": false,
                    "group": "other"
                },
                "display": false,
                "options": {
                    "format": "string",
                    "precision": 3,
                    "style": ""
                }
            }
        ]
      },
    };
}
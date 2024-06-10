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
                    header: {
                        content: "Account Name",
                    },
                    item: {
                        key: "traffic_source_account_name",
                        sortable: false,
                        filter: false,
                        group: "other",
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
                        content: "Name",
                        info: "The name of the item as reported from the traffic source.",
                    },
                    item: {
                        key: "name",
                        sortable: true,
                        filter: false,
                        group: "other",
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
                        content: "TestRuleCustomMetrics",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"avg_cpc + 1","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_10",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    customMetric: "avg_cpc + 1",
                    comparable: false,
                },
                {
                    header: {
                        content: "Target CPA",
                    },
                    item: {
                        key: "additional_fields.target_cpa",
                        sortable: true,
                        filter: true,
                        group: "other",
                        type: "other",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Bid",
                        info:
                            "The amount you are paying based on the bidding model (CPC, CPM, CPA etc)",
                    },
                    item: {
                        key: "additional_fields.bid",
                        sortable: true,
                        filter: true,
                        group: "other",
                        type: "other",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 4,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Revenue (Tracker)",
                        info:
                            "The generated revenue as reported by the tracking platform. Note: this does not include revenues from custom conversions. It only includes the main Revenue column of your tracker.",
                    },
                    item: {
                        key: "tr_revenue",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Avg. Cpc",
                        info:
                            "[Avg. CPC] = [Amount Spent] / [Clicks]; The average cost-per-click calculated based on the total cost and number of ad clicks reported by the traffic source.",
                    },
                    item: {
                        key: "avg_cpc",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Camp. ID",
                    },
                    item: {
                        key: "traffic_source_campaign_id",
                        sortable: true,
                        filter: false,
                        group: "other",
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
                        content: "Budget",
                        info:
                            "The budget of the campaign. Can be Daily, Monthly, or Lifetime.",
                    },
                    item: {
                        key: "additional_fields.daily_budget",
                        sortable: true,
                        filter: true,
                        group: "other",
                        type: "other",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Status",
                        info:
                            "The current status of the item. Status can be Running or Paused",
                    },
                    item: {
                        key: "status",
                        sortable: true,
                        filter: false,
                        group: "other",
                        type: "other",
                    },
                    display: false,
                    options: {
                        format: "string",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Spending Limit",
                        info:
                            "The Spending limit of a campaign. Can be Monthly, Lifetime or None (no spending limit)",
                    },
                    item: {
                        key: "additional_fields.budget",
                        sortable: true,
                        filter: true,
                        group: "other",
                        type: "other",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Payout",
                        info:
                            "[Payout] = [Revenue (Tracker)] / [Conversions (Tracker]; The average revenue that each conversion is generating. Payout is automatically calculated using the Revenue (Tracker) and Conversions (Tracker), but you can also override the automatic payout by clicking on the Payout cell and entering a static value manually.",
                    },
                    item: {
                        key: "payout",
                        sortable: true,
                        filter: true,
                        group: "other",
                        type: "other",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Amount Spent",
                        info:
                            "The ad spend amount as reported by the traffic source (ad network).",
                    },
                    item: {
                        key: "cost",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    comparable: true,
                },
                {
                    header: {
                        content: "Click Loss",
                        info:
                            ' {             "default": {                 "variables": {                     "formula": {                         "value": "click_loss=ts_clicks - tr_clicks",                         "type": "FORMULA"                     }                 },                 "text": "{{formula}}. The difference between clicks reported by your traffic source and clicks reported by your tracking platform. Some times, for various reasons, your tracking platform may report less or more clicks than what your ad network is reporting."             }         }',
                    },
                    item: {
                        key: "click_loss",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Conversions (Tracker)",
                        info:
                            "The number of conversion events reported by the tracking platform. Note: this does not include custom conversions. Only the main conversion event.",
                    },
                    item: {
                        key: "tr_conversions",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Clicks",
                        info:
                            "The number of ad clicks reported by the traffic source (ad network).",
                    },
                    item: {
                        key: "ts_clicks",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Net (Tracker)",
                        info:
                            "[Net (Tracker)] = [Revenue (Tracker)] - [Amount Spent]; The calculated net profit based on the Amount Spent reported by the traffic source and the Revenue (Tracker) reported by the tracking platform.",
                    },
                    item: {
                        key: "tr_net",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "color",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Roi (Tracker)",
                        info:
                            "[Roi (Tracker)] = ( [Net (Tracker)] / [Amount Spent] ) x 100; The calculated return on investment based on the Amount Spend reported by the traffic source, and Revenue (Tracker) reported by the tracking platform.",
                    },
                    item: {
                        key: "tr_roi",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: true,
                    options: {
                        format: "percentage",
                        precision: 2,
                        style: "color",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Estimated Spent",
                        info:
                            "[Est. Spent] = [Avg. Cpc] x [Clicks (Tracker)]; NOTE: Estimated Spend is only available if you have connected a tracking platform.  To make up for the delay some traffic sources have in reporting the accurate spend for the day, we try to estimate its value using the average Cpc and multiplying it by the amount of clicks reported by your trackign platform, Clicks (Tracker).",
                    },
                    item: {
                        key: "est_cost",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Est. Net",
                        info:
                            "Because Taboola stats are delayed, we calculate an estimated net as: Est. Net = Revenue - Est. Cost",
                    },
                    item: {
                        key: "est_net",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "color",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Epc (Tracker)",
                        info:
                            "[Epc (Tracker)] = [Revenue (Tracker)] / [Clicks (Tracker)]; The calculated earning per click based on the Revenue (Tracker) and Clicks (Tracker) reported by the tracking platform.",
                    },
                    item: {
                        key: "tr_epc",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Est. Roi",
                        info:
                            "Because Taboola stats are delayed, we calculate an estimated ROI as: Est. ROI = Est. Net / Est. Cost",
                    },
                    item: {
                        key: "est_roi",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "percentage",
                        precision: 3,
                        style: "color",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Epc",
                        info:
                            "[Epc] = [Revenue (Tracker)] / [Clicks]; The earning per click based on the Revenue (Tracker), reported by the tracking platform, and ad Clicks you paid for on the traffic source.  The reason why this version of Epc is needed is because sometimes tracking platforms might report more or less clicks, compared to the traffic source, so the Epc might not be as accurate as the one calculated on traffic source clicks.",
                    },
                    item: {
                        key: "epc",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Cpa (Tracker)",
                        info:
                            "[Cpa (Tracker)] = [Amount Spent] / [Conversions (Tracker)]; The calculated cost per action (acquisition) based on the number of conversions reported by the tracking platform and the amount spent reported by the traffic source.",
                    },
                    item: {
                        key: "tr_cpa",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Impressions",
                        info:
                            "The number of ad impressions reported by the traffic source (ad network).",
                    },
                    item: {
                        key: "impressions",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: true,
                },
                {
                    header: {
                        content: "Viewable Impressions",
                        info:
                            "The total number of viewable impressions as reported by the traffic source.  Each time your campaign item is on the screen for 1 second, it’s counted as one impression",
                    },
                    item: {
                        key: "viewable_impressions",
                        sortable: true,
                        filter: true,
                        group: "other",
                        type: "other",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Clicks (Tracker)",
                        info:
                            "The amount of Ad Clicks (campaign link visits) reported by the tracking platform.",
                    },
                    item: {
                        key: "tr_clicks",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Landing Page Clicks",
                        info:
                            "The amount of visitors which clicked on a call-to-action link inside your landing page (click to an offer link), as reported by the tracking platform.",
                    },
                    item: {
                        key: "lp_clicks",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Landing Page Ctr",
                        info:
                            "[Landing Page Ctr] = ( [Landing Page Clicks] / [ Clicks (Tracker)] ) x 100; The calculated landing page click-through rate percentage, based on landing page clicks and total clicks reported by the tracking platform.",
                    },
                    item: {
                        key: "lp_ctr",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: false,
                    options: {
                        format: "percentage",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Ctr",
                        info:
                            "Ctr = Clicks/Impressions. CTR is calculated by dividing the number of clicks by the number of impressions, as reported by the traffic source, for your campaigns and campaign items.",
                    },
                    item: {
                        key: "ctr",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "percentage",
                        precision: 2,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Conversions",
                        info:
                            "The number of conversions tracked and reported by the traffic source (ad network).",
                    },
                    item: {
                        key: "ts_conversions",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Revenue",
                        info:
                            "The revenue reported by the traffic source (ad network). This revenue is usually tracked by the ad network's pixel, or sent to the ad network via a server-2-server postback.",
                    },
                    item: {
                        key: "ts_revenue",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    comparable: true,
                },
                {
                    header: {
                        content: "Net",
                        info:
                            "[Net] = [Revenue] - [Amount Spent]; The calculated net profit based on the ad spend and revenue reported by the traffic source (ad network).",
                    },
                    item: {
                        key: "ts_net",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "color",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Cpa",
                        info:
                            "[Cpa] = [Amount Spent] / [Conversions]  The calculated cost per action based on the ad spend and the number of conversions reported by the traffic source (ad network).",
                    },
                    item: {
                        key: "ts_cpa",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: true,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Roi",
                        info:
                            "[Roi] = ( [Net] / [Amount Spent] ) x 100; The calculated return on investment based on the ad spend and revenue reported by the traffic source (ad network).",
                    },
                    item: {
                        key: "ts_roi",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: false,
                    options: {
                        format: "percentage",
                        precision: 2,
                        style: "color",
                    },
                    comparable: true,
                },
                {
                    header: {
                        content: "Epc",
                        info:
                            "[Epc] = [Revenue] / [Clicks]; The calculated earning per click based on the reported number of ad clicks and revenue from the traffic source (ad network).",
                    },
                    item: {
                        key: "ts_epc",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Cvr",
                        info:
                            "[Cvr] = ( [Clicks] / [Conversions] ) x 100; The calculated conversion rate based on the ad clicks and the number of conversions reported by the traffic source (ad network).",
                    },
                    item: {
                        key: "ts_cvr",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "ts",
                    },
                    display: false,
                    options: {
                        format: "percentage",
                        precision: 2,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Cvr (Tracker)",
                        info:
                            "[Cvr (Tracker)] = ( [Conversions (Tracker)] / [Clicks (Tracker)] ) x 100; The calculated conversion rate based on the number of clicks and conversions reported by the tracking platform",
                    },
                    item: {
                        key: "tr_cvr",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: true,
                    options: {
                        format: "percentage",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "eCPM",
                        info: "eCPM = (Cost/Impression)*1000",
                    },
                    item: {
                        key: "ecpm",
                        sortable: true,
                        filter: false,
                        type: "metric",
                        group: "ts",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "LP CR",
                        info:
                            "Landing Page Conversion Rate= (TR Conversions/ LP Clicks)*100",
                    },
                    item: {
                        key: "lp_cr",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: true,
                    options: {
                        format: "percentage",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "LP CPC",
                        info: "Cost per LP Click",
                    },
                    item: {
                        key: "cp_lp_clicks",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "tr",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Search Feed Revenue",
                        info: "Revenue reported by your search feed provider",
                    },
                    item: {
                        key: "publisher_revenue",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "pf",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Search Feed Clicks",
                        info: "Clicks reported by your search feed provider",
                    },
                    item: {
                        key: "publisher_clicks",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "pf",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Search Feed Conversions",
                        info: "Conversions reported by your search feed provider",
                    },
                    item: {
                        key: "publisher_conversions",
                        sortable: true,
                        filter: true,
                        type: "metric",
                        group: "pf",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Learning State",
                    },
                    item: {
                        key: "learning_state",
                        sortable: true,
                        filter: false,
                        group: "other",
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
                        content: "Traffic Source",
                    },
                    item: {
                        key: "traffic_source_unique_name",
                        sortable: true,
                        filter: false,
                        group: "other",
                        type: "other",
                    },
                    display: false,
                    options: {
                        format: "string",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Bid Strategy",
                    },
                    item: {
                        key: "bid_strategy",
                        sortable: true,
                        filter: false,
                        group: "other",
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
                        content: "Start Date",
                        info: "Campaign start date",
                    },
                    item: {
                        key: "startDate",
                        sortable: true,
                        filter: false,
                        group: "other",
                        type: "other",
                    },
                    display: false,
                    options: {
                        format: "string",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Realtime Clicks",
                        info: "Taboola real-time clicks",
                    },
                    item: {
                        key: "performance_ts_clicks_live",
                        sortable: true,
                        filter: true,
                        group: "ts",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Realtime Conversions",
                        info: "Taboola real-time conversions",
                    },
                    item: {
                        key: "performance_ts_conversions_live",
                        sortable: true,
                        filter: true,
                        group: "ts",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Realtime Revenue",
                        info: "Taboola real-time revenue.",
                    },
                    item: {
                        key: "performance_ts_revenue_live",
                        sortable: true,
                        filter: true,
                        group: "ts",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Realtime Spend",
                        info: "Taboola real-time spend",
                    },
                    item: {
                        key: "performance_cost_live",
                        sortable: true,
                        filter: true,
                        group: "ts",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Realtime Viewable Imp.",
                        info: "Taboola real-time viewable impressions",
                    },
                    item: {
                        key: "performance_viewable_impressions_live",
                        sortable: true,
                        filter: true,
                        group: "ts",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 0,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Custom_metric_1",
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_1",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "number",
                        precision: 3,
                        style: "",
                    },
                    customMetric: "",
                    comparable: false,
                },
                {
                    header: {
                        content: "Custom_metric_2",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"( impressions + 3 )","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_2",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "number",
                        precision: 0,
                        style: "",
                    },
                    customMetric: "( impressions + 3 )",
                    comparable: false,
                },
                {
                    header: {
                        content: "Test publisher clicks",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"publisher_clicks * 2","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_3",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "number",
                        precision: 0,
                        style: "",
                    },
                    customMetric: "publisher_clicks * 2",
                    comparable: false,
                },
                {
                    header: {
                        content: "Test publisher revenue",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"publisher_revenue + ts_revenue + tr_revenue","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_4",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    customMetric: "publisher_revenue + ts_revenue + tr_revenue",
                    comparable: false,
                },
                {
                    header: {
                        content: "Custom EPV",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"tr_revenue / 2","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_5",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "number",
                        precision: 3,
                        style: "",
                    },
                    customMetric: "tr_revenue / 2",
                    comparable: false,
                },
                {
                    header: {
                        content: "Test bpicori",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"2 + impressions + tr_conversions","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_6",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "number",
                        precision: 3,
                        style: "",
                    },
                    customMetric: "2 + impressions + tr_conversions",
                    comparable: false,
                },
                {
                    header: {
                        content: "CTR*CPC",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"ctr * 1 + 22 / ( 0 - 1 )","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_7",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "number",
                        precision: 3,
                        style: "",
                    },
                    customMetric: "ctr * 1 + 22 / ( 0 - 1 )",
                    comparable: false,
                },
                {
                    header: {
                        content: "test fb",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"impressions + ts_clicks","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_8",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "number",
                        precision: 3,
                        style: "",
                    },
                    customMetric: "impressions + ts_clicks",
                    comparable: false,
                },
                {
                    header: {
                        content: "Dynamic Payout2",
                        info:
                            '{"default":{"text":"This is a custom metric. It\'s value is calculated by the formula: {{formula}}","variables":{"formula":{"value":"tr_revenue / tr_conversions","type":"FORMULA"}}}}',
                    },
                    item: {
                        filter: true,
                        key: "custom_metric_9",
                        sortable: true,
                        group: "cm",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 2,
                        style: "",
                    },
                    customMetric: "tr_revenue / tr_conversions",
                    comparable: false,
                },
                {
                    header: {
                        content: "TRIAL STARTED",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions3",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Purchase",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions4",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Offer Page View",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions1",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Sign Up Page",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions2",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Payment Page",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions6",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Purchase Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue4",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Signup Initiated (pending user) Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue6",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Checkout Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue3",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Offer Page View Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue1",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "bpicori",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions5",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Add To Cart Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue2",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "bpicori Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue5",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Lead",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions7",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "App_test",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions8",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "1Test2",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions9",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Click",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions10",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Call Initiated",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions11",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "cc",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions12",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "j3",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions13",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "test12",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions14",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Search",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions15",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Lead Events",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions16",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Redirect",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions17",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "View",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions18",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "ViewRT",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions19",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Lead_test Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue7",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "App_test Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue8",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "1Test2 Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue9",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Click Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue10",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Call Initiated Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue11",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "cc Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue12",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "j3 Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue13",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "test12 Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue14",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Search Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue15",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Lead Events Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue16",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Redirect Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue17",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "ViewRT Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue19",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Converted Call",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomConversions20",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Converted Call Revenue",
                    },
                    item: {
                        filter: true,
                        key: "cfcustomRevenue20",
                        sortable: true,
                        group: "cc",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Account ID",
                    },
                    item: {
                        key: "traffic_source_account_id",
                        sortable: true,
                        filter: false,
                        group: "other",
                        type: "other",
                    },
                    display: false,
                    options: {
                        format: "string",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Clicks",
                        info: "Assertive Yield Clicks",
                    },
                    item: {
                        filter: true,
                        key: "clicks",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Clicks Bounced",
                        info: "Assertive Yield Clicks Bounced",
                    },
                    item: {
                        filter: true,
                        key: "clicksbounced",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Clicks Returned",
                        info: "Assertive Yield Clicks Returned",
                    },
                    item: {
                        filter: true,
                        key: "clicksreturned",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D Impressions",
                        info: "Assertive Yield Direct Impressions",
                    },
                    item: {
                        filter: true,
                        key: "direct_impressions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D Revenue",
                        info: "Assertive Yield Direct Revenue",
                    },
                    item: {
                        filter: true,
                        key: "direct_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Impressions",
                        info: "Dynamic Allocation Impressions",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_impressions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Predicted Impressions",
                        info: "Dynamic Allocation Predicted Impressions",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_predicted_impressions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Predicted Revenue (Client)",
                        info: "Dynamic Allocation Predicted Revenue",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_predicted_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Predicted Revenue (Server)",
                        info: "Dynamic Allocation Predicted Revenue Server",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_predicted_revenue_server",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Revenue",
                        info: "Dynamic Allocation Revenue",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Revenue with Forecast",
                        info: "Dynamic Allocation Revenue With Forecast",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_revenue_with_forecast",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Revenue with Forecast (Client)",
                        info: "Dynamic Allocation Revenue With Forecast Client",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_revenue_with_forecast_client",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "First Five Indicator",
                        info: "Assertive Yield First Five Indicator",
                    },
                    item: {
                        filter: true,
                        key: "first_five_indicator",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Impressions",
                        info: "Assertive Yield Impressions",
                    },
                    item: {
                        filter: true,
                        key: "ayimpressions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Line Item Revenue",
                        info: "Assertive Yield Line Item Revenue",
                    },
                    item: {
                        filter: true,
                        key: "lineitem_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Page Views",
                        info: "Assertive Yield Page Views",
                    },
                    item: {
                        filter: true,
                        key: "pageviews",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Lost Impressions",
                        info: "Prebid Lost Impressions",
                    },
                    item: {
                        filter: true,
                        key: "prebid_lost_impressions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Lost Revenue",
                        info: "Prebid Lost Revenue",
                    },
                    item: {
                        filter: true,
                        key: "prebid_lost_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Revenue",
                        info: "Prebid Revenue",
                    },
                    item: {
                        filter: true,
                        key: "prebid_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Won Impressions",
                        info: "Prebid Won Impressions",
                    },
                    item: {
                        filter: true,
                        key: "prebid_won_impressions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Won Revenue",
                        info: "Prebid Won Revenue",
                    },
                    item: {
                        filter: true,
                        key: "prebid_won_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY New Sessions",
                        info: "Assertive Yield Session Starts",
                    },
                    item: {
                        filter: true,
                        key: "session_starts",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Sessions",
                        info: "Assertive Yield Sessions",
                    },
                    item: {
                        filter: true,
                        key: "sessions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Viewable",
                        info: "Assertive Yield Viewable",
                    },
                    item: {
                        filter: true,
                        key: "viewable",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Nativo Impressions",
                        info: "Assertive Yield Nativo Impressions",
                    },
                    item: {
                        filter: true,
                        key: "nativo_impressions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Nativo Revenue",
                        info: "Assertive Yield Nativo Revenue",
                    },
                    item: {
                        filter: true,
                        key: "nativo_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Ads Per Pageview",
                        info: "impressions / pageViews",
                    },
                    item: {
                        filter: true,
                        key: "ads_per_pageview",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Ads Per Session",
                        info: "impressions / sessions",
                    },
                    item: {
                        filter: true,
                        key: "ads_per_session",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Click-Leave Rate",
                        info: "( clicks - clicksReturned )/ clicks",
                    },
                    item: {
                        filter: true,
                        key: "clr",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY CTR",
                        info: "clicks / impressions *100",
                    },
                    item: {
                        filter: true,
                        key: "ayctr",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D PageView RPM",
                        info: "direct_revenue / pageViews * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "direct_pageview_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D PageView Value-RPM",
                        info: "direct_pageView_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "direct_pageview_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D RPM",
                        info: "direct_revenue / direct_impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "direct_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D Session RPM",
                        info: "direct_revenue / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "direct_session_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D Win Rate",
                        info: "direct_impressions / impressions",
                    },
                    item: {
                        filter: true,
                        key: "direct_winrate",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA PageView RPM",
                        info: "dynamicAllocation_revenue / pageViews * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_pageview_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA RPM",
                        info:
                            "dynamicAllocation_revenue / dynamicAllocation_impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Session RPM",
                        info: "dynamicAllocation_revenue / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_session_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Session RPM with Forecast",
                        info: "dynamicAllocation_revenue_with_forecast / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_session_rpm_with_forecast",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Win Rate",
                        info: "dynamicAllocation_impressions / impressions",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_winrate",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Miss-Click Rate",
                        info: "clicksBounced / clicks",
                    },
                    item: {
                        filter: true,
                        key: "cbr",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P Impressions",
                        info: "prebid_won_impressions + dynamicAllocation_impressions",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_impressions",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P Revenue",
                        info: "prebid_won_revenue + dynamicAllocation_revenue",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P Revenue with DA Forecast",
                        info:
                            "prebid_won_revenue + dynamicAllocation_revenue_with_forecast",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_revenue_with_forecast",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PageViews per Session",
                        info: "pageViews / sessions",
                    },
                    item: {
                        filter: true,
                        key: "pageviews_per_session",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB PageView RPM",
                        info: "prebid_revenue / pageViews * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_pageview_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB RPM",
                        info: "prebid_revenue / impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Session RPM",
                        info: "prebid_revenue / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_session_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "string",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Win Rate",
                        info: "prebid_won_impressions / impressions",
                    },
                    item: {
                        filter: true,
                        key: "prebid_winrate",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBL PageView RPM",
                        info: "prebid_lost_revenue / pageViews * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_lost_pageview_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBL RPM",
                        info: "prebid_lost_revenue / prebid_lost_impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_lost_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBL Session RPM",
                        info: "prebid_lost_revenue / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_lost_session_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBL Session Value-RPM",
                        info: "prebid_lost_session_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_lost_session_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBL Value-RPM",
                        info: "prebid_lost_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_lost_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBW PageView Value-RPM",
                        info: "prebid_won_pageView_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_won_pageview_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBW PageView RPM",
                        info: "prebid_won_revenue / pageViews * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_won_pageview_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBW RPM",
                        info: "prebid_won_revenue / prebid_won_impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_won_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBW Session RPM",
                        info: "prebid_won_revenue / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "prebid_won_session_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBW Session Value-RPM",
                        info: "prebid_won_session_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_won_session_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBW Value-RPM",
                        info: "prebid_won_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_won_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "RPM with DA Forecast",
                        info: "revenue_with_forecast / impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "rpm_with_forecast",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Session RPM with DA Forecast",
                        info: "revenue_with_forecast / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "session_rpm_with_forecast",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Session Value-RPM",
                        info: "session_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "session_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Value-RPM",
                        info: "rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "valuecpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "NTV PageView RPM",
                        info: "nativo_revenue / pageViews * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "nativo_pageview_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "NTV RPM",
                        info: "nativo_revenue / nativo_impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "nativo_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "NTV Session RPM",
                        info: "nativo_revenue / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "nativo_session_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Revenue",
                        info:
                            "prebid_won_revenue + dynamicAllocation_revenue + direct_revenue",
                    },
                    item: {
                        filter: true,
                        key: "revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Revenue with DA Forecast",
                        info:
                            "prebid_won_revenue + dynamicAllocation_revenue_with_forecast + direct_revenue",
                    },
                    item: {
                        filter: true,
                        key: "revenue_with_forecast",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Viewability",
                        info: "viewable / impressions",
                    },
                    item: {
                        filter: true,
                        key: "viewability",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "RPM",
                        info: "revenue / impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "Session RPM",
                        info: "revenue / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "session_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: true,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D Session Value-RPM",
                        info: "direct_session_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "direct_session_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB PageView Value-RPM",
                        info: "prebid_pageView_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_pageview_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Session Value-RPM",
                        info: "prebid_session_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_session_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PB Value-RPM",
                        info: "prebid_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PBL PageView Value-RPM",
                        info: "prebid_lost_pageView_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "prebid_lost_pageview_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "D Value-RPM",
                        info: "direct_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "direct_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P RPM",
                        info: "programmatic_revenue / programmatic_impressions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P Session RPM",
                        info: "programmatic_revenue / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_session_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P Session RPM with Forecast",
                        info: "programmatic_revenue_with_forecast / sessions * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_session_rpm_with_forecast",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P Session Value-RPM",
                        info: "programmatic_session_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_session_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P Value-RPM",
                        info: "programmatic_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P Win Rate",
                        info: "programmatic_impressions / impressions",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_winrate",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PageView RPM",
                        info: "revenue / pageViews * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "pageview_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "PageView Value-RPM",
                        info: "pageView_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "pageview_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA PageView Value-RPM",
                        info: "dynamicAllocation_pageView_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_pageview_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Session Value-RPM",
                        info: "dynamicAllocation_session_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_session_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "DA Value-RPM",
                        info: "dynamicAllocation_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "dynamicallocation_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P PageView RPM",
                        info: "programmatic_revenue / pageViews * 1e3",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_pageview_rpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "P PageView Value-RPM",
                        info: "programmatic_pageView_rpm * viewability",
                    },
                    item: {
                        filter: true,
                        key: "programmatic_pageview_valuerpm",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "numeric",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Outbrain Revenue",
                        info: "Content recommendation revenue generated from Outbrain",
                    },
                    item: {
                        filter: true,
                        key: "ay_performance_outbrain_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
                },
                {
                    header: {
                        content: "AY Taboola Revenue",
                        info: "Content recommendation revenue generated from Taboola",
                    },
                    item: {
                        filter: true,
                        key: "ay_performance_taboola_revenue",
                        sortable: true,
                        group: "ayf",
                        type: "metric",
                    },
                    display: false,
                    options: {
                        format: "currency",
                        precision: 3,
                        style: "",
                    },
                    comparable: false,
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
    };
}

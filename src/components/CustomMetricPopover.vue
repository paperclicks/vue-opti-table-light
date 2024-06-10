<template>
    <div class="custom-metrics-actions d-inline-block pull-right">
        <svg width="18" height="18" class="mr-2" @click.prevent="editCustomMetric(col)" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13502_19190)">
                <path d="M2.66699 14.668L13.3337 14.668" stroke="#BBBBBD" stroke-linecap="round" />
                <path
                    d="M9.25903 2.44065L9.75336 1.94631C10.5724 1.12727 11.9003 1.12727 12.7194 1.94631C13.5384 2.76536 13.5384 4.09329 12.7194 4.91233L12.225 5.40666M9.25903 2.44065C9.25903 2.44065 9.32082 3.49111 10.2477 4.41799C11.1746 5.34487 12.225 5.40666 12.225 5.40666M9.25903 2.44065L4.71437 6.98531C4.40655 7.29313 4.25264 7.44704 4.12027 7.61674C3.96413 7.81693 3.83026 8.03353 3.72104 8.26271C3.62845 8.45699 3.55962 8.66348 3.42196 9.07647L2.83862 10.8265M12.225 5.40666L7.68038 9.95132C7.37256 10.2591 7.21865 10.4131 7.04895 10.5454C6.84876 10.7016 6.63216 10.8354 6.40298 10.9446C6.2087 11.0372 6.0022 11.1061 5.58922 11.2437L3.83922 11.8271M3.83922 11.8271L3.41144 11.9697C3.20821 12.0374 2.98414 11.9845 2.83266 11.833C2.68118 11.6815 2.62829 11.4575 2.69603 11.2542L2.83862 10.8265M3.83922 11.8271L2.83862 10.8265"
                    stroke="#BBBBBD" />
            </g>
            <defs>
                <clipPath id="clip0_13502_19190">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <svg width="18" :id="`reset-${col.item.key}`" @click.prevent height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.66699 13.54L9.0226 13.8915C9.21512 13.6967 9.21512 13.3833 9.0226 13.1885L8.66699 13.54ZM7.91149 12.0644C7.71737 11.868 7.4008 11.8661 7.2044 12.0602C7.008 12.2543 7.00615 12.5709 7.20027 12.7673L7.91149 12.0644ZM7.20027 14.3127C7.00615 14.5091 7.008 14.8256 7.2044 15.0198C7.4008 15.2139 7.71737 15.212 7.91149 15.0156L7.20027 14.3127ZM4.92958 3.54269C5.16457 3.39766 5.23751 3.0896 5.09249 2.8546C4.94747 2.61961 4.6394 2.54667 4.40441 2.69169L4.92958 3.54269ZM1.50033 7.91922C1.50033 11.2941 4.206 14.04 7.55588 14.04L7.55588 13.04C4.76926 13.04 2.50033 10.7529 2.50033 7.91922L1.50033 7.91922ZM7.55588 14.04L8.66699 14.04L8.66699 13.04L7.55588 13.04L7.55588 14.04ZM9.0226 13.1885L7.91149 12.0644L7.20027 12.7673L8.31138 13.8915L9.0226 13.1885ZM8.31138 13.1885L7.20027 14.3127L7.91149 15.0156L9.0226 13.8915L8.31138 13.1885ZM4.40441 2.69169C2.66234 3.76676 1.50033 5.70675 1.50033 7.91922L2.50033 7.91922C2.50033 6.06422 3.47346 4.44129 4.92958 3.54269L4.40441 2.69169Z"
                fill="#BBBBBD" />
            <path
                d="M8.44445 2.45191L8.44445 1.95191L8.44444 1.95191L8.44445 2.45191ZM7.33333 2.45191L6.97839 2.09974C6.78498 2.29468 6.78498 2.60913 6.97839 2.80407L7.33333 2.45191ZM8.0895 3.92394C8.284 4.11997 8.60058 4.12121 8.79661 3.92672C8.99263 3.73223 8.99388 3.41565 8.79938 3.21962L8.0895 3.92394ZM8.79938 1.68419C8.99388 1.48817 8.99263 1.17159 8.79661 0.977092C8.60058 0.782598 8.284 0.783841 8.0895 0.979869L8.79938 1.68419ZM11.0715 12.4091C10.8362 12.5537 10.7628 12.8616 10.9074 13.0969C11.052 13.3321 11.36 13.4056 11.5952 13.261L11.0715 12.4091ZM14.5 8.05128C14.5 4.6864 11.7925 1.95191 8.44445 1.95191L8.44445 2.95191C11.2329 2.95191 13.5 5.23126 13.5 8.05128L14.5 8.05128ZM8.44444 1.95191L7.33333 1.95191L7.33333 2.95191L8.44445 2.95191L8.44444 1.95191ZM6.97839 2.80407L8.0895 3.92394L8.79938 3.21962L7.68827 2.09974L6.97839 2.80407ZM7.68827 2.80407L8.79938 1.68419L8.0895 0.979869L6.97839 2.09974L7.68827 2.80407ZM11.5952 13.261C13.3372 12.1901 14.5 10.2569 14.5 8.05128L13.5 8.05128C13.5 9.89763 12.5277 11.5138 11.0715 12.4091L11.5952 13.261Z"
                fill="#BBBBBD" />
        </svg>
        <b-popover :ref="`reset-${col.item.key}`" :target="`reset-${col.item.key}`" custom-class="reset-metric-popover"
            :triggers="triggers" :placement="placement">
            <template #title>Reset {{ typeof col.header.content == 'function' ? col.header.content() :
                col.header.content
                }} ?</template>
            <b-btn :disabled="resetCustomMetricLoading" size="sm"
                class="mr-2 primary-button primary-button--danger d-inline" @click="$_resetCustomMetric(col)">
                <template v-if="resetCustomMetricLoading"> <i class="fa fa-spinner fa-spin"></i></template>
                Yes, Reset
            </b-btn>
            <b-btn :disabled="resetCustomMetricLoading" size="sm" class="secondary-button d-inline"
                @click="$_hideResetPopoever(col)">No, Keep</b-btn>
        </b-popover>
    </div>
</template>

<script>
export default {
    name: 'CustomMetricPopover',
    props: {
        col: { type: Object, required: true },
        resetCustomMetricLoading: { type: Boolean, required: false },
        updateCustomMetric: { type: Function, required: true },
        editCustomMetric: { type: Function, required: true },
        triggers: { type: String, default: 'click' },
        placement: { type: String, default: 'top' },
    },
    methods: {
        async $_resetCustomMetric(column) {
            const metric = { key: column.item.key, name: `${column.item.key.charAt(0).toUpperCase() + column.item.key.slice(1)}`, formula: '', format: 'number', precision: 3 };
            await this.updateCustomMetric(metric);
            this.$_hideResetPopoever(column);
        },
        $_hideResetPopoever(column) {
            try {
                if (this.$refs[`reset-${column.item.key}`]?.length) {
                    this.$refs[`reset-${column.item.key}`][0].$emit('close');
                } else {
                    this.$refs[`reset-${column.item.key}`].$emit('close');
                }
            } catch (err) {/* Do nothing */}
        },
    },
}
</script>
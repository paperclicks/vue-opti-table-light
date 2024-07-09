<template>
  <b-modal :modal-class="[{ 'd-none': hideModal }, 'columns-settings-modal']" title-class="ml-auto" ref="columnSettings"
    v-model="modal" centered @ok="$_saveSettings" @hidden="$_loadFromModel" :size="$c_modalSize"
    title="Columns settings" ok-title="Apply" body-class="py-0"
    :footer-class="hasPresets ? 'justify-content-between' : 'justify-content-end'">
    <template #modal-header>
      <span v-if="!hasPresets">
        <h4>Column Settings</h4>
      </span>
      <span class="d-flex align-items-end preset-header" v-if="!editMode && hasPresets">
        <h4>{{ selectedPreset.name }}</h4>
        <span v-show="$c_showEditIcon" class="edit-icon">
          <svg @click="() => $_switchEditMode(!editMode)" style="cursor: pointer;" width="18" height="18"
            class="ml-2 mb-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </span>
      </span>
      <span v-else-if="editMode && hasPresets" class="preset-edit-name">
        <b-form-input placeholder="Edit preset name" v-model="editedPresetName" size="xl" />
        <span v-if="!editPresetLoader" class="d-flex align-items-center">
          <button :disabled="$c_disableEditPresetButton" class="tick-btn" @click="$_editPresetName">
            <i class="fa fa-check" aria-hidden="true"></i>
          </button>
          <button class="cancel-btn" @click="$_switchEditMode(false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path fill="#262626"
                d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6l-5.6 5.6Z" />
            </svg>
          </button>
        </span>
        <b-spinner v-else small label="Spinning"></b-spinner>
      </span>
      <button class="header-btn" @click="hide">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6l-5.6 5.6Z" />
        </svg>
      </button>
    </template>
    <div class="row">
      <div v-if="hasGroups" class="col-3 items-col items-col-visibility groups">
        <h6>Groups</h6>
        <b-nav v-if="hasGroups" class="groups-container" pills v-b-scrollspy:nav-scroller>
          <b-nav-item v-for="(group, index) in $c_nativeFields" @click="(e) => scrollIntoView(e, group.group)" :href="`#${group.group}`"
            :key="index" :id="`link-${group.group}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_14057_103242)">
                <path d="M11.9998 6.66797L8.6665 6.66797" stroke="#262626" stroke-linecap="round" />
                <path
                  d="M6.6665 2H10.9998C11.3095 2 11.4643 2 11.5942 2.01711C12.4917 2.13526 13.1979 2.84148 13.3161 3.73895C13.3332 3.86891 13.3332 4.02372 13.3332 4.33333"
                  stroke="#262626" />
                <path
                  d="M1.3335 4.63186C1.3335 4.04351 1.3335 3.74933 1.37973 3.50429C1.58326 2.42557 2.42704 1.58179 3.50575 1.37826C3.7508 1.33203 4.04497 1.33203 4.63333 1.33203C4.89111 1.33203 5.02001 1.33203 5.14388 1.34361C5.67793 1.39356 6.18451 1.60339 6.59746 1.94571C6.69324 2.02511 6.78438 2.11625 6.96666 2.29853L7.3335 2.66537C7.87735 3.20922 8.14928 3.48114 8.47491 3.66231C8.65379 3.76184 8.84354 3.84043 9.0404 3.89655C9.39876 3.9987 9.78332 3.9987 10.5524 3.9987H10.8016C12.5565 3.9987 13.4339 3.9987 14.0043 4.51167C14.0567 4.55886 14.1067 4.60879 14.1539 4.66125C14.6668 5.2316 14.6668 6.10906 14.6668 7.86397V9.33203C14.6668 11.8462 14.6668 13.1033 13.8858 13.8843C13.1047 14.6654 11.8477 14.6654 9.3335 14.6654H6.66683C4.15267 14.6654 2.89559 14.6654 2.11454 13.8843C1.3335 13.1033 1.3335 11.8462 1.3335 9.33203V4.63186Z"
                  stroke="#262626" />
              </g>
              <defs>
                <clipPath id="clip0_14057_103242">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>
              {{ group.label }}
            </p>
          </b-nav-item>
        </b-nav>
      </div>
      <div class="col-6 items-col items-col-visibility">
        <div class="items-col-visibility-header">
          <span>
            <h6 class="font-weight-bold">Columns visibility</h6>
          </span>
          <div class="search-container">
            <input class="col" type="search" placeholder="Search..." v-model="searchModel" />
          </div>
        </div>
        <div v-if="$c_noResult" class="no-result-container">
          <svg width="220" height="170" viewBox="0 0 107 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="23" width="86" height="56" rx="10" fill="url(#paint0_linear_13595_28144)" fill-opacity="0.08" />
            <rect x="0.5" y="23.5" width="85" height="55" rx="9.5" stroke="url(#paint1_linear_13595_28144)"
              stroke-opacity="0.15" stroke-linejoin="bevel" />
            <path d="M18 75L10 75C6.68629 75 4 72.3137 4 69L4 33C4 29.6863 6.68629 27 10 27L18 27L18 75Z"
              fill="url(#paint2_linear_13595_28144)" fill-opacity="0.08" />
            <path d="M18 75L10 75C6.68629 75 4 72.3137 4 69L4 33C4 29.6863 6.68629 27 10 27L18 27L18 75Z"
              fill="url(#paint3_linear_13595_28144)" fill-opacity="0.02" />
            <path d="M18 39L4 39L4 33C4 29.6863 6.68629 27 10 27L18 27L18 39Z" fill="url(#paint4_linear_13595_28144)"
              fill-opacity="0.3" />
            <path d="M82 69C82 72.3137 79.3137 75 76 75L68 75L68 27L76 27C79.3137 27 82 29.6863 82 33L82 69Z"
              fill="url(#paint5_linear_13595_28144)" fill-opacity="0.08" />
            <path d="M82 69C82 72.3137 79.3137 75 76 75L68 75L68 27L76 27C79.3137 27 82 29.6863 82 33L82 69Z"
              fill="url(#paint6_linear_13595_28144)" fill-opacity="0.02" />
            <path d="M82 39L68 39L68 27L76 27C79.3137 27 82 29.6863 82 33L82 39Z" fill="url(#paint7_linear_13595_28144)"
              fill-opacity="0.3" />
            <path d="M66.0005 75L52.0005 75L52.0005 27L66.0005 27L66.0005 75Z" fill="url(#paint8_linear_13595_28144)"
              fill-opacity="0.08" />
            <path d="M66.0005 75L52.0005 75L52.0005 27L66.0005 27L66.0005 75Z" fill="url(#paint9_linear_13595_28144)"
              fill-opacity="0.02" />
            <path d="M66.0005 39L52.0005 39L52.0005 27L66.0005 27L66.0005 39Z" fill="url(#paint10_linear_13595_28144)"
              fill-opacity="0.3" />
            <path d="M50 75L36 75L36 27L50 27L50 75Z" fill="url(#paint11_linear_13595_28144)" fill-opacity="0.08" />
            <path d="M50 75L36 75L36 27L50 27L50 75Z" fill="url(#paint12_linear_13595_28144)" fill-opacity="0.02" />
            <path d="M50 39L36 39L36 27L50 27L50 39Z" fill="url(#paint13_linear_13595_28144)" fill-opacity="0.3" />
            <path d="M33.9995 75L19.9995 75L19.9995 27L33.9995 27L33.9995 75Z" fill="url(#paint14_linear_13595_28144)"
              fill-opacity="0.08" />
            <path d="M33.9995 75L19.9995 75L19.9995 27L33.9995 27L33.9995 75Z" fill="url(#paint15_linear_13595_28144)"
              fill-opacity="0.02" />
            <path d="M33.9995 39L19.9995 39L19.9995 27L33.9995 27L33.9995 39Z" fill="url(#paint16_linear_13595_28144)"
              fill-opacity="0.3" />
            <path d="M4 39L82 39" stroke="#4158D0" stroke-opacity="0.15" stroke-linecap="round" />
            <path d="M43 24L43 12L78 12" stroke="url(#paint17_linear_13595_28144)" stroke-opacity="0.3"
              stroke-linecap="round" />
            <path d="M85 51L96 51L96 31" stroke="url(#paint18_linear_13595_28144)" stroke-opacity="0.3"
              stroke-linecap="round" />
            <rect x="86" y="1" width="6.66667" height="21.6667" rx="1.66667" stroke="#4158D0" stroke-width="1.66667" />
            <rect x="92.6665" y="1" width="6.66667" height="21.6667" rx="1.66667" stroke="#4158D0"
              stroke-width="1.66667" />
            <rect x="99.3335" y="1" width="6.66667" height="21.6667" rx="1.66667" stroke="#4158D0"
              stroke-width="1.66667" />
            <rect x="99.3335" y="1" width="6.66667" height="4.16667" fill="#4158D0" fill-opacity="0.4" />
            <rect x="92.6665" y="1" width="6.66667" height="4.16667" fill="#4158D0" fill-opacity="0.4" />
            <rect x="86" y="1" width="6.66667" height="4.16667" fill="#4158D0" fill-opacity="0.4" />
            <path
              d="M39 50.2522C39.2124 50.0708 39.4395 49.9011 39.6814 49.7431C39.9292 49.5851 40.1947 49.4476 40.4779 49.3306C40.767 49.2135 41.0767 49.1228 41.4071 49.0585C41.7434 48.9882 42.1032 48.9531 42.4867 48.9531C43.0177 48.9531 43.4985 49.0263 43.9292 49.1726C44.3599 49.313 44.7286 49.5178 45.0354 49.787C45.3422 50.0504 45.5782 50.3693 45.7434 50.7438C45.9145 51.1183 46 51.5367 46 51.999C46 52.4438 45.9351 52.83 45.8053 53.1577C45.6814 53.4796 45.5221 53.7605 45.3274 54.0004C45.1386 54.2403 44.9292 54.4481 44.6991 54.6236C44.469 54.7992 44.2507 54.963 44.0442 55.1152C43.8378 55.2673 43.6578 55.4195 43.5044 55.5716C43.3569 55.7179 43.2655 55.8818 43.2301 56.0632L43.0089 57.3184H41.3363L41.1681 55.8964C41.1268 55.6155 41.1622 55.3727 41.2743 55.1678C41.3864 54.9572 41.5369 54.767 41.7257 54.5973C41.9145 54.4217 42.1239 54.2549 42.354 54.0969C42.59 53.9331 42.8083 53.7605 43.0089 53.5791C43.2153 53.3918 43.3864 53.1841 43.5221 52.9558C43.6637 52.7218 43.7345 52.4467 43.7345 52.1307C43.7345 51.7445 43.5988 51.4373 43.3274 51.209C43.0619 50.9808 42.708 50.8667 42.2655 50.8667C41.941 50.8667 41.6667 50.9018 41.4425 50.972C41.2242 51.0423 41.0354 51.1213 40.8761 51.209C40.7168 51.291 40.5811 51.367 40.469 51.4373C40.3569 51.5075 40.2507 51.5426 40.1504 51.5426C39.9263 51.5426 39.7581 51.446 39.646 51.2529L39 50.2522ZM40.6549 60.5574C40.6549 60.3643 40.6903 60.1829 40.7611 60.0132C40.8378 59.8377 40.941 59.6884 41.0708 59.5655C41.2006 59.4368 41.351 59.3373 41.5221 59.2671C41.6991 59.191 41.8909 59.153 42.0973 59.153C42.2979 59.153 42.4867 59.191 42.6637 59.2671C42.8407 59.3373 42.9941 59.4368 43.1239 59.5655C43.2537 59.6884 43.354 59.8377 43.4248 60.0132C43.5015 60.1829 43.5398 60.3643 43.5398 60.5574C43.5398 60.7564 43.5015 60.9407 43.4248 61.1105C43.354 61.2802 43.2537 61.4294 43.1239 61.5581C42.9941 61.681 42.8407 61.7776 42.6637 61.8478C42.4867 61.918 42.2979 61.9531 42.0973 61.9531C41.8909 61.9531 41.6991 61.918 41.5221 61.8478C41.351 61.7776 41.2006 61.681 41.0708 61.5581C40.941 61.4294 40.8378 61.2802 40.7611 61.1105C40.6903 60.9407 40.6549 60.7564 40.6549 60.5574Z"
              fill="#4158D0" />
            <defs>
              <linearGradient id="paint0_linear_13595_28144" x1="43" y1="79" x2="43" y2="23"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" stop-opacity="0" />
                <stop offset="1" stop-color="#4158D0" />
              </linearGradient>
              <linearGradient id="paint1_linear_13595_28144" x1="43" y1="23" x2="43" y2="106"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear_13595_28144" x1="11" y1="27" x2="11" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint3_linear_13595_28144" x1="11" y1="27" x2="11" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" stop-opacity="0" />
                <stop offset="1" stop-color="#4158D0" />
              </linearGradient>
              <linearGradient id="paint4_linear_13595_28144" x1="11" y1="27" x2="11" y2="39"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint5_linear_13595_28144" x1="75" y1="27" x2="75" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint6_linear_13595_28144" x1="75" y1="27" x2="75" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" stop-opacity="0" />
                <stop offset="1" stop-color="#4158D0" />
              </linearGradient>
              <linearGradient id="paint7_linear_13595_28144" x1="75" y1="27" x2="75" y2="39"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint8_linear_13595_28144" x1="59.0005" y1="27" x2="59.0005" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint9_linear_13595_28144" x1="59.0005" y1="27" x2="59.0005" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" stop-opacity="0" />
                <stop offset="1" stop-color="#4158D0" />
              </linearGradient>
              <linearGradient id="paint10_linear_13595_28144" x1="59.0005" y1="27" x2="59.0005" y2="39"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint11_linear_13595_28144" x1="43" y1="27" x2="43" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint12_linear_13595_28144" x1="43" y1="27" x2="43" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" stop-opacity="0" />
                <stop offset="1" stop-color="#4158D0" />
              </linearGradient>
              <linearGradient id="paint13_linear_13595_28144" x1="43" y1="27" x2="43" y2="39"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint14_linear_13595_28144" x1="26.9995" y1="27" x2="26.9995" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint15_linear_13595_28144" x1="26.9995" y1="27" x2="26.9995" y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" stop-opacity="0" />
                <stop offset="1" stop-color="#4158D0" />
              </linearGradient>
              <linearGradient id="paint16_linear_13595_28144" x1="26.9995" y1="27" x2="26.9995" y2="39"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint17_linear_13595_28144" x1="61" y1="12" x2="47.6715" y2="27.9128"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint18_linear_13595_28144" x1="96" y1="40.7143" x2="87.1526" y2="52.6021"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4158D0" />
                <stop offset="1" stop-color="#4158D0" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <h4>No metrics found for "{{ searchModel }}"</h4>
          <p>You can check the spelling, or try a different search term.</p>
          <div>
            <button @click="$_clearSearch" class="btn btn-secondary clear-btn">Clear Seach</button>
          </div>
        </div>
        <b-list-group :class="[!hasGroups ? 'no-groups' : '']" v-else id="nav-scroller" ref="content">
          <b-list-group-item v-for="(col, index) in $c_columns" class="p-0" :key="index" :id="col.group">
            <column-visibility :col="col" :hasGroups="$c_hasGroups" :allItemsOfGroupChecked="$_allItemsOfGroupChecked"
              :partialItemsOfGroupChecked="$_partialItemsOfGroupChecked"
              :selectAllItemsOfGroup="$_selectAllItemsOfGroup" :editCustomMetric="$_editCustomMetric"
              :resetCustomMetricLoading="resetCustomMetricLoading" :updateCustomMetric="$_updateCustomMetric"
              :infoType="infoType" :isColTemporary="$_isColTemporary" />
          </b-list-group-item>
        </b-list-group>
      </div>
      <div :class="[`col-${hasGroups ? 3 : 6} items-col items-col-order`]">
        <div v-if="hasComparisonColumns" class="order-col-info">
          <span class="items-col-order-tabs">
            <button :class="[`${hasGroups ? '' : 'px-3'}`]" :aria-selected="selectedColumnType === 'order'"
              @click="() => selectedColumnType = 'order'">
              Order Columns
            </button>
            <button :class="[`${hasGroups ? '' : 'px-3'}`]" :aria-selected="selectedColumnType === 'compare'"
              @click="() => selectedColumnType = 'compare'">
              Compare Columns
            </button>
          </span>
          <div class="compare-info">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_13502_18627)">
                <circle cx="8.00016" cy="7.9987" r="6.66667" stroke="#BBBBBD" />
                <path d="M8 11.332V7.33203" stroke="#BBBBBD" stroke-linecap="round" />
                <circle cx="0.666667" cy="0.666667" r="0.666667" transform="matrix(1 0 0 -1 7.3335 6)" fill="#BBBBBD" />
              </g>
              <defs>
                <clipPath id="clip0_13502_18627">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>
              {{ selectedColumnType === 'compare' ? 'Select the columns that you want to be compared.' : 'Drag and drop columns in the order that you prefer.' }}
            </p>
          </div>
        </div>
        <div v-else class="order-columns-header">
          <h6 class="font-weight-bold">Columns Order</h6>
          <p>({{ $c_selectedColumns }} COLUMNS SELECTED)</p>
        </div>
        <div>
          <div :class="[hasComparisonColumns ? 'sortable-container comparison-columns' : 'sortable-container col-max']">
            <draggable v-model="model" ghost-class="sortable-ghost" :scroll-sensitivity="200" :force-fallback="true"
              :disabled="$c_disableDraggable">
              <div :class="[$_isColTemporary(col) ? 'hide-temp-col' : 'p-0 sortable-item']"
                v-for="(col, index) in $c_model" v-show="col.display" :key="`item-${index}`">
                <div class="d-flex align-items-center">
                  <svg style="cursor: grab" v-if="selectedColumnType === 'order'" xmlns="http://www.w3.org/2000/svg"
                    width="17" height="17" viewBox="0 0 48 48">
                    <path fill="currentColor" fill-rule="evenodd"
                      d="M19 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm22-32a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                      clip-rule="evenodd" />
                  </svg>
                  <input :checked="col.comparable" :disabled="$_disableBasedOnFormat(col)"
                    @change="(e) => $_makeComparable(e, col)" type="checkbox" class="mr-1"
                    v-if="selectedColumnType === 'compare'" />
                  <p class="sortable-item-text">
                    {{ $_shortenContent(col.header.content, $c_splitContentLength) }}
                  </p>
                </div>
                <button class="clean-btn" v-if="selectedColumnType === 'order'" @click="$_removeSelectedColumn(col)">
                  <svg v-if="selectedColumnType === 'order'" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24">
                    <path fill="#BBBBBD"
                      d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6l-5.6 5.6Z" />
                  </svg>
                </button>
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>
    <custom-metric-modal ref="customMetricModal" @hidden="hideModal = false" :submit="$_updateCustomMetric"
      :custom-metric-options="customMetricOptions" :metric-group-options="metricGroupOptions" />
    <template #modal-footer>
      <div class="preset-name" v-if="hasPresets">
        <span>
          <b-form-checkbox v-model="presetEnabled" />
          <p>Save as a column preset</p>
        </span>
        <b-form-input v-if="presetEnabled" placeholder="Column preset name" v-model="newPresetName" size="xl" />
      </div>
      <div>
        <button class="btn btn-secondary mr-2" @click="hide">Cancel</button>
        <button v-if="!presetEnabled" class="btn btn-primary" @click="$_saveSettings">
          Save
        </button>
        <button v-else class="btn btn-primary" @click="$_savePreset" :disabled="$c_disableSaveButton">
          Save as preset
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import CustomMetricModal from './CustomMetricModal.vue';
import _ from 'lodash';
import draggable from 'vuedraggable';
import ColumnVisibility from './ColumnVisibility.vue';

export default {
  name: 'ColumnSettingsModal',
  components: { 
    CustomMetricModal,
    draggable,
    ColumnVisibility,
  },
  props: {
    value: { type: Array, default: () => [] },
    updateCustomMetric: { type: Function, default: () => {} },
    updateComparisonColumns: { type: Function, default: () => {} },
    customMetricOptions: { type: Array, default: () => [] },
    metricGroupOptions: { type: Array, default: () => [] },
    hasGroups: { type: Boolean, default: false },
    hasComparisonColumns: { type: Boolean, default: false },
    hasCustomMetrics: { type: Boolean, default: false },
    nativeFields: { type: Array, default: () => [] },
    selectedPreset: { type: Object, default: () => {} },
    savePreset: { type: Function, default: () => {} },
    hasPresets: { type: Boolean, default: false },
    infoType: { type: String, default: 'tooltip' },
    editPreset: { type: Function, default: () => {} },
  },
  data() {
    return {
      modal: false,
      drag: false,
      model: [],
      displayModel: [],
      searchModel: '',
      hideModal: false,
      resetCustomMetricLoading: false,
      grouping: [],
      selectedTab: 0,
      selectedColumnType: 'order',
      options: [],
      comparableColumns: [],
      collapseComparableColumns: false,
      groupedColumns: [],
      presetEnabled: false,
      newPresetName: '',
      editMode: false,
      editPresetLoader: false,
      editedPresetName: this.selectedPreset?.name || '',
    };
  },
  computed: {
    $c_searchDisplayModel() {
      if (this.searchModel) {
        const searchValue = this.searchModel.trim().toLowerCase();
        return this.displayModel.map((col) => {
          const value = typeof col.header.content === 'function' ? `${col.header.content()}` : `${col.header.content}`;
          if (value.toLowerCase().includes(searchValue)) {
            return col;
          }
        }).filter((d) => Boolean(d));
      }
      return null;
    },
    $c_headersMap() {
      const map = {};
      this.displayModel.forEach((headerItem) => { map[headerItem.item.key] = headerItem; });
      return map;
    },
    $c_selectedColumns() {
      return this.displayModel.filter((col) => col.display).length;
    },
    $c_modalSize() {
      return this.hasGroups ? 'xl' : 'lg';
    },
    $c_nativeFields() {
      return this.nativeFields.filter((b) => b.display);
    },
    $c_visibilityColumns() {
      if (this.hasGroups) {
        return this.groupVisibilityColumns();
      } else {
        return this.displayModel;
      }
    },
    $c_columns() {
      const searchDisplayModel = this.$c_searchDisplayModel;
      if (searchDisplayModel === null) {
        return this.$c_visibilityColumns;
      } else {
        return searchDisplayModel;
      }
    },
    $c_model() {
      return this.model;
    },
    $c_hasGroups() {
      return this.searchModel.length === 0 && this.hasGroups;
    },
    $c_disableDraggable() {
      return this.selectedColumnType === 'compare';
    },
    $c_disableSaveButton() {
      return this.presetEnabled && this.newPresetName?.length === 0;
    },
    $c_noResult() {
      return this.$c_columns?.length === 0;
    },
    $c_disableEditPresetButton() {
      return !this.editedPresetName?.length;
    },
    $c_splitContentLength() {
      return this.hasGroups ? 20 : 40;
    },
    $c_showEditIcon() {
      return !this.selectedPreset?.suggestedPreset;
    },
  },
  created() {
    this.$watch('displayModel', () => {
      this.drag = true;
      this.model.forEach((headerItem) => {
        if (headerItem) {
          headerItem.display = this.$c_headersMap[headerItem.item.key]?.display;
        }
      });
      this.$nextTick(() => {
        this.drag = false;
      });
      this.options = this.displayModel.map((col) => ({ value: col.item.key, content: typeof col.header.content === 'function' ? col.header.content() : col.header.content }));
    }, { deep: true });

    this.$watch('value', () => {
      this.$_loadFromModel();
    }, { immediate: true });
  },
  methods: {
    show() {
      this.modal = true;
    },
    hide() {
      this.modal = false;
    },
    groupVisibilityColumns() {
      const groupedVisibilityColumns = [];
        const definedGroups = this.$c_nativeFields;
        definedGroups.forEach((group) => {
          const items = this.displayModel.filter((col) => col.item?.group === group.group);
          if (items.length > 0) {
            groupedVisibilityColumns.push({ label: group.label, group: group.group, items });
          }
        });
        return groupedVisibilityColumns;
    },
    $_saveSettings() {
      this.$emit('save', this.model);
      this.$emit('input', this.model);
      this.presetEnabled = false;
      this.hide();
    },
    $_loadFromModel() {
      this.displayModel = this.value.map((item) => ({ ...item }));
      this.model = [...this.displayModel];
      this.searchModel = '';
    },
    $_editCustomMetric(column) {
      try {
        const columnItem = { key: column.item.key, formula: column.customMetric || '' };
        columnItem.name = typeof column.header.content === 'function' ? column.header.content() : column.header.content;
        if (column.options) {
          if (column.options.format) columnItem.format = column.options.format;
          if (!isNaN(column.options.precision)) columnItem.precision = column.options.precision;
        }
        this.$refs.customMetricModal.show(columnItem);
        this.hideModal = true;
      } catch (err) {
        console.log(err);
      }
    },
    scrollIntoView(e, group) {
      e.preventDefault();
      const el = group ? document.querySelector(`#${group}`) : null
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
    async $_updateCustomMetric(metric) {
      await this.updateCustomMetric(metric);
      const headerFieldIndex = this.model.findIndex(({ item: { key } }) => metric.key === key);
      if (this.model[headerFieldIndex]) {
        const headerField = _.cloneDeep(this.model[headerFieldIndex]);
        headerField.header.content = metric.name;
        headerField.customMetric = metric.formula;
        if (!headerField.options) headerField.options = {};
        headerField.options.format = metric.format;
        headerField.options.precision = metric.precision;
        const model = [...this.model];
        model[headerFieldIndex] = headerField;
        this.$emit('input', model);
      }
    },
    $_removeSelectedColumn(col) {
      col.display = false;
    },
    $_selectAllItemsOfGroup(checked, group) {
      const groupItems = this.$_groupedItems(group);
      groupItems.forEach((col) => { col.display = checked; });
    },
    $_allItemsOfGroupChecked(group) {
      const groupItems = this.$_groupedItems(group);
      return groupItems.every((col) => col.display);
    },
    $_partialItemsOfGroupChecked(group) {
      const groupItems = this.$_groupedItems(group);
      const checkedGroupItems = groupItems.filter((col) => col.display);
      if (checkedGroupItems.length > 0 && checkedGroupItems.length < groupItems.length) {
        return true;
      }
      return false;
    },
    $_groupedItems(group) {
      const groupedColumns = [];
      const groupedVisibilityColumns = this.groupVisibilityColumns();
      groupedVisibilityColumns.forEach((group) => {
        groupedColumns.push(...group.items);
      });
      const groupItems = groupedColumns.filter((col) => col.item.group === group);
      return groupItems;
    },
    $_makeComparable(e, col) {
      const checked = e.target.checked;
      this.updateComparisonColumns(col, checked);
    },
    async $_savePreset() {
      const preset = {
        name: this.newPresetName,
      };
      this.$emit('save-preset', this.model, preset);
      this.$emit('input', this.model);
      this.presetEnabled = false;
      this.newPresetName = '';
      this.hide();
    },
    $_disableBasedOnFormat(col) {
      return col.item?.type !== 'metric';
    },
    $_isColTemporary(col) {
      return col.item?.temporary;
    },
    $_shortenContent(content, length) {
      const headerContent = typeof content == 'function' ? content() : content;
      if (headerContent.length > length) {
        return `${headerContent.substring(0, length)}...`;
      }
      return headerContent;
    },
    $_clearSearch() {
      this.searchModel = '';
    },
    $_switchEditMode(value) {
      this.editedPresetName = this.selectedPreset.name;
      this.editMode = value;
    },
    async $_editPresetName() {
      this.editPresetLoader = true;
      const preset = {
        name: this.editedPresetName,
        id: this.selectedPreset.id,
      };
      try {
        await this.editPreset(preset);
      } catch (error) {
        this.editMode = false;
        this.editPresetLoader = false;
      }
      this.selectedPreset.name = this.editedPresetName;
      this.editedPresetName = '';
      this.editMode = false;
      this.editPresetLoader = false;
    }
  },
};
</script>

<style lang="scss">
.modal.columns-settings-modal {
  .modal-footer {
    justify-content: space-between;
    align-items: baseline;
    padding: .3rem .75rem;
    .preset-name {
      display: flex;
      align-items: baseline;
      gap: .5rem;
      span {
        display: flex;
        p {
          white-space: nowrap;
        }
      }
    }
    .btn-primary {
      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &.border {
        border-radius: 0.25rem;
      }
    }
    .dropdown-toggle.btn-secondary {
      background-color: #007bff;
      border-color: #007bff;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      border-left: 1px solid white !important;
    }
  }
  .modal-dialog {
    .modal-header {
      padding: 10px 12px;
      background-color: #f5f6f7;
      align-items: baseline;
      h4 {
        margin-top: .4rem;
        font-size: 17px;
      }
      .preset-edit-name {
        display: flex;
        align-items: center;
        gap: .3rem;
        .tick-btn {
          border-radius: 50%;
          border: 1.5px solid #eeeaff;
          background-color: #eeeaff;
          color: #562EFC;
          -webkit-text-stroke: 1px #eeeaff;

          &[disabled] {
            opacity: .7;
          }
        }
        .cancel-btn {
          background-color: transparent;
          border: none;
        }
      }
      .header-btn {
        background-color: transparent;
        border: none;
      }
    }
    .modal-content {
      .hide-temp-col {
        display: none;
      }
      .modal-body {
        .col-max {
          max-height: 550px;
          overflow-y: auto;
        }
        .items-col {
          &.items-col-visibility {
            padding-left: 0;
            padding-right: 0;
            border-right: 1px solid #dee2e6;

            label:hover {
              background-color: #f5f7f8;
            }

            &.groups {
              h6 {
                margin: 20px 21px 0rem 21px;
                font-weight: 700;
                font-size: 18px;
              }
              padding: 0rem !important;
              overflow: none;

              .groups-container {
                margin-top: 16px;
                flex-direction: column;
                flex-wrap: nowrap;
                max-height: 600px;
                height: 585px;
                overflow-y: auto;
                gap: .5rem;
                .nav-item {
                  &.active {
                    a {
                      background-color: transparent;
                      color: #4158D0;
                      background-color: #ECEEFA;
                    }
                  }
                  a {
                    border-radius: 7px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: black;
                    font-weight: 400;
                    font-size: 15px;
                    margin: 0 20px;
                    width: 85%;
                    border: 1px solid #E8E8E9;
                    padding: .5rem;

                    p {
                      margin: 0;
                      padding: 0;
                    }
                  }
                }
              }
            }
            .items-col-visibility-header {
              padding: 0rem 16px;
              margin-top: 19px;
              span {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h6 {
                  font-size: 18px;
                }

                button {
                  background-color: transparent;
                  border: none;
                  color: #2987e6;
                  margin-top: -11px;
                }
              }
            }
            .custom-metrics-actions {
              color: #6c757d;
              .fa:hover {
                color: #212529;
              }
            }
            .group-wrapper {
              padding-bottom: 15px;
              .group-label {
                padding: 15px 5px;
                margin-bottom: 15px;
                display: flex;
                border-bottom: 2px solid #E8E8E9;
                align-items: center;
                gap: 4px;
  
                .custom-control {
                  padding-left: 38px;
                  margin-bottom: 6px;
                  .custom-control-label {
                    color: #262626;
                    .label-name {
                      padding-top: 2px;
                      font-weight: 600;
                    }
                  }
                  .custom-control-input:checked ~ .custom-control-label::before,
                  .custom-control-input:indeterminate ~ .custom-control-label::before {
                    background-color: #4158D0;
                    border-color: #4158D0;
                  }
                }
              }
            }
            .no-result-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 70%;
              p {
                font-size: 13px;
                color: #929294;
              }
              .clear-btn {
                background-color: white;
                color: black;
              }
            }
          }
          &.items-col-order {
            padding: 0;
            .order-col-info {
              padding: 16px 6px 0rem 6px;

              .items-col-order-tabs {
                background-color: #f0f0f0;
                padding: 5px;
                border-radius: 6px;
                display: flex;
                justify-content: space-evenly;
                margin-bottom: 16px;
                white-space: nowrap;
              
                button {
                  background-color: transparent;
                  transition: all 250ms ease-in;
                  border: none;
                  cursor: pointer;
                  width: 100%;
                  border-radius: 6px;
                  padding: 3px 4px;
                  font-size: 14px;
                  font-weight: 500;
                  color: #929294;
              
                  &[aria-selected='true'] {
                    background-color: white;
                    color: black;
                  }
                }
              }
            }
            .items-col-order-header {
              display: flex;
              align-items: flex-start;
              gap: 8px;
              white-space: nowrap;
              font-size: 12px;
              
              p {
                font-size: 11px;
                margin-top: 2.5px;
              }
            }
            .compare-info {
              display: flex;
              align-items: flex-start;
              gap: 5px;
              p {
                font-size: 12px;
                color: #929294;
                margin: 0;
              }
            }
            .order-columns-header {
              padding: 20px 6px 0rem 6px;
              h6 {
                font-size: 18px;
              }
              p {
                font-size: 12px;
                color: #929294;
                margin: 0;
              }
            }

            .sortable-container {
              padding: 11px;
              overflow-y: auto;

              .sortable-ghost {
                border: 3px dotted #2987e6;
              }

              .sortable-item {
                background-color: white;
                margin: 7px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5px 8px !important;
                border-radius: 5px;
                border: 1px solid #E8E8E9;
                .sortable-item-text {
                  white-space: break-spaces;
                  font-size: 14px;
                  padding: 0;
                  margin: 0;
                }
              }
              span {
                display: flex;
                &::selection {
                  background-color: transparent !important;
                }
              }
            }
            .comparison-columns {
              max-height: 530px;
              height: 530px;
              h6 {
                font-size: 17px;
              }
            }
            .flip-list-move {
              transition: transform 0.5s;
            }
            .no-move {
              transition: transform 0s;
            }
            .ghost {
              opacity: 0.5;
              background: #ededed;
            }
          }
          .list-group {
            max-height: 550px;
            min-height: 500px;
            overflow-y: auto;
            position: relative;
            margin: 16px 0;
            gap: 13px;
            .space {
              height: 5px;
              width: 5px;
            }
          }
          .no-groups {
            gap: 0px !important;
          }
          .list-group-item {
            border: none;
            background-color: #FAFAFA;
            margin: 0px 16px;
            border-radius: 5px;

            label {
              display: flex;
              justify-content: space-between;
              cursor: pointer;
              margin-bottom: -12px;
              align-items: center;
              gap: 3px;
              
              .custom-control-input:checked ~ .custom-control-label::before {
                background-color: #4158D0;
                border-color: #4158D0;
              }
            }

            .custom-metrics-actions {
              margin-right: 24px;
            }
          }
        }
      }
    }
  }
}
.clean-btn {
  background-color: transparent;
  padding: 0;
  border: none;
}
.info-popover {
  left: -270px !important;
  max-width: 250px;
  min-width: 250px;
  button {
    background-color: transparent;
    border: none;
    color: #2987e6;
    margin-bottom: 4px;
  }
  .popover-header {
    background-color: transparent;
    padding-bottom: 0;
    font-weight: 700;
    border: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
      font-size: 13px;
    }
  }
  .popover-body {
    p {
      font-size: 13px;
    }
  }
  .badge {
    white-space: break-spaces;
    font-weight: 400;
    font-size: 15px;
    text-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-bottom: 10px;
    gap: 5px;
  }
}
</style>

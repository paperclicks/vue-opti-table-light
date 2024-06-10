<template>
  <div
    :class="[{ 'datatable-wrapper-empty': $c_items.length === 0 }, `datatable-wrapper-${sticky ? 'sticky' : 'no-sticky'} datatable-wrapper`]">
    <!--TOP SLOT-->
    <div class="row" v-if="$slots['top']">
      <slot name="top"></slot>
    </div>
    <div class="slot-top" v-if="$slots['top']"></div>
    <!-- SHOW SEARCH -->
    <div class="row header" v-if="showSearch">
      <!-- SEARCH SLOT -->
      <slot name="search"></slot>

      <!-- TOGGLE DISPLAY FIELDS DROPDOWN -->
      <div class="col-xl-4 col-md-5 col-sm-12 ml-md-auto datatable-search-wrapper" :class="searchClass">

        <b-input-group>
          <b-form-input v-model="models.search" placeholder="Search..." @focus.native="$event.target.select()"
            @keydown.enter.native="$_submitSearchOnEnter" @input="$_submitSearch" class="datatable-search-field">
          </b-form-input>
          <template v-slot:append v-if="enableColumns && saveSettings">
            <div v-if="!hasPresets">
              <b-btn v-show="saveSettingsLoading"><i class="fa fa-spinner fa-spin" aria-hidden="true"
                  title="Saving..."></i></b-btn>
              <b-btn v-show="!saveSettingsLoading && !hasPresets" @click="$refs.columnsSettingsModal.show()"><i
                  class="fa fa-columns" aria-hidden="true"></i></b-btn>
            </div>
            <b-dropdown v-else ref="presetDropdown" right no-caret id="preset-dropdown">
              <template #button-content>
                <span class="d-flex align-items-center">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 1.30078C4.62126 1.30078 4.93188 1.30078 5.17691 1.40228C5.50362 1.5376 5.76318 1.79717 5.89851 2.12387C6 2.3689 6 2.67953 6 3.30078L6 12.6341C6 13.2554 6 13.566 5.89851 13.811C5.76318 14.1377 5.50361 14.3973 5.17691 14.5326C4.93188 14.6341 4.62125 14.6341 4 14.6341C3.37874 14.6341 3.06812 14.6341 2.82309 14.5326C2.49638 14.3973 2.23682 14.1377 2.10149 13.811C2 13.566 2 13.2554 2 12.6341L2 3.30078C2 2.67953 2 2.3689 2.10149 2.12387C2.23682 1.79717 2.49638 1.5376 2.82309 1.40228C3.06812 1.30078 3.37874 1.30078 4 1.30078Z"
                      stroke="#5F6870" />
                    <path
                      d="M8 1.30078C8.62126 1.30078 8.93188 1.30078 9.17691 1.40228C9.50362 1.5376 9.76318 1.79717 9.89851 2.12387C10 2.3689 10 2.67953 10 3.30078L10 12.6341C10 13.2554 10 13.566 9.89851 13.811C9.76318 14.1377 9.50361 14.3973 9.17691 14.5326C8.93188 14.6341 8.62126 14.6341 8 14.6341C7.37874 14.6341 7.06812 14.6341 6.82309 14.5326C6.49638 14.3973 6.23682 14.1377 6.10149 13.811C6 13.566 6 13.2554 6 12.6341L6 3.30078C6 2.67953 6 2.3689 6.10149 2.12387C6.23682 1.79717 6.49639 1.5376 6.82309 1.40228C7.06812 1.30078 7.37874 1.30078 8 1.30078Z"
                      stroke="#5F6870" />
                    <path
                      d="M12 1.30078C12.6213 1.30078 12.9319 1.30078 13.1769 1.40228C13.5036 1.5376 13.7632 1.79717 13.8985 2.12387C14 2.3689 14 2.67953 14 3.30078L14 12.6341C14 13.2554 14 13.566 13.8985 13.811C13.7632 14.1377 13.5036 14.3973 13.1769 14.5326C12.9319 14.6341 12.6213 14.6341 12 14.6341C11.3787 14.6341 11.0681 14.6341 10.8231 14.5326C10.4964 14.3973 10.2368 14.1377 10.1015 13.811C10 13.566 10 13.2554 10 12.6341L10 3.30078C10 2.67953 10 2.3689 10.1015 2.12387C10.2368 1.79717 10.4964 1.5376 10.8231 1.40228C11.0681 1.30078 11.3787 1.30078 12 1.30078Z"
                      stroke="#5F6870" />
                    <ellipse cx="8.00033" cy="3.30339" rx="0.666667" ry="0.666667"
                      transform="rotate(90 8.00033 3.30339)" fill="#5F6870" />
                    <ellipse cx="12.0003" cy="3.30339" rx="0.666667" ry="0.666667"
                      transform="rotate(90 12.0003 3.30339)" fill="#5F6870" />
                    <ellipse cx="4.00033" cy="3.30339" rx="0.666667" ry="0.666667"
                      transform="rotate(90 4.00033 3.30339)" fill="#5F6870" />
                  </svg>
                  <p class="ml-1">
                    Columns
                  </p>
                </span>
                <svg width="14" height="8" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6668 1L6.00016 5L1.3335 1" stroke="#5F6870" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </template>
              <b-dropdown-form>
                <div v-if="$c_hasUserPresets">
                  <b-dropdown-header>
                    Your custom presets
                  </b-dropdown-header>
                  <b-dropdown-group @submit.stop.prevent>
                    <b-form-radio v-for="(preset, i) in preset_list.user_presets" class="user-preset-label"
                    v-model="selectedPreset" :key="preset.id" :value="preset.name" @change="() => $_changePreset(preset)">
                    {{ preset.name }}
                      <button 
                        class="delete-preset-btn" 
                        @click.prevent 
                        v-b-modal="`modal-${i}`"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                          <path fill="none" stroke="#ABABAB" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M6.286 8.571L7.429 20h9.142l1.143-11.429M13.5 15.5v-5m-3 5v-5M4.571 6.286h4.572m0 0l.382-1.529a1 1 0 0 1 .97-.757h3.01a1 1 0 0 1 .97.757l.382 1.529m-5.714 0h5.714m0 0h4.572" />
                        </svg>
                      </button>
                      <b-modal hide-footer hide-header content-class="delete-preset-content" :id="`modal-${i}`"
                        :ref="`modal-${i}`" centered size="sm">
                        <h5>Do you want to delete this column preset?</h5>
                        <p>The custom view of your table columns will be permanently deleted if you continue.</p>
                        <hr />
                        <span>
                          <button :disabled="presetLoader" @click="() => $_closeModal(`modal-${i}`)">Cancel</button>
                          <button @click="() => $_deletePreset(preset, `modal-${i}`)">
                            {{ presetLoader ? 'Deleting' : 'Delete' }}
                            <b-spinner small v-if="presetLoader" label="Spinning"></b-spinner>
                          </button>
                        </span>
                      </b-modal>
                    </b-form-radio>
                  </b-dropdown-group>
                  <b-dropdown-divider></b-dropdown-divider>
                </div>
                <div v-if="$c_hasAdminPresets">
                  <b-dropdown-header>
                    Suggested presets
                  </b-dropdown-header>
                  <b-dropdown-group @submit.stop.prevent>
                    <b-form-radio v-for="(preset, i) in preset_list.admin_presets" v-model="selectedPreset" :key="preset.id"
                      :value="preset.name" @change="() => $_changePreset(preset)">
                      <span class="d-flex align-items-center justify-content-between">
                        {{ preset.name }}
                        <button
                          @click.prevent
                          v-b-modal="`clone-modal-${i}`"
                          class="clone-preset-btn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
                            <path fill="#ABABAB" d="M5 5v17h4v-2H7V7h13v2h2V5H5zm5 5v17h17V10H10zm2 2h13v13H12V12z" />
                          </svg>
                        </button>
                      </span>
                      <p v-b-tooltip.hover.top.v-secondary.nofade :title="preset.description">{{ $_sliceText(preset.description, 60) }}</p>
                      <b-modal hide-footer hide-header content-class="clone-preset-content" :id="`clone-modal-${i}`"
                        :ref="`clone-modal-${i}`" centered>
                        <h5>Save as Column Preset</h5>
                        <b-form-input v-model="newPresetName" placeholder="Preset name" />
                        <hr />
                        <span>
                          <button :disabled="presetLoader" @click="() => $_closeModal(`clone-modal-${i}`)">Cancel</button>
                          <button :disabled="$c_disableSavePresetButton" @click="() => $_savePreset(preset, `clone-modal-${i}`)">
                            {{ presetLoader ? 'Saving' : 'Save' }}
                            <b-spinner small v-if="presetLoader" label="Spinning"></b-spinner>
                          </button>
                        </span>
                      </b-modal>
                    </b-form-radio>
                  </b-dropdown-group>
                </div>
              </b-dropdown-form>
              <b-dropdown-item-button @click="$refs.columnsSettingsModal.show()">Column
                Settings</b-dropdown-item-button>
            </b-dropdown>
          </template>
        </b-input-group>
      </div>
      <!-- END TOGGLE DISPLAY FIELDS DROPDOWN -->
    </div>
    <!-- END SELECT ALL OPTION -->
    <!--TABLE -->
    <div ref="stickyHeader" class="stickyHeader">
      <table v-if="sticky" :class="[{'table-hover': hover}, 'table table-striped table-sm mb-0']">

        <!-- SYNC FIXED COLUMNS -->
        <col-group-table :selectable="selectable" :resized-columns="localResizedColumns"
          :headerFields="$c_headerFields" />

        <!-- ALL CHECKBOX & TABLE HEADERS-->
        <thead>
          <tr class="column-header">
            <th class="column-checkbox" v-if="selectable">
              <input type="checkbox" :true-value="true" :false-value="false" :value="models.selectAllCheckbox"
                v-model="models.selectAllCheckbox" @change="$_selectAllItemsAction()" />
            </th>
            <th v-for="(col, i) in $c_headerFields" :key="i" :style="col.header.style || ''" :class="col.colClass">
              <div class="header">
                <div v-if="col.item.sortable" class="sort" @click="$_fieldClickAction(col)">
                  <div :class="{'arrow-up-active': sortKey === col.item.key && sortOrder === 'asc'}" class="arrow-up">
                  </div>
                  <div style="height: 5px;"></div>
                  <div :class="{'arrow-down-active': sortKey === col.item.key && sortOrder === 'desc'}"
                    class="arrow-down"></div>
                </div>
                <div :id="`info-popover-${i}`" @click="col.header.preventSort ? null : $_fieldClickAction(col)"
                  class="title" :class="{ 'pl-2': !col.item.sortable, 'pr-2': !col.item.filter }"
                  style="text-align: center;">
                  <!-- CHECK IF IS A SLOT -->
                  <i v-if="col.header.info && showTooltipBeforeText && !$c_headerPopover"
                    v-b-tooltip="{ hover: true, html: true, title: col.header.info, boundary: 'window' }"
                    class="fa fa-info-circle info-icon"></i>
                  <div v-if="col.header.slot" :class="[col.header.class, 'HEADER_field']">
                    <slot :name="`HEADER_${col.header.slot}`" :item="col.header" :i="i"></slot>
                  </div>
                  <span :id="`column-${i}`" class="column" v-else-if="typeof col.header.content == 'function'"
                    v-html="col.header.content()"></span>
                  <span :id="`column-${i}`" class="column" v-else-if="(typeof col.header.content != 'function')"
                    v-html="col.header.content"></span>
                  <i v-if="col.header.info && !showTooltipBeforeText && !$c_headerPopover"
                    v-b-tooltip="{ hover: true, html: true, title: col.header.info, boundary: 'window', customClass: col.header.customClass }"
                    class="fa fa-info-circle info-icon"></i>
                </div>
                <!--DROPDOWN FILTERS-->
              </div>
              <div @click="$_checkColumnWidth(`column-${i}`)" @mousedown="$_handleMouseDown($event, col, `col-${i}`)"
                class="column-resize"></div>
              <b-popover v-if="$c_headerPopover && col.header.info" :target="`info-popover-${i}`" triggers="hover"
                placement="left" custom-class="header-popover">
                <div class="info-popover">
                  <h5>{{ col.header.content }}</h5>
                  <p v-html="col.header.info"></p>
                </div>
              </b-popover>
            </th>
          </tr>
          <tr v-if="columnFilterEnable" class="column-filter">
            <th class="column-checkbox" v-if="selectable"></th>
            <th v-for="(col, i) in $c_headerFields" :key="i" :class="col.colClass">
              <template v-if="filterFieldsModels[col.item.key]">
                <filter-input v-model="filterFieldsModels[col.item.key]"
                  @input="(payload) => $_onChangeColumnFilter(col.item.key, payload)" />
              </template>
            </th>
          </tr>
        </thead>
      </table>
      <div v-else style="height: 1px"></div>
    </div>
    <div ref="tableWraper" class="table-holder">
      <table ref="table" :class="[{'table-hover': hover}, 'table table-striped table-sm mb-0']">
        <!-- SYNC FIXED COLUMNS -->
        <col-group-table v-if="sticky" :resized-columns="localResizedColumns" :selectable="selectable"
          :headerFields="$c_headerFields" />

        <!--ALL CHECKBOX & TABLE HEADERS-->
        <thead v-else>
          <tr class="column-header">
            <th class="column-checkbox" v-if="selectable">
              <input type="checkbox" :true-value="true" :false-value="false" :value="models.selectAllCheckbox"
                v-model="models.selectAllCheckbox" @change="$_selectAllItemsAction()" />
            </th>
            <th v-for="(col, i) in $c_headerFields" :key="i" :style="col.header.style || ''" :class="col.colClass">
              <div class="header" :id="`info-popover-${i}`">
                <div v-if="col.item.sortable" class="sort p-2" @click="$_fieldClickAction(col)">
                  <div :class="{'arrow-up-active': sortKey === col.item.key && sortOrder === 'asc'}" class="arrow-up">
                  </div>
                  <div style="height: 5px;"></div>
                  <div :class="{'arrow-down-active': sortKey === col.item.key && sortOrder === 'desc'}"
                    class="arrow-down"></div>
                </div>
                <div @click="col.header.preventSort ? null : $_fieldClickAction(col)" class="title pt-2 pb-2"
                  :class="{ 'pl-2': !col.item.sortable, 'pr-2': !col.item.filter }" style="text-align: center;">
                  <!-- CHECK IF IS A SLOT -->
                  <div v-if="col.header.slot" :class="[col.header.class, 'HEADER_field']">
                    <slot :name="`HEADER_${col.header.slot}`" :item="col.header" :i="i"></slot>
                  </div>
                  <span :id="`column-${i}`" class="column" v-else-if="typeof col.header.content == 'function'"
                    v-html="col.header.content()"></span>
                  <span :id="`column-${i}`" class="column" v-else-if="typeof col.header.content != 'function'"
                    v-html="col.header.content"></span>
                  <i v-if="col.header.info && !$c_headerPopover"
                    v-b-tooltip="{ hover: true, html: true, title: col.header.info, boundary: 'window' }"
                    class="fa fa-info-circle info-icon"></i>
                </div>
                <b-popover v-if="$c_headerPopover" :target="`info-popover-${i}`" triggers="hover" placement="right">
                  <template #title>{{ col.header.content }}</template>
                  <p v-html="col.header.info"></p>
                </b-popover>
                <!--DROPDOWN FILTERS-->
              </div>
            </th>
          </tr>
          <tr v-if="columnFilterEnable" class="column-filter">
            <th v-if="selectable"></th>
            <th v-for="(col, i) in $c_headerFields" :key="i">
              <template v-if="filterFieldsModels[col.item.key]">
                <filter-input v-model="filterFieldsModels[col.item.key]"
                  @input="(payload) => $_onChangeColumnFilter(col.item.key, payload)" />
              </template>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in $c_itemsCurrentPage" :key="$_rowKey(item) || i"
            :class="{'rowSelected': item.$selected && focusSelectedRows}">
            <td v-if="selectable" class="column-checkbox">
              <input type="checkbox" :true-value="true" :false-value="false" :value="item.$selected"
                v-model="item.$selected" @change="$_selectItem(item)" />
            </td>
            <template v-for="(col, j) in $c_headerFields">
              <td :key="j" :class="[col.item.cellClass, col.colClass]" v-if="col.display" :style="col.item.style || ''"
                @click="col.item.onClick && col.item.onClick(item, i)">
                <!-- CHECK IF FIELD IS A SLOT -->
                <div v-if="col.item.slot" :class="[col.item.class, 'field']">
                  <slot :name="col.item.slot" :item="item.$ref" :field="col" :i="i"></slot>
                </div>
                <!-- OTHERWISE RENDER FIELD  -->
                <div v-else :class="[col.item.class, 'field']"
                  v-html="col.item.content ? col.item.content(item) : item[col.item.key]">
                </div>
              </td>
            </template>
          </tr>
        </tbody>
        <template v-if="!sticky">
          <!--TABLE FOOTER, TOTALS-->
          <tfoot v-if="$c_showTotal && $c_items.length && $c_totals">
            <tr>
              <td v-if="selectable" class="column-checkbox col-disable-bg"></td>
              <td v-for="(col, i) in $c_headerFields" :key="i"
                :style="(col.item.total && col.item.total.style) || col.item.style || ''"
                :class="[{'col-disable-bg': !col.item.total}, col.colClass]">
                <template v-if="col.item.total">
                  <div v-html="col.item.total.content($c_totals)"></div>
                </template>
              </td>
            </tr>
          </tfoot>
        </template>
      </table>
      <!--0 ITEMS-->
      <div class="table-message table-no-results" v-if="!$c_items.length && !(serverSidePagination && loading)">
        No Results.
      </div>
      <div class="table-message table-loading" v-if="serverSidePagination && loading">
        Loading...
      </div>
    </div>
    <div v-if="sticky" ref="stickyFooter" class="stickyFooter">
      <table :class="[{'table-hover': hover}, 'table table-striped table-sm mb-0']">

        <!-- SYNC FIXED COLUMNS -->
        <col-group-table :resized-columns="localResizedColumns" :selectable="selectable"
          :headerFields="$c_headerFields" />

        <!--TABLE FOOTER, TOTALS-->
        <tfoot v-if="$c_showTotal && $c_items.length && $c_totals">
          <tr>
            <td v-if="selectable" class="column-checkbox col-disable-bg"></td>
            <td v-for="(col, i) in $c_headerFields" :key="i"
              :style="(col.item.total && col.item.total.style) || col.item.style || ''"
              :class="[{'col-disable-bg': !col.item.total}, col.colClass]">
              <template v-if="col.item.total">
                <div v-html="col.item.total.content($c_totals)"></div>
              </template>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="row footer" v-if="showPagination && $c_items.length">
      <vue-opti-select-light ref="paginationSizeDropdown"
        class="col-md-2 col-sm-12 optimizer-select pr-md-0 mb-2 mb-md-0" v-model="paginationSize" :options="rows"
        @change="$_pageSizeChanged" :value="[this.defaultRows]">

      </vue-opti-select-light>
      <div class="col-md-auto d-flex mb-2 mb-md-0" v-if="enableExport">
        <slot :xlsDownloadLoading="xlsDownloadLoading" :csvDownloadLoadig="csvDownloadLoading"
          :downloadXls="$_downloadXls" :downloadCsv="$_downloadCsv" name="export"></slot>
        <template v-if="serverSidePagination">
          <download-excel ref="csv-button" class="btn btn-secondary pointer-button btn-export-csv"
            :class="[ !!$scopedSlots['export']? 'd-none': '' ]" :fields="$c_exportTable" type="csv"
            :name="`${exportLabel}.csv`" :fetch="$_csvFetch" :before-generate="() => { csvDownloadLoading = true }"
            :before-finish="() => { csvDownloadLoading = false }">
            <span v-if="csvDownloadLoading">Downloading <i class="fa fa-spinner fa-spin" aria-hidden="true"></i></span>
            <span v-else>Download CSV</span>
          </download-excel>
          <download-excel ref="xls-button" class="btn btn-secondary pointer-button btn-export-xls ml-3 display"
            :class="[ !!$scopedSlots['export']? 'd-none': '' ]" :fields="$c_exportTable" type="xls"
            :name="`${exportLabel}.xls`" :fetch="$_xlsFetch" :before-generate="() => { xlsDownloadLoading = true }"
            :before-finish="() => { xlsDownloadLoading = false }">
            <span v-if="xlsDownloadLoading">Downloading <i class="fa fa-spinner fa-spin" aria-hidden="true"></i></span>
            <span v-else>Download Excel</span>

          </download-excel>
        </template>
        <template v-else>
          <download-excel hidden ref="csv-button" class="btn btn-secondary pointer-button"
            :class="[ !!$scopedSlots['export']? 'd-none': '' ]" :data="items" :fields="$c_exportTable" type="csv"
            :name="`${exportLabel}.csv`">
            Download CSV
          </download-excel>
          <download-excel ref="xls-button" class="btn btn-secondary pointer-button ml-3"
            :class="[ !!$scopedSlots['export']? 'd-none': '' ]" :data="items" :fields="$c_exportTable" type="xls"
            :name="`${exportLabel}.xls`">
            Download Excel
          </download-excel>

        </template>
      </div>
      <div class="col-md-4 col-sm-12 ml-md-auto">
        <ul class="pagination justify-content-center justify-content-md-end unselectable">
          <li class="page-item">
            <a class="page-link d-flex justify-content-center align-items-center" @click="$_changePageAction(1)">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
              1</a>
          </li>
          <li v-for="(page, i) in $c_pagesInPagination" :key="i" :class="{'active': currentPage === page}"
            class="page-item"><a :class="{'btn-bg-color': currentPage === page}" class="page-link"
              @click="$_changePageAction(page)">{{ page }}</a></li>
          <li class="page-item">
            <a class="page-link d-flex justify-content-center align-items-center" @click="$_changePageAction($c_pages)">
              <span>{{ $c_pages }}</span>
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--BOTTOM SLOT-->
    <div class="slot-bottom" v-if="$slots['bottom']"></div>
    <div class="row" v-if="$slots['bottom']">
      <slot name="bottom"></slot>
    </div>
    <columns-settings-modal 
      ref="columnsSettingsModal" 
      v-model="localHeaderFields" 
      @save="$_saveSettings"
      :update-custom-metric="updateCustomMetric" 
      :custom-metric-options="customMetricOptions"
      :metric-group-options="metricGroupOptions" 
      :has-groups="hasGroups" 
      :has-comparison-columns="hasComparisonColumns"
      :has-custom-metrics="hasCustomMetrics" 
      :nativeFields="nativeFields"
      :updateComparisonColumns="updateComparisonColumns" 
      :savePreset="savePreset" 
      :hasPresets="hasPresets"
      :infoType="infoType"
      :currentPreset="currentPreset"
      :editPreset="editPreset"
    />
  </div>
</template>

<script>
import JsonExcel from 'vue-json-excel';
import { VueOptiSelectLight } from 'vue-opti-select-light';
import props from './props';
import data from './data';
import computed from './computed';
import methods from './methods';
import watch from './watch';
import FilterInput from './FilterInput';
import DataModel from './DataModel';
import ColGroupTable from './ColGroupTable';
import ColumnsSettingsModal from './ColumnsSettingsModal';
import _ from 'lodash';

export default {
  name: 'vue-opti-table-light',
  props,
  computed,
  data,
  methods,
  watch,
  components: {
    downloadExcel: JsonExcel,
    VueOptiSelectLight,
    FilterInput,
    ColGroupTable,
    ColumnsSettingsModal,
  },
  model: {
    prop: 'tableModel',
    event: 'click',
  },
  created() {
    if (this.sticky) this.localResizedColumns = { ...this.resizedColumns };
    // Create Data Model
    this.$watch('items', (items) => { // Create Data Model on items change
      // console.log('%cChange Items', 'color: #007bff;');
      this.localTableModel.selectedRows = [];
      this.$set(this, 'dataModel', new DataModel({items}));
      this.$emit('click', this.localTableModel);
    }, { immediate: true });
    // this.$watch('dataModel', () => { // Log Data Model Changes
    //   console.log('%cChange DataModel', 'color: #fd7e14;');
    // });
    
    // If Client Side Render
    if (!this.serverSidePagination) {
      // Apply Order & Search Filter
      this.$watch(() => {
        return {
          order: { key: this.sortField, order: this.sortOrder },
          search: { value: this.models.search, fields: this.$c_searchableFields },
          headerFields: this.$c_headerFields
        };
      }, ({ order, search, headerFields }) => {
        // console.log('Apply Filter')
        this.dataModel.applyFilter(order, search, headerFields);
      }, { deep: true, immediate: true });
      this.$watch('models.search', () => {
        this.currentPage = 1;
      });
      this.$watch('items', () => {
        this.$_changePageAction(1);
        // console.log('Apply Filter on change items')
        this.dataModel.applyFilter({ key: this.sortField, order: this.sortOrder }, { value: this.models.search, fields: this.$c_searchableFields }, this.$c_headerFields);
      });
      this.$watch('localHeaderFields', () => {
        this.$_checkAllColumnsHeight();
      })
    }
  },
  mounted() {
    this.$_checkAllColumnsHeight();
    /* ------------ Fake scroller Bind events -------------*/
    const tableTop = this.$refs.stickyHeader;
    // const tableTopChild = tableTop.childNodes[0];

    const tableWraper = this.$refs.tableWraper;
    // const table = this.$refs.table;
    // console.log(table);
    const tableBottom = this.$refs.stickyFooter;

    let areScrolling = 0;
    const onScrollFn = (from, to) => {
      if (areScrolling) return;
      areScrolling = 1;
      to.forEach(el => { el.scrollLeft = from.scrollLeft; });
      areScrolling = 0;
    };

    if (this.sticky) {
      let onScrollBottom = true;
      let onScrollWraper = true;
      const enableOnScrollBottom = _.debounce(() => { onScrollBottom = true; }, 500);
      const enableOnScrollWraper = _.debounce(() => { onScrollWraper = true; }, 500);

      tableBottom.onscroll = () => {
        if (onScrollBottom) {
          onScrollWraper = false;
          onScrollFn(tableBottom, [tableTop, tableWraper]);
          enableOnScrollWraper();
        }
      }
      tableWraper.onscroll = () => {
        if (onScrollWraper) {
          onScrollBottom = false;
          onScrollFn(tableWraper, [tableTop, tableBottom]);
          enableOnScrollBottom();
        }
      }
      // const scrollObserver = new ResizeObserver(() => {
      //   tableTop.style.width = getComputedStyle(tableWraper).width;
      //   tableBottom.style.width = getComputedStyle(tableWraper).width;
      // });
      // scrollObserver.observe(tableWraper);
      // scrollObserver.observe(table);
    } else {
      let onScrollTop = true;
      let onScrollWraper = true;
      const enableOnScrollTop = _.debounce(() => { onScrollTop = true; }, 500);
      const enableOnScrollWraper = _.debounce(() => { onScrollWraper = true; }, 500);

      tableTop.onscroll = () => {
        if (onScrollTop) {
          onScrollWraper = false;
          onScrollFn(tableTop, [tableWraper]);
          enableOnScrollWraper();
        }
      }
      tableWraper.onscroll = () => {
        if (onScrollWraper) {
          onScrollTop = false;
          onScrollFn(tableWraper, [tableTop]);
          enableOnScrollTop();
        }
      }

      // tableTop.onscroll = () => onScrollFn(tableTop, [tableWraper]);
      // tableWraper.onscroll = () => onScrollFn(tableWraper, [tableTop]);
      // const scrollObserver = new ResizeObserver(() => {
      //   tableTop.style.width = getComputedStyle(tableWraper).width;
      //   tableTopChild.style.width = getComputedStyle(tableWraper).width;
      // });
      // scrollObserver.observe(tableWraper);
      // scrollObserver.observe(tableTop);
    }
    /* ------------ ------------------------- -------------*/
  },
};
</script>

<style lang="scss">
.datatable-wrapper {
  &.datatable-wrapper-sticky {
    table {
      table-layout: fixed;
      .col-size-sync {
        width: 100px;
        &.col-size-sync-x {
          width: 25px;
        }
      }
    }
    .stickyHeader {
      overflow-x: hidden;
      border: 1px solid #e1e6ef;
      border-bottom: 0;
      position: sticky;
      top: 0;
      background-color: #fff;

      th {
        position: relative;

        .column-resize {
          position: absolute;
          right: 0;
          height: 100%;
          width: 3px;
          bottom: 0;
          background: inherit;
          cursor: col-resize;
        }
      }
    }
    .stickyFooter {
      overflow-x: auto;
      border: 1px solid #e1e6ef;
      border-top: 0;
      position: sticky;
      bottom: 0;
      background-color: #fff;
    }
  }

  &.datatable-wrapper-no-sticky {
    // Scroller
    .stickyHeader {
      overflow-x: auto;
      transform: rotateX(180deg);
      border: 1px solid #e1e6ef;
      border-top: 0;
    }
    .table-holder {
      overflow-x: auto;
    }
  }
  
  .table-holder {
    // overflow-x: hidden;
    overflow-x: auto;
    border: 1px solid #e1e6ef;
    border-top: 0;
  }
  // Column Dropdown
  .columns-dropdown {
    .dropdown-menu {
      min-width: 13.5rem;
      max-height: 400px;
      overflow-y: scroll;
      padding: 0;
      .dropdown-header {
        color: #151b1e;
        background-color: #FFF;
        padding: 5px 10px;
        label.custom-checkbox {
          margin-bottom: 0;
          .custom-control-description {
            line-height: 20px;
          }
        }
      }
      label.custom-control {
        margin-bottom: 0;
      }
      label > span.custom-control-description {
        cursor: move;
      }
      .list-group-item {
        padding: .5rem 1.25rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        cursor: move;
        // .info {
        //   .fa-sort {
        //     visibility: hidden;
        //   }
        // }
        // &:hover {
        //   .info > .fa-sort {
        //     visibility: visible;
        //   }
        // }
      }
    }
  }
  // Table
  table {
    thead {
      tr > th {
        border-right: 1px solid #e1e6ef;
        border-bottom: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        border-top: none;
        vertical-align: middle;
        overflow: hidden;
        &:last-child {
          border-right: none;
        }
        .header {
          display: table;
          width: 100%;
          .sort, .title, .cog {
            display: table-cell;
            vertical-align: middle;
            white-space: nowrap;
            font-weight: bold;

            .table-popover-btn {
              background-color: transparent;
              border: none;
              padding: 0;
              margin: 0;
              margin-left: 5px;
              margin-top: -3px;
              color: black;
            }
          }
          .sort {
            width: 10px;
          }
          .cog {
            text-align: right;
          }
          .title {
            &:hover {
              span {
                color: #2987e6;
              }
            }
            span {
              white-space: normal;
              margin-left: .2rem;

              &.ellipsis {
                float: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                height: 21px;
              }
            }
          }
          .arrow-up {
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid #e1e1e1;
          }

          .arrow-down {
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #e1e1e1;
          }
          .arrow-up-active {
            border-bottom: 5px solid #777;
          }
          .arrow-down-active {
            border-top: 5px solid #777;
          }
        }
      }
      .column-filter {
        th {
          border-top: 1px solid #e1e6ef;
        }
      }
    }
    
    tbody {
      tr > td {
        vertical-align: middle;
        border-right: 1px solid #e1e6ef;
        border-bottom: none;
        overflow: hidden;
        &:last-child {
          border-right: none;
        }
        .field {
          white-space: nowrap;
          font-weight: normal;
        }
      }
    }
    .column-checkbox {
      text-align: center;
    }
    .column-header {
      th.comparable {
        background-color: #DDEEFF;
      }
    }
  }
  // Other
  .table-message {
    padding: 7px;
    padding-left: 13px;
    border-top: 1px solid #e1e6ef;
  }
  .pointer-button {
    cursor: pointer;
  }
  // Pagination
  .pagination {
    margin-bottom: 0px;
    &.unselectable {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .page-item {
      width: calc(100% / 7);
      > a {
        height: 33px;
        line-height: 14px;
        color: #999;
        display: block;
        text-align: center;
        font-size: 10px;
        &:focus {
          color: #999;
          background: transparent;
        }
        &:hover {
          color: #999;
          background: #f1f1f1;
          cursor: pointer;
        }
      }
    }
  }

  // Datatable Search
  .datatable-search-wrapper {
    #preset-dropdown {
      .dropdown-toggle {
        background-color: white;
        color: #5F6870;
        border: 1px solid #e1e6ef;
        display: flex;
        align-items: center;
        gap: 1.2rem;  
      }
      p {
        padding: 0;
        margin: 0;
      }
      .dropdown-menu {
        width: 300px;
        padding: .5rem .8rem;
        transform: translate3d(-155px, 38px, 0px);
        .b-dropdown-form {
          padding: 0;
          
          .dropdown-header {
            padding: 0rem;
            text-transform: uppercase;
            color: #ABABAB;
            margin-bottom: .4rem;
          }

          .list-unstyled {
            .user-preset-label {

              .modal-header,
              .modal-footer {
                display: none;
              }
              .custom-control-label {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
              .delete-preset-btn {
                background-color: transparent;
                border: none;
                margin-right: -1.3rem;
              }
            }
            .custom-control {
              padding: 0;
              margin-bottom: .5rem;

              .clone-preset-btn {
                background-color: transparent;
                border: none;
                margin-right: -1.3rem;
              }
            }
            .custom-radio {
              padding: .5rem 1.9rem;

              &:has(input:checked) {
                background-color: #F2F2FA;
                border-radius: 5px;
              }
              &:hover { 
                background-color: #F2F3F5;
                border-radius: 5px;
              }

              .custom-control-input:checked,
              .custom-control-input:checked ~ .custom-control-label::before {
                background-color: #4158D0 !important;
                border-color: #4158D0 !important;
              }

              
              .custom-control-label {
                padding-left: .3rem;

                p {
                  font-size: .8rem;
                  color: #ABABAB;
                }

                &::after,
                &::before {
                  width: 1.2rem;
                  height: 1.2rem;
                }
              }
            }
          }

        }
        button[type = "button"] {
          color: #4158D0;
          border: 1px solid #4158D0;
          border-radius: 8px;
          text-align: center;

          &:hover {
            background-color: white;
          }
        }
      }
    }
  }
}

.large-tooltip .tooltip-inner {
  max-width: 35rem !important;
}

.filter-input-tooltip {
  font-size: 12px;
  font-weight: 500;
  opacity: 1 !important;

  .tooltip-inner {
    padding: 8px;
  }

  .range {
    border-radius: 4px;
    background-color: #cecdd0;
    color: #262626;
    padding: 2px 4px;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &__title {
      font-weight:700;
    }

    &__subtitle {
      color: #929294;
    }
  }


  .body-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 6px;
  }
}
.popover {
  max-height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
.header-popover {
  border: 1px solid rgb(223, 220, 220);
  top: 10px !important;
  left: -10px !important;
  .info-popover {
    h5 {
      font-size: 1rem !important;
      font-weight: 800;
    }
    p {
      font-size: .8rem !important;
    }
  }
}
.delete-preset-content {
  width: auto;
  .modal-body {
    h5 {
      white-space: nowrap;
    }
    p {
      font-size: .8rem;
    }

    span {
      display: flex;
      justify-content: flex-end;
      gap: .5rem;

      button {
        border-color: transparent;
        border-radius: 3px;
        font-weight: 500;
        padding: .2rem .3rem;

        &:first-child {
          background-color: white;
          color: #6a737c;
          border-color: #ccd0d5;
        }
        &:last-child {
          background-color: red;
          color: white;
          display: flex;
          align-items: center;
          gap: .3rem;
        }
      }
    }
  }
}
.clone-preset-content {
  .modal-body {
    h5 {
      margin-bottom: 1.5rem;
    }
  }
  span {
    display: flex;
    justify-content: flex-end;
    gap: .5rem;

    button {
      border-color: transparent;
      border-radius: 3px;
      font-weight: 500;
      padding: .2rem .3rem;

      &:first-child {
        background-color: white;
        color: #6a737c;
        border-color: lightgray;
      }
      &:last-child {
        background-color: #00AC81;
        color: white;
        display: flex;
        align-items: center;
        gap: .3rem;
      }
    }
  }
}
</style>
export default {
  $_fieldClickAction(field) {
    if (field.item.sortable) {
      if (!(this.sortKey === field.item.key)) {
        this.sortKey = field.item.key;
        this.sortField = field.item.key;
        if (typeof field.item.sortable === 'string') {
          this.sortField = field.item.sortable;
        }
        this.sortOrder = 'asc';
      } else if (this.sortOrder === 'asc') {
        this.sortOrder = 'desc';
      } else {
        this.sortOrder = 'asc';
      }
      this.currentPage = 1;
      this.$_paginationEvent('sort');
    }
  },
  $_isDisplayed(col) {
    return this.localTableModel.displayColumns.find(column => column.item.key === col.item.key);
  },

  // Pagination
  $_changePageAction(page) {
    this.currentPage = page;
    this.$_paginationEvent('pagination');
  },

  // Select All Rows
  $_selectAllItemsAction() {
    this.$c_items.forEach(row => { row.$selected = this.models.selectAllCheckbox; });
    this.localTableModel.selectedRows = this.models.selectAllCheckbox ? this.$c_items.map(({ $ref }) => $ref) : [];
    this.$emit('click', this.localTableModel);
  },

  $_selectItem(row) {
    if (row.$selected) {
      this.localTableModel.selectedRows.push(row.$ref);
    } else {
      this.localTableModel.selectedRows = this.localTableModel.selectedRows.filter((selectedRow) => selectedRow !== row.$ref);
      // this.localTableModel.selectedRows = this.localTableModel.selectedRows.filter(({ $uid }) => $uid !== row.$uid);
      if (this.models.selectAllCheckbox) this.models.selectAllCheckbox = false
    }
    this.$emit('click', this.localTableModel);
  },

  $_pageSizeChanged() {
    this.currentPage = 1;
    this.$_paginationEvent('row-per-page-change');
  },

  $_submitSearchOnEnter() {
    this.$_paginationEvent('enter-search');
  },

  $_submitSearch() {
    this.currentPage = 1;
    this.$_paginationEvent('search');
  },

  $_onChangeColumnFilter() {
    this.currentPage = 1;
    // Remove empty filter
    const columnFilter = JSON.parse(JSON.stringify(this.filterFieldsModels));
    Object.keys(columnFilter).forEach((key) => {
      if (!columnFilter[key].length) delete columnFilter[key];
    });
    this.columnFilterLocal = columnFilter;
    this.$emit('update:columnFilter', columnFilter);
    this.$_paginationEvent('column-filter');
  },

  $_paginationEvent(type) {
    if (this.serverSidePagination) {
      this.$emit(`on-${type}`, {
        page: this.currentPage,
        pages: this.pages,
        limit: this.$c_paginationSize,
        sortField: this.sortField,
        sortType: this.sortOrder,
        search: this.models.search,
        searchableFields: this.$c_searchableFields,
        columnFilter: this.columnFilterLocal,
      });
      this.models.selectAllCheckbox = false;
    }
  },

  async $_saveSettings(customizedFields) {
    if (this.saveSettings) {
      this.saveSettingsLoading = true;
      try {
        const fields = this.$_filterFields(customizedFields);
        await this.saveSettings(fields);
        this.saveSettingsLoading = false;
      } catch (error) {
        this.saveSettingsLoading = false;
        throw Error('Save settings failed');
      }
    }
  },

  async $_savePreset(customizedFields, preset) {
    if (this.savePreset) {
      this.saveSettingsLoading = true;
      try {
        const fields = this.$_filterFields(customizedFields);
        const payload = {
          ...preset,
          fields,
        }
        await this.savePreset(payload);
        this.saveSettingsLoading = false;
      } catch (error) {
        this.saveSettingsLoading = false;
        throw Error('Save settings failed');
      }
    }
  },

  async $_csvFetch() {
    try {
      const response = await this.exportCsvItems();
      this.csvDownloadLoading = false;
      return response;
    } catch (error) {
      this.csvDownloadLoading = false;
      throw error;
    }
  },

  async $_xlsFetch() {
    try {
      const response = await this.exportCsvItems();
      this.xlsDownloadLoading = false;
      return response;
    } catch (error) {
      this.xlsDownloadLoading = false;
      throw error;
    }
  },

  $_rowKey(item) {
    return this.rowKey ? item[this.rowKey] : null
  },

  // Handle Mouse Selection Start
  $_handleMouseDown(e, col) {
    this.currentColumn = col;
    this.currentHeaderField = e.target.parentElement;
    this.resizeStartOffset = this.currentHeaderField.offsetWidth - e.pageX;

    document.addEventListener('mousemove', this.$_handleMouseMove);
    document.addEventListener('mouseup', this.$_handleMouseUp);
  },

  // Handle Column Resize
  $_handleMouseMove(e) {
    this.$set(this.localResizedColumns, [this.currentColumn.item.key], this.resizeStartOffset + e.pageX);
  },

  // Handle Mouse Resize End
  $_handleMouseUp() {
    this.resizeStartOffset = 0;
    this.currentHeaderField = undefined;
    this.currentColumn = {};
    this.$emit('resize', this.localResizedColumns);

    document.removeEventListener('mousemove', this.$_handleMouseMove);
    document.removeEventListener('mouseup', this.$_handleMouseUp);
  },

  // Handle Download Excel
  $_downloadXls() {
    this.$refs['xls-button'].generate();
  },

  // Handle Download CSV
  $_downloadCsv() {
    this.$refs['csv-button'].generate();
  },

  $_openColumnSettings() {
    this.saveSettingsLoading = true;
    this.$refs.columnsSettingsModal.presetEnabled = false;
    this.$refs.columnsSettingsModal.newPresetName = '';
    this.$refs.columnsSettingsModal.show();
    this.saveSettingsLoading = false;
  },

  $_createPreset() {
    this.$refs.columnsSettingsModal.show();
    this.$refs.columnsSettingsModal.presetEnabled = true;
  },

  $_checkAllColumnsHeight() {
    const allCols = document.querySelectorAll('.column');
    for (const col of allCols) {
      const colWidth = col.getBoundingClientRect().height;
      if (colWidth > 100) {
        col.classList.add('ellipsis');
      } else {
        col.classList.remove('ellipsis');
      }
    }
  },

  $_checkColumnWidth(id) {
    const el = document.getElementById(id);
    const elWidth = el.getBoundingClientRect().width;
    if (elWidth < 180) {
      document.getElementById(id).classList.add('ellipsis');
    } else {
      document.getElementById(id).classList.remove('ellipsis');
    }
  },

  $_sliceText(text, length) {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  },

  $_filterFields(customizedFields) {
    return JSON.parse(JSON.stringify(customizedFields)).map((item) => {
      const field = {
        header: {
          content: item.header.content,
        },
        item: {
          key: item.item.key,
          sortable: item.item.sortable || true,
          type: item.item.type,
        },
        display: item.display
      };
      if (item?.options)
        field.options = item.options;
      if ('comparable' in item)
        field.comparable = item.comparable;
      if (item.header.info)
        field.header.info = item.header.info;
      if (typeof item.customMetric !== 'undefined')
        field.customMetric = item.customMetric;
      return field;
    });
  }

};


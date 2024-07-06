<template>
    <b-dropdown ref="presetDropdown" right no-caret id="preset-dropdown">
        <template #button-content>
            <span id="popover-preset-name" class="d-flex align-items-center">
                <svg v-show="!saveSettingsLoading" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <i v-show="saveSettingsLoading" class="fa fa-spinner fa-spin" aria-hidden="true"
                title="Saving..."></i>
                <p class="toggle-text">
                    Columns
                </p>
              </span>
              <b-popover custom-class="preset-name" boundary="window" target="popover-preset-name" triggers="hover" placement="top">
                <p>Columns: {{ localSelectedPreset }}</p>
              </b-popover>
              <svg width="14" height="8" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6668 1L6.00016 5L1.3335 1" stroke="#5F6870" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              </svg>
        </template>
        <b-dropdown-form class="preset-wrapper">
            <div v-if="$c_hasUserPresets && !showAllAdminPresets">
                <b-dropdown-header>
                    <button
                        v-show="showAllUserPresets"
                        class="dropdown-back-btn"
                        @click.prevent="() => $_setShowAllUserPresets(false)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1H6.921Z"/>
                        </svg>
                    </button>
                    Your custom presets
                </b-dropdown-header>
                <b-dropdown-group class="preset-list" @submit.stop.prevent>
                    <b-form-radio
                        v-for="(preset, i) in $c_userPresetsList" 
                        class="user-preset-label preset-radio"
                        :key="preset.id" 
                        v-model="localSelectedPreset"
                        :value="preset.name"
                        @change="() => $_changePreset(preset)"
                    >
                        <p :id="`user-fields-${i}`" class="preset-name">
                            {{ sliceText(preset.name, 25) }}
                        </p>
                        <button :disabled="$c_atLeastOneUserPreset" class="delete-preset-btn" @click.prevent v-b-modal="`modal-${i}`">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="none" stroke="#ABABAB" stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.286 8.571L7.429 20h9.142l1.143-11.429M13.5 15.5v-5m-3 5v-5M4.571 6.286h4.572m0 0l.382-1.529a1 1 0 0 1 .97-.757h3.01a1 1 0 0 1 .97.757l.382 1.529m-5.714 0h5.714m0 0h4.572" />
                            </svg>
                        </button>
                        <b-modal hide-footer hide-header content-class="delete-preset-content"
                            modal-class="optimizer-modal" :id="`modal-${i}`" :ref="`modal-${i}`" centered
                            no-close-on-backdrop>
                            <div class="delete-preset-header">
                              <h5>Delete this column preset?</h5>
                              <button @click="() => $_closeModal(`modal-${i}`)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 304 384">
                                  <path fill="currentColor" d="M299 73L179 192l120 119l-30 30l-120-119L30 341L0 311l119-119L0 73l30-30l119 119L269 43z"/>
                                </svg>
                              </button>
                            </div>
                            <p>This column preset and its custom selections will be deleted on all entity levels if you continue.</p>
                            <span>
                              <button :disabled="presetLoader"
                              @click="() => $_closeModal(`modal-${i}`)">Cancel</button>
                              <button @click="() => $_deletePreset(preset, `modal-${i}`)">
                                {{ presetLoader ? 'Deleting' : 'Delete' }}
                                <b-spinner small v-if="presetLoader" label="Spinning"></b-spinner>
                              </button>
                            </span>
                        </b-modal>
                        <b-popover custom-class="preset-info" container="preset-list" boundary="window" :target="`user-fields-${i}`" triggers="hover" placement="right">
                          <template #title>{{ preset.name }}</template>
                          <p>{{ preset.description }}</p>
                          <ul>
                            <li v-for="(field, i) in preset.fields.filter(f => f.display)" :key="i">
                              {{ typeof field.header.content === 'function' ? field.header.content() : field.header.content }}
                            </li>
                          </ul>
                        </b-popover>
                    </b-form-radio>
                </b-dropdown-group>
                <button
                    class="view-more-btn"
                    v-show="!showAllUserPresets" 
                    @click.prevent="() => $_setShowAllUserPresets(true)"
                >
                    View your custom columns
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/>
                    </svg>
                </button>
                <b-dropdown-divider v-if="!showAllUserPresets"></b-dropdown-divider>
            </div>
            <div v-if="$c_hasAdminPresets && !showAllUserPresets">
                <b-dropdown-header>
                    <button
                        class="dropdown-back-btn"
                        v-show="showAllAdminPresets" 
                        @click.prevent="() => $_setShowAllAdminPresets(false)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1H6.921Z"/>
                        </svg>
                    </button>
                    Suggested presets
                </b-dropdown-header>
                <b-dropdown-group class="preset-list" @submit.stop.prevent>
                    <b-form-radio 
                        class="preset-radio" 
                        v-model="localSelectedPreset"
                        v-for="(preset, index) in $c_adminPresetsList" 
                        :key="preset.id"
                        :value="preset.name"
                        @change="() => $_changePreset(preset)"
                    >
                        <span :id="`description-${index}`" class="d-flex align-items-center justify-content-between">
                            <p class="preset-name">
                                {{ sliceText(preset.name, 25) }}
                            </p>
                            <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_14164_25327)">
                                  <circle cx="7.99967" cy="7.9987" r="6.66667" stroke="#BBBBBD"/>
                                  <path d="M8 11.332V7.33203" stroke="#BBBBBD" stroke-linecap="round"/>
                                  <circle cx="0.666667" cy="0.666667" r="0.666667" transform="matrix(1 0 0 -1 7.33301 6)" fill="#BBBBBD"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_14164_25327">
                                    <rect width="16" height="16" fill="white"/>
                                  </clipPath>
                                </defs>
                              </svg>
                        </span>
                        <b-popover custom-class="preset-info" container="preset-list" boundary="window" :target="`description-${index}`" triggers="hover" placement="right">
                          <template #title>{{ preset.name }}</template>
                          <p>{{ preset.description }}</p>
                          <ul>
                            <li v-for="(field, i) in preset.fields" :key="i">
                                {{ typeof field.header.content === 'function' ? field.header.content() : field.header.content }}
                            </li>
                          </ul>
                        </b-popover>
                    </b-form-radio>
                </b-dropdown-group>
                <button
                    class="view-more-btn"
                    v-show="!showAllAdminPresets" 
                    @click.prevent="() => $_setShowAllAdminPresets(true)"
                >
                    View Optimizer's custom columns
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/>
                    </svg>
                </button>
            </div>
        </b-dropdown-form>
        <b-dropdown-item-button v-if="showAllAdminPresets || showAllUserPresets" @click="createNewPreset" class="column-settings-btn">
            Create new preset
        </b-dropdown-item-button>
        <b-dropdown-item-button v-else class="column-settings-btn" @click="openSettings">
            Column Settings
        </b-dropdown-item-button>
    </b-dropdown>
</template>

<script>
export default {
    name: 'PresetDropdown',
    props: {
        sliceText: { type: Function, default: () => [] },
        hasAdminPresets: { type: Boolean },
        hasUserPresets: { type: Boolean },
        presetList: { type: Object },
        openColumnSettings: { type: Function, default: () => [] },
        selectedPreset: { type: Object },
        savePreset: { type: Function, default: () => [] },
        deletePreset: { type: Function, default: () => [] },
        changePreset: { type: Function, default: () => [] },
        createPreset: { type: Function, default: () => [] },
        saveSettingsLoading: { type: Boolean },
    },
    data() {
        return {
            showAllUserPresets: false,
            showAllAdminPresets: false,
            presetLoader: false,
            localSelectedPreset: this.selectedPreset.name,
            newPresetName: "",
            localPresetList: this.presetList,
        }
    },
    computed: {
        $c_userPresetsList() {
            if (this.showAllUserPresets) {
                return this.localPresetList.user_presets;
            }
            return this.localPresetList.user_presets.slice(0, 3);
        },
        $c_adminPresetsList() {
            if (this.showAllAdminPresets) {
                return this.localPresetList.admin_presets;
            }
            return this.localPresetList.admin_presets.slice(0, 2);
        },
        $c_disableSavePresetButton() {
            return !this.newPresetName.length;
        },
        $c_hasUserPresets() {
            return this.localPresetList?.user_presets?.length > 0;
        },
        $c_hasAdminPresets() {
            return this.localPresetList?.admin_presets?.length > 0;
        },
        $c_isAdminPreset() {
          return this.selectedPreset?.isAdmin;
        },
        $c_atLeastOneUserPreset() {
            return this.localPresetList?.user_presets?.length === 1;
        },
    },
    watch: {
        selectedPreset: {
            handler(newValue) {
                this.localSelectedPreset = newValue?.name;
            },
            deep: true,
        },
        presetList: {
            handler(newValue) {
                this.localPresetList = newValue;
            },
            deep: true,
        }
    },
    methods: {
        $_setShowAllUserPresets(value) {
            this.showAllUserPresets = value;
        },
        $_setShowAllAdminPresets(value) {
            this.showAllAdminPresets = value;
        },
        async $_closeModal(refName) {
          const ref = this.$refs[refName];
          if (ref) {
            if (ref?.length) {
                ref?.[0]?.hide();
            } else {
                ref?.hide();
            }
          }
        },
        async $_deletePreset(preset, refName) {
            this.presetLoader = true;
            await this.deletePreset(preset);
            this.presetLoader = false;  
            this.$_closeModal(refName);
        },
        async $_savePreset(preset, refName) {
            this.presetLoader = true;
            await this.savePreset(preset)
            this.presetLoader = false;
            this.$_closeModal(refName);
        },
        async $_changePreset(preset) {
            this.changePreset(preset);
            this.$refs.presetDropdown.hide(true);
        },
        openSettings() {
          if (this.$c_isAdminPreset) {
            this.createPreset(this.localSelectedPreset);
          } else {
            this.openColumnSettings();
          }
        },
        createNewPreset() {
          this.createPreset(this.localSelectedPreset);
        }
    }
}
</script>

<style lang="scss">
.dropdown-menu {
    width: 320px;
    padding: .5rem 0 .5rem .8rem;
    transform: translate3d(-155px, 38px, 0px);

    .preset-wrapper {
      .b-dropdown-form {
        padding: 0;

        .preset-list {
            max-height: 500px;
            overflow-y: auto;
            .preset-radio {
              .custom-control-label {
                &::after,
                &::before {
                  width: 20px !important;
                  height: 20px !important;
                }
              }
              .preset-name {
                margin: 0;
                padding: 0;
              }
            }
        }

        
      }
      
      .dropdown-header {
        padding: 0rem;
        font-size: 13px;
        text-transform: uppercase;
        color: #ABABAB;
        margin: 7px 0;
        display: flex;
        align-items: center;
        gap: 6px;
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
        }
        .custom-control {
          padding: 0;
          margin-bottom: 7px;
        }
        .custom-radio {
          padding: 10px 28px;
          .delete-preset-btn {
            background-color: transparent;
            border: none;
            margin-right: -20px;
            opacity: 0;

            &:disabled {
              cursor: not-allowed;
              opacity: 0.5;
            }
          }

          &:has(input:checked) {
            background-color: #F2F2FA;
            border-radius: 5px;
          }
          &:hover { 
            background-color: #F2F3F5;
            border-radius: 5px;
            .delete-preset-btn {
              opacity: 1;
            }
          }

          .custom-control-input:checked,
          .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #4158D0 !important;
            border-color: #4158D0 !important;
          }

          
          .custom-control-label {
            padding-left: 5px;

            .preset-description {
              font-size: 13px;
              color: #ABABAB;
            }

            &::after,
            &::before {
              width: 15px;
              height: 15px;
            }
          }
        }
      }
    }
    button[type = "button"] {
      color: #4158D0;
      border: 1.4px solid #4158D0;
      padding: 3px 2px;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 5px;

      &:hover {
        background-color: white;
      }
    }
    .view-more-btn {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 1rem 0rem;
        padding: 0 1rem;
        color: #4158D0;
        font-size: 15px;
    }
    .dropdown-back-btn {
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
    }
  }
  .delete-preset-content {
    .delete-preset-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      button {
        background-color: transparent;
        border: none;
        margin-top: -.3rem;
      }
    }
    .modal-body {
      h5 {
        white-space: nowrap;
        font-weight: 700;
      }

      p {
        font-size: 14px;
        margin: 1rem;
        color: #636364;
      }
  
      span {
        display: flex;
        justify-content: flex-end;
        gap: 6px;
  
        button {
          border-color: transparent;
          border-radius: 6px;
          padding: 4px 7px;
  
          &:first-child {
            background-color: #ABABAB;
            color: white;
          }
          &:last-child {
            border: 1px solid #DC421F;
            color: #DC421F;
            background-color: transparent;
            display: flex;
            align-items: center;
            gap: 4px;
          }
        }
      }
    }
}
.preset-info {
  overflow: hidden;
  .popover-header {
    background-color: white;
    border: none;
  }
  .popover-body {
    ul {
      margin: 0;
    }
    max-height: 300px;
    overflow-y: auto;
  }
}
.preset-name {
  .popover-body {
    margin: 1rem;
    padding: 0;
    p {
      margin: 0 !important;
    }
  }
}
</style>
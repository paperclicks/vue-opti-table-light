<template>
    <div class="subuser-columns-container">
        <div class="subuser-columns-info">
            <i class="fa fa-star" style="color: #4158D0" aria-hidden="true"></i>
            <p>Note this column preset can be public to all subusers if you enable the settings below.</p>
        </div>
        <div class="subuser-columns-switch">
            <b-form-checkbox v-model="switchValue" @change="$_switchPresetAccess" name="check-button" switch />
            <p>
                Set to Public 
                <i v-b-tooltip.hover title="By setting this column preset to public it will be visible to all subusers. However, subusers will only have read-only access to columns marked as public." class="fa fa-info-circle" aria-hidden="true"></i>
            </p> 
        </div>
    </div>
</template>

<script>

export default {
    name: 'SubuserColumnAccess',
    props: {
        switchPresetAccess: { type: Function, required: true },
        selectedPreset: { type: Object, required: true },
        presetEnabled: { type: Boolean, required: true },
    },
    data() {
        return {
            switchValue: this.selectedPreset?.isPublic || false,
        }
    },
    watch: {
        selectedPreset: {
            handler(newValue) {
                this.switchValue = newValue.isPublic;
            },
            deep: true,
        },
        presetEnabled: {
            handler(newValue) {
                if (newValue) {
                    this.switchValue = false;
                }
            },
        },
    },
    methods: {
        async $_switchPresetAccess(value) {
            const mode = this.presetEnabled ? 'newPreset' : 'currentPreset';
            await this.switchPresetAccess(value, mode);
        }
    }
}
</script>

<style lang="scss">
.subuser-columns-container {
    border-left: 4px solid #4158D0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px, rgba(0, 0, 0, 0.1) 0px 0px 1px;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;
    border-radius: 5px;
    padding-bottom: 0;
    position: relative;

    .subuser-columns-info {
        display: flex;
        align-items: baseline;
        gap: .5rem;
        p {
            font-size: 14px;
        }
    }

    .subuser-columns-switch {
        display: flex;
        align-items: baseline;
        line-height: 21px;
        p {
            font-size: 14px;
            font-weight: 700;
        }
        .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #4158D0;
            border-color: #4158D0;
        }
    }
}
</style>
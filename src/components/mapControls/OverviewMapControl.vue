<template lang="">
<div>
    <slot></slot>
</div>
</template>

<script>
import {
    OverviewMap
} from 'ol/control';
import useControl from '@/composables/useControl'
import {
    provide,
    inject,
    onMounted,
    onUnmounted
} from 'vue'
export default {
    name: 'ol-overviewmap-control',
    setup(props) {

        const map = inject('map');

        const {
            control
        } = useControl(OverviewMap, props);

        onMounted(() => {
            control.value.setMap(map);
        });

        onUnmounted(() => {
            control.value.setMap(null);
        });

        provide("overviewMap", control)

        return {
            control,
        }

    },
    props: {
        className: {
            type: String,
            default: 'ol-overviewmap'
        },
        collapsed: {
            type: Boolean,
            default: true
        },
        collapseLabel: {
            type: String,
            default: '«'
        },
        collapsible: {
            type: Boolean,
            default: true
        },
        label: {
            type: String,
            default: '»'
        },
        render: {
            type: Function,
        },
        rotateWithView: {
            type: Boolean,
            default: false
        },
        target: {
            type: HTMLElement,
        },

        tipLabel: {
            type: String,
            default: 'Overview map'
        },
    }
}
</script>

<style lang="">

</style>

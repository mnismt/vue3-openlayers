<template lang="">
<div v-if="false">

</div>
</template>

<script>

import {
    MousePosition
} from 'ol/control';
import useControl from '@/composables/useControl'

export default {
    name: 'ol-mouseposition-control',
    setup(props) {
        const {
            control
        } = useControl(MousePosition, props);
        return {
            control
        }
    },
    props: {
        className: {
            type: String,
            default: 'ol-mouse-position'
        },
        coordinateFormat: {
            type: String,
        },
        projection: {
            type: String,
        },
        render: {
            type: Function,
        },
        target: {
            type: HTMLElement,
        },
        undefinedHTML: {
            type: String,
            default: '&#160;'
        }
    }
}
</script>

<style lang="">

</style>

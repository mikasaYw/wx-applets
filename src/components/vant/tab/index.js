import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'tabs',
        type: 'ancestor'
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String,
        icon: null,
        price: null,
    },
    data: {
        width: null,
        inited: false,
        active: false,
        animated: false
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update',
        icon: 'update'
    },
    methods: {
        update() {
            const parent = this.getRelationNodes('../tabs/index')[0];
            if (parent) {
                parent.updateTabs();
            }
        }
    }
});

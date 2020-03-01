<template>
    <section class="container">
        <aside class="row justify-content-end">
            <div class="col-12">
                <button type="button" class="btn btn-default" v-on:click="edit()">
                    <font-awesome-icon class="icon" :icon="['fas', 'edit']"/>
                </button>
                <button type="button" class="btn btn-default" v-on:click="save">
                    <font-awesome-icon class="icon" :icon="['fas', 'save']"/>
                </button>
            </div>
        </aside>
        <PortfolioFormItem v-for="item in form" :key="item.id" :formItem="item" :editable="editable"/>
    </section>
</template>

<script>
import PortfolioFormItem from './portfolioFormItem';

export default {
    props: {
        // formName: {
        //     type: String,far fa-save
        // },
        form: {
            type: Array,
        }
    },
    components: { 
        PortfolioFormItem
    },
    data() {
        return {
            idsToDelete: [],
            editable: false,
        }
    },
    methods: {
        addNewItem(){
            // pop a modal maybe.
            //TODO write to js form 
            // 
        },
        edit(){
            console.log('edit clicked')
            this.editable = !this.editable;
        },
        importImage() {

        },
        delete(id) {
            this.idsToDelete.push(id);
        },
        save() {
            // prompt 'are you sure'
        }
    }
    
}
</script>

<style lang="scss">
    .icon{
        font-size: 1.5rem;
    }
</style>
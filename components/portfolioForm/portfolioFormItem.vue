<template>
    <section class="row form-item">
        <!-- Custom class, title, description -->
        <div class="col-5">
            <label for="title">Title</label>
            <input type="text" class="form-control" placeholder="Title" v-model="title" :disabled="editable">
        </div>
        <div class="col-5">
            <label for="description">Description</label>
            <input type="text" class="form-control" placeholder="Description" v-model="description" :disabled="editable">
        </div>
        <div class="col-2 text-center icons">
            <button type="button" class="btn btn-default">
                <font-awesome-icon class="icon" :icon="['fas', 'trash']"/>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        formItem: {
            type: Object
        },
        editable: {
            type: Boolean
        }
    },
    data() {
        return {
            title: '',
            description: ''
        }
    },
    mounted() {
        if (this.formItem) {
            this.title = this.formItem.title;
            this.description = this.formItem.description;
        }
        
    }
}
</script>

<style lang="scss">
    .form-item {
        padding-bottom: 2rem;

        .icons {
            padding-top: 2rem;

            .icon{
                font-size: 1.5rem;
            }

        }
    }
</style>
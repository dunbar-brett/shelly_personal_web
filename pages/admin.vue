<template>
  <main class="container admin-page">
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Oil" active>
                    <PortolioForm :form='oilForm'/> 
                </b-tab>
                <b-tab title="Watercolor">
                    <PortolioForm  :form='watercolorForm'/> 
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
        <!-- <h1>Admin</h1> -->
        <!-- <h2 class="text-center" v-show="!selection">
            Which Page would you like to edit?
        </h2> -->
        <!-- <div class="text-center">
            <button class="btn btn-primary" v-on:click.prevent="formSelection('Oil')">
                Oil
            </button>
            <button class="btn btn-primary" v-on:click.prevent="formSelection('Watercolor')">
                Watercolor
            </button>
        </div>
        <PortolioForm v-show="selection" :formName='selection'
        :form='currentForm'/>  -->
  </main>
</template>

<script>
import PortolioForm from '../components/portfolioForm/portfolioForm'
import * as OilForm from '../static/portfolio/oils/oil-paintings'
import * as WatercolorForm from '../static/portfolio/watercolor/watercolors'

export default {
    layout: 'admin',
    components: {
        PortolioForm
    },
    data() {
        return {
            selection: 'Oil',
            currentForm: [],
            oilForm: OilForm.oils,
            watercolorForm: WatercolorForm.watercolors
        }
    },
    mounted() {
        this.formSelection(this.selection);
    },
    methods: {
        formSelection(formName) {
            //console.log(`form selection clicked: ${formName}`);
            this.selection = formName;

            if (formName === 'Oil') {
                this.currentForm = this.oilForm;
            } else if (formName === 'Watercolor') {
                this.currentForm = this.watercolorForm;
            }
            //console.log(this.currentForm)
        }
    },
    // beforeRouteEnter(to) {
    //     // routeguard on production
    // }

}
</script>

<style lang="scss">
    .admin-page {
        padding-bottom: 5rem;
    }
</style>
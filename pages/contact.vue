<template>
    <div class="sw-contact container">
        <section class="contact-header">
            <h1 class="text-center">Contact</h1>
        </section>
        <form class="form-wrapper container">
            <div class="form-row sw-row">
                <input class="col-sm-12 form-control" type="text" 
                    name="name" v-model="name" placeholder="Name">
                <small class="error-text">
                    <span v-show="errorState && !isNameValid">Please enter a name.</span>
                </small>
            </div>
            <div class="form-row sw-row">
                <input class="col-sm-12 form-control" type="text" name="email" 
                    v-model="email" placeholder="Email">
                <small class="error-text">
                    <span v-show="errorState && !isEmailValid">Please enter a valid email.</span>
                </small>
            </div>
            <div class="form-row sw-row sw-message-row">
                <textarea class="col-sm-12 form-control text-area" type="textarea" name="textarea" 
                    v-model="message.text" placeholder="Drop a line..." :maxlength="message.maxlength">
                </textarea>
                <small class="error-text">
                    <span v-show="errorState && !isMessageValid">A message to send is required.</span>
                </small>
            </div>
            <div class="form-row sw-submit">
                <button type="submit" class="btn btn-primary sw-btn" @click.prevent="submit">Submit</button>
            </div>
        </form>
        <!-- <pre><code>{{ $data }}</code></pre> -->
    </div>
</template>

<script>
// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
// var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
    layout: 'default',
    data() {
        return {
            name: '',
            email: '',
            message: 
            {
                text: '',
                maxLength: 500,
            },
            errorState: false,
            submitted: false,
        }
    },
    computed: {
        isNameValid() {
            return this.name !== '';
        },
        isEmailValid() {
            return emailRegExp.test(this.email);
        },
        isMessageValid() {
            return this.message.text !== '';
        },
        isFormValid(){
            return this.isEmailValid && this.isNameValid && this.isMessageValid;
        }
    },
    methods: {
        submit() {
            this.submitted = true;
            if (!this.isFormValid) {
                this.errorState = true;
            }
            console.log("submit clicked");
        }
    }
}
</script>

<style lang='scss'>
.sw-contact {
    .contact-header {
        padding-bottom: 2rem;
    }

    .form-wrapper {
        @include tablet-up {
            max-width: 34vh;
        }

        .text-area {
            resize: none;
        }

        .sw-row {
            height: 4rem;
            max-height: 5rem;
            &.sw-message-row {
                height: 6rem;
                max-height: 6rem;

                .text-area {
                    height: 5rem;
                }
            }
        }

        .sw-btn {
            width: 100%;
            background-color: $sw-light-blue;
            border-color: $sw-light-blue;
            color: black;
        }

        .sw-submit {
            padding-top: 2rem;
        }

        .error-text {
            color: red;
            min-height: 2rem;
            //padding-left: 0.5rem;
        }
    }
}
</style>

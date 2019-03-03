<template>
    <div class="login">
        <section class="hero is-info is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <div class="column is-three-quarters is-offset-2">
                            <form @submit.prevent="loginForm">
                                <div class="field">
                                    <p class="control is-expanded">
                                        <input class="input" type="text" placeholder="Username" name="frmUsername"
                                               v-model="frmUsername">
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control is-expanded">
                                        <input class="input" type="password" placeholder="Password" name="frmPassword"
                                               v-model="frmPassword">
                                    </p>
                                </div>
                                <div class="field ">
                                    <p class="control is-expanded has-text-centered">
                                        <button class="button is-success" type="submit">Login</button>
                                    </p>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Footer from '@/components/Footer.vue'; // @ is an alias to /src

    @Component({
        components: {
            Footer,
        },
    })
    export default class Home extends Vue {
        frmUsername: string = '';
        frmPassword: string = '';


        loginForm() {
            console.log(`\nUsername: ${this.frmUsername}\nPassword: ${this.frmPassword}`)
        }
    }
</script>

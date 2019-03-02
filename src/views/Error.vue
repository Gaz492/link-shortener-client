<template>
    <div class="home">
        <section class="hero is-info is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3" id="app">
                        <h1 class="title">
                            <span>Wuffs<small>.dev</small></span>
                        </h1>
                        <h2 class="subtitle">Oops, something's wrong...</h2>
                        <h2 class="subtitle">We were unable to find the URL you clicked, it may have been deleted or
                            never existed</h2>
                        <Shorten/>
                    </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Shorten from '@/components/Shorten.vue'; // @ is an alias to /src
    import Footer from '@/components/Footer.vue'; // @ is an alias to /src

    @Component({
        components: {
            Shorten,
            Footer,
        },
    })
    export default class Home extends Vue {
    }
</script>

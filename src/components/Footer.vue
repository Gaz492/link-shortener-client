<template>
    <div class="shorten">
        <footer class="footer has-background-info">
            <div class="content has-text-centered ">
                <p class="has-text-light">
                    <i class="far fa-copyright"></i> 2019 <strong class="has-text-light">Wuffs</strong>.dev
                </p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Footer extends Vue {
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        z-index: 30;
        padding-bottom: 2rem;
    }
</style>

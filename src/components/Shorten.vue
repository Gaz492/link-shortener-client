<template>
    <div class="shorten">
        <div class="box" v-if="showShortenedURL">Shortened URL: <input class="input" type="text"
                                                                       onClick="this.select();"
                                                                       readonly :value="baseURL + shortenData.urlCode">
        </div>
        <div class="box">
            <form @submit.prevent="shortenForm">
                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input" type="url" placeholder="Enter a URL to shorten" name="url" v-model="url">
                    </p>
                    <p class="control">
                        <button class="button is-info" type="submit">Shorten!</button>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import axios from 'axios';

    const domain = document.URL;

    @Component
    export default class Shorten extends Vue {
        url:string = '';
        baseURL:string = `${domain.substring(0, domain.lastIndexOf('/')).replace('#', '')}/`;
        showShortenedURL:boolean = false;
        shortenData:object = {};


        shortenForm () {
            const self = this;
            console.log(`${this.url} submitted`);
            axios.post('/api/shorten', {
                originalURL: this.url
            }).then(function (res) {
                console.log(res.data);
                self.shortenData = res.data;
                self.showShortenedURL = true;
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

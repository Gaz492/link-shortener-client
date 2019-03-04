<template>
    <div class="shorten">
        <div class="notification is-danger" v-if="errors.length">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
        <div class="box" v-if="showShortenedURL">Shortened URL: <input class="input" type="text"
                                                                       onClick="this.select();"
                                                                       readonly :value="baseURL + shortenData.urlCode">
        </div>
        <div class="box">
            <form @submit.prevent="shortenForm" novalidate="true">
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
    import validURL from 'valid-url';

    const domain = document.URL;

    @Component
    export default class Shorten extends Vue {
        url: string = '';
        // baseURL:string = `${domain.substring(0, domain.lastIndexOf('/')).replace('#', '')}`;
        baseURL: string = `https://wuffs.dev/`;
        showShortenedURL: boolean = false;
        shortenData: object = {};
        errors: any = [];

        checkForm() {
            this.errors = [];
            let hasErrors = false;
            if (!this.url) {
                this.errors.push("URL Required");
                hasErrors = true;
            }
            if (!validURL.isWebUri(this.url)) {
                this.errors.push("You must enter a valid URL");
                hasErrors = true;
            }

            if (/^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?wuffs\.dev.*$/.test(this.url)) {
                this.errors.push("You cannot shorten this domain");
                hasErrors = true;
            }

            return hasErrors;
        }

        shortenForm() {
            if (this.checkForm()) return;
            const self = this;
            console.log(`${this.url} submitted`);
            axios({
                method: 'post',
                url: '/api/shorten',
                validateStatus: () => {
                    return true;
                },
                data: {
                    originalURL: this.url
                }
            }).then(function (res) {
                if (res.status != 200) {
                    self.errors.push(res.data.error);
                    return;
                }
                self.shortenData = res.data;
                self.showShortenedURL = true;
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

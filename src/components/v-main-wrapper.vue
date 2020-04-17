<template>
    <div class="v-main-wrapper">

        <v-catalog />
        <v-cart 
        v-if="CART.length"
        :cart_data="CART"
        />
    </div>
</template>

<script>
    import vCatalog from './v-catalog'
    import vCart from './v-cart'

    export default {
        name: 'v-main-wrapper',
        components: {
           vCatalog,
           vCart
        },
        props: {

        },
        data() {
            return {
                title: 'Main wrapper'
            }
        },
        computed: {

        },
        methods: {

        },
        watch: {},
        mounted() {
            console.log('Hello world')
        }
    }
</script>

<style>
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto; 
    }
</style>
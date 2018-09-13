<template>
    <div class="login">
        <md-field>
            <md-icon>person</md-icon>
            <label>Name</label>
            <md-input></md-input>
        </md-field>
        <md-field>
            <md-icon>mail</md-icon>
            <label>Email</label>
            <md-input></md-input>
        </md-field>
        <md-field>
            <md-icon>lock</md-icon>
            <label>Password</label>
            <md-input></md-input>
        </md-field>
        <md-field>
            <md-icon>lock</md-icon>
            <label>Confirm Password</label>
            <md-input></md-input>
        </md-field>
        <md-button v-on:click="signUp()">Sign Up</md-button>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'sign-up',
        components: {},
        methods: {
            signUp: function () {
                this.$router.push('/login');
            }
        }
    }
</script>

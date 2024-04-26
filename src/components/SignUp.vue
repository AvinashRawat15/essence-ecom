<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar color="indigo" dark>
                        <v-toolbar-title>Sign Up</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form class="form" v-model="valid" @submit.prevent="signUp">
                            <v-text-field v-model="name" label="Enter Name" required></v-text-field>
                            <v-text-field v-model="email" label="Enter Email" required></v-text-field>
                            <v-text-field v-model="password" label="Enter Password" type="password" required></v-text-field>
                            <v-text-field v-model="role" label="Enter Role" required></v-text-field>
                            <v-btn class="mb-2" type="submit" color="primary" block>Sign Up</v-btn>
                            <p class="text-center">Already a User? <router-link to="/login">Login</router-link></p>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            valid: true,
            name: '',
            email: '',
            password: '',
            role: '',
        };
    },
    methods: {
        async signUp() {
            let obj = {
                email: this.email,
                password: this.password,
                name: this.name,
                role: this.role,
            }
            console.log('obj ====== ', obj);
            try {
                let result = await axios.post("http://localhost:3000/users", obj);
                console.log('result ====== ', result);
                if (result.status === 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data))
                    this.$router.push({ name: 'HomePage' })
                }
            } catch (error) {
                console.error('Error during registration: ', error);
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user.info');
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
};
</script>

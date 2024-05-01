<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-sheet elevation="12" rounded="lg">
                            <v-toolbar color="#6363c5" dark>
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <span>Reset Password</span>
                                </v-tooltip>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit.prevent="login">
                                    <v-text-field density="compact" label="Email address" required v-model="email"
                                        prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
                                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                        :type="visible ? 'text' : 'password'" density="compact" label="Enter your password"
                                        required prepend-inner-icon="mdi-lock-outline" v-model="password" variant="outlined"
                                        @click:append-inner="visible = !visible"></v-text-field>
                                    <p class="text-caption text-decoration-none text-blue">Forgot Password?
                                    </p>

                                    <v-checkbox color="primary" model="rememberMe" label="Remember Me"></v-checkbox>
                                    <!-- <template v-slot:activator="{ props }"> -->
                                    <v-row justify="center">
                                        <v-btn class="mb-4" :disabled="!email || !password" type="submit" color="primary"
                                            rounded>Login</v-btn>
                                    </v-row>

                                    <p>Not a User?
                                        <router-link to="/SignUp">Sign Up</router-link>
                                    </p>
                                </v-form>

                                <v-snackbar :timeout="1000" v-model="showSnackbar">
                                    Login Successful
                                </v-snackbar>
                                <!-- </template> -->
                            </v-card-text>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Login',

    data() {
        return {
            visible: false,
            rememberMe: localStorage.getItem('rememberMe') === 'true',
            email: '',
            password: '',
            showSnackbar: false,
        };
    },

    methods: {
        async login() {
            try {
                let userObj = {
                    email: this.email,
                    password: this.password,
                }
                const response = await axios.get('http://localhost:3000/users', {
                    params: userObj,
                });

                // console.log('response ----------------------  ', response);

                if (response.data.length > 0) {
                    let userData = response.data[0] // Store user credentials in localStorage
                    localStorage.setItem('userCredentials', JSON.stringify({ ...userData }));
                    this.showSnackbar=true; //show Snackbar
                    this.$router.push({ name: 'HomePage' });
                } else {
                    alert('Invalid email or password');
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        },

        submitForm() {
            // Save the checkbox value to localStorage
            if (this.rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            } else {
                localStorage.removeItem('rememberMe');
            }
        },
    },
};
</script>

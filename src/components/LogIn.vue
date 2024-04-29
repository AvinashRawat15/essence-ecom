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
                                    <v-text-field density="compact" placeholder="Email address"
                                        prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
                                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                        :type="visible ? 'text' : 'password'" density="compact"
                                        placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
                                        variant="outlined" @click:append-inner="visible = !visible"></v-text-field>
                                    <p class="text-caption text-decoration-none text-blue">Forgot Password?
                                        <!-- <router-link to="/SignUp">Sign Up</router-link> -->
                                    </p>

                                    <!-- <v-text-field v-model="email" label="Email" name="email" prepend-icon="mdi-account"
                                        type="text" required></v-text-field>
                                    <v-text-field v-model="password" label="Password" name="password"
                                        prepend-icon="mdi-lock" type="password" required></v-text-field> -->
                                    <v-checkbox color="primary" model="rememberMe" label="Remember Me"></v-checkbox>
                                    <v-snackbar :timeout="1000">
                                        <template v-slot:activator="{ props }">
                                            <v-btn class="mb-4" v-bind="props" type="submit" color="primary"
                                                rounded>Login</v-btn>
                                        </template>
                                        Login Successful
                                    </v-snackbar>

                                    <p>Not a User?
                                        <router-link to="/SignUp">Sign Up</router-link>
                                    </p>
                                </v-form>
                            </v-card-text>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<!-- 
<script>
import axios from 'axios';

export default {
    // component:'login',
    data() {
        return {
            // visible: false,
            // rememberMe: false,
            rememberMe: localStorage.getItem('rememberMe') === 'true',
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.get('http://localhost:3000/users', {
                    params: {
                        email: this.email,
                        password: this.password,
                    },
                });
                if (response.data.length > 0) {
                    alert('Login successful');
                    this.$router.push({ name: 'HomePage' })
                } else {
                    alert('Invalid email or password');
                }
            } catch (error) {
                console.error(error);
            }
        },
        isUserAuthenticated() {
            // const user = localStorage.getItem('user.info');
            // if (user) {
            //     this.$router.push({ name: 'HomePage' })
            // }
            const username = document.getElementById('uname').value;
            const password = document.getElementById('psw').value;

            // Store all users' credentials in localStorage
            localStorage.setItem('all_users', JSON.stringify(a));

            sessionStorage.setItem('current_user', JSON.stringify({ name: username, password: password }));
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
    mounted() {
        this.isUserAuthenticated()
    },
}
};
</script> -->
  
<script>
import axios from 'axios';

export default {
    // name: 'Login',

    data() {
        return {
            rememberMe: localStorage.getItem('rememberMe') === 'true',
            email: '',
            password: '',
        };
    },

    methods: {
        async login() {
            try {
                const response = await axios.get('http://localhost:3000/users', {
                    params: {
                        email: this.email,
                        password: this.password,
                    },
                });

                if (response.data.length > 0) {
                    alert('Login successful');
                    // Store user credentials in localStorage
                    localStorage.setItem('userCredentials', JSON.stringify({ email: this.email, password: this.password }));
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
  
<template>
    <v-tooltip text="profile" location="bottom">
        <template v-if="user">
            <v-container style="height: 300px" fluid>
                <v-row justify="center">
                    <v-menu min-width="200px" rounded>
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props">
                                <v-avatar color="red" size="large">
                                    <span class="text-h5">{{ user.initials }}</span>
                                </v-avatar>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-text>
                                <div class="mx-auto text-center">
                                    <v-avatar color="red">
                                        <span class="text-h5">{{ user.initials }}</span>
                                    </v-avatar>
                                    <h3>{{ user.fullName }}</h3>
                                    <p class="text-caption mt-1">
                                        {{ user.email }}
                                    </p>
                                    <v-divider class="my-3"></v-divider>
                                    <v-btn variant="text" rounded>
                                        Edit Account
                                    </v-btn>
                                    <v-divider class="my-3"></v-divider>
                                    <v-btn variant="text" rounded>
                                        Log Out
                                    </v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                </v-row>
            </v-container>
        </template>
    </v-tooltip>
</template>


<script>
export default {
    name:'profile',
    props: {
        user: Object,
    },
    methods: {
        logout() {
            this.$emit('logout');
        },
    },
};
</script>
<template>
    <v-footer dark>
        <v-container>
            <v-row class="py-16">
                <v-col cols="12" sm="6" lg="3">
                    <img src="../../static/vuemmerce-logo.png" class="mr-5 h-6 sm:h-9" alt="logo" />
                    <p class="max-w-xs mt-4 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
                    </p>
                    <v-row class="mt-8" align="center">
                        <v-col v-for="(social, index) in socialMedia" :key="index" class="text-gray-600">
                            <a :href="social.link" target="_blank" rel="noreferrer">
                                <v-icon>{{ social.icon }}</v-icon>
                            </a>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="6" lg="9">
                    <v-row>
                        <v-col cols="12" md="6" lg="3">
                            <p class="font-medium">Company</p>
                            <v-list dense>
                                <v-list-item v-for="(item, index) in companyLinks" :key="index">
                                    <router-link :to="item.link">{{ item.title }}</router-link>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="6" lg="3">
                            <p class="font-medium">Services</p>
                            <v-list dense>
                                <v-list-item v-for="(item, index) in servicesLinks" :key="index" link :to="item.link">
                                    {{ item.title }}
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="6" lg="3">
                            <p class="font-medium">Helpful Links</p>
                            <v-list dense>
                                <v-list-item v-for="(item, index) in helpfulLinks" :key="index" link :to="item.link">
                                    {{ item.title }}
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" md="6" lg="3">
                            <p class="font-medium">Legal</p>
                            <v-list dense>
                                <v-list-item v-for="(item, index) in legalLinks" :key="index" link :to="item.link">
                                    {{ item.title }}
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <p class="mt-8 text-xs text-gray-800">
                © 2024 Essence
            </p>
        </v-container>
    </v-footer>
</template>
  
<script>
export default {
    name: 'FooterView',
    data() {
        return {
            socialMedia: [
                { icon: 'mdi-facebook', link: 'https://www.facebook.com/' },
                { icon: 'mdi-instagram', link: 'https://www.instagram.com/' },
                { icon: 'mdi-twitter', link: 'https://twitter.com/' }
            ],
            companyLinks: [
                { title: 'About', link: '/about' },
                { title: 'Meet the Team', link: '#' },
                { title: 'History', link: '#' },
                { title: 'Careers', link: '#' }
            ],
            servicesLinks: [
                { title: '1on1 Coaching', link: '#' },
                { title: 'Company Review', link: '#' },
                { title: 'Accounts Review', link: '#' },
                { title: 'HR Consulting', link: '#' },
                { title: 'SEO Optimisation', link: '#' }
            ],
            helpfulLinks: [
                { title: 'Contact', link: '#' },
                { title: 'FAQs', link: '#' },
                { title: 'Live Chat', link: '#' }
            ],
            legalLinks: [
                { title: 'Privacy Policy', link: '#' },
                { title: 'Terms & Conditions', link: '#' },
                { title: 'Returns Policy', link: '#' },
                { title: 'Accessibility', link: '#' }
            ]
        };
    }
}
</script>
  
<style scoped>
/* Add custom styles here */
</style>
  
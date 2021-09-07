import defaultMeta from './config/defaultMeta'
import sitemapConfig from './config/sitemapConfig'
/*
 ** Axios Instance
 */
const AxiosInstance = {
	baseURL: process.env.BASE_URL,
	withCredentials: false,
	retry: true,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
}

export default {
	target: 'server',
	// Duplicate .env
	env: {
		BASE_URL: process.env.BASE_URL,
		API_URL: process.env.API_URL,
		RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
		GTAG_ID: process.env.GTAG_ID
	},
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Suit baze Documentation',
		meta: defaultMeta,
		link: [
			{ rel: 'apple-touch-icon', href: '/apple-icon.png' },
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
		]
	},

	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				return ['script', 'style', 'font'].includes(type)
			}
		}
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/scss/main.scss'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		{ src: './plugins/vue-slick-carousel.js' },
		{ src: '~/plugins/helpers.js' },
		{ src: '~/plugins/vuelidate' }
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth',
		'@nuxtjs/style-resources',
		['nuxt-lazy-load', { directiveOnly: true }],
		'@nuxtjs/sitemap'
	],
	sitemap: sitemapConfig,

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		proxy: true,
		AxiosInstance
	},

	privateRuntimeConfig: {
		axios: {
			baseURL: process.env.BASE_URL
		}
	},
	proxy: {
		'/api': {
			target: process.env.API_URL,
			pathRewrite: { '^/api/': '' },
			changeOrigin: true,
			onProxyReq(request) {
				request.setHeader('origin', process.env.API_URL)
			}
		}
	},

	// AUTH
	auth: {
		strategies: {
			local: {
				endpoints: {
					login: { url: '/auth/login', method: 'post' },
					logout: { url: '/auth/logout', method: 'post' },
					user: {
						url: '/current-user/profile',
						method: 'get',
						propertyName: false
					}
				},
				tokenType: 'Bearer'
			},
			google: {
				client_id: process.env.GOOGLE_CLIENT_ID,
				redirect_uri: process.env.GOOGLE_REDIRECT_URI
			}
		}
	},

	styleResources: {
		scss: ['./assets/scss/partials/_variables.scss']
	},

	router: {
		middleware: ['redirection']
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		extend(config, ctx) {},
		postcss: {
			preset: {
				autoprefixer: {
					overrideBrowserslist: ['last 2 versions']
				}
			}
		}
	}
}

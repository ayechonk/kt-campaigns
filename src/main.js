import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown, faPlus, faSave } from '@fortawesome/free-solid-svg-icons'
import { createRouter, createWebHistory } from 'vue-router'

import DataSlates from './components/DataSlates.vue'
import EditCampaign from './views/EditCampaign.vue'
import CampaignForm from './components/CampaignForm.vue'
import CampaignOperatives from './components/CampaignOperatives.vue'
import OperativeSingle from './views/OperativeSingle.vue'

const routes = [
	{ path: '/', component: DataSlates },
	{ path: '/new-campaign', component: CampaignForm },
	{ path: '/campaign/:campaignName', name: "campaign", component: EditCampaign, props: true },
	{ path: '/campaign/:campaignName/operatives', name: "campaignOps", component: CampaignOperatives, props: true },
	{ path: '/campaign/:campaignName/operative/:operativeName?', name: "operativeSingle", component: OperativeSingle, props: true },
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})
library.add(faAngleDown, faPlus, faSave)

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.mount('#app')
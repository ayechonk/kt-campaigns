<template>
    <div>
        <OperativeForm :campaignName="campaignName" :currentOperative="operative" @save="saveOperative" :specialisms="getSpecialisms()" :factionId="getKillTeamId()" />
    </div>
</template>
<script>
import store from 'store-js'
import specialisms from "@/assets/ktdata/specialisms.json"

import OperativeForm from "../components/OperativeForm.vue";
export default {
    props: {
        campaignName: String,
        operativeName: String
    },
    data: function () {
        return {
            operative: {}
        }
    },
    components: { OperativeForm },
    methods: {
        getOpearative: function () {
            let operatives = store.get('ops')
            if (!operatives) this.$router.push("/error");
            let currentOperatives = operatives[this.campaignName];
            if (!currentOperatives) this.$router.push("/error")
            return currentOperatives[this.operativeName]
        },
        saveOperative: function (operative) {
            let operatives = store.get('ops')
            if (!operatives) this.$router.push("/error");

            let currentOperatives = operatives[this.campaignName];
            if (!currentOperatives) this.$router.push("/error")

            let key = operative.name;
            if (this.operativeName && currentOperatives[this.operativeName]) {
                delete currentOperatives[this.operativeName]
            }
            currentOperatives[key] = {
                name: operative.name,
                type: operative.type,
                battleHonours: operative.battleHonours,
                battleScars: operative.battleScars,
                notes: operative.notes,
                restedTally: operative.restedTally,
                specialism: operative.specialism,
                experience: operative.experience
            }
            operatives[key] = currentOperatives
            store.set("ops", operatives)
            this.$router.push('/campaign/' + this.campaignName + '/operatives')
        },
        getKillTeamId: function () {
            let campaigns = store.get('campaigns')
            if (!campaigns) this.$router.push('/error')

            let curCampaign = campaigns[this.campaignName]
            if (!curCampaign) this.$router.push('/error')

            return curCampaign.faction;
        },
        getSpecialisms: () => {
            return specialisms
        }
    },
    beforeMount: function () {
        this.operative = this.getOpearative();
    }
}
</script>
<style>
</style>
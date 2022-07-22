<template>
    <div>
        <OperativeForm :campaignName="campaignName" :currentOperative="operative" @save="saveOperative" />
    </div>
</template>
<script>
import store from 'store-js'
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
            currentOperatives[operative.name] = {
                operative: operative.name,
                operativeType: operative.operativeType,
                battleHonours: operative.battleHonours,
                battleScars: operative.battleScars,
                notes: operative.notes,
                restedTally: operative.restedTally,
                specialism: operative.specialism,
                experience: operative.experience
            }
            operatives[this.campaignName] = currentOperatives
            store.set("ops", operatives)
        },
    },
    beforeMount: function () {
        this.operative = this.getOpearative();
    }
}
</script>
<style>
</style>
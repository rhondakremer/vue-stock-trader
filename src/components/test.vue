<template>
    <div>
        <p>Whoohoo we're making this today or probably tomorrow</p>
        <p>{{ getFunLevel }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getFunLevel'
        ])
    }
    
}
</script>
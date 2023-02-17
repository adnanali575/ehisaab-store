<template>
    <div class="cart-content">
        
        <div class="package-section">
            <packages></packages>
        </div>

        <div class="form-section">
            <app-form></app-form>
        </div>

        <tabloid></tabloid>

        

    </div>
</template>


<script>

import packages from '../components/packages.vue'
import form from '../components/form.vue'
import tabloid from '../components/tabloid.vue'

export default{
    components: {
        packages,
        'app-form': form,
        tabloid,
    }
}

</script>


<style scoped>

p, h1{
    color: #000000;
}
.cart-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 100px;
}



/* _______________________________________________________________________________________________ */



</style>
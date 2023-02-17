<template>
    <footer>
        
        <div class="logos">
            <img src="../assets/icons/ehisaab logo.svg" alt="">
            <img src="../assets/icons/pine logo.svg" alt="">
        </div>

        <div class="icons">
            <img src="../assets/icons/search 24px.svg" alt="">
            <img src="../assets/icons/search 24px.svg" alt="">
            <img src="../assets/icons/search 24px.svg" alt="">
        </div>
        
    </footer>
</template>


<style scoped>

footer{
    min-height: 87px;
    background-color: var(--bg-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 165px;
}

.logos, .icons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logos img{
    height: 46px;
    width: auto;
}

.logo{
    width: 200px;
}


.icons{
    width: 185px;
}

.icons img{
    width: 21.86px;
    height: 21.86px;
}

@media (max-width: 980px){

    footer{
        justify-content: center;
    }
    .icons{
        display: none;
    }
}

@media (max-width: 700px){
    footer{
        padding: 0px 30px;
    }
    
    .logos{
        justify-content: center;
    }

    .logos img{
        margin: 20px 0px;
    }
}

</style>
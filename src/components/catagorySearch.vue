<template>
    <div style="height: 41px;" class="search-input catagory-input">

        <input id="src-input" v-on:keypress.enter="searchCategory" v-on:keyup="searchSuggestion" v-model="searchValue"
            v-on:focus="manageList" v-on:focusout="focusOut" type="text" placeholder="Catagories">

        <button v-on:click="searchCategory" class="search-btn"><img src="../assets/icons/search 24px.svg"
                alt=""></button>

        <div v-show="listStatus" class="drop-down">
            <ul>
                <li v-on:click="setSearchValue(index)" class="suggestion" ref="suggestion"
                    v-for="(product, index) in $store.state.categoryList" :key="index">{{ product }}
                </li>
            </ul>

        </div>

    </div>
</template>

<script>

export default {
    components: {
        // $store.state.categoryList
    },
    props: {
    },
    data() {
        return {
            category: '',
            listStatus: false,
            searchValue: '',
            arr: ['This', 'That']
        }
    },
    computed: {
        categoryList() {
            // return this.;
        }
    },
    methods: {
        searchCategory: function () {

            if (this.searchValue) {
                this.$store.state.productPreLoader = !this.$store.state.productPreLoader
                this.$store.dispatch('getCategories', this.searchValue)
                this.$store.dispatch('searchCategory', this.searchValue)
                this.searchValue = ''
            }
        },
        manageList: function () {
            this.listStatus = true
            this.searchValue = '';
        },
        setSearchValue: function (index) {
            this.searchValue = this.$refs.suggestion[index].innerHTML
            this.listStatus = false
        },
        searchSuggestion: function () {

            if (!this.searchValue) this.listStatus = false
            else this.listStatus = true

            const list = document.getElementsByClassName('suggestion')

            for (let i = 0; i < list.length; i++) {
                let text = list[i].innerHTML.toUpperCase()
                let searchValue = this.searchValue.toUpperCase()

                if (text.indexOf(searchValue) > -1) {
                    list[i].style.display = '';
                }
                else {
                    list[i].style.display = 'none';
                }

            }
        },
        focusOut: function(){
            // this.listStatus = false
        },
    },
    mounted() {
        this.$store.dispatch('getCotegoryList')
    }
}

</script>


<style>
.catagory-input {
    animation: category-animation 0.5s linear;
}

@keyframes category-animation {

    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }

}


.drop-down {
    background-color: #fff;
    border: 1px solid rgb(237, 237, 237);
    position: absolute;
    width: 289px;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 5px 0px;
    margin-top: 42px;
    animation: drop 0.5s normal;
    z-index: 1;
}

@keyframes drop {
    
    0%{
        max-height: 0px;
    }
    
    100%{
        max-height: 300px;
    }
    
}

.drop-down::-webkit-scrollbar {
    width: 3px;
    background: none;
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #f04d50;
    border-radius: 10px;
}

.drop-down li {
    padding: 10px 8px;
    font-size: 16px;
    list-style: none;
    cursor: pointer;
    color: var(--text-color-dark);
    transition: all 0.2s ease-in-out;
}

.drop-down li:hover {
    background: var(--bg-gray);
}
</style>
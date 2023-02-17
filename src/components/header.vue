<template>
    <div class="header-container">

        <div class="top-conent">
            <img src="../assets/icons/ehisaab logo.svg" alt="">
            <p>Downlaod eHisaab now to maintain your business accounts and get online sale orders.</p>
        </div>

        <header class>
            <div class="logo-and-bar">
                <img src="../assets/icons/logo.svg" alt="">
                <p>Bar</p>
            </div>
            <ul>
                <li> <router-link to="/"> Home </router-link> </li>
                <li> <router-link to="/store"> Store </router-link> </li>
                <li> <router-link to="#"> Products </router-link> </li>
                <li> <router-link to="/cart"> <img src="../assets/icons/add shopping cart 24px.svg" alt=""> </router-link> </li>
            </ul>
        </header>

    </div>
</template>

<style>
.top-conent {
    background-color: var(--bg-dark);
    min-height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 100px;
}

.top-conent img {
    width: 116px;
}

.top-conent p {
    font-family: var(--font);
    color: var(--text-color-gray);
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    max-width: 542px;
}

header {
    min-height: 80px;
    background-color: var(--bg-gray);
    box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.25);
    padding: 0px 199px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-and-bar p{
    display: none;
}

header ul {
    display: flex;
    justify-content: space-between;
    width: 477px;
}

ul li {
    list-style: none;
}

ul a {
    font-family: var(--font);
    color: var(--dark-blue);
    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    height: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
}

ul a:hover{
    color: var(--bg-dark);
}

.router-link-exact-active{
    color: black;
}

ul img{
    width: 20.16px;
}

ul img:hover{
    filter: contrast(50%);
}

ul img:active{
    filter: contrast(0%);
}

ul a:active{
    color: var(--dark-blue);
}


@media (max-width: 970px){
    .top-conent{
        flex-direction: column;
        padding: 20px 0px;
    }

    .top-conent p{
        padding: 0px 30px;
        margin-top: 20px;
        text-align: center;
    }

    header{
        flex-direction: column;
        padding: 0px 40px;
    }

    .logo-and-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding: 20px 0px;
    }

    .logo-and-bar p{
        display: block;
    }

    header ul{
        height: 0px;
        overflow: hidden;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }

    header ul a{
        padding: 20px 0px;
    }
}
</style>
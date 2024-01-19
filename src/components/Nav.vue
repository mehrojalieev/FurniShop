

<template>
    <nav>
            <div class="nav-wrapper">
                <div class="nav__logo">
                    <img src="../assets/logo.svg" alt=""/>
                </div>
                <ul class="nav__menu">
                    <li><router-view style="font-weight: 600;" class="item-link">Home</router-view></li>
                    <li><router-view class="item-link">About</router-view></li>
                    <li><router-view class="item-link">Features</router-view></li>
                    <li><router-view class="item-link">Contact</router-view></li>
                </ul>
            </div>
    </nav>
</template>


<script>

    export default {

    }
</script>



<style lang="scss" scoped>
    nav{
        margin-top: 20px;
        width: 100%;
        height: 40px;
        position: absolute;
        z-index: 2;
    }
    .nav-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1250px;
        padding: 0px 10px;
        margin: 0 auto;
    }
    .nav__menu{
        display: flex;
        align-items: center;
        column-gap: 64px;
        list-style-type: none;
        color: #fff;
        padding-right: 70px;
        .item-link{
            font-size: 16px;
            font-weight: 400;
           transition: 0.2s;
           &:hover{
            cursor: pointer;
            opacity: 0.8;
           }
        }
      

    }
</style>
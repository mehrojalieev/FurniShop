<script>
import Container from '@/utils/Container.vue';
import { RouterLink, RouterView } from 'vue-router'


export default {
    components: {
         Container
         },
         data(){
            return {
                screenWidth: 0,
                isOpenMenu: false,
                currentPathname: this.$route.path
            }
         },
         computed: {
            responsiveWidth(){
                if(this.screenWidth){
                    return this.screenWidth = window.innerWidth;
                } 
            }
         },
         mounted(){
            this.screenWidth = window.innerWidth
            window.addEventListener('resize', this.updateWidth)
         },
         beforeDestroy(){
            window.removeEventListener('resize', this.updateWidth)
         },
         methods: {
            updateWidth(){
                this.screenWidth = window.innerWidth
            }
         }
}
</script>
<template>
    <nav>
        <Container>
            <div v-if="currentPathname.includes('/') || currentPathname.includes('product') || currentPathname.includes('/cart')"  class="nav-wrapper">
                <div class="nav__logo">
                    <img src="../assets/logo.svg" alt="Logo" />
                </div>
                <ul :style="{transform: this.screenWidth > 717 || isOpenMenu  ? 'scale(1)' : 'scale(0)'}"  class="nav__menu">
                    <li><a class="item-link" href="/">Home</a></li>
                    <li><a class="item-link" href="#all-products">Products</a></li>
                    <li><a class="item-link" href="#features">Features</a></li>
                    <li><a class="item-link" href="#contact">Contact</a></li>
                </ul>
                <button :style="{display: isOpenMenu ? 'block' : 'none !important'}" @click="isOpenMenu = false" class="close-menu"><span class="material-symbols-outlined">close</span></button>
                <div class="nav__actions">
                    <RouterLink class="nav__action-link" to="/"><span class="material-symbols-outlined">account_circle</span> <strong>Account</strong></RouterLink>
                    <RouterLink class="nav__action-link" to="like"><span class="material-symbols-outlined">favorite</span> <strong>Favourite</strong></RouterLink>
                    <RouterLink class="nav__action-link" to="cart"><span class="material-symbols-outlined">shopping_cart</span> <strong>Cart</strong></RouterLink>
                    <button type="button" @click="isOpenMenu = true " class="menu__hamburger-btn nav__close-btn"><span class="material-symbols-outlined">menu</span></button>
                </div>
            </div>
        </Container>
    </nav>
    <!-- router outlet -->
    <router-view/>
</template>






<style lang="scss" >
nav {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    position: absolute;
    z-index: 2 !important;
}


.nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}



.nav__menu {
    display: flex;
    align-items: center;
    column-gap: 64px;
    list-style-type: none;
    color: #fff;
    transform-origin: top ;

    .item-link {
        font-size: 18px;
        font-weight: 400;
        transition: 0.2s;
        color: #fff;
        text-decoration: none;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }

}


    .nav__actions{
        display: flex;
        align-items: center;
        column-gap: 30px;
        .nav__action-link{
            display: flex;
            align-items: center;
            column-gap: 3px;
            text-decoration: none;
            color: #fff;
            &:hover{
                cursor: pointer;
                opacity: 0.8;
            }
            strong{
                font-weight: 500;
            font-size: 16px;
            letter-spacing: 0.9px;
            }
            span{font-size: 21px;}
        }
    }


.nav__close-btn{
    background: transparent;
    border: none;
    display: none;
    color: #fff;
}
.close-menu{
    display: none;
}

// ---- RESPONSIVE STYLES ----

@media only screen and (max-width: 963px){
    nav{
        margin-top: 5px !important;
    }
        .nav__logo{
            img{
                width: 140px;
                height: 90px;
            }
        }
}

@media only screen and (max-width: 878px){

        .nav__logo{
            img{
                width: 120px;
                height: 70px;
            }
        }
        .nav__menu {
    column-gap: 44px;

    .item-link {
        font-size: 15px;
        letter-spacing: .5px;
    }


}
.nav__actions{
        column-gap: 20px;
        .nav__action-link{
            font-size: 15px;
            span{font-size: 19px;}
        }
    }
}



@media only screen and (max-width: 716px) {
    .nav__menu{
        display: flex !important;
        flex-direction: column;
        row-gap: 15px;
        width: 100% !important;
        left: 0;
        transition: 0.2s;
        top: calc(-10%);
        position: absolute;
        text-align: center;
        padding: 1.5rem 0;
        background-color: #ffffff;
        .item-link{
            font-size: 26px;
            color: #000000;
        }
    }
        .nav__close-btn{
            margin-top: 3px;
            display: block;
            
            span{
                margin-top: 4px;
                font-size: 24px;
            }
        }
        .close-menu{
            z-index: 3;
            top: 5px;
            right: 10px;
            display: block !important;
            position: absolute;
            background: transparent;
            border: none;
            cursor: pointer;
            span{
                font-size: 28px;
            }
        }
    }

    @media only screen and (max-width: 428px){
        .nav__action-link{
            span{
                font-size: 24px !important;
            }
            strong{
                display: none;
            }
        }
        .nav__close-btn{
            span{
                font-size: 26px;
            }
        }
    }   

    @media only screen and (max-width:422px){
        .nav__logo{
            img{
                margin-top: 5px;
                width: 95px;
                // height: 80px;
            }
        }
    }

    @media only screen and (max-width: 398px){
        .nav__menu{
            .item-link{
                font-size: 20px;
            }
        }
    }

    @media only screen and (max-width: 238px){
        .nav-wrapper{
            column-gap: 20px;
        }
        .nav__actions{
        column-gap: 10px;
        .nav__action-link{
            span{ 
                font-size: 20px !important;
            }
        }
    }
    .nav__close-btn{
        span{
            font-size: 20px;
        }
    }
    }
</style>
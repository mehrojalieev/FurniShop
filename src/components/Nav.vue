

<template>
    <nav>
        <Container>
            <div class="nav-wrapper">
                <div class="nav__logo">
                    <img src="../assets/logo.svg" alt="" />
                </div>
                <ul class="nav__menu">
                    <li><router-link to="/" class="item-link">Home</router-link></li>
                    <li><router-link to="about" class="item-link">About</router-link></li>
                    <li><router-link to="features" class="item-link">Features</router-link></li>
                    <li><router-link to="contact" class="item-link">Contact</router-link></li>
                </ul>
            </div>
        </Container>
    </nav>
    <!-- router outlet -->
    <router-view></router-view>
</template>


<script>
import Container from '@/utils/Container.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: { Container }
}
</script>



<style lang="scss" scoped>
nav {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    position: absolute;
    z-index: 2;
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

    .item-link {
        font-size: 16px;
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
</style>
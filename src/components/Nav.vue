

<template>
    <nav>
        <Container>
            <div class="nav-wrapper">
                <div class="nav__logo">
                    <img src="../assets/logo.svg" alt="" />
                </div>
                <ul class="nav__menu">
                    <li><a class="item-link" href="/">Home</a></li>
                    <li><a class="item-link" href="">About</a></li>
                    <li><a class="item-link" href="#features">Features</a></li>
                    <li><a class="item-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </Container>
    </nav>
    <!-- router outlet -->
    <router-view/>
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
<template>
    <Nav/>
    <header>
        <img src="../assets/hero_banner.png" >
        <div class="hero__content">
            <h2>Creative Home Simpify your Furniture</h2>
            <p>Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</p>
            <button>Shop Now</button>
        </div>
    </header>
</template>


<script>
import Nav from './Nav.vue';
    export default {
        components: {
            Nav
        }
    }
</script>

<style scoped>
    header{
       
        width: 100%;
        position: absolute;
        min-height: 850px;
        top: 0 !important;

        img{
            width: 100%;
            height: 100%;
        }
    }
    .hero__content{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: calc(15%);
        text-align: center;
        top: calc(23%);
        h2{
            color: #fff;
            font-size: 64px;
            line-height: 76px;
            font-weight: 600;
            letter-spacing: 0.2px;
            width: 880px;
            text-align: center;
        }
        p{
            margin-top: 30px;
            color: #fff;
            font-size: 20px;
            line-height: 30px;
            width: 620px;
            text-align: center;
            letter-spacing: 0.2px;
        }
        button{
            border-radius: 10px;
            margin-top: 60px;
            padding: 10px 90px;
            color: #fff;
            font-size: 20px;
            border: none;
            letter-spacing: 0.2px;
            font-weight: 600;
            background-color: rgba(226, 226, 226, 0.4);
        }
    }
</style>
<script>
import Container from '@/utils/Container.vue';
import Nav from './Nav.vue';
export default {
    components: {
        Nav,
        Container
    }
}
</script>

<template>
    <Nav/>
        <header>
        <Container>
            <div class="hero__content">
                <h2>Creative Home Simpify your Furniture</h2>
                <p>Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</p>
                <button>Shop Now</button>
            </div>
        </Container>
        <!-- <div id="features" class="features">
            <div class="feature-card">
                <strong>7</strong>
                <p>Year Experience</p>
            </div>
            <div class="feature-card">
                <strong>2</strong>
                <p>Opened in the country</p>
            </div>
            <div class="feature-card">
                <strong>10k+</strong>
                <p>Furniture sold</p>
            </div>
            <div class="feature-card">
                <strong>260+</strong>
                <p>Variant Furniture</p>
            </div>
        </div> -->
    </header>
</template>




<style scoped>
header {
    /* position: relative; */
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 850px;
    background: url("../assets/hero_banner.png") no-repeat;
    background-size: cover;
    background-position: center;
}

.hero__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        color: #fff;
        font-size: 64px;
        line-height: 76px;
        font-weight: 600;
        letter-spacing: 0.2px;
        max-width: 880px;
        text-align: center;
    }

    p {
        margin-top: 30px;
        color: #fff;
        font-size: 20px;
        line-height: 30px;
        max-width: 620px;
        text-align: center;
        letter-spacing: 0.2px;
    }

    button {
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

.features {
    position: absolute;
    max-width: 1200px;
    width: 100%;
    bottom: 0;
    top: 100%;
    margin: auto;
    height: 180px;
    border-radius: 20px;
    background-color: var(--success-color);
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 120px;
}

.feature-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    border-right: 2px solid #fff;
    /* padding-right: 50px; */

    strong {
        color: #fff;
        font-size: 40px;
        font-weight: 600;
    }

    p {
        width: 110px;
        line-height: 26px;
        letter-spacing: 0.2px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
    }
}

@media only screen and (max-width: 768px){
    .hero__content{
        h2{
            font-size: 46px;
        }
        p{
            font-size: 18px;
        }
    }
}

@media only screen and (max-width: 544px){
    header{
        background-position: right;
    }
    .hero__content{
        h2{
            font-size: 40px;
            line-height: 66px;
        }
        p{
            font-size: 16px;
            line-height: 28px;
        }
        button{
            padding: 10px 80px;
            font-size: 18px;
            margin-top: 40px;
        }
    }
}


@media only screen and (max-width: 478px){
    .hero__content{
        h2{
            font-size: 36px;
            line-height: 56px;
        }
        p{
            font-size: 15px;
            line-height: 26px;
        }
        button{
            padding: 9px 70px;
            font-size: 16px;
            margin-top: 30px;
        }
    }
}

@media only screen and (max-width: 298px){
    .hero__content{
        h2{
            font-size: 33px;
            line-height: 46px;
        }
        p{
            font-size: 15px;
            line-height: 22px;
        }
        button{
            padding: 9px 70px;
            font-size: 16px;
            margin-top: 30px;
        }
    }
}


@media only screen and (max-width: 276px){
    .hero__content{
        h2{
            font-size: 30px;
            line-height: 46px;
        }
        p{
            font-size: 15px;
            line-height: 22px;
        }
        button{
            padding: 9px 50px;
            font-size: 15px;
            margin-top: 40px;
        }
    }
}

@media only screen and (max-width: 276px){
    .hero__content{
        h2{
            font-size: 26px;
            line-height: 44px;
        }
        p{
            font-size: 14px;
            line-height: 20px;
        }
        button{
            padding: 7px 40px;
            font-size: 14px;
            margin-top: 40px;
        }
    }
}






</style>
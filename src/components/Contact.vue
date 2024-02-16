
<script setup>
import Container from '@/utils/Container.vue';

</script>
<template>
    <div id="contact" class="contact__wrapper-banner">
        <Container>
            <div class="contact-container">
                <div class="contact-content">
                <h2>Get more discount Off your order</h2>
                <p>Join our mailing list</p>
                <form class="contact-form">
                    <input type="text" placeholder="Your email address">
                    <button>Shop Now</button>
                </form>
            </div>
            </div>
        </Container>
    </div>
</template>

<style>
.contact__wrapper-banner {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 490px;
    background: url('../assets/contact_bg.png') no-repeat center;
    background-size: cover;
}
.contact-container{
    display: flex;
    justify-content: flex-end;
    padding: 0 1rem;
}
.contact-content{
    h2{
        font-size: 40px;
        color: #fff;
        line-height: 54px;
        max-width: 350px;
        font-weight: 600;
    }
    p{
        margin-top: 15px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
    }
}
.contact-form{
    margin-top: 30px;
    display: flex;
    align-items: center;
    column-gap: 20px;
    height: 60px;
    input{
        width: 385px;
        text-indent: 10px;
        height: 100%;
        border-radius: 8px;
        background-color: #fff;
        outline: none;
        font-size: 16px;
        border: none;
        color: var(--muted-text-color);

    }
    button{
        height: 100%;
        padding: 0 1rem;
        background-color: var(--muted-text-color);
        color: #fff;
        font-size: 20px;
        border-radius: 8px;
        border: none;
        transition: 0.1s;
        &:hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
}
</style>
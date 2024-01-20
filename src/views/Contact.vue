<template>
        <Container>
            <div class="contact">
                <h1>CONTACT US</h1>
                <form>
                    <div class="contact-names">
                        <input type="text" placeholder="Firstname">
                        <input type="text" placeholder="Lastname">
                    </div>
                    <div class="contact-names">
                        <input type="number" placeholder="Phone number">
                        <input type="email" placeholder="Email">
                    </div>
                    <textarea placeholder="Enter Your message">
                        
                    </textarea>
                </form>
            </div>
        </Container>
</template>


<script>
import Container from '@/utils/Container.vue';

    export default {
    components: { Container }
}
</script>   
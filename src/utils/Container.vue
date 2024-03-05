<template >
    <div class="container">
        <slot/>
    </div>
</template>




<style lang="scss">
    .container{
        width: 100%;
        max-width: 1250px;
        margin: 0 auto;
        padding: 0px 30px;
    }
    @media only screen and (max-width: 232px){
        .container{
            max-width: 230px;
        }
    }
</style>
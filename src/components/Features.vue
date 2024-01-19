<template>
    <div class="features">
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
    </div>
</template>


<style lang="scss" scoped>
    .features{
        position: absolute;
        bottom: calc(-30%);
        left: 4%;
        max-width: 1240px;
        width: 100%;
        height: 180px;
        border-radius: 20px;
        margin: 0px auto !important;
        background-color: var(--success-color);
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 120px;
    }
    .feature-card{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 5px;

        border-right: 2px solid #fff;
        padding-right: 50px;
        strong{
            color: #fff;
            font-size: 40px;
            font-weight: 600;
        }
        p{
            width: 110px;
            line-height: 26px;
            letter-spacing: 0.2px;
            color: #fff;
            font-size: 20px;
            font-weight: 400;
        }
    }
</style>
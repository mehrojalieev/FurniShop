<script>
import Container from '@/utils/Container.vue';

</script>


<template>
    <Container>
        <div class="models-wrapper">
            <div class="models-image">
                <img src="../assets/models.png">
            </div>
            <div class="models-content">
                <h2>We Create your home more </h2>
                <p>Furnitre power is a software as services for multiperpose business management system, </p>
                <div class="content-info">
                    <span class="material-symbols-outlined">check_circle</span>
                    <div class="info-text">
                        <h5>Valuation Services</h5>
                        <p>Sometimes features require a short description.  This can be detailed description</p>
                    </div>
                </div>
                <div class="content-info">
                    <span class="material-symbols-outlined">check_circle</span>
                    <div class="info-text">
                        <h5>Development of Furniture Modelss</h5>
                        <p>Sometimes features require a short description. This can be detailed description</p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>


<style lang="scss">
    .models-wrapper{
        margin-top: 200px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 100px;
    }
    .models-image{
        width: 554px;
        height: 443px;
        
        img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }

    .models-content{
        h2{
            font-size: 40px;
            font-weight: 600;
            line-height: 52px;
            width: 508px;
            color: var(--muted-text-color);
        }
        p{
            margin-top: 14px;
            margin-bottom: 30px;
            font-size: 20px;
            font-weight: 400;
            line-height: 34px;
            width: 587px;
            color: var(--muted-text-color); 
        }
    }
    .content-info{
        margin-top: 7px;
        display: flex;
        column-gap: 15px;
        span{
            margin-top: 4px;
            font-size: 26px;
        }
        .info-text{
            h5{
                font-size: 22px;
                font-weight: 700;
                color: var(--muted-text-color);
            }
            p{
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;
                color: var(--muted-text-color);
                margin-top: 5px;
                max-width: 530px;
            }
        }
    }
</style>
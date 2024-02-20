<script>
import Container from '@/utils/Container.vue';

</script>


<template>
    <Container>
        <div id="models" class="models-wrapper">
            <div class="models-image">
                <img src="../assets/models.png">
            </div>
            <div class="models-content">
                <h2>We Create your home more aestetic </h2>
                <p>Furnitre power is a software as services for multiperpose business management system, </p>
                <div class="content-info">
                    <span class="material-symbols-outlined">check_circle</span>
                    <div class="info-text">
                        <h5>Valuation Services</h5>
                        <p>Sometimes features require a short description. This can be detailed description</p>
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
.models-wrapper {
    margin-top: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 100px;
}

.models-image {
    max-width: 554px;
    height: 443px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
}

.models-content {
    h2 {
        font-size: 40px;
        font-weight: 600;
        max-width: 508px;
        text-transform: capitalize;
        color: var(--muted-text-color);
    }

    p {
        margin-top: 14px;
        margin-bottom: 30px;
        font-size: 20px;
        font-weight: 400;
        line-height: 34px;
        max-width: 587px;
        color: var(--muted-text-color);
    }
}

.content-info {
    margin-top: 7px;
    display: flex;
    column-gap: 15px;

    span {
        margin-top: 4px;
        font-size: 26px;
    }

    .info-text {
        h5 {
            font-size: 22px;
            font-weight: 700;
            color: var(--muted-text-color);
        }

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            color: var(--muted-text-color);
            margin-top: 5px;
            max-width: 530px;
        }
    }
}
@media only screen and (max-width: 1050px){
    .models-wrapper{
        padding: 0 1rem;
    }
    .models-content{
        h2{
            font-size: 36px;
            max-width: 480px;
        }
        p{
            font-size: 18px;
            line-height: 30px;
            max-width: 450px;
        }
    }
    .content-info{
            column-gap: 10px;
            span{
                font-size: 24px;
            }
            .info-text{
                h5{
                    font-size: 20px;
                    font-weight: 600;
                }
                p{
                    line-height: 26px;
                }
            }
    }
}
@media only screen and (max-width: 870px){
    .models-wrapper{
        column-gap: 80px;
    }
    .models-content{
        h2{
            font-size: 30px;
        }
        p{
            font-size: 16px;
            line-height: 24px;
        }
    }
    .content-info{
        column-gap: 8px;
        span{
            font-size: 22px;
        }
        .info-text{
            h5{
                    font-size: 18px;
                    font-weight: 600;
                }
                p{
                    line-height: 24px;
                    font-size: 15px;
                }
        }
    }
}
@media only screen and (max-width: 768px){
    .models-wrapper{
        flex-direction: column-reverse;
        align-items: center;
    }
    .models-content{
        h2{
            font-size: 40px;
            max-width: 550px;
        }
        p{
            max-width: 530px;
            font-size: 18px;
            line-height: 26px;
        }
    }
    .content-info{
        span{
            font-size: 25px;
        }
        .info-text{
            h5{
                font-size: 20px;
            }
            p{
                font-size: 18px;
            }
        }
    }
}
@media only screen and (max-width: 568px){
    .models-content{
        h2{
            font-size: 36px;
            line-height: 48px;
        }
        p{
            font-size: 17px;
        }
    }
    .content-info{
        span{
            font-size: 22px;
        }
        .info-text{
            h5{
                font-size: 19px;
            }
            p{
                font-size: 16px;
                max-width: 450px;
                line-height: 24px;
            }
        }
    }
}
@media only screen and (max-width: 418px){
    .models-content{
        h2{
            font-size: 30px;
            line-height: 44px;
        }
        p{
            font-size: 16px;
        }
    }
    .content-info{
        span{
            font-size: 21px;
        }
        .info-text{
            h5{
                font-size: 17px;
            }
            p{
                font-size: 15px;
                line-height: 22px;
            }
        }
    }
}
</style>
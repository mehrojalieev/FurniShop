
<template>
    <footer>
        <Container>
            <div class="footer-header">
                <img class="footer__logo" src="../assets/logo.svg" alt="Logo">
                <div class="footer__social-action">
                    <img src="../assets/instagram.svg">
                    <img src="../assets/facebook.svg">
                    <img src="../assets/twitter.svg">
                    <img src="../assets/github.svg">
                    <img src="../assets/instagram.svg">
                </div>
            </div>
            <div class="footer__menu-container">
                <ul>
                    <li>Our Products</li>
                    <li>The Support Suite</li>
                    <li>The Sales Suite</li>
                    <li>Support</li>
                    <li>Guide</li>
                </ul>
                <ul>
                    <li>Top Features</li>
                    <li>Ticketing System</li>
                    <li>Knowledge Base</li>
                    <li>Community Forums</li>
                    <li>Help Desk Software</li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>Product Support</li>
                    <li>Request Demo</li>
                    <li>Library</li>
                    <li>Peoplepower Blog</li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li>About Us</li>
                    <li>Press</li>
                    <li>Investors</li>
                    <li>Events</li>
                </ul>
                <ul>
                    <li>Favourite Things</li>
                    <li>For Enterprise</li>
                    <li>For Startups</li>
                    <li>For Benchmark</li>
                    <li>For Small Business</li>
                </ul>
            </div>
            <p class="copyright-text">© NameBrand 2022 - All Rights Reserved</p>
        </Container>
        </footer>
</template>

<script>
import Container from '@/utils/Container.vue';
  
</script>

<style scoped lang="scss">
    footer{
        padding: 60px 0 20px;
        width: 100%;
        background-color: var(--muted-text-color);
    }
    .footer-header{
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #fff;
        padding:0 10px 60px;
    }
    .footer__social-action{
        display: flex;
        column-gap: 10px;

    }
    .footer__menu-container{
        margin-top: 64px  !important;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        padding: 10px;
        ul{
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            list-style-type: none;
            li{
                font-size: 15px;
                color: #fff;
                font-weight: 500;
            }
            li:first-child{
                font-size: 18px ;
            }
        }

    }
    .copyright-text{
        margin-top: 70px;
        color: #fff;
        font-size: 15px;
        letter-spacing: 1px;
        text-align: center;
    }

    @media only screen and (max-width: 838px){
        .footer__menu-container{
            column-gap: 20px !important;
            padding: 0 1rem;
            ul{
            row-gap: 20px;
            li{
                font-size: 14px;
            }
            
        }
        }
    }
    @media only screen and (max-width: 780px){
        .footer__menu-container{
        grid-template-columns: repeat(4, 1fr);
        gap: 50px;

        }
    }
    @media only screen and (max-width: 780px){
        .footer-header{
        margin: auto;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #fff;
        padding:0 10px 50px;
    }
    .footer__social-action{
        column-gap: 15px;
        img{
                width: 45px;
                height: 45px;
            }

    }
        .footer__menu-container{
        margin-top: 40px  !important;
        grid-template-columns: repeat(3, 1fr);
        gap: 70px;

        }
    }
    @media only screen and (max-width: 530px){

    .footer__social-action{
        column-gap: 15px;
        img{
                width: 40px;
                height: 40px;
            }

    }
        .footer__menu-container{
        margin-top: 40px  !important;
        grid-template-columns: repeat(3, 1fr);
        gap: 70px;
        ul{
            row-gap: 15px;
            list-style-type: none;
            li{
                font-size: 13px;
                color: #fff;
                font-weight: 500;
            }
            li:first-child{
                font-size: 18px ;
            }
        }

        }
    }
    @media only screen and (max-width: 487px){

        .footer-header{
            flex-direction: column;
        border-bottom: 2px solid #fff;
        padding:0 10px 60px;
        .footer__logo{
            width: 220px;
            height: 100px;
        }
        .footer__social-action{
        display: flex;
        justify-content: space-evenly;
                img{
                    width: 55px;
                    height: 50px;
                }
    }
    }
.footer__social-action{
    column-gap: 15px;
    img{
            width: 40px;
            height: 40px;
        }

}
    .footer__menu-container{
    grid-template-columns: repeat(2, 1fr);
    ul{
        row-gap: 15px;
        li{
            font-size: 15px;
        }
        li:first-child{
            font-weight: 700;
            font-size: 22px ;
        }
    }

    }
}
</style>
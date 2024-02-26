
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


/* --- RESPONSIVE STYLES */
@media only screen and (max-width: 938px){
    .contact__wrapper-banner {
    justify-content: center;
    min-height: 470px;
    background: url('../assets/contact_bg.png') no-repeat center   ;
    background-size: cover;
}
.contact-container{
    padding: 0 1rem;
}
.contact-content{
    h2{
        font-size: 40px;
        color: #fff;
        line-height: 54px;
        max-width: 450px;
        text-align: center;
    }
    p{
        margin-top: 10px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
    }
}
}

@media only screen and (max-width: 688px){
    .contact__wrapper-banner {
    min-height: 430px;
    background-position: center;
}
.contact-container{
    padding: 0 1rem;
}
.contact-content{
    h2{
        font-size: 38px;
        color: #fff;
        line-height: 52px;
        text-align: center;
    }
    p{
        margin-top: 8px;
        font-size: 20px;
    }
}
.contact-form{
    margin-top: 30px;
    height: 60px;
    input{
        width: 375px;
        font-size: 16px;

    }
    button{
        padding: 0 0.8rem;
        font-size: 18px;
    
    }
}
}

@media only screen and (max-width: 600px){
    .contact__wrapper-banner{
        align-items: flex-start;
    }
    .contact__wrapper-banner {
    min-height: 370px;
    background-position: center;
}
.contact-container{
    margin-top: 60px;
}
.contact-content{
    h2{
        font-size: 34px;
        max-width: 360px;
        margin: auto;
        line-height: 50px;
    }
    p{
        display: none;
    }
}
.contact-form{
    margin-top: 30px;
    height: 55px;
    input{
        width: 375px;
        font-size: 16px;

    }
    button{
        padding: 0 0.8rem;
        font-size: 17px;
    
    }
}
}
@media only screen and (max-width: 593px){
   
.contact-container{
    margin-top: 60px;
}
.contact-content{
    h2{
        font-size: 34px;
        max-width: 360px;
        margin: auto;
        line-height: 50px;
    }
    p{
        display: none;
    }
}
.contact-form{
    margin-top: 30px;
    height: 50px;
    input{
        width: 320px;
        font-size: 15px;

    }
    button{
        min-width: 108px;
        font-size: 17px;
    
    }
}
}
@media only screen and (max-width: 520px){
   .contact__wrapper-banner{
    min-height: 320px;
   }
   .contact-container{
       margin-top: 50px;
   }
   .contact-content{
       h2{
           font-size: 30px;
           max-width: 300px;
           line-height: 40px;
       }
       p{
           display: none;
       }
   }
   .contact-form{
       margin-top: 30px;
       height: 48px;
       input{
           width: 280px;
           font-size: 15px;
   
       }
       button{
           min-width: 105px;
           font-size: 16px;
       
       }
   }
   }

   @media only screen and (max-width: 520px){
   .contact__wrapper-banner{
    min-height: 300px;
   }
   .contact-container{
       margin-top: 40px;
   }
   .contact-content{
       h2{
           font-size: 29px;
           max-width: 300px;
           line-height: 36px;
       }
 
   }
   .contact-form{
       height: 45px;
       input{
           width: 270px;
           font-size: 15px;
   
       }
       button{
           min-width: 100px;
           font-size: 15px;
       
       }
   }
   }

   @media only screen and (max-width: 445px){
   .contact__wrapper-banner{
    min-height: 290px;
   }
   .contact-container{
       margin-top: 40px;
   }
   .contact-content{
       h2{
           font-size: 28px;
           max-width: 280px;
           line-height: 37px;
       }
 
   }
   .contact-form{
       height: 45px;
       input{
           width: 250px;
           font-size: 15px;
   
       }
       button{
           /* width: 98px; */
           font-size: 15px;
       
       }
   }
   }
   @media only screen and (max-width: 445px){
   .contact__wrapper-banner{
    min-height: 280px;
   }
   .contact-container{
       margin-top: 40px;
   }
   .contact-content{
       h2{
           font-size: 28px;
           max-width: 280px;
           line-height: 36px;
       }
 
   }
   .contact-form{
       height: 42px;
       input{
           width: 230px;
           font-size: 15px;
   
       }
       button{
           /* width: 98px; */
           font-size: 14px;
       
       }
   }
   }

</style>
import React, {useEffect,useRef }from 'react'
import useState from 'react-usestateref'
import { useLocation, useNavigate } from 'react-router-dom';
import { FESHION_ROUTE,BASKET_ROUTE,ORDER_ROUTE } from '../utils/consts';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import set_message from './set_message';
import $ from 'jquery'
import Wpages from './wpages';
import { CreateOrder, fetch_Basket_by_userId, getOrder, get_item_order, putOrder, put_Color } from '../http/deviceAPI';
import { GetUser, PostMessage, fetchUserByEmail, get_peomo_by, putFIO, putPhone, putUserEmail, putUserStatus } from '../http/userAPI';

function Delivery() {
    const [userId,SetuserId,SetuserIdRef] = useState(null)
    const navigate = useNavigate()
    const storedToken = localStorage.getItem('token');

    if(storedToken===null){
        navigate(FESHION_ROUTE)
    }

    if(storedToken!==null&&SetuserIdRef.current=== null){
        const userId = jwt_decode(storedToken).id  
        SetuserId(userId)
    }

    



    const [user,Setuser,SetuserRef] = useState(null)
    var otpravka = $('.otpravka')
    var otpravka_off = $('.otpravka_off')
    var svg2_ = $('.svg2_')
    var di_ = $('.di_')
    var form = $('.form-control3')

    
    const Ref = useRef(null);

    const [timer, setTimer] = useState('00:00');
    const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const seconds = Math.floor((total / 1000) % 60);
  
  
      return {
          total,minutes,seconds
      };
  }
  
  const startTimer = (e) => {
    let { total,minutes, seconds }
                = getTimeRemaining(e);
    if (total >= 0) {
  
        setTimer(
            (minutes > 9 ? minutes : '0' + minutes) + ':'
           + (seconds > 9 ? seconds : '0' + seconds)
        )
    }
  }


  
  const clearTimer = (e) => {
  
    setTimer('00:60');
  
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();
  
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  }

  const onClickReset = () => {
    clearTimer(getDeadTime());
  }


const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() 
            * (max - min + 1)) + min;
};




const send = async() =>{

    const user__ =  await fetchUserByEmail(SetuserIdRef.current,SetEmailRef.current) 
    if(user__.data===null){
    form.prop("disabled",true)
    otpravka.addClass('display_')
    otpravka_off.addClass('display_flex_')
    const kod = randomNumberInRange(1000, 9999);
    const user =  await PostMessage(SetEmailRef.current,kod) 
    
    SetKod(kod)
    onClickReset()}else{
        set_message("Пользователь с таким email уже существует",'error')
    }
}

const comparison = async() =>{
    
   
    if (SetKodRef.current===parseInt(SetKod_klientRef.current)){
         const changed_user = await putEmail(SetuserIdRef.current,SetEmailRef.current) 
        const user__ =  await fetchUserByEmail(SetuserIdRef.current,SetEmailRef.current) 
       
            svg2_.addClass('display_flex')
            await putUserStatus(SetuserIdRef.current)
            await putUserEmail(SetuserIdRef.current,SetEmailRef.current)  
        di_.removeClass('_display_cont_')
        const user =  await GetUser(SetuserIdRef.current) 
        Setuser(user)
        
        set_message('Почта успешно подтверждена !','completed')
       
           

     
    }else{
      
        set_message("Указан неверный код",'error')
    }
}
  
    var  location = useLocation()

       
    
 

    const getUser = async() => {
      if(SetuserRef.current===null){
        const user =  await GetUser(SetuserIdRef.current) 
        
   
        SetFIO(user.data.FIO)
        SetEmail(user.data.email)
        SetPhone(user.data.phone)
        
        Setuser(user)
    
        
       
        
      }
        }

    
    const [FIO,SetFIO,SetFIORef] = useState()
    const [address,SetAddress,SetAddressRef] = useState()
    const [email,SetEmail,SetEmailRef] = useState()
    const [phone,SetPhone,SetPhoneRef] = useState()
    const [comment,SetComment] = useState()
    const [kod,SetKod,SetKodRef] = useState()
    const [kod_klient,SetKod_klient,SetKod_klientRef] = useState()
    const status = 'Заказ ожидает оплаты'



useEffect(()=>{


     
    if(storedToken===null){
        navigate(FESHION_ROUTE)
    }else{

        if(SetuserRef.current?.data?.status==="Не подтверждён"){
            di_.addClass('_display_cont_')
        }else{
            form.prop("disabled",true)
            svg2_.addClass('display_flex')
            di_.removeClass('_display_cont_')
        }
    
        if(timer==='00:00'){
            otpravka.removeClass('display_')
            otpravka_off.removeClass('display_flex_')
        }
        getUser()
    }

})
  

const getMessage = async(msg) => {

await axios.post(`https://api.telegram.org/bot6019994450:AAEpHDvXuaLpyTfZ4QJLqLOee2IpdYeIAMM/sendMessage?chat_id=-976104296&parse_mode=html&text=${msg}`)

}
    const createOrder = async() => {
         if(!SetFIORef.current){
          return  set_message('Введите ваше ФИО','error')
            
         }
         if(!SetPhoneRef.current){
            return  set_message('Введите ваш телефон','error')
         }
         if(!email){
            return  set_message('Введите ваш email','error')
         }
         if(!address){
            return set_message('Введите адрес доставки','error')
         }
         const user =  await GetUser(SetuserIdRef.current) 
         if(user.data.status==="Не подтверждён"){
            return set_message('Подтвердите адрес электронной почты ,чтобы продолжить','error')
         }

        
        const basket = await fetch_Basket_by_userId(SetuserIdRef.current) 
        const basketId = basket.id
        
        const user1 = await GetUser(userId)
        const promo1 = await get_peomo_by(user1.data.promocode)
        const skidka= (1-(promo1.data.skidka/100))
        const final_price =Math.round(basket.final_price*skidka) 
   

    const order = await CreateOrder(SetFIORef.current,address,final_price,email,SetPhoneRef.current,status,comment,SetuserIdRef.current)


    const device = await putOrder(basketId,order.data.id) 
    const devic = await getOrder(order.data.id)

    
  



   if(SetuserRef.current.data.phone===null){
    const changed_user = await putPhone(SetuserIdRef.current,SetPhoneRef.current) 
   }
   if(SetuserRef.current.data.FIO===null){
    const changed_user = await putFIO(SetuserIdRef.current,SetFIORef.current) 
   }

   const response =await get_item_order(order.data.id) 



 Promise.all(response.data.map(async id => {
    let response1
    try {
     response1 = await put_Color(id.quantity)
    } catch (err) {
      return err;
    }
    return response
  })).then(results => {

})

set_message('Заказ успешно сформирован !','completed')
navigate(ORDER_ROUTE)
    const message = 
    `Новый заказ!✅%0AFIO: ${FIO}%0AТелефон: ${phone}%0AСумма: ${final_price}₽%0AАдрес: ${address}%0AКомментарий: ${comment} `
    getMessage(message)
    }


    
    return (
        
    <div>
        <Wpages/>
        <div  class='start_basket'>
        <div class='basket'>
              <div class='float s_2' onClick={() => navigate(BASKET_ROUTE)}> Корзина</div>
              <div class='float '> Доставка</div>
              <div class='float s_2'> Оплата</div>
              <div class='float s_2' onClick={() => navigate(ORDER_ROUTE)}> Мои Заказы</div>
        </div>
    </div>


         <div class='container_delivery'>
         <div class='order_item_1_header'>
Доставка



  </div>


        <div class='container_delivery_'>
            <div class='col-7 pd-20'>
                <label for="validationDefault01" class="form-label fio">ФИО</label>
                <input type="text" class="form-control2" placeholder="Козлов Артём Алексеевич" value={SetFIORef.current}  onChange={e => SetFIO(e.target.value)}  size="20" />
            </div>
            <div class='col-7 pd-20'>
                <label for="validationDefault01" class="form-label phone"> Тефефон</label>
                <input type="text" class="form-control2" value={phone} placeholder="+7905908045" onChange={e => SetPhone(e.target.value)}  size="20" />
            </div>
            
            <div class=' col-7 pd-20'>
                <label for="validationDefault01" class="form-label ">Почта
                </label>
                <div class='display_flex'>
                <input type="email" class="form-control2 form-control3 email"  placeholder="thesamebase@mail.ru" value={email}  onChange={e => SetEmail(e.target.value)} size="20" />

                <button class='color5 choose svg2 svg2_  '>
                </button>


              
                </div>
                
        <div class='di_'>

       
                <div class='display_flex_ '>
                <input type="text" class="form-control2 adress" value={kod_klient} placeholder="0000"  onChange={e => SetKod_klient(e.target.value)}  />
                 <div class='email_on  display_flex ' onClick={comparison}>Подтвердить</div>
            </div>
            
            <div class='otpravka i_' onClick={send}>Отправить код
            </div>
            
            <div class='otpravka_off' onClick={onClickReset}>Повторная отправка кода через: {timer}</div>
            </div>


            </div>

            <div>
            {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d665d3dca23ce53ccaa80ac3043231f0467a71a0cd8beca3c70c1ada5b19483&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
  */}
            </div>
          


            <div class='col-7 pd-20'>
                
                <label for="validationDefault01" class="form-label">Адрес
                </label>
                <input type="phone" class="form-control2"  placeholder="Россия г. Санкт-Петербург ул.Рентгена д.21 " value={address}  onChange={e => SetAddress(e.target.value)} size="20" />
            </div>
        </div>
        <div class="control2 ">
                <label for="exampleFormControlTextarea1" class="form-label">Комментарий к заказу</label>
                <textarea class="form-control2 col-10 " id="exampleFormControlTextarea1" value={comment}  onChange={e => SetComment(e.target.value)}rows="3"></textarea>
            </div>

        

            
   
        
        <div class='d-flex'>
             <div onClick={() => createOrder()} class='but_basket'>
                Перейти к оплате 
             </div>
      
        </div> 

         </div>
         <div class="message-box"></div>
    </div>



    )

}
export default Delivery


import React, { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';


// --------------scss-----------------------
import '../../scss/body/bodyForm.scss';

import '../../scss_media/media_1024.scss';
import '../../scss_media/media_768.scss';
import '../../scss_media/media_425.scss';
import '../../scss_media/media_375.scss';
import '../../scss_media/media_320.scss';
// ---------------------------------------


// ------------------img--------------------------
import RectangleForm from '../../img/body/RectangleForm.svg';

// ----------------------------------------------


function BodyForm () {
    const [valueName, setValueName] = useState('');
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueName(event.target.value)
    };

    const [valueTel, setValueTel] = useState('');
    const handleChangeTel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueTel(event.target.value)
    };
    

    const [valueMail, setValueMail] = useState('');
    const handleChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueMail(event.target.value)
    };

    const [valueGift, setValueGift] = useState ('');
    const handleChangeGift = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueGift(event.target.value)
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            name: valueName,
            tel: valueTel,
            email: valueMail,
            gift: valueGift,
        };

        emailjs.send('service_9hd0q8a', 'template_3f1ns42', formData, '6AdNquKGXKq43vhSe')
        .then((response) => {
            console.log('Success!', response.status, response.text);
            alert('Письмо успешно отправлено!');

            setValueName('');
            setValueTel('');
            setValueMail('');
            setValueGift('');
        })
        .catch((error) => {
            console.error('Failed....', error);
            alert('Ошибка при отправке письма.');
        });
    };



    return(
        <div className="bodyForm">
            <div className="bodyFormAll">
                <img className="bodyFormRectangle" src={RectangleForm} alt="" />
                <div className="bodyFormGroup">
                    <form className="bodyFormSend" onSubmit={handleSubmit}>
                        <input className="inputForForm bodyFormSendInput" type="text" placeholder="Как Вас зовут?" value={valueName} onChange={handleChangeName} />
                        <input className="inputForForm bodyFormSendInput" type="tel"  placeholder='Номер телефона' value= {valueTel} onChange={handleChangeTel}/>
                        <input className="inputForForm bodyFormSendInput" type="text" placeholder='E-mail or massenger' value= {valueMail} onChange={handleChangeMail}/>
                        <input className="inputForForm bodyFormSendInput" type="text" placeholder='Какое изделие хоттите получить?' value= {valueGift} onChange={handleChangeGift}/>
                        <p className="bodyFormSendPolicy fontRegular">Нажимая на кнопку, Вы принимаете условия политики обработки персональных данных</p>
                        <button className="bodyFormSendButton" type="submit"><p>Отправить</p></button>
                    </form>
                    <p className="bodyFormSendP fontRegular">Заполните форму для обратной связи, <br/> и мы создадим одежду вашей мечты!</p>
                </div>
            </div>
            <p className="bodyFormEnd fontRegular">Создайте свой идеальный образ</p>
        </div>
    )
}

export default BodyForm;
import './InfoTooltip.css';

export default function InfoTooltip({isSuccess, isUpdate, onClose}) {
    return(
        <div className={`popup ${isUpdate ? 'popup-opened' : ''}`}>
            <button type='button' className='popup__button-close' onClick={onClose}/>
            <h2 className='popup__title-signup'>{isSuccess ? 'Регистрация прошла успешно!' : 'Что-то пошло не так. Попробуйте еще раз!'}</h2>
        </div>
    )
}
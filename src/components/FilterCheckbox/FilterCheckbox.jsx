import "./FilterCheckbox.css";

export default function FilterCheckbox() {
    return (
        <div className='filter__container'>
            <input type="checkbox" id="shortfilms" className='shortfilms__checkbox' />
            <label htmlFor="shortfilms" />
            <p className="shortfilms__text">Короткометражки</p>
        </div>
    )
}
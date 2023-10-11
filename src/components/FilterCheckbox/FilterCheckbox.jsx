import "./FilterCheckbox.css";

export default function FilterCheckbox() {
    return (
        <div className='filter'>
            <input type="checkbox" id="shortfilms" className='filter__checkbox' />
            <label htmlFor="shortfilms" />
            <p className="filter__text">Короткометражки</p>
        </div>
    )
}
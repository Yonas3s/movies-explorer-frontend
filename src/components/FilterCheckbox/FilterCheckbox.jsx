import "./FilterCheckbox.css";

export default function FilterCheckbox({ isCheck, changeShort, firstEntrance, }) {
    return (
        <div className='filter'>
            <input type="checkbox" id="shortfilms" className={`filter__checkbox ${isCheck ? 'filter__checkbox-active' : ''}`} onClick={() => changeShort()} disabled={firstEntrance}/>
            <label htmlFor="shortfilms" />
            <p className="filter__text">Короткометражки</p>
        </div>
    )
}
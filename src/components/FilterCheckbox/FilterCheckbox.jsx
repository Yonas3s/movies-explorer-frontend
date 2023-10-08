import "./FilterCheckbox.css";

export default function FilterCheckbox({ noBorder }) {
    return (
        <div className={`filter__container ${noBorder === true ? 'filter__container-noborder' : ''}`}>
            <input type="checkbox" id="shortfilms" className='shortfilms__checkbox' />
            <label htmlFor="shortfilms" />
            <p className="shortfilms__text">Короткометражки</p>
        </div>
    )
}
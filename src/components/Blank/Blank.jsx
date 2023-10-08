import "./Blank.css";

export default function Blank({ children }) {
    return(
        <div className="blank__page">
            {children}
        </div>
    )
}
import { useEffect, useState } from "react";
import Blank from "../Blank/Blank";
import "./Footer.css";
import useWindowDimensions from "../../utils/useWindowDimensions/useWindowDimension";

export default function Footer() {

    const [bigWidth, setBigWidth] = useState();
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width > '425') {
            setBigWidth(true);
        } else {
            setBigWidth(false);
        }
    }, [width])

    return (
        <footer className="footer">
            <Blank>
                <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__container">
                    {bigWidth ? (
                        <>
                            <p className="footer__year">©2023</p>
                            <ul className="footer__container-lists">
                                <li className="footer__container-list">
                                    <a className="footer__container-link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                                </li>
                                <li className="footer__container-list">
                                    <a className="footer__container-link" href="https://github.com/Yonas3s" target="blank">Github</a>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul className="footer__container-lists">
                                <li className="footer__container-list">
                                    <a className="footer__container-link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                                </li>
                                <li className="footer__container-list">
                                    <a className="footer__container-link" href="https://github.com/Yonas3s" target="blank">Github</a>
                                </li>
                            </ul>
                            <p className="footer__year">©2023</p>
                        </>
                    )}
                </div>
            </Blank>
        </footer >
    )
}
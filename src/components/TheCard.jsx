import style from "../css/modules/TheCard.module.css";
import img from "../assets/imgnot.png";
import TheButton from "./TheButton";
export default function TheCard() {
    return (
        <div className={style.CardContainer}>
            <div className={style.Card}>
                <img className={style.imgSize} src={img} alt="immagine" />

                <div className={style.content}>
                    <h3>Titolo del Post </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic provident officiis velit distinctio possimus earum amet, quidem voluptatem deserunt consequatur officia aperiam veritatis repellendus ea magni neque voluptates. Aliquam?</p>
                    <TheButton />
                </div>
            </div>

        </div>
    )
}
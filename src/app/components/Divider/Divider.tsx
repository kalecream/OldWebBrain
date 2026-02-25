import style from "./Divider.module.scss";

const Divider = () => {
    return (
        <div className={style.divider}>
            <div className={style.divider__line} />
            <div className={style.divider__glyph}>✦</div>
            <div className={style.divider__line} />
        </div>
    )
}

export default Divider;
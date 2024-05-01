import css from './Options.module.css';

const Options = ({ options, handleClick, totalFeedback, handleReset }) => {
    return (
        <>
            <ul className={css.list}>
                {options.map((option, index) => {
                    return (
                        <li key={index}
                            className={css.item}
                        >
                            <button type="button" value={option}
                                className={css.feedbackBtn}
                                onClick={() => (handleClick(option))}>
                                {option}
                            </button>
                        </li>
                    )
                })}
            </ul >
            {totalFeedback > 0 &&
                <div className={css.wrapper}>
                    <button type="button"
                        className={css.resetBtn}
                        onClick={handleReset}>
                        Reset
                    </button>
                </div>}
        </>
    )
}

export default Options;
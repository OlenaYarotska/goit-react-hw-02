import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
    return (
        <>
            <ul>
                <li className={css.item}>
                    Good:
                    <span className={css.itemProperty}>{good}</span>
                </li>
                <li className={css.item}>
                    Neutral:
                    <span className={css.itemProperty}>{neutral}</span>
                </li>
                <li className={css.item}>
                    Bad:
                    <span className={css.itemProperty}>{bad}</span>
                </li>
                <li className={css.item}>
                    Total:
                    <span className={css.itemProperty}>{totalFeedback}</span>
                </li>
                <li className={css.item}>
                    Positive:
                    <span className={css.itemProperty}>{positiveFeedback}</span>%
                </li>
            </ul>
        </>
    )
}

export default Feedback;
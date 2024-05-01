import css from './App.module.css';
import Description from '../Descrition/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import { useEffect, useState } from 'react';

function App() {
	
	const initialState = {
	good: 0,
	neutral: 0,
	bad: 0
	}

	const [feedbackType, setFeedbackType] = useState(
		JSON.parse(window.localStorage.getItem('feedbackType')) || initialState);
	
		useEffect(() => {
		window.localStorage.setItem("feedbackType", JSON.stringify(feedbackType));
	}, [feedbackType]);

	const updateFeedback = feedbackType => {
		setFeedbackType((prevState) => {
			return { ...prevState, [feedbackType]: prevState[feedbackType] + 1 };
			})
	}
	
	const totalFeedback = feedbackType.good + feedbackType.neutral + feedbackType.bad;
	const positiveFeedback = Math.round((feedbackType.good / totalFeedback) * 100);
	
	const handleReset = () => {
		setFeedbackType(initialState)
	}
  
	return (
		<div className={css.container}>
			<Description />
			<Options
				options={['good', 'neutral', 'bad']}
				handleClick={updateFeedback}
				totalFeedback={totalFeedback}
				handleReset={handleReset}
			/>
			{totalFeedback > 0 ?
				<Feedback
				good={feedbackType.good}
				neutral={feedbackType.neutral}
				bad={feedbackType.bad}
				totalFeedback={totalFeedback}
				positiveFeedback={positiveFeedback}
				/> :
				<Notification />}
		</div>
	)
}

export default App;

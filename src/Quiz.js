import React, { Component } from 'react';

class Quiz extends Component {
  render() {
		const {quiz, getQuiz, answer} = this.props;

    return (
			<div>
				<QuizTitle quizTitle={quiz.quizTitle}/>
				<table>
					<QuizVariants
						quizVariants={quiz.quizVariants}
						getQuiz={getQuiz}
						answer={answer}
					/>
				</table>
				<button onClick={() => getQuiz()}>Get Quiz</button>
			</div>
    );
  }
}

const QuizTitle = props => {
    return (
			<h1>{props.quizTitle}</h1>
    );
}

const QuizVariants = props => {
	const variants = Object.entries(props.quizVariants).map((row, key) => {
		return (
				<tr key={key}>
					<td>{row[0]}: {row[1]}</td>
					<td><button onClick={() => props.answer(row[1])}>Answer</button></td>
				</tr>
		);
	});

    return (
				<tbody>{variants}</tbody>
		);
}

export default Quiz;

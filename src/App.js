import React, { Component } from 'react';
import Quiz from './Quiz';

class App extends Component {
	initial = {
		quizTitle: "No name",
		quizVariants: {
			1: "empty",
			2: "empty",
			3: "empty",
			4: "empty"
		}
	};

	state = {
		quiz: this.initial
	};

  render() {

		const {quiz} = this.state;

    return (
      <div className="Quiz">
				<Quiz
					quiz={quiz}
					getQuiz={this.getQuiz}
					answer={this.answer}
				/>
      </div>
    );
  }

	getQuiz = name => {
		this.setState({
			quiz: {
				quizTitle: "Question1",
				quizVariants: {
					1: "one",
					2: "two",
					3: "three",
					4: "four"
				}
			}
		});
	}

	answer = key => {
		window.alert("Wrong answer " + key);

		this.setState({
			quiz: this.initial
		});
	}
}

export default App;

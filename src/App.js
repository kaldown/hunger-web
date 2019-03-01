import React, { Component } from 'react';
import Quiz from './Quiz';

const {QuizRequest} = require('./proto/quiz_pb.js');
const {QuizerClient} = require('./proto/quiz_grpc_web_pb.js');

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
		this.setState(_getQuiz);
	}
}

function _getQuiz(state, props) {
	var client = new QuizerClient('http://localhost:8080', null, null);

	var request = new QuizRequest();
	request.setMessage('salo');

	client.getQuiz(request, {}, (err, response) => {
		if (err) {
			alert(err.message);
		} else {
			alert(response.getMessage());
		}
	});

	return {
		quiz: {
			quizTitle: "Answer",
			quizVariants: {
				1: "xz"
			}
		}
	}
}

export default App;

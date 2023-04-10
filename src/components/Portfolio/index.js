import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Greg\'s List (Final Project)',
			description:
				'Greg\'s List is a website where you can list any item for sale. You can also browse different user\'s items as well. Once you find something you like, simply click the product and reach out via email to let the user know you\'re interested.',
			image: 'greg_list.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'NODE Js',
				'MongoDB',
				'React',
			],
			github: 'https://github.com/rabia-desing/Greg-s-List-FYP',
			deployed: 'https://github.com/rabia-desing/Greg-s-List-FYP',
		},
		{
			name: 'Amazing Password Generator',
			description:
				'Amazing Password Generator application powered by JavaScript with clean code. You can choose what to include in your password by just clicking OK, cancel from the prompts.',
			image: 'password-generator.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/rabia-desing/amazing-password-generator',
			deployed: 'https://github.com/rabia-desing/amazing-password-generator',
		},
		{
			name: 'Coding Quiz',
			description:
				'Coding Quiz application powered by JavaScript with clean code. You can answer to questions in limited time and test your skills. It provides multiple choice questions with limited time. All you have to do is to choose the right answer.',
			image: 'coding-quiz.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
			],
			github: 'https://github.com/rabia-desing/coding-quiz-application.git',
			deployed: 'https://github.com/rabia-desing/coding-quiz-application.git',
		},
		{
			name: 'Weather Forecast Application',
			description:
				'Weather Forecast application powered by JavaScript with clean code. You can search for weather of cities you want to visit before. So that you can plan you tour according to weather.',
			image: 'weather-forecast.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'jQuery',
				'Api'
			],
			github: 'https://github.com/rabia-desing/weather-ap.git',
			deployed: 'https://rabia-desing.github.io/weather-ap/',
		},
		{
			name: 'Currency Converter',
			description:
				'This app will convert any currency for users. It includes Currency converter, country location and live exchange rate table.',
			image: 'currency-converter.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'jQuery',
				'Api'
			],
			github: 'https://github.com/rabia-desing/currency-converter-1.git',
			deployed: 'https://github.com/rabia-desing/currency-converter-1.git',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;

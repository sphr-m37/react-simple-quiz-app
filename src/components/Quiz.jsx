import React, { useState } from 'react'

import './quiz.css'
export const Quiz = () => {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ]

    let [score, setScore] = useState(0)
    let [nowQuestion, setNowQuestion] = useState(0)
    let [showScore,setShowScore] = useState(false)

    const getAnswer = (answer) => {
        if (answer.isCorrect) {
            setScore(score+1)
        }
        setNowQuestion(nowQuestion + 1)
        
        if (nowQuestion === questions.length-1) {
            setNowQuestion(0)
            setShowScore(true)
        }
        
    }
    const restart = () => {
        setNowQuestion(0)
        setScore(0)
        setShowScore(false)
    }

    return (
        <div className='quiz-box'>
            {showScore ? <>
                <h2>your score : {score + '/' + questions.length}</h2>
                <button onClick={()=>restart()} >try again</button>
            </> : <div className='question'>
                <p className='question-text'>{nowQuestion +1 +'.'}{questions[nowQuestion].questionText}</p>
                <p className='answers'>
                    {
                        questions[nowQuestion].answerOptions.map((answer,index) => <span className='answer' onClick={() => getAnswer(answer)}>{answer.answerText}</span>)
                    }
                </p>

            </div>}
        </div>
    )
}

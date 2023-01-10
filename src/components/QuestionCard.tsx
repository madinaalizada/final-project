import React, {useState} from 'react';
import {AnswerObject} from '../App';
// styles
import {Wrapper, ButtonWrapper} from './QuestionCard.styles'
import useEffect from 'react';


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}
// eslint-disable-next-line react-hooks/rules-of-hooks
 
const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => (
     <Wrapper>
        <p className="number">
        Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html:question}}/>
        <div>
            {answers.map(answer => (
                <ButtonWrapper  
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
     </Wrapper>
)


export default QuestionCard;
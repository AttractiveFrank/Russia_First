import React from "react";
import './style.css'
import { bigChicha } from "../../../../assets";
import { QuestionButton } from "../../../../components/Buttons";

const ShowConcept = () => {

    const questionSqareInfo = [
        {
            title: 'Интервью с клиентом',
            button: ['Зачем проводится шоу?', 'Какие цели достигаются?', 'Чего ожидают от шоу?']
        },
        {
            title: 'Анализ потребностей',
            button: ['Что будет темой события?', 'Какие этапы войдут в сценарий шоу?', 'Что будет основной идеей?']
        },
    ]

    return (
        <div className="wrapper">
            <div className="container">
                <div className="section" style={{ textAlign: 'center' }}>
                    <div className="sectionHeader">
                        <p className="sectionTitle">Как мы начинаем работу над шоу </p>
                    </div>
                    <div className="lampChichaSquare">
                        <div style={{ width: '33.33%' }}>
                            <p className="showConceptQuestions">{questionSqareInfo[0].title}</p>
                            <div className="questionButtonGroup">
                                {questionSqareInfo[0].button.map((title, index) => (
                                    <div key={index} className={`${index === 1 && 'itemCenter'}`}><QuestionButton title={title} /></div>
                                ))}
                            </div>
                        </div>

                        <div className="chichaGroup" style={{ width: '33.33%' }}>
                            <img src={bigChicha} />
                            <p className="showConceptsm">Концепция шоу</p>
                            <p className="showConceptBasis">Основа для его разработки</p>
                        </div>

                        <div style={{ width: '33.33%' }}>
                            <p className="showConceptQuestions">{questionSqareInfo[1].title}</p>
                            <div className="questionButtonGroup">
                                {questionSqareInfo[1].button.map((title, index) => (
                                    <div key={index} className={`${index === 1 ? 'itemCenter' : 'itemEnd'}`}><QuestionButton title={title} /></div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ShowConcept;
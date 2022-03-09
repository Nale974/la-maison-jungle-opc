import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    // const isInputError = inputValue.includes('f')

    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }else{alert("🔥 Vous n'avez pas le droit d'utiliser la lettre \"f\" ici.")}
    }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm
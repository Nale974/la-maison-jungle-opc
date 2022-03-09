import { useState } from 'react'
import './Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function checkValue(value) {
        if (!value.includes('@')) {
            alert("🔥 Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea
                value={inputValue}
                onBlur={(e) => checkValue(e.target.value)}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
		</footer>
	)
}

export default Footer
import Sun from'../../assets/sun.svg'
import Water from'../../assets/water.svg'

const CareScale = ({ scaleValue, careType })=> {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? ( <img src={Sun} alt='sun-icon' /> ) : ( <img src={Water} alt='water-icon' /> )
    
    const scaleTypeFormatFr = careType === 'light' ? "lumière" : "d'arrosage"
    
    const rangeEquivalentFormatFr = ["peu","modérement","beaucoup"]
    
    function handleClick() {
        alert(`Cette plante requiert ${rangeEquivalentFormatFr[scaleValue-1]} de ${scaleTypeFormatFr}.`)
    }

    return (
        <div onClick={() => handleClick(scaleValue, careType)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale
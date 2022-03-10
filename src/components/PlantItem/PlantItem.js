import CareScale from '../CareScale/CareScale'
import './PlantItem.css'

const PlantItem = ({name, cover, id, light, water, category}) => {
    
    function handleClick(plantName) {
        alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
    }

    return(
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={()=>handleClick(name)}/>
            <div> {name} </div> 
            <div> {category} </div>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem
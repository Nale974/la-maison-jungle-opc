import { plantList } from '../../datas/plantList'
import './Categories.css'

function Categories({activeCategory, updateActiveCategory}) {
  
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    const setActiveCategory = (category) => {
        console.log(category)
        updateActiveCategory(category)
    }

    return (
        <div className='lmj-categories'>
            <select className='lmj-categories-select' name="categories" id="categories-select" value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                <option value="">--</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    );
}
  
export default Categories;
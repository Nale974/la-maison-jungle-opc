import { plantList } from '../../datas/plantList'
import PlantItem from '../PlantItem/PlantItem'
// const plantList = [ 'monstera', 'ficus lyrata', 'pothos argenté', 'yucca', 'palmier' ]

const ShoppingList = ()=> {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<PlantItem id={plant.id} name={plant.name} light={plant.light} water={plant.water} cover={plant.cover} />
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
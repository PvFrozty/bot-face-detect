import React from 'react';
import './IngrediantsTable.css';
const IngrediantsTable = ({ingArray}) => {


	//console.log(ingArray);
if({ingArray}){
	return(
		
			<div className='w-80 w-40-ns pa2 fl center'>
			<table className='white ma2 w-100'>
				<thead>
					<tr><th colspan='2'>Ingrediants</th></tr>
				</thead>
				<tbody>{ingArray}</tbody>
			</table>
		</div>
	
		);
}else{
	return( <div>&nbsp;</div>)
}

}

export default IngrediantsTable;
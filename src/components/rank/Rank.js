import React from 'react';


const Rank = ({name, entries}) => {

	return(
			
				<div className='f3 bg-white o-80 mw5 center'>
					{`${name} , your current Entry Count is...`}
				      <div className='black f1 '>
				        {entries}
				      </div>
					
				</div>
			

		);

}

export default Rank;
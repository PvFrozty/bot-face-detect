import React from 'react';

const FaceImg = ({imgUrl}) => {

	return(
		
			<div className='w-100 w-60-ns fl cf pa2'>
			<div className='center'>
				
				<img alt='' className=' ma2 h-auto' src={imgUrl} width='500px'/>
			
			</div>
			<h1>&nbsp;</h1>
		</div>
	
		);

}

export default FaceImg;
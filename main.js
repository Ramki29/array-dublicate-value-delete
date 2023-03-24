var array=[1,2,3,2,5,3];
var result=[];
function dublicate(array)
	{
	for(i=0; i<array.length; i++)
		{
		let exists=false;
		for(j=0; j<result.length; j++)
			{
			if(array[i]===result[j])
				{
				exists=true;
				break;
				}
			}		
			if(!exists)
				{
				result.push(array[i]);
				}
		}
		return result;
	}
	console.log(dublicate(array));		
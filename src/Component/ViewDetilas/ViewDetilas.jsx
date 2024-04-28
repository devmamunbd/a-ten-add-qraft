/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom"

const ViewDetilas = () => {

	const loadData = useLoaderData()
	console.log(loadData)
	const {displayName, email, photo, item, subcategory, short, price, ratting, example, time, stock} = loadData;

  return (
    <div className="mt-10"> 
			<section className="bg-gray-800 text-gray-100">
	<div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
		<div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12 bg-gray-900">
			<img src={loadData?.photo} alt="" className="object-cover h-64 rounded sm:h-96 lg:col-span-7 " />
			<div className="p-6 space-y-2 lg:col-span-5">
				<p className="text-[13px]">User Name: {displayName}</p>
				<h3 className="text-2xl font-semibold sm:text-4xl">{item}</h3>
				<span className="text-xs text-gray-400"><span className="font-bold">Sub Category:</span> {subcategory}</span>
				<p><span className="font-bold">Description: </span>{short}</p>
			<div className="flex gap-5">
				<div>
					<h2><span className="font-bold">Price: </span>{price}</h2>
				</div>
				<div>
					<h2><span className="font-bold">Ratting: </span>{ratting}</h2>
				</div>
				<div>
					<h2><span className="font-bold">Customiization: </span>{example}</h2>
				</div>
			</div>
			<div className="flex gap-5 mt-10">
				<div>
					<h2><span className="font-bold">Time: </span>{time}</h2>
				</div>
				<div>
					<h2><span className="font-bold">Stcok: </span>{stock}</h2>
				</div>
				
			</div>
			</div>
		</div>
	</div>
	</section>
		</div>
  )
}

export default ViewDetilas
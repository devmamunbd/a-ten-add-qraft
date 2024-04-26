/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom"

const ViewDetilas = () => {

	const {loadData} = useLoaderData()
	console.log(loadData)

  return (
    <div className="mt-10"> 
			<section className="bg-gray-800 text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
			<img src={loadData?.photo} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{loadData?.item}</h3>
				<span className="text-xs text-gray-400">{loadData?.short}</span>
				<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
			</div>
		</a>
	</div>
	</section>
		</div>

	
      
   
  )
}

export default ViewDetilas
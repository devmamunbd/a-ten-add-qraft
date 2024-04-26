
const MyArt = () => {
  return (
    <div className="mt-10 mx-auto">
    <h1 className="text-black font-bold text-3xl text-center">My Art And Craft List</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
    <img src="https://i.postimg.cc/W36GQczn/IMG-5395.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
    <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
    </div>
    <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
    <div className="flex justify-between items-center mt-5">
      <button className="px-7 py-2 bg-black text-white rounded-md">Upadte</button>
      <button className="px-7 py-2 bg-black text-white rounded-md">Delete</button>
    </div>
  </div>
    </div>
  </div>
  )
}

export default MyArt
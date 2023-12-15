'use client'

export function BookCard({ data }: any) {

  console.log(data)

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={data?.picture || "https://png.pngtree.com/thumb_back/fw800/background/20220910/pngtree-blank-book-cover-education-blank-close-up-photo-image_33712870.jpg"} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.title}</h5>
        </a>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.description}</p>
        </blockquote>
        <div>
          <p className="my-4">{data?.author}</p>
          <p className="my-4">{data?.category}</p>
        </div>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ver reseñas
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
      Reviews {JSON.stringify(data.reviews, null, 2)}
    </div>
  )
}
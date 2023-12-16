'use client'

import { BookCardModal } from "./book-card-modal"

export function BookCard({ data }: any) {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="h-auto max-w-full rounded-lg" src={
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          data?.picture || 'https://png.pngtree.com/thumb_back/fw800/background/20220910/pngtree-blank-book-cover-education-blank-close-up-photo-image_33712870.jpg'} alt="" />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.title}</h5>
        </a>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.description}</p>
        </blockquote>
        <div>
          <p className="my-4">{data?.author}</p>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{data?.category}</span>
        </div>
      </div>
      <div className="p-5 pt-0">
        <BookCardModal data={data} />
      </div>
    </div>
  )
}

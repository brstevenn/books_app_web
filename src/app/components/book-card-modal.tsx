import React, { useState } from 'react';
import { UserReviewCard } from './user-review-card';

export const BookCardModal = ({ data }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    // Lógica de envío del formulario
    console.log('Formulario enviado');
    closeModal();
  };

  const averageRating = data.reviews.reduce((sum: any, review: { rate: any; }) => sum + review.rate, 0) / data.reviews.length;
  const roundedAverage = Math.round(averageRating);
  const starCount = Math.min(5, Math.max(1, roundedAverage));
  const isValidStarCount = Number.isInteger(starCount) && starCount > 0;

  return (
    <div>
      <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={openModal}>
        Ver más
      </button>
      <div id="crud-modal" tabIndex={-1} aria-hidden="true" className={`fixed inset-0 z-50 overflow-auto ${isModalOpen ? 'block' : 'hidden'}`}>
        <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', height: "100%" }} >
          <div className="relative p-4 w-full max-w-5xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {data?.title}
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={closeModal}>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={
                        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                        data?.picture ||
                        'https://png.pngtree.com/thumb_back/fw800/background/20220910/pngtree-blank-book-cover-education-blank-close-up-photo-image_33712870.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <div>
                      <p className="my-4">{data?.author}</p>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {data?.category}
                      </span>
                    </div>
                    {
                      (!isNaN(averageRating) && !isNaN(starCount)) &&
                      <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          {isValidStarCount && [...Array(starCount)].map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                          {isValidStarCount && [...Array(5 - starCount)].map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{averageRating.toFixed(1)}</span>
                      </div>
                    }
                  </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.description}</p>
                <form>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Añade un comentario</label>
                      <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                    </div>
                  </div>
                  <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Añadir comentario
                  </button>
                </form>
              </div>
              {
                data?.reviews?.map((review: any, index: React.Key | null | undefined) => (
                  <div className="p-4" >
                    <UserReviewCard key={index} review={review} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardModal;

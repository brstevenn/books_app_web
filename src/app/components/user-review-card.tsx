export function UserReviewCard({ review }: any) {
  console.log(review)

  const date = new Date(review?.created_at);
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  const options = { timeZoneName: 'short' };

  const dateString = localDate.toLocaleDateString(undefined);
  const timeString = localDate.toLocaleTimeString(undefined);

  return (
    <div className="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-1 bg-white dark:bg-gray-800">
      <figure className="flex flex-col items-start justify-start p-4 text-start bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <figcaption className="flex items-center justify-center ">
          <img className="rounded-full w-9 h-9" src={review?.user?.picture || "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"} alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <p >{review?.user?.name}</p>
            <div className="text-sm text-gray-500 dark:text-gray-400 ">{review?.user?.username}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 " >{`${timeString} ${dateString}`}</div>
          </div>
        </figcaption>
        <div className="flex items-center mt-2.5 mb-5">
          {
            review?.rate !== undefined &&
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {[...Array(review.rate)].map((_, index) => (
                <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              {[...Array(5 - review.rate)].map((_, index) => (
                <svg key={index} className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          }
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{review.rate}.0</span>
        </div>
        <blockquote className="max-w-2xl text-gray-500 dark:text-gray-400">
          <p className="my-4">{review.commentary}.</p>
        </blockquote>
      </figure>
    </div>

  )
}
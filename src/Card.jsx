import React from 'react'

const Card = ({service,name,description}) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-violet-600 dark:border-violet-700">
            <div>
                <img class="rounded-t-lg" src={service}  />
            </div>
            <div class="p-5 py-10">
                <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">{description}</p>
            </div>
    </div>
  )
}

export default Card
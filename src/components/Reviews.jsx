import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../styles.css';
// import RelatedProducts from './RelatedProducts';
// import ProductDetails from './ProductDetails';
// import Reviews from './Reviews';

function Reviews() {
  // const url = '/reviews?product_id=40344';
  const url = `/reviews?product_id=403${Math.floor(Math.random() * 99)}`;
  // random url, for testing different reviews
  const [reviews, setReviews] = useState('');
  // will swap out with context
  const singleReview = { ...reviews, results: reviews.results?.slice(0, 2) };
  // const allReviews = { ...reviews, results: reviews.results?.slice() };

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => {
        console.error('error getting data', err);
      });
  }, []);

  return (
    <div className="flex flex-row-reverse justify-center w-full">

      {/* review container */}
      <div className="self-end flex flex-col flex-none w-1/2 pl-52">
        <span className="flex flex-row pt-5 text-lg font-semibold">
          {`${Math.floor(Math.random() * 999)} reviews, sorted by  `}
          <select className="underline">
            <option value="relevance"> relevance</option>
            <option value="newest"> newest</option>
            <option value="helpful"> helpful</option>
          </select>
        </span>
        <form className="pt-2 pb-2">
          <input className="border-2 rounded-l border-r-0" type="text" placeholder="Search by keyword" />
          <button className="border-2 rounded-r  border-l-0 bg-slate-200" type="submit">🔍</button>
        </form>
        <ul>
          <ReviewPosts
            // reviews={allReviews}
            reviews={singleReview} // render single review while testing code
            className="pl-5 pt-2"
          />
        </ul>
      </div>

      {/* ReviewSummary */}
      <div className="flex flex-col pl-1 pt-5">
        <p className=" text-lg font-light">Ratings & Reviews</p>
        <span className="flex flex-row pb-2">
          <p className="font-bold text-4xl"> 3.5 </p>
          <p className="flex-none text-s font-bold">
            {`${'🌝'.repeat(3)}🌗
                  ${'🌚'.repeat(5 - 4)}`}
          </p>
        </span>
        <span>
          <p>stars compoment</p>

        </span>
      </div>
    </div>
  );
}

function ReviewPosts({ reviews }) {
  return (
    <div className=" pl-1 pt-2 flex flex-col divide-y">
      {reviews.results?.map((review) => (
        <div key={review.results?.review_id}>
          <span className="flex flex-row justify-between">
            <span className="pb-2">
              <p className="flex-none">
                {`${'🌝'.repeat(review.rating)}
                  ${'🌚'.repeat(5 - review.rating)}`}
              </p>
            </span>
            <p className="font-light text-sm text-gray-400">
              {`${review.reviewer_name} ${review.date.slice(5, 10)} ${review.date.slice(0, 4)}`}
            </p>
          </span>
          <h2 className="font-semibold text-lg truncate...">{review.summary}</h2>
          <div className="pb-5 font-extralight">{review.body}</div>
        </div>
      ))}
      <span className="text-sm text-gray-600 font-light">
        Helpful?
        <a className="divide-x text-sm no-underline hover:underline" href="/reviews">     Yes   </a>
        <a className="text-xs" href="/reviews">(10)  |  </a>
        <a href="/">   Report </a>
      </span>
    </div>
  );
}

export default Reviews;

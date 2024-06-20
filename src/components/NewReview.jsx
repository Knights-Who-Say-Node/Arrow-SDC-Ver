import React, { useState, useContext } from 'react';

import { IoClose } from 'react-icons/io5';
import ReviewSummary from './ReviewSummary';
import AppContext from '../context/AppContext';
import StarRating from './StarRating';

function NewReview() {
  const [counter, setCounter] = useState(0);
  const [currentStar, setCurrentStar] = useState(0);
  const [starSelected, setStarSelected] = useState(false);
  // set in useContext
  const {
    store: { ratings }, store: { product }, store: { reviews }, hideModal,
  } = useContext(AppContext);

  // const errorMessages = {
  //       name: 'Please enter a name',
  //       email: 'Please enter valid email',
  //       reviewSummary: 'This field cannot be left blank'
  //     }

  // }

  //   return valid;
  // }
  return (
    <div className="overscroll-contain max-h-full overflow-y-auto">
      <div className="border-2 w-full flex flex-col bg-slate-100">
        <h1 className="text-3xl font-bold">Write Your Review</h1>
        <h3>{`About the ${product.name}`}</h3>
        <form className="pt-6 pb-4 flex flex-col gap-2">
          <div className="rating flex flex-row font-bold pr-6">
            <h2 className="pr-8">Overall Rating </h2>
            <button className="absolute right-0 top-0 text-black hover:bg-slate-300" onClick={hideModal}>
              <IoClose size={32} />
            </button>
            {/* <div onMouseLeave={setCurrentStar(0)}> */}
            <input
              key={0}
              type="radio"
              className="invisible mask mask-star-2 bg-primary pr-6"
                // onMouseOver={() => setCurrentStar(0)}
              disabled
              checked={Math.round(currentStar === 0)}
            />

            {[1, 2, 3, 4, 5].map((rating) => (
              <input
                key={rating}
                type="radio"
                className="mask mask-star-2 bg-primary pr-6"
                onMouseOver={() => setCurrentStar(rating)}
                  // onClick={setStarSelected(!starSelected)}
                checked={Math.round(currentStar === rating)}
              />
            ))}
            <p className="">{currentStar === 0 && <h1 />}</p>
            <p className="">{currentStar === 1 && <h1>Poor</h1>}</p>
            <p className="">{currentStar === 2 && <h1>Fair</h1>}</p>
            <p className="">{currentStar === 3 && <h1>Average</h1>}</p>
            <p className="">{currentStar === 4 && <h1>Good</h1>}</p>
            <p className="">{currentStar === 5 && <h1>Great</h1>}</p>
          </div>
          {/* </div> */}
          <h3>Do you reccommend this product?</h3>
          <label>
            <input type="radio" name="reccommend" value="yes" />
            Yes
            <input type="radio" name="reccommend" value="no" />
            No
          </label>

          <div className="rating flex flex-row">
            Product characteristics
            {[1, 2, 3, 4, 5].map((selection) => (
              <input
                key={selection}
                type="radio"
                className="mask mask-star-2 bg-primary"
                disabled
                checked={Math.round(currentStar === selection)}
              />
            ))}
          </div>
          <div className="">
            <label>
              Summary:
              <input
                className="form-input resize-none w-full pb-8"
                type="text"
                name="reviewSummary"
                id="reviewSumary"
                placeholder="Example: Best purchase ever!"
                maxLength={60}
                required
              />
            </label>
          </div>
          <div>
            <h1> Review:</h1>
            <textarea
              className="form-input resize-none w-full"
              name="reviewBody"
              id="reviewBody"
              rows={3}
              placeholder="Why did you like the product?"
              onChange={(e) => setCounter(50 - e.target.value.length)}
              required
              minLength={50}
              maxLength={1000}
            />
            <p className="pb-6 text-sm text-neutral-400">
              {counter < 50
                ? (`Minimum required characters left:${counter}`)
                : 'Minimum reached'}
            </p>
          </div>
          <label>
            What is your nickname?*
            <input
              className="form-input resize-none w-full"
              type="text"
              name="nickname"
              id="reviewSumary"
              placeholder="Example: John Smith"
              maxLength={60}
              required
            />
          </label>
          <label>
            What is your email?*
            <input
              className="form-input resize-none w-full"
              type="email"
              name="nickname"
              id="reviewSumary"
              placeholder="Example: jackson11@email.com"
              maxLength={60}
              required
            />
            <p className="text-sm text-neutral-400">For authentication reasons, you will not be emailed</p>
          </label>
          <button className="absolute right-0 top-0 text-black hover:bg-slate-300" onClick={hideModal}>
            <IoClose size={32} />
          </button>
          <button className="form-input pb-8 w-24 h-1/16">Add Photos</button>

          <button type="submit" className="form-input">Submit Review</button>
        </form>

      </div>
    </div>
  );
}

export default NewReview;

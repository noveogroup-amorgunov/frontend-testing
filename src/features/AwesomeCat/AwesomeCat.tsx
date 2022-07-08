import React from 'react';
import { fetchRandomCat } from './AwesomeCatStore'
import { RootState } from '../../store'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button } from '../../components/Button'
import './AwesomeCat.css';

type AwesomeCatProps = {};

export function AwesomeCat(props: AwesomeCatProps) {
  const { catImageUrl, loading } = useAppSelector((state: RootState) => state.awesomeCat)
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(fetchRandomCat())
  };

  return (
    <div data-tid="awesome-cat" className="awesome-cat">
      <Button text="Give me a cat!" onClick={onClick} />
      {loading === 'pending' && (
        <div data-tid="loader" className="awesome__loader">{loading}</div>
      )}
      {catImageUrl && loading === 'succeeded' && (
        <img
          className="awesome__image"
          data-tid="image"
          alt="cat"
          src={catImageUrl}
        />
      )}
    </div>
  );
}

import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import {
  distanceBetweenDateAndSecondsEllapsedSelector,
  motivatorSlice,
} from '../store/motivator/motivatorSlice';
import { useInterval } from '../hooks/useInterval';
import { DefaultLayout } from '../components/Layout/DefaultLayout';
import { Typography } from '../components/Typography/Typography';
import Form from '../components/Form/Form';

export const Home = () => {
  const dispatch = useAppDispatch();
  const distanceBetweenDateAndSecondsEllapsed = useAppSelector(
    distanceBetweenDateAndSecondsEllapsedSelector
  );

  useInterval(() => {
    dispatch(motivatorSlice.actions.incrementSecondsEllapsed());
  }, 1000);

  return (
    <DefaultLayout gapRow={3} marginVertical={5} marginHorizontal="auto">
      <Typography.Heading as="h1">Hi, what's up?</Typography.Heading>

      <Typography.Subheading as="h2">
        I know you've been here for {distanceBetweenDateAndSecondsEllapsed}, but
        for God's sake - write&nbsp;some&nbsp;code!
      </Typography.Subheading>

      <Typography.Body>
        Edit <code>pages/App.tsx</code> and save to test HMR updates.
      </Typography.Body>
      <WelcomeImage
        alt=""
        src="https://media.giphy.com/media/YcFOfbeTcHtVS/giphy.gif"
      />

      <Form />


      <Typography.Body>
        Project bootstraped with{' '}
        <Typography.Body
          as="a"
          target="_blank"
          rel="noopener"
          href="https://github.com/vitejs/vite"
        >
          Vite
        </Typography.Body>
        , using template{' '}
        <Typography.Body
          as="a"
          target="_blank"
          rel="noopener"
          href="https://github.com/ochmanski/vite-react-ts-redux-styled"
        >
          ochmanski/vite-react-ts-redux-styled
        </Typography.Body>
      </Typography.Body>
    </DefaultLayout>
  );
};

const WelcomeImage = styled.img`
  height: 360px;
  width: 100%;
  object-fit: cover;
`;

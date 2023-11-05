import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { neighborhoods } from '@/data/neighborhoods';
import * as S from './styles';

const NewsletterOption = ({ id, name, label, frequency }) => (
  <S.Column>
    <S.NewsletterButton>
      <S.Checkbox id={id} name={name} value={id} defaultChecked />
      <S.NewsletterContent>
        <S.Title>{label}</S.Title>
        <S.Description>{frequency}</S.Description>
        <S.Description>Preview</S.Description>
      </S.NewsletterContent>
    </S.NewsletterButton>
  </S.Column>
);

const Subscribe: NextPage = () => {
  return (
    <>
      <Head>
        <title>BayEye: The Best in AI-Curated Civic Insights</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.Main>
        <S.Container>
          <S.Row>
            <S.HeaderContents>
              <S.PageTitle>
                Manage Subscriptions
              </S.PageTitle>
              <br />
              <S.PageSubtitle>
                Get smarter by subscribing to any of these BayEye newsletters!
              </S.PageSubtitle>
            </S.HeaderContents>
          </S.Row>
          <S.Row>
            <NewsletterOption
              id="daily"
              name="BayEye Daily Brief"
              label="BayEye Daily Brief"
              frequency="Published 1x Day. 7x Week."
            />
            <NewsletterOption
              id="transportation"
              name="Transportation"
              label="Transportation"
              frequency="Published 1x Day. 5x Week."
            />
            <NewsletterOption
              id="community"
              name="Community"
              label="Community"
              frequency="Published 1x Day. 7x Week."
            />
            <NewsletterOption
              id="small-business"
              name="Small Business"
              label="Small Business"
              frequency="Published 1x Day. 7x Week."
            />
          </S.Row>
        </S.Container>
        <S.Container>
          <S.Row>
            <S.PageTitle>
              Neighborhoods
            </S.PageTitle>
          </S.Row>
          <S.Row>
            {
              neighborhoods.map((neighborhood) => (
                <NewsletterOption
                  key={`${neighborhood}-index`}
                  id={`${neighborhood}-index`}
                  name={neighborhood}
                  label={neighborhood}
                  frequency="Published 1x Day. 7x Week."
                />
              ))
            }          
          </S.Row>
        </S.Container>
      </S.Main>
    </>
  );
};

export default Subscribe;

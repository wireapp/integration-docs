/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {sortedApps, type App} from '@site/src/data/apps';
import Heading from '@theme/Heading';
import ShowcaseCard from '../ShowcaseCard';
import {useFilteredApps} from '../../_utils';

import styles from './styles.module.css';

function HeadingNoResult() {
  return (
    <Heading as="h2">
      <Translate id="showcase.appsList.noResult">No result</Translate>
    </Heading>
  );
}

function HeadingAllApps() {
  return (
    <Heading as="h2">
      <Translate id="showcase.appsList.allApps">All Apps</Translate>
    </Heading>
  );
}

function CardList({heading, items}: {heading?: ReactNode; items: App[]}) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} app={item} />
        ))}
      </ul>
    </div>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}

export default function ShowcaseCards() {
  const filteredApps = useFilteredApps();

  if (filteredApps.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredApps.length === sortedApps.length ? (
        <>
          <div className="margin-top--lg">
            <CardList heading={<HeadingAllApps />} items={sortedApps} />
          </div>
        </>
      ) : (
        <CardList items={filteredApps} />
      )}
    </section>
  );
}

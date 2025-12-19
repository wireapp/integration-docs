/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import CodeIcon from '@site/static/img/code.svg';
import {Tags, TagList, type TagType, type App} from '@site/src/data/apps';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import WireIcon from '../WireIcon';
import styles from './styles.module.css';

function TagItem({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  );
}

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        return <TagItem key={index} {...tagObject} />;
      })}
    </>
  );
}

function ShowcaseCard({app}: {app: App}) {
  return (
    <li key={app.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <CodeIcon />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={app.website} className={styles.showcaseCardLink}>
              {app.title}
            </Link>
          </Heading>
          {app.source && (
            <Link
              href={app.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}>
              <Translate id="showcase.card.sourceLink">source</Translate>
            </Link>
          )}
          {app.tags.includes('wire-developed') && (
            <WireIcon size="large" style={{marginLeft: '0.5rem'}} />
          )}
        </div>
        <p className={styles.showcaseCardBody}>{app.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={app.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);

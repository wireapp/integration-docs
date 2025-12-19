/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file located at `src/pages/showcase/` directory of this source tree.
 */

import React, {type ComponentProps} from 'react';
import clsx from 'clsx';
import WireLogo from '@site/static/img/logo-transparent.svg';

import styles from './styles.module.css';

interface Props {
  className?: string;
  style?: ComponentProps<'svg'>['style'];
  size: 'small' | 'medium' | 'large';
}

export default function WireIcon({
  size,
  className,
  style,
}: Props): React.ReactNode {
  return (
    <WireLogo
      className={clsx(styles.svg, styles[size], className)}
      style={style}
      viewBox="0 0 130 130"
    />
  );
}

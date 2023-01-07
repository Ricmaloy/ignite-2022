import { ImgHTMLAttributes } from 'react';

import styles from './styles.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({hasBorder = true, src, alt, ...rest}: AvatarProps) {
  return (
    <img 
        {...rest}
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt={alt}
      />
  )
}
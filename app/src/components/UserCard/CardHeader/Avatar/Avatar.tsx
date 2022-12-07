import ImagePlaceholder from 'components/ImagePlaceholder/ImagePlaceholder';
import React, { memo } from 'react';

interface IAvatarProps {
  url?: string;
}
const Avatar = memo<IAvatarProps>(({ url }) => {
  if (!url) {
    return <ImagePlaceholder />;
  }
  return <img src={url} />;
});

export default Avatar;

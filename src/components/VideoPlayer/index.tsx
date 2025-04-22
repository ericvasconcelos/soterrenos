import ReactPlayer from 'react-player';

import { IVideoPlayer } from './types';

export const VideoPlayer = ({ url }: IVideoPlayer) => {
  const isYoutube = url.includes('youtube');

  const style = isYoutube
    ? 'pt-[56.25%] [&>div]:absolute [&>div]:top-0 [&>div]:left-0 [&>div]:right-0 [&>div]:bottom-0'
    : '';

  return (
    <div className="overflow-hidden	rounded-lg w-full">
      <div className="w-auto h-auto">
        <ReactPlayer
          url={url}
          className={'relative ' + style}
          width="auto"
          height="auto"
        />
      </div>
    </div>
  );
};

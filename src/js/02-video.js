import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveVideoTime = throttle(
  data => localStorage.setItem('videoplayer-current-time', data.seconds),
  1000
);
player.on('timeupdate', saveVideoTime);

const updateDelay = throttle(seconds => {
  localStorage.getItem('videoplayer-current-time', seconds);
}, 1000);

//player.updateTime = () => player.setCurrentTime().then(updateDelay);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

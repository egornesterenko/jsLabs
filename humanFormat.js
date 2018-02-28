'use strict';

function formatDuration(seconds) {
  if (seconds === 0) { return 'now'; }

  const years   = Math.floor(seconds / (60 * 60 * 24 * 365));
  const days    = Math.floor(seconds / (60 * 60 * 24)) % 365;
  const hours   = Math.floor(seconds / (60 * 60)) % 24;
  const minutes = Math.floor(seconds /  60) % 60;
  const second = Math.floor(seconds %  60);

  const duration = [years, days, hours, minutes, second];
  const names = ['year', 'day', 'hour', 'minute', 'second'];

  const linked = duration.map((i, j) => {
    if (i > 1) { return i + ' ' + names[j] + 's'; }
    if (i === 1) { return i + ' ' + names[j]; }
  });
  
   const linked2 = linked.filter(function(i) { return i !== undefined})

  if (linked2.length > 1) {
    const last = linked2.pop();
    return linked2.join(', ') + ' and ' + last;
  } else {
    return linked2[0];
  }
}

console.log(formatDuration(3662));

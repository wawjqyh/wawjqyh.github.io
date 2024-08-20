const exec = require('child_process').exec;

let timeList = ['00:09:23', '00:23:13'];

function execute(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, function(error, stdout, stderr) {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

function getSecond(time) {
  let timeArr = time.split(':');
  return parseInt(timeArr[0]) * 3600 + parseInt(timeArr[1] * 60) + parseInt(timeArr[2]);
}

function format00(time) {
  return time < 10 ? `0${time}` : time;
}

function getLength(start, end) {
  let startSecond = getSecond(start);
  let endSecond = getSecond(end);
  let length = endSecond - startSecond;

  let hour = Math.floor(length / 3600);
  let minute = Math.floor((length % 3600) / 60);
  let second = Math.floor(length % 60);

  return `${format00(hour)}:${format00(minute)}:${format00(second)}`;
}

async function cut(timeList) {
  for (let i = 0; i < timeList.length; i++) {
    try {
      let startTime = i === 0 ? '00:00:00' : timeList[i - 1];
      let length = getLength(startTime, timeList[i]);
      const res = await execute(
        `ffmpeg -ss ${startTime} -t ${length} -i 111.mp4 -vcodec copy -acodec copy ${i + 1}.mp4`
      );
      console.log(`${i + 1}: ${length}`);
    } catch (err) {
      console.log(err);
    }
  }
}

cut(timeList);

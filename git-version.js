/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const now = new Date();

const formatted = new Intl.DateTimeFormat("vi-VN", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Ho_Chi_Minh"
}).format(now);

const data = JSON.stringify({ date: formatted }, null, '\t');

fs.writeFileSync('build-version.json', data, 'utf-8');
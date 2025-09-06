## Deploy lên server

Cài NodeJS 20

Cài yarn

Clone code

Vào repo chạy `yarn` để cài dependencies, chạy `node git-version.js` để lấy ngày hiện tại làm ngày build gần nhất.

Chạy `yarn build` để build

Chạy lệnh `whereis yarn` để lấy path folder của yarn, update lại giá trị ExecStart với đường dẫn yarn hiện có trong server.

Chạy các lệnh sau:
```
sudo cp ./deploy/test-github-action.service /etc/systemd/system
sudo systemctl daemon-reload
sudo systemctl enable test-github-action.service
sudo systemctl start test-github-action.service
journalctl -u test-github-action.service -f
```
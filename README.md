## Deploy lên server

Cài NodeJS 20

Cài yarn

Clone code

Vào repo chạy `yarn` để cài dependencies, chạy `node git-version.js` để lấy ngày hiện tại làm ngày build gần nhất.

Chạy `yarn build` để build

Chạy lệnh `which node` để lấy path folder bin của node (path chỉ dừng lại ở bin thôi, bỏ phần /node ở phía sau), update lại giá trị Environment với đường dẫn bin hiện có trong server.

Chạy lệnh `whereis yarn` để lấy path yarn, update lại giá trị ExecStart với đường dẫn yarn hiện có trong server.

Chạy các lệnh sau:
```
sudo cp ./deploy/test-github-action.service /etc/systemd/system
sudo systemctl daemon-reload
sudo systemctl enable test-github-action.service
sudo systemctl start test-github-action.service
journalctl -u test-github-action.service -f
```

Cấu hình reverse proxy trỏ về port 3000
```
sudo vim /etc/nginx/sites-available/test-github-action
```
Copy nội dung file `./deploy/webserver-config.conf` vào file cấu hình
Tạo symbolic link
```
sudo ln -s /etc/nginx/sites-available/test-github-action /etc/nginx/sites-enabled
```
Khởi động lại nginx: `sudo service nginx restart`
SSH_HOST=
node git-version.js
yarn
yarn build
ssh ubuntu@$SSH_HOST "rm -rf /home/ubuntu/test-github-action/.next && mkdir /home/ubuntu/test-github-action/.next"
scp -r .next/* ubuntu@$SSH_HOST:/home/ubuntu/test-github-action/.next/
ssh ubuntu@$SSH_HOST "cd /home/ubuntu/test-github-action && source ~/.nvm/nvm.sh && nvm use 20 && git pull && yarn && sudo service test-github-action restart"
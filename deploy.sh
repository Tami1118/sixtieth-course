#!/usr/bin/env sh

# abort on errors 
# 發生錯誤時執行終止指令
set -e

# build 
# 打包編譯
npm run build

# navigate into the build output directory
# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# 部署到自定義網域
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'


# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/<USERNAME>/<REPO>.git main:gh-pages

# ssh 模式
# git push -f https://github.com/Tami1118/hex-vue-hw-week6.git main:gh-pages

# http 模式(目前以這方式較容易推上去)
git push -f https://github.com/Tami1118/sixtieth-course.git main:gh-pages


cd -
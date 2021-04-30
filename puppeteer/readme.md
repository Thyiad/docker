- image
    > puppeteer的镜像
    > 本地测试build时我的命令：docker build . -t="thyiad/puppeteer:v1"
- compose
    > 测试项目，编译其中的image-app
    > image-app/Dockerfile 的environment和networks可删除，我的测试机器上面有配置nginx镜像，所以加了一个这样的配置
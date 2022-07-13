### 客户端
1. [x] vue
### 服务端
1. [x] SSM
2. [x] Spring Security+jjwt
3. [x] slf4j+lopback
4. [x] Nginx反向代理
5. [x] mysql读写分离
6. [x] redis
7. [x] docker
8. [x] zookeeper+KafKa
9. [x] dubbo


>asd

docker kafka
```shell
# pull image
docker pull wurstmeister/zookeeper
docker pull wurstmeister/kafka
```
```shell
# zookeeper
docker run -it --name zookeeper -p 2181:2181 -d wurstmeister/zookeeper
```
```shell
# kafka
docker run -d -p 19092:9092 --name kafka \
-e KAFKA_BROKER_ID=0 \
-e KAFKA_ZOOKEEPER_CONNECT=121.41.111.8:2181/kafka \
-e KAFKA_ADVERTIESED_HOST_NAME=121.41.111.8 \
-e KAFKA_ADVERTIESED_LISTENERS=PLAINTEXT://121.41.111.8:19092 \
-e KAFKA_LISTENERS=PLAINTEXT://127.0.0.1:9092 \
-e KAFKA_HEAP_OPTS="-Xmx256M -Xms128M" \
-t wurstmeister/kafka
```
https://www.freesion.com/article/4725674774/
https://www.runoob.com/docker/docker-logs-command.html

docker run -d -p 9092:9092 --name kafka \
-e KAFKA_BROKER_ID=0 \
-e KAFKA_ZOOKEEPER_CONNECT=121.41.97.173:2181 \
-e KAFKA_ADVERTIESED_HOST_NAME=121.41.97.173.8 \
-e KAFKA_ADVERTIESED_LISTENERS=PLAINTEXT://121.41.97.173:9092 \
-e KAFKA_LISTENERS=PLAINTEXT://127.0.0.1:9092 \
-e KAFKA_HEAP_OPTS="-Xmx256M -Xms128M" \
-t wurstmeister/kafka



IMAGE_NAME = your-dockerhub-username/express-drizzle-app
TAG = latest

build:
	docker build -t $(IMAGE_NAME):$(TAG) .

push:
	docker push $(IMAGE_NAME):$(TAG)

compose-dev:
	docker-compose up --build

compose-prod:
	docker-compose -f docker-compose.prod.yml up -d

clean:
	docker-compose down -v
	docker rmi $(IMAGE_NAME):$(TAG) || true

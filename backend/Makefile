registry=veglad/iiotanalyser
backend-repo=${registry}:latest

backend_build_image:
	docker build . -t $(backend-repo)

backend_image_push:
	docker push $(backend-repo)

cleanup:
	docker rmi -f $(backend-repo) || true

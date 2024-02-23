get-protos:
	@echo "🔍getting protos from remote repository"
	@git submodule add --progress --force https://github.com/EGANOW-CORE-SERVICES/EGANOW-CORE-PROTOS.git protos

# for older versions of git
update-protos: get-protos
	@echo "🔄updating protos"
	@git submodule update --remote --init --recursive

gen-protos: update-protos
	@echo "🛠️installing dependencies"
	@yarn add ts-protoc-gen @improbable-eng/grpc-web google-protobuf @types/google-protobuf
	@echo "🚀generating protos"
	@chmod +x ./scripts/gen-protos.sh && ./scripts/gen-protos.sh
	@echo "👍done"


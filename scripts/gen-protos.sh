# shellcheck disable=SC2046
PROTOC_GEN_TS_PATH="./node_modules/ts-protoc-gen/bin/protoc-gen-ts"
PROTO_PATH=protos
OUT_DIR=./src/generated

# create output directory
mkdir -p $OUT_DIR

# remove all old files
rm -f $OUT_DIR/*.ts

# generate new files
protoc \
  -I=$PROTO_PATH $(find $PROTO_PATH -iname "*.proto") \
  --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
  --js_out=import_style=commonjs,binary:${OUT_DIR} \
  --ts_out=service=grpc-web:${OUT_DIR}

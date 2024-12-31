#!/bin/bash

aws s3 sync dist/ s3://mattmiling-www
aws cloudfront create-invalidation --distribution-id $AWS_CF_DIST_ID --paths '/*'

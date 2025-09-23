##Get deployment details:
aws deploy get-deployment --deployment-id <new-deployment-id>


#creeta deployment rollackup
aws deploy create-deployment \
  --application-name WebAAp-Deploy \
  --deployment-group-name WebAPP-Deployment-GP \
  --revision '{
    "revisionType": "S3",
    "s3Location": {
      "bucket": "mytest-app-artifactstp",
      "key": "WebAPP-Pipe/SourceArti/exEtnF0",
      "bundleType": "zip"
    }
  }' \
  --deployment-config-name CodeDeployDefault.AllAtOnce \
  --description "Rollback to previous deployment d-ZFCGYEZWD"


##GetDeployment:
aws deploy get-deployment --deployment-id <new-deployment-id>

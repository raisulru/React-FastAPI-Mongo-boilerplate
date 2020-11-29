import logging
import boto3
from botocore.exceptions import ClientError
from S3.Config import Config
from S3.S3 import S3

class FileManagementInterface:

    def connect(file_name, bucket, object_name=None):
        access_key = 'abc'
        secret_key = 'abcde'

        cfg = Config(None, access_key, secret_key)
        cfg.host_base = 'eu-central-1.linodeobjects.com'
        cfg.bucket_location = 'EU'
        cfg.host_bucket = 'my-bucket.eu-central-1.linodeobjects.com'
        cfg.website_endpoint = 'http://my-bucket.eu-central-1.linodeobjects.com'
        cfg.use_https = False

        s3 = S3(cfg)
        print(s3.bucket_list('my-bucket'))
    
    def get_url():
        file_path = ''
        return file_path
    
    def upload():
        pass


class AWS(FileManagementInterface):
   pass


class LINODE(FileManagementInterface):
   pass


class GOOGLE(FileManagementInterface):
   pass


class AZURE(FileManagementInterface):
   pass


class CloudFileManageMent:

   def create_connection(self, typ):
      targetclass = typ.capitalize()
      return globals()[targetclass]()
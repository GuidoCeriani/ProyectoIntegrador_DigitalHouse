module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "c1g3-bucket"
  acl    = "public-read"

}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "c1g3"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
  database_subnets = ["10.0.1.0/24", "10.0.2.0/24"]


  create_database_subnet_group           = true
  create_database_subnet_route_table     = true
  create_database_internet_gateway_route = true

  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "c1g3"
    Terraform = "true"
    Environment = "dev"
  }
}

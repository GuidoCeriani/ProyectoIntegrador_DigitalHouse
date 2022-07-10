module "db" {
  source  = "terraform-aws-modules/rds/aws"

  identifier = "c1g3"

  engine            = "mysql"
  engine_version    = "5.7.38"
  instance_class    = "db.t3.micro"
  allocated_storage = 5

  db_name  = "demodb"
  username = "user"
  port     = "3306"

#  create_db_subnet_group = true
#  subnet_ids             = [module.vpc.database_subnets[0], module.vpc.database_subnets[1]]
  db_subnet_group_name = module.vpc.database_subnet_group_name
  
  # DB parameter group
  family = "mysql5.7"

  # DB option group
  major_engine_version = "5.7"

  publicly_accessible = true

  vpc_security_group_ids = [ aws_security_group.allow_rds.id ]

}

resource "aws_security_group" "allow_rds" {
  name        = "allow_rds"
  description = "Allow 3306 inbound traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description      = "3306 from world"
    from_port        = 3306
    to_port          = 3306
    protocol         = "tcp"
    cidr_blocks      = [ "0.0.0.0/0" ]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

}

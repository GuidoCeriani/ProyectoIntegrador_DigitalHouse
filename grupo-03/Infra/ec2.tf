data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["amzn2-ami-kernel-5.10-hvm-2.0.*-x86_64-gp2"]
  }

  owners = ["137112412989"]
}

resource "aws_instance" "frontend" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  subnet_id     = module.vpc.public_subnets[0]
  security_groups = [ aws_security_group.frontend.id , aws_security_group.ssh.id ]
  key_name = aws_key_pair.ssh-key.key_name
  tags = {
    Name = "c1g3-frontend"
    Terraform = "true"
    Environment = "dev"
  }
}

resource "aws_instance" "backend" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  subnet_id     = module.vpc.public_subnets[1]
  security_groups = [ aws_security_group.backend.id , aws_security_group.ssh.id ]
  key_name = aws_key_pair.ssh-key.key_name
  tags = {
    Name = "c1g3-backend"
    Terraform = "true"
    Environment = "dev"
  }
}




resource "aws_security_group" "frontend" {
  name        = "allow_frontend"
  description = "Allow 80 inbound traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description      = "80 from world"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = [ "0.0.0.0/0" ]
  }
  ingress {
    description      = "443 from world"
    from_port        = 443
    to_port          = 443
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
resource "aws_security_group" "backend" {
  name        = "allow_backend"
  description = "Allow 8080 inbound traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description      = "8080 from world"
    from_port        = 8080
    to_port          = 8080
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
resource "aws_security_group" "ssh" {
  name        = "allow_ssh"
  description = "Allow 22 inbound traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description      = "22 from world"
    from_port        = 22
    to_port          = 22
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

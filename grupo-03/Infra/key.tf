resource "tls_private_key" "rsa-4096" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "ssh-key" {
  key_name   = "c1g3-key"
  public_key = tls_private_key.rsa-4096.public_key_openssh
}

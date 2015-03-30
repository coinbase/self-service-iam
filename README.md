Self-Service Cloud Security
===========================

AWS Cloudformation templates for self-service IAM policies.  These allow your engineering team to manage their own users, keys and permissions at scale, in development.  See our full blog post with instructions on how to use [here](https://developers.coinbase.com/blog/2015/03/30/self-service-iam).

These templates split users up into three types: Admins, Engineers and Service users.  Admins can manage all users and Engineers can manage their own keys and permissions, which are isolated in S3 with IAM variables.

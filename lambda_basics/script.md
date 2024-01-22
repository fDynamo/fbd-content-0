## What we want to teach
- Creating first lambda function
- Calling DynamoDB and other AWS services
- Function URLs

[[../Content Slides/Lambda 101|Lambda 101]]
## Script
In this quick video, I'll teach you how to create your first lambda function, how to call other AWS services, and how to expose your lambda function to the internet through HTTP requests. And, really, this is all you need to start building projects with. Timestamps are in the description, let's get started!

### First lambda function

First thing we want to do is go to AWS lambda and click create function. Now there are three options. With blueprint you can use a pre made lambda and edit that. With containers you can use images registered in ECR. But we'll be going with this author from scratch where we'll be starting with nothing.

Go ahead and input a name for your function. I'll call mine tutorial-lambda.

For runtime I'll be choosing the latest python runtime. If you don't use python, stick around since most of the concepts in this video are language agnostic. Leave everything as is and click create.

After waiting for a few seconds you should be redirected here. For now, you can ignore everything at the top and go to the code editor. Lambda will run the lambda_function.py file and execute the lambda_handler function.

This event parameter is where the code accesses arguments when triggered. This context parameter is how you access information about how the lambda was triggered. To demonstrate I'll access the "message" parameter from event and return it.

To test this function, we'll create a new test event. Go to this tab and give your event a name. Here, you can specify the arguments to send to your code. So I will add a message argument and set it to "hello world". Now let's save that and run it. Great!

- There are three options
	- Basic to start from scratch
	- Blueprint for blueprints
	- Containers for containers
- Click basic, python
- Click create
- Head over down
- Create a test
- Run test
- Change variables
- Run test again

## Calling DynamoDB
- How to invoke other functions
- Explain pre installed libraries
- Use boto3 to make dynamo db calls
	- What is dynamo db
- Write function and run
	- Fail cuz of permissions
- Go to IAM and find role
- Add dynamo db invocation policy
- Try again, works

One common thing you might do in Lambda is to access AWS services. I will demonstrate how to do so by reading a DynamoDB table. There are two parts to this. The first is that you can use the AWS SDK that is built into the Lambda runtime to access other AWS services. The second is that you need to give your lambda role the correct permissions to do so.

Back to our Lambda function, let's say I want to read this DynamoDB table called test_table. What I'll  do is import boto3, the AWS SDK for Python. For other languages, you can check the docs to see what SDK is built in and how they work. Then I'll add this code to read entries from the table.

Now if we run this using the test event we created earlier, the arguments don't matter, we'll see that we get an AccessDenied error.

To fix this you'll head on over to IAM, then to roles. Find the role that was created when the Lambda was created. By default it will be prefixed with your lambda name. So ours was tutorial-lambda.

You then want to click here, attach policies, and for DynamoDB I'll attach this read only policy. You can create your own policy or choose others for other services, but this will do for now. 

After we attach these policies, we can head back to our lambda. Running the same test again, we see that it works!



## Function urls
- Explain what it's for
- Create one
- Make a request
- Show how to get body

If you want to to expose your lambda function to the internet, you can create a function URL and invoke the function through HTTP requests. To do that go to configuration and click create function URL. Now since this is a basic tutorial we won't gover authentication, so we'll choose Auth type none. This will make the url public. If you want to configure CORS you can click this box. But we'll just go ahead and click create.

Now we have our URL. Now go over to your favorite HTTP client. I'll use the Thunder Client extension in VS code. Now you'll see that if we make a simple request, we get the response that we coded in earlier.

Now if we go back to our code in the console, let's make it so that we grab the request body and return it. To do that, access body in event. In the description below I will be linking the full documentation as to what the event variable is when invoked through a function url.

Now let's just return the body here.

Now let's give our request a body. Now when we send the request, we get our body back! Awesome

## Closing
Now we've barely scratched the surface of what you can do with AWS lambda. First of all, you should  remember that function invocations cost money, so try not to expose your function url publically. You should know that if you are planning on hosting a REST API on AWS Lambda, you are better off integrating Lambda with API gateway to make the endpoint more secure. For more complex functions, you will want to setup a local development environment with docker containers to simulate the lambda runtime for testing. Let me know if any of those sound like interesting topics, and I'll be sure to cover them.

Thanks so much for watching, remember to like comment and subscribe. Peace :)



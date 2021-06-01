# Setting up the application

### Step 1 :

Run the following command to install the dependencies

```node
npm i
```

### Step 2 :

Create a .env file and set the following keys

```node
DEV_MONGO_URL=mongodb://localhost:27017/
```

### Step 3 :

Run the following command to get the application up and running on port 8000

```node
npm run dev
```

## Note :

The IP address and country feature is not supported in localhost, as the localhost's IP is 127.0.0.1. To the the features up and running, install ngrok globally and run it on localhost.
The following command installs ngrok globally.

```node
npm install ngrok -g
```

Run the following command to get ngrok to run on port 8000

```node
ngrok http 8000
```



# leadgeneration
Lead Generation Module with Audience creation, Content creation, Publishing, Analytics and Billing management of Facebook and Linkedin

# Running in local
- Clone the project
- Here project contain `api` backend and `ui` front end. You need to runn individually.
- For backend...
 - Go to api. `cd api/`
 - Copy env file. `cp .env.example .env`. Ensure you have installed mongo db.
 - Create environment using `pipenv`(Please download if don't have). Run `pipenv shell`
 - Install Dependency. `pipenv install`
 - Run app. `./runserver.sh`
- For front end...
 - Go to ui directory. `cd ui/`
 - copy env file. `cp .env.example .env`
 - Replace credentials for yours.
 - Install dependency. `npm install`
 - Run app. `HTTPS=true npm start`

# For Production
- First ensure about .env file setup
- Run `docker-compose up --build`
- You can run api or ui individually using docker-compose


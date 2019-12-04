[![Build Status](https://travis-ci.com/YvesIraguha/TeaHouse.svg?token=Xfh3syWppzv1c1gEMVkP&branch=develop)](https://travis-ci.com/YvesIraguha/TeaHouse) [![Maintainability](https://api.codeclimate.com/v1/badges/fe510100605cd565165f/maintainability)](https://codeclimate.com/github/YvesIraguha/TeaHouse/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/fe510100605cd565165f/test_coverage)](https://codeclimate.com/github/YvesIraguha/TeaHouse/test_coverage) [![Coverage Status](https://coveralls.io/repos/github/YvesIraguha/TeaHouse/badge.svg?branch=add-badges-170046511)](https://coveralls.io/github/YvesIraguha/TeaHouse?branch=add-badges-170046511)

# TeaHouse

A platform for art-works showcasing

## Getting Started

### Technologies

- Node.js
- Express
- JavaScript
- Mocha
- Chai
- PostgreSQL
- Sequelize

### Prerequisites

- Install [Node.js](https://nodejs.org/en/download/).
- Install [Express](https://www.npmjs.com/package/express), fast, unopinionated, minimalist web framework for node.
- Install [PostgreSQL](https://www.postgresql.org/), a powerful open source object-relational database system.
- Install [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

### Setting up development environment

- After cloning the repository, and adding credentials from `.env.sample` in `.env`, run commands below to install dependencies and start the server.

```
- npm install
- npm run migrate
- npm run seed
- npm run start
```

After starting the server, consume this endpoint `localhost:port/api/v1/auth/login` with

```
{
  email:"example@example.com"
}
```

You should get an error or a success message.

Example of error:

```
{
  error:"Invalid credentials"

}
```

Example of success message:

```
{
 message:"Logged in successfully",
 data:{
  token:"random-string"
  }
}
```

## Running the tests

- `npm run test` to run tests
- `export COVERALLS_REPO_TOKEN= ****** && npm run coveralls` to upload coverage report.

### And coding style tests

[Airbnb](https://github.com/airbnb/javascript) style guide

## Authors

- **Yves Iraguha** - [@yves_iraguha](https://twitter.com/yves_iraguha)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

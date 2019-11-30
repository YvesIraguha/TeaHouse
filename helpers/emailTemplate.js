const emailTemplate = (firstName, resetLink) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Reset password</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
      }
      .row1 {
        min-height: 80px;
        background-color: hsl(19, 97%, 23%);
        vertical-align: middle;
      }
      .row1 p {
        line-height: 80px;
        font-size: 25px;
        font-weight: 400;
        color: #ffffff;
        margin-left: 10%;
      }
      .row2 {
        width: 60%;
        min-width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
        margin-bottom: 5%;
      }

      .row2 p {
        color: #707070;
        font-size: larger;
      }

      .row4 {
        background-color: rgb(67, 35, 209);
        text-align: center;
        width: 22%;
        margin-top: 5%;
        min-width: 200px;
        height: 45px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 8px;
      }
      .row4 a {
        line-height: 43px;
        color: #ffffff;
        text-decoration: none;
        font-size: 20px;
      }

      #firstName{
        margin-bottom:15px;
      }
    </style>
  </head>
  <body>
    <header class="row1">
      <p>
        TEAHOUSE
      </p>
    </header>
    <div class="row2">
      <p id="firstName">Hey ${firstName}</p>
      <p>
        You have requested to reset password, please click the button below to reset
        password. If you did not request this action, let us know at
        yves.iraguha@gmail.com
      </p>
    </div>
    <div class="row4">
      <a href="${resetLink}" target="_blank">Reset password</a>
    </div>
  </body>
</html>

`;
export default emailTemplate;

const submitWorkTemplate = (fullName, type) => `<!DOCTYPE html>
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
      <p id="firstName">Hello Yves Iraguha</p>
      <p>
        I hope that you are doing fine, this is ${fullName}. As it is indicated from submission page of the TEAHOUSE platform, I would like to submit my work so that it can be evaluated and be published on the platform. The attached file is the actual work. 
        The type of this work is ${type}.
      </p>
    </div>
  </body>
</html>

`;
export default submitWorkTemplate;

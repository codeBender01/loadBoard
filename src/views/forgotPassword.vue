<template>
  <div class="login">
    <div class="container">
      <div class="logo">
        <router-link to="/"> LOGO </router-link>
      </div>
      <div class="form">
        <h1>Forgot the password</h1>
        <p>
          Enter your email address and wait for the behavior code to be sent.
        </p>
        <form>
          <label for="mail">Mail Address</label>
          <input type="password" id="mail" placeholder="Enter your mail" />

          <input type="submit" value="Send" class="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bg: url(../assets/login.png);

.login {
  background: $bg no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;

  font-family: "NunitoSans", sans-serif;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  .logo {
    height: 120px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 135%;
    letter-spacing: 0.01em;
    width: 10%;
    padding: 40px 0;
  }

  .form {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    background: #4a4754;
    opacity: 0.5;
    border: 1px solid #bbbabf;
    backdrop-filter: blur(60px);
    border-radius: 40px;
    padding: 20px 35px;
    color: #ffffff;
    width: 35%;
    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 116%;
      border-bottom: 1px solid #ffffff;
    }

    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 132%;
      margin: 10px 0 20px 0;
      width: 80%;
    }
    input {
      display: block;
      background: linear-gradient(
        109.46deg,
        rgba(201, 201, 201, 0.8) 1.57%,
        rgba(196, 196, 196, 0.1) 100%
      );
      // opacity: 0.5;
      border-radius: 7px;
      &::placeholder {
        font-weight: 200;
        font-size: 16px;
        line-height: 147%;
        color: #ffffff;
      }
      width: 100%;
      padding: 10px 0;
      padding-left: 10px;
      border: none;
      outline: none;
      margin-bottom: 20px;
    }

    .tiny {
      font-weight: 300;
      font-size: 12px;
      line-height: 130%;
      text-align: center;
      margin-top: 3px;
      margin-left: 5px;
    }

    label {
      font-weight: 400;
      font-size: 16px;
      line-height: 147%;
      margin-right: 40px;
    }

    .submit {
      background: #b3c5ff;
      border-radius: 7px;
      font-weight: 500;
      font-size: 18px;
      line-height: 135%;
      letter-spacing: 0.01em;
      color: #000000;
      width: 102%;
      margin-top: 20px;
    }

    .reg {
      text-align: center;
      font-size: 16px;
      line-height: 147%;
      margin: 0;
      margin-top: 15px;
    }
  }
}
</style>

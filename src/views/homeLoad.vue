<template>
  <div class="home">
    <div class="container">
      <div class="welcome">
        <h1>Your load board with us</h1>
        <div class="stats">
          <div class="stat" v-for="stat in stats" :key="stat.id">
            <span>{{ stat.title }}</span>
            <span class="num">{{ stat.num }}</span>
          </div>
        </div>
      </div>

      <div class="blurry"></div>

      <div class="load-board">
        <h2 class="h2">What is a Load Board?</h2>
        <p v-for="p in pS" :key="p" class="p">
          {{ p }}
        </p>
      </div>
    </div>
    <div class="fast-track">
      <div class="container">
        <div class="desc">
          <h2 class="h2">Fast track to success</h2>
          <p class="p">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure
          </p>
          <button>added new post</button>
        </div>
        <img src="../assets/illustration.png" alt="" />
      </div>
    </div>

    <div class="about">
      <div class="container">
        <h2 class="h2">Why Choose us?</h2>
        <div class="benefits">
          <div class="ben flex">
            <div class="text">
              <h3>Cost saving</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure
              </p>
            </div>
            <img src="../assets/cost.png" alt="cost" />
          </div>
          <div class="ben flex">
            <img src="../assets/safe.png" alt="safety" />
            <div class="text">
              <h3 class="right">Safe Packing</h3>
              <p class="right">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure
              </p>
            </div>
          </div>
          <div class="ben flex">
            <div class="text">
              <h3>Fastest shiping</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure
              </p>
            </div>
            <img src="../assets/fast.png" alt="car" />
          </div>
        </div>
      </div>
    </div>

    <div class="contact">
      <div class="container">
        <div class="flex">
          <img src="../assets/contact.png" alt="contact" />
          <div class="forms">
            <h3>Contact Us</h3>
            <form action="#">
              <label for="name">Enter your name</label>
              <input type="text" placeholder="Your name" id="name" />
              <label for="email">Enter your name</label>

              <input type="email" placeholder="Email Address" id="email" />
              <label for="message">Enter your message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
              <input type="submit" value="Send" class="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        {
          id: 1,
          title: "Van",
          num: "99,999",
        },
        {
          id: 2,
          title: "Reefer",
          num: "99,999",
        },
        {
          id: 3,
          title: "Fletbed",
          num: "99,999",
        },
        {
          id: 4,
          title: "Other",
          num: "99,999",
        },
      ],

      pS: [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$homeBg: url("../assets/main.png");
$blur: url("../assets/line.png");
$mainColor: #ffffff;

.h2 {
  font-weight: 700;
  font-size: 48px;
  line-height: 116%;
  text-decoration: underline;
  text-underline-offset: 5px;
}
.p {
  font-weight: 700;
  font-size: 18px;
  line-height: 200%;
  letter-spacing: 0.01em;
}

.home {
  width: 100%;
  height: 100vh;
  background: $homeBg no-repeat center;
  background-size: cover;
  font-family: "NunitoSans", sans-serif;
  color: $mainColor;
  .container {
    height: auto;
    .welcome {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      h1 {
        text-align: center;
        font-weight: 800;
        font-size: 72px;
        line-height: 110%;
        letter-spacing: 0.005em;
        margin-top: 30vh;
      }

      .stats {
        width: auto;
        margin: 0 auto;
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;
        .stat {
          margin: 0 10px;
          span {
            margin: auto;
            text-align: center;
            display: table;
            font-weight: 400;
            font-size: 48px;
            line-height: 116%;
          }

          .num {
            font-family: "NunitoSans-Bold";
          }
        }
      }
    }

    .blurry {
      background: $blur no-repeat center;
      background-size: cover;
      position: absolute;

      bottom: 0;
      height: 50px;
      width: 100%;
      left: 0;
    }

    .load-board {
      margin: 100px 0 50px 0;
      p {
        margin: 20px 0;
      }
    }
  }
  .fast-track {
    background-color: #0f0d15;
    .container {
      display: flex;
      justify-content: space-between;
      padding: 50px 0;
      .desc {
        width: 40%;
        p {
          margin: 20px 0;
        }
        button {
          font-weight: 700;
          font-size: 1rem;
          line-height: 147%;
          width: 40%;
          padding: 10px;
          border-radius: 10px;
          background-color: #a5a3a9;
          color: #34303e;
          cursor: pointer;
          &:hover {
            transition: all 0.2s;
            opacity: 0.7;
          }
        }
      }
    }
  }

  .about {
    .container {
      padding: 50px 0;
      .benefits {
        .ben {
          align-items: initial;
          margin-top: 40px;
          .text {
            width: 40%;
            h3 {
              font-weight: 800;
              font-size: 34px;
              line-height: 117%;
            }
            p {
              margin: 10px 0;
              font-weight: 700;
              font-size: 18px;
              line-height: 155%;
              letter-spacing: 0.01em;
            }
            .right {
              text-align: right;
            }
          }
        }
      }
    }
  }

  .contact {
    height: 100vh;
    .container {
      border: 1px solid #bbbabf;
      border-radius: 15px;
      background: #4a4754;
      .flex {
        padding: 50px 30px;
        justify-content: space-around;
        img {
          width: 50%;
          height: 80%;
        }
        .forms {
          width: 35%;
          h3 {
            font-weight: 700;
            font-size: 48px;
            line-height: 116%;
            margin-bottom: 5px;
          }
          form {
            input {
              outline: none;
              width: 90%;
              padding: 15px 10px;
              background: linear-gradient(
                109.46deg,
                rgba(201, 201, 201, 0.9) 1.57%,
                rgba(196, 196, 196, 0.1) 100%
              );
              opacity: 0.5;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 7px;
              margin: 15px 0;
              font-size: 18px;

              &::placeholder {
                color: $mainColor;
                font-weight: 200;
                font-size: 18px;
                line-height: 147%;
              }

              :-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: $mainColor;
                font-weight: 200;
                font-size: 18px;
                line-height: 147%;
              }

              ::-ms-input-placeholder {
                /* Microsoft Edge */
                color: $mainColor;
                font-weight: 200;
                font-size: 18px;
                line-height: 147%;
              }
            }
            textarea {
              width: 90%;
              resize: none;
              outline: none;
              padding: 15px 11px;
              height: 150px;
              font-size: 18px;
              margin-top: 15px;

              background: linear-gradient(
                109.46deg,
                rgba(201, 201, 201, 0.9) 1.57%,
                rgba(196, 196, 196, 0.1) 100%
              );
              opacity: 0.5;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 7px;
              &::placeholder {
                color: $mainColor;
                font-weight: 200;
                font-size: 18px;
                line-height: 147%;
                font-family: "NunitoSans", sans-serif;
              }
            }
            label {
              position: absolute;
              left: -9999999px;
              top: auto;
              width: 1px;
              height: 1px;
            }

            .submit {
              background: #b3c5ff;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 7px;
              width: 95%;
              font-weight: 700;
              font-size: 18px;
              line-height: 135%;
              letter-spacing: 0.01em;
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
}
</style>

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
        }
      }
    }
  }
}
</style>

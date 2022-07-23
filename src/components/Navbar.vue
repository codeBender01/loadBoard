<template>
  <header class="header" @click="removeOnclick">
    <div class="upper-nav flex">
      <div class="lf flex">
        <span> Load Board </span>
        <div class="vertical-line"></div>
        <span> Rates </span>
        <div class="vertical-line"></div>
        <span> Directory </span>
      </div>
      <div class="rg flex">
        <img v-for="icon in icons" :key="icon.id" :src="icon.img" alt="icon" />
        <div>
          <router-link to="/login">
            <span class="login link">Login</span>
          </router-link>
          <span>or</span>
          <router-link to="/register">
            <span class="link">Register</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-container flex">
      <div class="logo">
        <h1>{{ logoName }}</h1>
      </div>

      <ul class="header-links-desktop">
        <router-link
          v-for="link in links.slice(0, 5)"
          :key="link.id"
          :to="link.route"
          exact
        >
          <li
            @click="activeClassApplier(link.id)"
            :class="link.id === selectedNavLink ? 'active-clicked' : ''"
            class="header-link"
          >
            {{ link.innerText }}
          </li>
        </router-link>

        <div class="logo-mobile">
          <h1 class="h1">{{ logoName }}</h1>
        </div>
      </ul>

      <ul class="header-links-mobile">
        <router-link v-for="link in links" :key="link.id" :to="link.route">
          <li
            @click="activeClassApplier(link.id)"
            :class="link.id === selectedNavLink ? 'active-clicked' : ''"
            class="header-link"
          >
            {{ link.innerText }}
          </li>
        </router-link>

        <div class="logo-mobile">
          <h1 class="h1">{{ logoName }}</h1>
        </div>
      </ul>

      <div class="burger-menu" @click="classListToggler">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>

    <RouterView />
  </header>
</template>

<script>
import home from "../assets/homeI.png";
import help from "../assets/help.png";
import message from "../assets/message.png";

export default {
  name: "NavBar",
  data() {
    return {
      icons: [
        {
          id: "message",
          img: message,
        },
        {
          id: "home",
          img: home,
        },
        {
          id: "help",
          img: help,
        },
      ],
      logoName: "Logo",

      links: [
        {
          id: 1,
          innerText: "Home",
          route: "/",
        },
        {
          id: 2,
          innerText: "Post Load",
          route: "/postload",
        },
        {
          id: 3,
          innerText: "Search Trucks",
          route: "/searchtrucks",
        },
        {
          id: 4,
          innerText: "Post trucks",
          route: "/posttrucks",
        },
        {
          id: 5,
          innerText: "Search loads",
          route: "/searchloads",
        },
        {
          id: 6,
          innerText: "Help Centre",
          route: "/",
        },
        {
          id: 7,
          innerText: "Information",
          route: "/",
        },
      ],

      selectedNavLink: undefined,
    };
  },

  methods: {
    activeClassApplier(id) {
      this.selectedNavLink = id;
      this.$el.classList.toggle("active");
      this.$el.querySelector(".burger-menu").classList.toggle("active");
      this.$el.querySelector(".header-links-mobile").classList.toggle("active");
    },

    classListToggler() {
      this.$el.classList.toggle("active");
      this.$el.querySelector(".burger-menu").classList.toggle("active");
      this.$el.querySelector(".header-links-mobile").classList.toggle("active");
    },

    removeOnclick(event) {
      event.stopPropagation();
    },
  },

  mounted() {
    this.$router
      .isReady()
      .then(() => {
        for (let link of this.links) {
          if (this.$route.fullPath === link.route) {
            this.selectedNavLink = link.id;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const header = this.$el;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("back");
        header.style.width = "100%";
      } else {
        header.classList.remove("back");
      }
    });

    window.removeEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("back");
      } else {
        header.classList.remove("back");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
$font-color: #fafafa;
.header {
  position: fixed;
  width: 100%;
  font-family: "NunitoSans", sans-serif;
  z-index: 11111;
  background: rgba(21, 46, 53, 0.6);
  border-radius: 0 0 20px 20px;
  backdrop-filter: blur(10px);

  .upper-nav {
    border-bottom: 1px solid #b1b1b1;
    padding-inline: 5px;
    .lf {
      .vertical-line {
        height: 14px;
        width: 1px;
        background-color: $font-color;
      }
      span {
        margin: 0 5px;
        color: $font-color;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
      }
    }

    .rg {
      img {
        margin: 0 10px;
      }
      a {
        text-decoration: none;
      }
      span {
        color: $font-color;
        padding: 3px 10px;
        padding-right: 0;
        font-size: 12px;
        line-height: 15px;
        text-decoration: none;
      }

      .login {
        border-left: 1px solid #b1b1b1;
      }

      .link {
        color: #99b1ff;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .header-container {
    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 3rem;

      h1 {
        text-transform: uppercase;
        color: $font-color;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 135%;
        letter-spacing: 0.01em;

        @media (max-width: 950px) {
          & {
            font-size: 2.8rem;
          }
        }
      }
    }

    .header-links-desktop,
    .header-links-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      height: 120px;
      margin-right: 3rem;

      .logo-mobile {
        display: none;
      }
      li {
        padding: 0 15px;
        margin: 0 10px;
        height: 100%;
        color: #fafafa;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;

        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          transition: ease 0.2s;
        }
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      @media (max-width: 950px) {
        & {
          margin-right: 1rem;
          li {
            font-size: 12px;
            margin: 0;
          }
        }
      }
    }

    .active-clicked {
      margin-top: 0;
      text-decoration: underline;
    }

    .header-links-mobile {
      display: none;
    }

    .mobile {
      display: none;
    }

    .burger-menu {
      display: none;
      cursor: pointer;
      .line {
        width: 25px;
        height: 3px;
        background-color: #fafafa;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}

.header.back {
  background-color: #202123;
  transition: ease-in 0.3s;
}

@media screen and (max-width: 769px) {
  .header {
    .upper-nav {
      .rg {
        img {
          display: none;
        }
      }
    }
    .header-container {
      width: 90%;
      margin: 0 auto;
      padding: 15px;

      .logo {
        margin: 0;
        h1 {
          font-size: 48px;
          line-height: 65px;
        }
      }
      .header-links-mobile {
        display: flex;
        position: fixed;
        top: 118px;
        left: -100000000px;
        width: 100%;
        transition: 0.3s;
        flex-direction: column;
        height: auto;
        background: rgba(21, 46, 53, 0.8);
        backdrop-filter: blur(4px);
        align-items: flex-start;
        .logo-mobile {
          margin-left: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 80px;
          img {
            width: 30%;
            height: 30%;
            margin-right: 15px;
          }

          h1 {
            font-weight: 800;
            font-size: 48px;
            line-height: 65px;
            text-align: center;
            text-transform: uppercase;
            margin-right: 20px;
          }
        }

        li {
          padding: 20px;
          margin: 0;
          font-weight: 400;
          font-size: 34px;
          border-bottom: 3px solid #8e8c94;
          width: 100vw;
          text-align: left;
          &:hover {
            transition: ease 0.2s;
            text-decoration: none;
            color: #c32021;
          }
        }
        .active-clicked {
          padding: 20px;
          text-decoration: none;
          color: #c32021;
        }
      }

      .header-links-desktop {
        display: none;
      }

      .header-links-mobile.active {
        left: 0;
        padding: 0;
      }
      .burger-menu {
        display: block;
      }

      .burger-menu.active {
        .line {
          &:nth-child(2) {
            opacity: 0;
          }
        }
      }

      .burger-menu.active {
        .line {
          &:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          &:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
        }
      }
    }
  }

  .header.active {
    background: rgba(21, 46, 53, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 0;
  }
}
</style>

<template>
  <div class="filter">
    <div class="flex upper-filter">
      <div class="flex">
        <div class="results">
          <span>{{ numOfResults }}</span>
          <span class="text">total results</span>
        </div>

        <div class="do">
          <label for="dh-o">DH-O</label>
          <input type="text" id="dh-o" />
        </div>
        <div class="dd">
          <label for="dh-d">DH-D</label>
          <input type="text" id="dh-d" />
        </div>
        <div class="f-p">
          <label for="standard-select">F/P</label>
          <div class="select">
            <select id="standard-select" name="">
              <option label=" "></option>
              <option value="Full">Full</option>
              <option value="Partial">Partial</option>
            </select>
            <span class="focus"></span>
          </div>
        </div>
      </div>
      <div class="filter-buttons">
        <button
          class="all"
          @click="selected = 1"
          :class="{ highlight: selected === 1 }"
        >
          All
        </button>
        <button @click="selected = 2" :class="{ highlight: selected === 2 }">
          Preffered
        </button>
        <button
          class="blocked"
          @click="selected = 3"
          :class="{ highlight: selected === 3 }"
        >
          Blocked
        </button>
      </div>
    </div>

    <div class="matches">
      <div class="results">
        <div class="arrow">
          <img src="../assets/arrow-rg.png" alt="arrow" />
        </div>
        <span>{{ numOfResults }}</span>
        <span class="text">exact matches</span>
      </div>

      <div class="message">
        <p>
          We’re sorry there are now results for this search. You may find some
          results if you widen your filters.
        </p>
      </div>

      <div class="results">
        <div class="up-arrow">
          <img src="../assets/up-arrows.png" alt="arrow" />
        </div>

        <span>26</span>
        <span class="text">similar matches</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numOfResults: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      selected: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
:root {
  --select-border: #777;
  --select-focus: gray;
  --select-arrow: var(--select-border);
}

.results {
  padding-top: 4px;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 135%;
    letter-spacing: 0.01em;
    color: #f9f9f9;
    text-transform: uppercase;
  }
  .text {
    margin-left: 3px;
  }
}

select {
  appearance: none;
  background-color: #1d1929;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  color: #ffffff;
  padding: 0.15em 0.5em 0 0;
  height: 35px;
}

input {
  height: 30px;
  outline: none;
  border: 1px solid #bbbabf;
  background: transparent;
  padding: 2px 5px;
  font-size: 1.2rem;
  color: #fff;
  margin-left: 5px;
  width: 50px;
}

.filter {
  font-family: "NunitoSans", sans-serif;
  margin: 10px 0;

  .upper-filter {
    color: #fff;
    .flex {
      font-size: 14px;
      font-weight: 400;
      font-size: 14px;
      line-height: 135%;
      letter-spacing: 0.01em;

      div {
        margin: 0 10px;
      }

      .f-p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .select {
          width: 100%;
          min-width: 10ch;
          max-width: 30ch;
          border: 1px solid #bbbabf;
          padding: 0 5px;
          cursor: pointer;
          line-height: 1.1;
          background-color: transparent;
          display: flex;
          align-items: center;
          position: relative;
          text-align: left;
          color: #ffffff;

          &::after {
            content: "";
            width: 0.5em;
            height: 0.3em;
            background-color: #ffffff;
            clip-path: polygon(100% 0%, 0 0%, 50% 100%);
          }
        }

        select:focus + .focus {
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border: 2px solid var(--select-focus);
          border-radius: inherit;
        }
      }
    }

    .filter-buttons {
      button {
        font-weight: 700;
        font-size: 14px;
        line-height: 147%;
        text-align: center;
        color: #ffffff;
        border: none;
        padding: 2px 5px;
        background: transparent;
        transition: ease-in 0.2s;
        border: 1px solid #bbbabf;
        text-transform: uppercase;
        outline: none;
      }

      .all {
        border-radius: 15px 0 0 15px;
        padding: 2px 30px;
        border-right: none;
      }

      .highlight {
        background: #ffffff;
        color: #1d1929;
      }

      .blocked {
        margin-left: 5px;
      }
    }
  }
  .matches {
    padding: 0 3px;
    .results {
      align-items: center;
      .arrow {
        background: #000;
        display: inline;
        border-radius: 0 5px 5px 0;
        padding: 0 12px;
        margin-right: 5px;
        img {
          width: 5px;
        }
      }

      .up-arrow {
        display: inline;
        margin-right: 5px;
      }
    }
  }

  .message {
    background: linear-gradient(
      254.81deg,
      rgba(26, 80, 255, 0.1) 8.13%,
      rgba(30, 233, 182, 0.1) 92.46%
    );
    color: #ffffff;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    padding: 30px 20px 50px 20px;
    border-radius: 5px;
    margin: 5px 0;
    p {
      width: 30%;
    }
  }
}
</style>

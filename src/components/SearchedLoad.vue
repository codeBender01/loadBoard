<template>
  <div class="searched">
    <div @click="changeClass" ref="load" class="preview">
      <div class="flex">
        <img :src="searchedData.bell" alt="reminder" class="icon" />

        <span class="time">{{ searchedData.truck }}</span>

        <span class="time">{{ searchedData.date }}</span>

        <span class="time">{{ searchedData.from }}</span>
        <span class="time">{{ searchedData.to }}</span>
        <span class="time">{{ searchedData.dHO }}</span>
        <span class="time">{{ searchedData.dHD }}</span>
        <span class="time">{{ searchedData.filling }}</span>
        <span class="time">{{ searchedData.length }}</span>
        <span class="time">{{ searchedData.weight }}</span>
        <span class="time">{{ searchedData.searchBack }}</span>
      </div>
      <div class="non-displayed">
        <button class="hot-market">Hot market map</button>

        <div class="action-buttons flex">
          <button @click="stop" class="edit-btn">Edit</button>
          <button @click="stop" class="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchedData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeClass() {
      this.$refs.load.classList.toggle("change");
    },
    stop(e) {
      e.stopPropagation();
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #ffffff;
$checkbox-size: 1rem;
$checkedbox-size: 1.2rem;

$dark: #15171e;
$white: mix($dark, white, 20%);

.searched {
  font-family: "NunitoSans", sans-serif;

  width: 100%;
  .preview {
    height: auto;
    padding: 10px 0;
    width: 100%;
    border-bottom: 2px solid #000000;
    background: #1d1929;
    transition: all 0.5s linear;

    .flex {
      padding: 0 10px;

      .time {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #e8e8ea;
      }

      .icon {
        width: 15px;
        height: 15px;
      }
    }

    .non-displayed {
      display: none;
    }
  }

  .change {
    transition: all 1s;
    border-radius: 20px;
    background: rgba(119, 117, 127, 0.1);
    backdrop-filter: blur(10px);
    text-transform: uppercase;
    border: none;
    margin: 10px 0;

    .non-displayed {
      display: initial;
      position: relative;
      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 116%;
        color: #4a4754;
        margin: 0 5px;
        text-transform: none;
      }

      .hot-market {
        font-weight: 400;
        font-size: 14px;
        line-height: 116%;
        color: #99b1ff;
        background: transparent;
        border: none;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
          transition: ease-in 0.1s;
        }
      }

      .action-buttons {
        width: 12%;
        margin-left: auto;
        margin-top: 80px;
        button {
          font-weight: 400;
          font-size: 14px;
          line-height: 147%;
          color: #34303e;
          border-radius: 10px;
          border: none;
          padding: 5px 10px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .edit-btn {
          background: #ffb780;
        }
        .delete-btn {
          background: #f87e7f;
        }
      }
    }
  }
}
</style>

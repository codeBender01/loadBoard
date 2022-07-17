<template>
  <div class="posted">
    <div class="container">
      <div @click="changeClass" ref="load" class="preview">
        <div class="flex">
          <div class="alert-check flex" @click="stop">
            <input
              class="checkbox-pull"
              type="checkbox"
              :id="postedData.alertId"
            />
            <label :for="postedData.alertId"><span></span></label>
            <span class="checkmark"></span>
          </div>

          <div
            :class="postedData.indicator.on ? 'green' : 'red'"
            class="indicator"
          >
            {{ postedData.indicator.text }}
          </div>

          <img :src="postedData.bell" alt="reminder" class="icon" />
          <img :src="postedData.star" alt="rating" class="icon" />
          <span class="time">
            {{ postedData.postedTime }}
          </span>
          <div class="status">
            {{ postedData.status }}
          </div>
          <span class="time">{{ postedData.date }}</span>
          <span class="time">{{ postedData.daytime }}</span>
          <span class="time">{{ postedData.from }}</span>
          <span class="time">{{ postedData.to }}</span>
          <span class="time">{{ postedData.dockHours }}</span>
          <span class="time">{{ postedData.truck }}</span>
          <span class="time">{{ postedData.filling }}</span>
          <span class="time">{{ postedData.length }}</span>
          <span class="time">{{ postedData.weight }}</span>
          <span class="time">{{ postedData.offerRate }}</span>
        </div>
        <div class="non-displayed">
          <div class="load-info flex">
            <div class="ref-id">
              <span> Ref ID: </span>
              <span class="value">
                {{ postedData.refId }}
              </span>
            </div>

            <div class="flex">
              <div class="phone-number">
                <span>Contact:</span>
                <span class="value">{{ postedData.contact }}</span>
              </div>

              <div class="distance">
                <span>Trip Miles:</span>
                <span class="value">{{ postedData.miles }}</span>
              </div>
            </div>
          </div>

          <div class="comments flex">
            <div>
              <span>Comment 1:</span>
              <span class="value">{{ postedData.comment1 }}</span>
            </div>
            <div>
              <span>Comment 2:</span>
              <span class="value">{{ postedData.comment2 }}</span>
            </div>
            <div>
              <span>Commodity:</span>
              <span class="value">{{ postedData.commodity }}</span>
            </div>
          </div>

          <div class="action-buttons flex">
            <button @click="stop" class="copy-btn">Copy</button>
            <button @click="stop" class="edit-btn">Edit</button>
            <button @click="stop" class="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postedData: {
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

.posted {
  font-family: "NunitoSans", sans-serif;

  .container {
    .preview {
      height: auto;
      padding: 10px 0;
      width: 100%;
      border-bottom: 2px solid #000000;
      background: #1d1929;
      transition: all 0.5s linear;

      .flex {
        padding: 0 10px;
        .alert-check {
          position: relative;
          background: transparent;
          .checkbox-pull {
            display: none;
          }
          .checkbox-pull + label span {
            display: inline-block;
            width: 10px;
            height: 19px;
            margin: 0 5px -4px 0; /*layout relationship between check and label*/
            &:before,
            &:after {
              -webkit-transition: all 0.3s ease-in-out;
              -moz-transition: all 0.3s ease-in-out;
              transition: all 0.3s ease-in-out;
              content: "";
              position: absolute;
              z-index: 1;
              width: $checkbox-size;
              height: $checkbox-size;
              background: transparent;
              border: 2px solid $border-color;
            }
            &:after {
              z-index: 0;
              border: none;
            }
          }
          .checkbox-pull:checked + label span {
            &:after {
              width: $checkedbox-size;
              height: $checkedbox-size;
              background: $border-color;
              animation: pull 0.4s linear;
            }
          }
        }

        .indicator {
          font-weight: 700;
          font-size: 12px;
          line-height: 15px;
          border-radius: 5px;
          padding: 3px 5px;
        }

        .green {
          color: #05b417;
          border: 1px solid #05b417;
        }

        .red {
          color: #b41005;
          border: 1px solid #b41005;
        }

        .time {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #e8e8ea;
        }

        .status {
          border: 1px solid #bbbabf;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #e8e8ea;
          text-transform: uppercase;
          border-radius: 5px;
          padding: 3px 8px;
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
        span {
          font-weight: 400;
          font-size: 12px;
          line-height: 116%;
          color: #4a4754;
          margin: 0 5px;
          text-transform: none;
        }
        .value {
          font-weight: 700;
          font-size: 12px;
          line-height: 112%;
          color: #e8e8ea;
        }
        .load-info {
          width: 50%;
          margin-top: 30px;

          .ref-id {
            span {
              display: table;
            }
          }
        }

        .comments {
          width: 30%;
          margin-top: 30px;
          span {
            display: table;
          }
        }

        .action-buttons {
          width: 15%;
          margin-left: auto;
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
          .copy-btn {
            background: #8ff4db;
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
}
</style>

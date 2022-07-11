<template>
  <div class="post-load">
    <div class="container">
      <div class="flex head">
        <div class="new">
          <slot name="iconOfNew"></slot>
          <span>{{ allData.title }}</span>
        </div>
        <slot name="download" class="download"></slot>
      </div>
      <div class="flex data">
        <div class="alert-check flex">
          <input class="checkbox-pull" type="checkbox" id="check3" />
          <label for="check3"><span></span></label>
          <span class="checkmark"></span>
          {{ allData.alert }}
        </div>

        <table>
          <thead>
            <tr>
              <th v-for="info in allData.info" :key="info.id">
                {{ info.title }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td v-for="info in allData.info" :key="info.id">
                <div class="capsule flex" v-if="info.value">
                  <span>{{ info.value }}</span>

                  <img v-if="info.icon" :src="info.icon" alt="icon" />
                  <img
                    v-if="info.iconSecond"
                    :src="info.iconSecond"
                    alt="icon"
                  />
                </div>
              </td>
            </tr>
            <tr class="xclsv">
              <td v-for="info in allData.info" :key="info.id">
                <div class="capsule flex" v-if="info.valueMore">
                  <span>{{ info.valueMore }}</span>
                  <img v-if="info.icon" :src="info.icon" alt="icon" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="inputs">
        <div class="contacts flex" v-if="allData.contacts.required">
          <div class="refId capsule">
            <span class="label">Ref ID</span>
            <span class="value">123456</span>
          </div>
          <div class="phone capsule">
            <div>
              <span class="label">Contacts</span>

              <span class="value">+993(62)00-00-00</span>
            </div>
            <img :src="allData.dropdownIcon" alt="dropdown" />
          </div>
        </div>
        <div class="comments flex" v-if="allData.comments.required">
          <div class="comment capsule">
            <span class="label">Comments 1</span>
            <input type="text" placeholder="--" />
          </div>
          <div class="comment capsule">
            <span class="label">Comments 2</span>
            <input type="text" placeholder="--" />
          </div>
          <div class="comment capsule">
            <span class="label">Commodity</span>
            <input type="text" placeholder="--" />
          </div>
        </div>
        <div class="post">
          <div class="alarm-btn capsule flex">
            <img :src="allData.lamp" alt="lamp" />
            <span>Set audible alarm</span>
          </div>
          <button class="post-btn btn">POST</button>
          <button class="close-btn btn">&#10006;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allData: {
      type: Object,
      required: true,
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

@keyframes pull {
  0% {
    height: 0;
  }
  100% {
    height: 1.2rem;
  }
}

.capsule {
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  background: #34303e;
  padding: 2px 5px;
  cursor: pointer;
  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 112%;
    letter-spacing: 0.02em;
    font-feature-settings: "salt" on, "liga" off;
    color: #e8e8ea;
  }
}

.post-load {
  font-family: "NunitoSans", sans-serif;
  margin-top: 100px;
  .container {
    background-color: #0f0d15;
    border-radius: 20px 20px 0 0;

    .head {
      border-radius: 20px 20px 0 0;
      background: rgba(119, 117, 127, 0.1);
      backdrop-filter: blur(10px);
      padding: 20px 25px;
      justify-content: initial;
      .new {
        padding: 5px 10px;
        color: #ffffff;
        display: flex;
        align-items: center;
        border: 1px solid #4a4754;
        border-radius: 18px;
        margin-right: 15px;
        cursor: pointer;
        span {
          font-weight: 400;
          font-size: 14px;
          line-height: 116%;
          margin-left: 10px;
        }
        .download {
          cursor: pointer;
        }
      }
    }
    .data {
      padding: 15px 12px;
      padding-top: 12px;
      align-items: flex-start;
      .alert-check {
        width: 4%;
        font-weight: 600;
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.03em;
        color: #4a4754;
        position: relative;

        .checkbox-pull {
          display: none;
        }
        .checkbox-pull + label span {
          display: inline-block;
          width: 25px;
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
      table {
        width: 92%;
        table-layout: fixed;
        thead {
          font-weight: 600;
          font-size: 12px;
          line-height: 130%;
          letter-spacing: 0.03em;
          color: #4a4754;
          text-align: left;
        }
        tbody {
          color: #ffffff;
          tr {
            td {
              padding-top: 10px;
              .capsule {
                width: 80%;
              }
            }
          }
          .xclsv {
            td {
              padding-top: 10px;
              .capsule {
                width: 100%;
              }
            }
          }
        }
      }
    }

    .inputs {
      width: 100%;
      background: rgba(119, 117, 127, 0.1);
      margin-top: -4.33rem;
      padding: 120px 0;
      position: relative;
      .contacts {
        width: 50%;
        padding: 0 10px;
        .refId {
          padding: 5px 35px 5px 10px;
        }
        .phone {
          width: 25%;
          padding: 5px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .label {
        font-weight: 400;
        font-size: 12px;
        line-height: 116%;
        align-items: center;
        color: #4a4754;
      }
      span {
        display: table;
      }

      .comments {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-bottom: 10px;
        .comment {
          padding: 3px 15px;
          margin: 0 10px;
          input {
            background: transparent;
            border: none;
            outline: none;
            color: #ffffff;
          }
        }
      }

      .post {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 10px;
        margin-bottom: 10px;

        padding: 5px;
        .alarm-btn {
          padding: 4px 8px;
          cursor: pointer;
          img {
            margin-right: 3px;
          }
        }

        .btn {
          background: #a5a3a9;
          border-radius: 10px;
          padding: 8px;
          margin-top: 8px;
          cursor: pointer;
          border: none;
          font-weight: 700;
          font-size: 16px;
          line-height: 147%;
          color: #34303e;
        }

        .close-btn {
          float: right;
          width: 25%;
          padding: 8px 5px;
        }

        .post-btn {
          width: 65%;
        }
      }
    }
  }
}
</style>

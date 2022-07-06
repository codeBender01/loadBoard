<template>
  <div class="post-load">
    <div class="container">
      <div class="flex head">
        <div class="new">
          <slot name="iconOfNew"></slot>
          <span>{{ titleOfNew }}</span>
        </div>
        <slot name="download" class="download"></slot>
      </div>
      <div class="flex data">
        <div class="alert-check flex">
          <label for="alert">Check for alert</label>
          <input type="checkbox" id="alert" />
          <span class="checkmark"></span>
          {{ alert }}
        </div>

        <div class="flex info-headers">
          <span v-for="info in infoHeaders" :key="info"> {{ info }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleOfNew: {
      required: true,
      type: String,
    },
    alert: String,
    infoHeaders: Array,
  },
};
</script>

<style lang="scss" scoped>
.post-load {
  font-family: "NunitoSans", sans-serif;
  .container {
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
      background-color: #0f0d15;
      padding: 12px;
      .alert-check {
        width: 4%;
        font-weight: 600;
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.03em;
        color: #4a4754;
        position: relative;
        label {
          position: absolute;
          left: -9999999px;
          top: auto;
          width: 1px;
          height: 1px;
        }
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 15px;
          width: 15px;
          top: 0;
          left: 0;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 15px;
          width: 15px;
          background-color: #eee;
        }
        .alert-check input:checked ~ .checkmark {
          background-color: #2196f3;
        }
      }
      .info-headers {
        width: 90%;
        span {
          font-weight: 600;
          font-size: 12px;
          line-height: 130%;
          letter-spacing: 0.03em;
          color: #4a4754;
        }
      }
    }
  }
}
</style>

<template>
  <div class="filtered">
    <div class="container">
      <div class="border">
        <table>
          <thead>
            <tr>
              <th>
                <div class="alert-check flex" @click="stop">
                  <input
                    class="checkbox-pull"
                    type="checkbox"
                    id="filter-check"
                  />
                  <label for="filter-check"><span></span></label>
                  <span class="checkmark"></span>
                  <img :src="filteredData.dropdownIcon" alt="icon" />
                  <img :src="filteredData.stackIcon" alt="icon" />
                </div>
              </th>
              <th v-for="filter in filteredData.filters" :key="filter.id">
                {{ filter.title }}
                <img :src="filter.icon" alt="" v-if="filter.icon" />
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="value in filteredData.values" :key="value.id">
              <td>
                <div class="alert-check flex" @click="stop">
                  <input class="checkbox-pull" type="checkbox" id="check2" />
                  <label for="check2"><span></span></label>
                  <span class="checkmark"></span>
                </div>
              </td>

              <td v-for="subvalue in value" :key="subvalue">
                {{ subvalue }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filteredData: {
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

.filtered {
  font-family: "NunitoSans", sans-serif;
  .container {
    .border {
      border: 1px solid #34303e;
      border-radius: 18px 18px 0 0;
      padding: 10px 7px;
      table {
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        thead {
          font-weight: 600;
          font-size: 12px;
          line-height: 130%;
          letter-spacing: 0.03em;
          color: #4a4754;
          margin-bottom: 1rem;
        }

        tbody {
          font-weight: 400;
          font-size: 14px;
          line-height: 116%;
          color: #f9f9f9;
        }

        tbody:before {
          content: "@";
          display: block;
          line-height: 5px;
          text-indent: -99999px;
        }
      }
      table td {
        border-top: 1px solid #000000;
        border-bottom: 1px solid #000000;
        padding: 7px 0;
      }
    }
  }
}
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
</style>

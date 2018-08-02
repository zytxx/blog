<template>
  <div class='time-warp'
       ref='time'>
    <div class='cur-time'>
      <div class='month'>
        <div class='day'>{{`${month} / ${day}`}}</div>
        <div class='day'>{{week}}</div>
      </div>
      <div class='year'> /{{year}}</div><br />
    </div>
    <div class='detail'>
      {{`${hour} ${minute} ${second}`}}
    </div>
    <div class='process'>
      <div class='gone'
           ref='gone'>
      </div>
      <div class='tips'>{{`今年已经过去${percent * 100}%啦！！！`}}</div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.time-warp {
  width: 100%;
  position: relative;
  &::after {
    position: absolute;
    content: '-1s';
    top: 48px;
    right: 5px;
    font-size: 12px;
    animation: run 1s ease-out infinite;
    @keyframes run {
      0% {
        transform: translate(0px, 0px);
        opacity: 1;
      }
      50% {
        transform: translate(10px, 0px);
        opacity: 0.5;
      }
      100% {
        transform: translate(20px, 0px);
        opacity: 0;
      }
    }
  }
  .cur-time {
    color: #2db7f5;
    width: 100%;
    display: flex;
    .month {
      margin-top: 6px;
      flex: 1;
      .day {
        line-height: 16px;
        text-align: right;
      }
    }
    .year {
      flex: 1;
      line-height: 48px;
      font-size: 48px;
    }
  }
  .detail {
    color: #2db7f5;
    position: relative;
    text-align: center;
    margin-left: 68px;
    font-size: 34px;
    &::after {
      position: absolute;
      content: ':';
      top: 0px;
      left: 69px;
      font-size: 30px;
    }
    &::before {
      position: absolute;
      content: ':';
      top: 0px;
      left: 116px;
      font-size: 30px;
      animation: dropdown0 1s ease-in-out infinite;
      @keyframes dropdown0 {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }
  .process {
    width: 80%;
    height: 20px;
    margin: 10px auto;
    background: #2db7f5;
    margin-left: 68px;
    position: relative;
    .gone {
      height: 20px;
      background: gray;
    }
    .tips {
      font-size: 12px;
      position: absolute;
      top: 20px;
    }
  }
}
</style>
<script>
export default {
  name: 'calendar',
  data () {
    return {
      year: '',
      month: '',
      day: '',
      week: '',
      hour: '',
      minute: '',
      second: '',
      percent: ''
    }
  },
  mounted () {
    this.getTime()
  },
  methods: {
    getTime () {
      let today = new Date()
      this.year = today.getFullYear()
      this.month = checkTime(today.getMonth() + 1)
      this.day = checkTime(today.getDate())
      this.hour = checkTime(today.getHours())
      this.minute = checkTime(today.getMinutes())
      this.second = checkTime(today.getSeconds())
      if (today.getDay() === 0) this.week = '星期日 '
      if (today.getDay() === 1) this.week = '星期一 '
      if (today.getDay() === 2) this.week = '星期二 '
      if (today.getDay() === 3) this.week = '星期三 '
      if (today.getDay() === 4) this.week = '星期四 '
      if (today.getDay() === 5) this.week = '星期五 '
      if (today.getDay() === 6) this.week = '星期六 '
      this.$refs.time.style.color = randomRgbColor()
      let totalDays = isLeapYear(this.year)
      let curDays = ''
      if (totalDays === 365) {
        let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        curDays = getCurDays(days, this.month, this.day)
      } else {
        let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        curDays = getCurDays(days, this.month, this.day)
      }
      this.percent = (curDays / totalDays).toFixed(2)
      this.$refs.gone.style.width = this.percent * 100 + '%'
      setTimeout(this.getTime, 1000)
      function checkTime (i) {
        if (i < 10) {
          i = '0' + i
        }
        return i
      }
      function randomRgbColor () {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        return `rgb(${r},${g},${b})`
      }
      function isLeapYear (Year) {
        if ((((Year % 4) === 0) && ((Year % 100) !== 0)) || ((Year % 400) === 0)) {
          return 366
        } else { return 365 }
      }
      function getCurDays (days, month, day) {
        let curDays = 0
        for (let i = 0; i < month - 1; i++) {
          curDays += days[i]
        }
        curDays += Number(day)
        return curDays
      }
    }
  }
}
</script>

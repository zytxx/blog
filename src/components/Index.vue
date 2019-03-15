<template>
  <div class='main'>
    <div class="left">
      <div class="article">
        <div class="title">
          <span>{{aa}}</span>
        </div>
        <div class="brief">{{brief}}</div>
        <div class="record">
          <span class="skim">阅读(9)</span>
          <span class="ctime">2018-09-27</span>
        </div>
      </div>
      <div class="article">
        <div class="title">
          <span>{{aa}}</span>
        </div>
        <div class="brief">{{brief}}</div>
        <div class="record">
          <span class="skim">阅读(9)</span>
          <span class="ctime">2018-09-27</span>
        </div>
      </div>
      <div class="article">
        <div class="title">
          <span>{{aa}}</span>
        </div>
        <div class="brief">{{brief}}</div>
        <div class="record">
          <span class="skim">阅读(9)</span>
          <span class="ctime">2018-09-27</span>
        </div>
      </div>
      <div class="article">
        <div class="title">
          <span>{{aa}}</span>
        </div>
        <div class="brief">{{brief}}</div>
        <div class="record">
          <span class="skim">阅读(9)</span>
          <span class="ctime">2018-09-27</span>
        </div>
      </div>
      <div class="article">
        <div class="title">
          <span>{{aa}}</span>
        </div>
        <div class="brief">{{brief}}</div>
        <div class="record">
          <span class="skim">阅读(9)</span>
          <span class="ctime">2018-09-27</span>
        </div>
      </div>
      <div class="article">
        <div class="title">
          <span>{{aa}}</span>
        </div>
        <div class="brief">{{brief}}</div>
        <div class="record">
          <span class="skim">阅读(9)</span>
          <span class="ctime">2018-09-27</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="time">
        <Calendar></Calendar>
      </div>
      <div class="art-class">
        <div class="art-title">文章分类</div>
        <ul>
          <li>
            <span>HTML</span>
          </li>
          <li>
            <span>CSS</span>
          </li>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>Vue</span>
          </li>
          <li>
            <span>其他</span>
          </li>
        </ul>
      </div>
      <div class="hot">
        <div class="title">热门</div>
        <ul>
          <li>1.CSS 毛玻璃效果</li>
          <li>2.CSS 毛玻璃效果</li>
          <li>3.CSS 毛玻璃效果</li>
          <li>4.CSS 毛玻璃效果</li>
          <li>5.CSS 毛玻璃效果</li>
          <li>6.CSS 毛玻璃效果</li>
          <li>7.CSS 毛玻璃效果</li>
          <li>8.CSS 毛玻璃效果</li>
          <li>9.CSS 毛玻璃效果</li>
          <li>10.CSS 毛玻璃效果</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss"  scoped>
.main {
  display: flex;
  font-size: 16px;
  .left {
    flex: 1;
    .article {
      padding: 10px 10px 5px 16px;
      border-bottom: 1px solid #ff6666;
      .title {
        span {
          padding: 5px;
          transition: all 0.1s linear 0.1s;
          &:hover {
            background: #ccc;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
          }
        }
      }
      .brief {
        text-indent: 2em;
        transition: font-style 0.1s linear 0.1s;
        &:hover {
          cursor: pointer;
          font-style: italic;
          color: #000;
          // css3 新样式
          text-decoration: underline solid #6699ff;
          text-underline-position: under;
          // 背景图片法
          // background:  linear-gradient(#fff 97%, gray 3%) repeat-y;
          // background-size: 100% 24px;
          // background-position: 0 24px;
        }
      }
      .record {
        float: right;
        margin-right: 15px;
        .ctime {
          margin-left: 20px;
        }
        span {
          padding: 5px;
          transition: all 0.1s linear 0.1s;
          &:hover {
            background: #ccc;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
          }
        }
      }
      &::after {
        content: '';
        display: block;
        clear: both;
      }
      &:last-child {
        border: none;
      }
    }
  }
  .right {
    width: 340px;
    padding-left: 10px;
    .time {
      padding: 10px 0;
    }
    .art-class {
      width: 100%;
      font-size: 30px;
      text-align: center;
      .art-title {
        border-bottom: 2px solid #ff6666;
      }
      ul {
        margin-top: 20px;
        li {
          float: left;
          background: #0099cc;
          border-radius: 10px 0px 10px 10px;
          padding: 15px 35px;
          margin-left: 20px;
          margin-bottom: 20px;
          transition: all 0.1s linear 0.1s;
          list-style-type: none;
          background: linear-gradient(
                to left bottom,
                transparent 50%,
                rgba(0, 0, 0, 0.4) 0
              )
              no-repeat 100% 0 / 0.7em 0.7em,
            linear-gradient(-135deg, transparent 0.5em, #58a 0);
          span {
            display: block;
            transition: all 1s;
            &:hover {
              transform: rotate(1turn);
            }
          }
          &:hover {
            color: #ff6666;
            cursor: pointer;
          }
        }
        &::after {
          content: '';
          display: block;
          clear: both;
        }
      }
    }
    .hot {
      width: 100%;
      font-size: 30px;
      text-align: center;
      .title {
        border-bottom: 2px solid #6669ff;
      }
      ul {
        margin-top: 20px;
        font-size: 16px;
        text-align: left;
        li {
          position: relative;
          //隐藏溢出的径向渐变背景
          overflow: hidden;
          list-style-type: none;
          margin-left: 30px;
          &:hover {
            color: #66b5ff;
            cursor: pointer;
          }
          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            //设置径向渐变
            background-image: radial-gradient(
              circle,
              #666 10%,
              transparent 10.01%
            );
            background-repeat: no-repeat;
            background-position: 50%;
            transform: scale(10, 10);
            opacity: 0;
            transition: transform 0.3s, opacity 0.5s;
          }
          &:active::after {
            transform: scale(0, 0);
            opacity: 0.3;
            // 设置初始状态
            transition: 0s;
          }
        }
      }
    }
  }
}
</style>

<script>
import Calendar from '@/components/common/Calendar'
export default {
  name: 'Index',
  data () {
    return {
      aa: 'CSS 毛玻璃效果',
      brief: '其实毛玻璃的模糊效果技术上比较简单，只是用到了 css 滤镜（filter）中的 blur 属性。但是要做一个好的毛玻璃效果，需要注意很多细节。其实毛玻璃的模糊效果技术上比较简单，只是用到了 css 滤镜（filter）中的 blur 属性。但是要做一个好的毛玻璃效果，需要注意很多细节。其实毛玻璃的模糊效果技术上比较简单，只是用到了 css 滤镜（filter）中的 blur 属性。但是要做一个好的毛玻璃效果，需要注意很多细节。'
    }
  },
  components: {
    Calendar
  }
}
</script>

<template>
  <div class="container">
    <h1>添加文章</h1>
    <Form ref="formValidate"
          :model="formValidate"
          :label-width="80">
      <FormItem label="文章标题："
                prop="title">
        <i-input v-model="formValidate.title"
                 placeholder="请填写文章名">
        </i-input>
      </FormItem>
      <FormItem label="作者："
                prop="author">
        <i-input v-model="formValidate.author"
                 placeholder="请输入姓名"></i-input>
      </FormItem>
      <FormItem label="文章类型："
                prop="type">
        <Select v-model="formValidate.type"
                clearable
                filterable
                placeholder="请选择文章类型">
          <Option v-for="item in typeValue"
                  :key='item'
                  :value="item">{{item}}</Option>
        </Select>
      </FormItem>
    </Form>
    <mavon-editor v-model="formValidate.article"
                  @imgAdd="$imgAdd" />
    <Button type="primary"
            @click='addArticle'>添加</Button>
  </div>
</template>

<script>
import { addArticle, upPicture } from '@/api/api.js'
import handleMakToHtm from '@/utils/showdown.js'
export default {
  name: 'write',
  data () {
    return {
      formValidate: {
        title: '1',
        author: '1',
        type: 'CSS',
        article: '1'
      },
      typeValue: {
        JavaScript: 'JavaScript',
        HTML: 'HTML',
        Vue: 'Vue',
        CSS: 'CSS',
        PHP: 'PHP',
        Node: 'Node',
        KOA: 'Koa'
      }
    }
  },
  methods: {
    async addArticle () {
      let params = new URLSearchParams()
      params.append('title', this.formValidate.title)
      params.append('author', this.formValidate.author)
      params.append('type', this.formValidate.type)
      params.append('article', this.formValidate.article)
      const html = handleMakToHtm(this.formValidate.article)
      console.log(html)
      try {
        let res = await addArticle(params)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    async $imgAdd (pos, $file) {
      let formdata = new FormData()
      formdata.append('image', $file)
      try {
        let res = await upPicture(formdata)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss">
.v-note-wrapper {
  z-index: 1 !important;
}
.ivu-btn-primary {
  margin-top: 30px;
}
</style>

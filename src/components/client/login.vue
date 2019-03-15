<template>
  <div class='login'>
    <Form ref="formValidate"
          :model="formValidate"
          :label-width="80">
      <FormItem label="用户名："
                prop="user">
        <i-input v-model="formValidate.user"
                 placeholder="请输入用户名">
        </i-input>
      </FormItem>
      <FormItem label="密码："
                prop="password">
        <i-input v-model="formValidate.password"
                 type="password"
                 placeholder="请输入密码"></i-input>
      </FormItem>
      <FormItem>
        <Button type="primary"
                @click="handleSubmit">登陆</Button>
        <Button @click="handleReset"
                style="margin-left: 8px">清空</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { login } from '@/api/api.js'
export default {
  name: 'Login',
  data () {
    return {
      formValidate: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmit () {
      let params = new URLSearchParams()
      params.append('user', this.formValidate.user)
      params.append('password', this.formValidate.password)
      try {
        let res = await login(params)
        console.log(res)
        this.$router.push('/admin')
      } catch (e) {
        console.log(e)
      }
    },
    handleReset () {
      this.formValidate = {
        user: '',
        password: ''
      }
    }
  }
}
</script>

<template>
  <div class="login-con">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size='small'>
      <el-form-item label="密码" prop="pass" size='small'>
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{ submitStatus }}</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { postUserInfoVerify } from '../api/user'
import cookie from 'component-cookie'

export default {
  name: 'Login',
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
      submitStatus: '提交'
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitStatus = '提交中...'
          // 这里写接口请求
          this.handleUserVerifyData()
        } else {
          alert('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleUserVerifyData () {
      const { pass, age } = this.ruleForm
      const postData = {
        pass,
        age
      }

      postUserInfoVerify(postData)
        .then((res) => {
          if (res.isOk) {
            this.submitStatus = '提交成功'
          }
          cookie('isLogin', 1)
          cookie('userId', res.userId)
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        })
        .catch((err) => {
          alert('err',err)
        })
    }
  }

}
</script>

<style lang="css" scoped>
  .login-con {
    width: 800px;
    height: 600px;
    border-radius: 10px;
    border: 2px dotted gray;
    margin: 20px auto;
    padding-top: 40px;
    padding-right: 20px;
  }
</style>
<template>
    <div class="firstdemo">
        <header>
            <div class="logo" data-scroll-reveal="enter right over 1s"><img src="../assets/images/logo.png"></div>
            <nav class="topnav" data-scroll-reveal="enter bottom over 1s after 1s">
                <router-link to="/"><span>首页</span><span class="en">Home</span></router-link>
                <router-link to="/about"><span>关于我</span><span class="en">About</span></router-link>
                <router-link to="/manshenghuo"><span>慢生活</span><span class="en">Life</span></router-link>
                <router-link to="/article"><span>碎言碎语</span><span class="en">Doing</span></router-link>
                <router-link to="/mbfx"><span>模板分享</span><span class="en">Share</span></router-link>
                <router-link to="/learn"><span>学无止境</span><span class="en">Learn</span></router-link>
                <router-link to="/gbook"><span>留言</span><span class="en">Saying</span></router-link>
                <router-link to="/login"><span>登录</span><span class="en">Login</span></router-link>
                <router-link to="/regist"><span>注册</span><span class="en">Regist</span></router-link>
                <router-link to="/admin"><span>后台管理</span><span class="en">Admin</span></router-link>
            </nav>
        </header>
        <el-form ref="form" :model="form" label-width="100px">
            <el-row type="flex" justify="center">
                <el-col :span="5">
                    <el-form-item label-width="70px">
                        <span><font color="pink" size="3">注册页面</font></span>
                    </el-form-item>
                </el-col>
            </el-row>
            <label style="color: red">{{ usernameError }}</label>
            <el-row type="flex" justify="center">
                <el-col :span="5">
                    <el-form-item label="账户：" sprop="name">
                        <el-input v-model="form.username" @blur="validUsername" size="small" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <label style="color: red">{{ passwordError }}</label>
            <el-row type="flex" justify="center">
                <el-col :span="5">
                    <el-form-item label="密码：" prop="password">
                        <el-input v-model="form.password" @blur="validPassword" size="small" placeholder="请输入密码"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="5">
                    <el-form-item>
                        <el-button type="primary" @click="submit">注册</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import { Message } from 'element-ui';
    export default {
        name: 'regist',
        data () {
            return {
                form:{
                    username:'',
                    password:'',
                },
                usernameError:'',
                passwordError:''
            }
        },
        methods:{
            submit:function(){
                const a=this;
                this.axios.post('http://localhost:8080/user/regist',{
                    username:a.form.username,
                    password:a.form.password
                    }
                )
                .then(function (response) {
                   console.log(response);
                   if(response.data.message==="注册成功！"){
                       Message({
                           message:response.data.message,
                           type: 'success'
                       });
                       a.$router.push({
                           path:'/login'
                       });
                   }
                    if(response.data.message==="用户名已被注册!"){
                        Message({
                            message:response.data.message,
                            type: 'warning'
                        });
                    }
                    if(response.data.message==="注册失败!"){
                        Message({
                            message:response.data.message,
                            type: 'error'
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
             },

            validUsername:function() {
                const validZiMu= /^[a-zA-Z]\w{5,13}$/;
                const validShuZi=/^\d{5,13}$/;
                if(!this.form.username) {
                this.usernameError="用户名不能为空！";
                }else if(!validZiMu.test(this.form.username)&&!validShuZi.test(this.form.username)){
                    this.usernameError="用户名长度在5到13之间";
                }else{
                    this.usernameError='';
                }
            },
            validPassword:function(){
                const validZiMu= /^[a-zA-Z]\w{5,13}$/;
                const validShuZi=/^\d{5,13}$/;
                if(!this.form.password) {
                    this.passwordError="密码不能为空！";
                }else if(!validZiMu.test(this.form.password)&&!validShuZi.test(this.form.password)){
                    this.passwordError="密码长度在5到13之间";
                }else{
                    this.passwordError='';
                }
            }
        },
    }
</script>

<style scoped>

</style>
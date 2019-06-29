<template>
    <div class="login">
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
                        <span><font color="pink" size="3">登录页面</font></span>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="5">
                    <el-form-item label="账户：" sprop="name">
                        <el-input v-model="form.username" size="small" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="5">
                    <el-form-item label="密码：" prop="password">
                        <el-input v-model="form.password" size="small" placeholder="请输入密码"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="5">
                    <el-form-item>
                        <el-button type="primary" @click="submit">登录</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import { Message } from 'element-ui';
    export default {
        name: 'login',
        data () {
            return {
                form:{
                    username:'',
                    password:'',
                },
            }
        },
        methods:{
            submit:function() {
                const a=this;
                this.axios.post("http://localhost:8080/user/login",{
                    username:a.form.username,
                    password:a.form.password
                })
                .then(response=>{
                    console.log(response);
                    if(response.data.message==="登录成功！"){
                        Message({
                            message:response.data.message,
                            type: 'success'
                        });
                        //将用户和token保存到session中
                        sessionStorage.setItem("user",JSON.stringify(response.data.user));
                        /*sessionStorage.setItem("token",response.data.token);*/
                        //将用户和token保存到中
                        this.$store.dispatch("changeUser",response.data.user);
                        console.log(this.$store.state.isLogin);
                        a.$router.push({
                            path: '/'
                        });
                    }
                    if(response.data.message==="用户还未注册！") {
                        Message({
                            message: response.data.message,
                            type: 'warning'
                        });
                    }
                    if(response.data.message==="密码错误！") {
                        Message({
                            message: response.data.message,
                            type: 'error'
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        computed:{
            isLogin(){
                if(sessionStorage.getItem("user")&&sessionStorage.getItem("token")){
                    this.$store.commit("changeUser",sessionStorage.getItem("user"))
                }else{
                    this.$store.commit("changeUser",null)
                }
                return this.$store.getters.returnIsLogin();
            }
        }
    }
</script>

<style scoped>
</style>
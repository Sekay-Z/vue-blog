<template>
    <div>
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
        <article>
            <div class="container">
                <h2 class="ctitle"><b>留言板</b> <span>你，生命中最重要的过客，之所以是过客，因为你未曾为我停留。</span></h2>
                <div class="gbook">
                    <div class="about">
                        <h3  v-if="type==1" class="b">你回复&nbsp;{{oldCommenter}}:</h3>
                        <el-input
                                type="textarea"
                                :rows="2"
                                :autosize="{minRows: 4, maxRows: 6}"
                                placeholder="请输入留言"
                                v-model="textarea">
                        </el-input>
                        <el-button  type="primary" @click="send">发表留言</el-button>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import { Message } from 'element-ui';
    export default {
        name: "comment",
        data(){
            return {
                textarea:'',
                user:{},
                type:0
            }
        },
        mounted(){

        },
        methods:{
            send(){
                if(!this.textarea){
                        Message({
                            message:'对博主说一点点话嘛',
                            type: 'warning'
                        });
                    }else{
                        this.user=JSON.parse(sessionStorage.getItem("user"));
                        const a=this;
                        this.axios.post("http://localhost:8080/comment/addComment",{
                            comment_type:this.type,
                            comment_content:this.textarea,
                            comment_from_uid:this.user.user_id,
                            comment_time:2019
                        })
                            .then(function (response) {
                                Message({
                                    message:response.data.message,
                                    type: 'success'
                                });
                                a.type=0;
                                a.$router.push({
                                    path:'/commentList'
                                })
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
             }
        },
    }
</script>

<style scoped>
    @import "../assets/css/book.css";
</style>
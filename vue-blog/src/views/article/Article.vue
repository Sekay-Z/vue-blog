<template>
    <div id="Article">
        <header>
            <div class="logo" data-scroll-reveal="enter right over 1s"><img src="../../assets/images/logo.png"></div>
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
            </nav>
        </header>
        <article>
                <div class="blog" data-scroll-reveal="enter top" >
                    {{article.article_name}}
                </div>
            <ul class="bloginfo">
                <li class="timer">{{article.article_time}}</li>
                <li class="view">{{article.article_click}}阅读</li>
            </ul>
            <div class="container">
                <div class="blog" data-scroll-reveal="enter top" >
                    {{article.article_content}}
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data:function(){
            return{
                article:{},
            }
        },
        mounted:function(){
            this.findArticleById();
        },
        methods:{
          findArticleById:function(){
              const a=this;
              const id=a.$route.params.id;
              this.axios.get("http://localhost:8080/article/findArticleById/"+id)
                  .then(function (response) {
                        a.article=response.data;
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          }
        },
    }
</script>

<style scoped>
    @import "../../assets/css/base.css";
    @import "../../assets/css/index.css";
</style>
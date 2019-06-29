<template>
    <div id="gbook">
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
            <div class="container">
                <h2 class="ctitle"><b>留言板</b> <span>你，生命中最重要的过客，之所以是过客，因为你未曾为我停留。</span></h2>
                <router-link to="/commentList" class="liuyan">查看留言</router-link>
                <div class="gbook">
                    <div class="about">
                        <div id="fountainG">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </div>
                        <div class="about_girl"><span><img src="../../assets/images/girl.jpg"></span>
                            <p>当您驻足停留过，从此便注定我们的缘分。站在时间的尽头，我们已是朋友，前端的路上我再也不用一个人独自行走。</p>
                        </div>
                        <div class="zuji"><router-link to="/comment" class="readmore">留下足迹</router-link></div>
                    </div>
                </div>
            </div>
        </article>
        <footer> Design by DanceSmile <a href="/">蜀ICP备11002373号-1</a> </footer>
    </div>
</template>

<script>
    export default {
        name: "gbook"
    }
</script>

<style scoped>
    @import "../../assets/css/base.css";
    @import "../../assets/css/book.css";
</style>
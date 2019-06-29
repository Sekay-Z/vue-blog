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
                <div class="blog" data-scroll-reveal="enter top" >
                    <figure>
                        <ul>
                            <a href="https://cn.bing.com/images/search?q=%E9%98%BF%E4%BF%A1%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&qs=n&form=QBIR&sp=-1&pq=%E9%98%BF%E4%BF%A1%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&sc=0-6&sk=&cvid=7757041DC59942138A71A9FC2F9A1D7D" target="_blank">
                                <img src="../assets/images/阿信.jpg"><span>阿信图册</span></a>
                        </ul>
                        <p><a href="https://weibo.com/musiq?is_hot=1" target="_blank">Sekay-Z的好朋友鸭---阿信</a></p>
                        <figcaption>五月天，亚洲天王级别乐团，阿信，作为乐队的主唱大大，和其团员创作出无数经典歌曲，陪伴了博主初中乃至高中整个青春阶段。人生有限，你的自传却有无限种可能....</figcaption>
                    </figure>
                    <figure>
                        <ul>
                            <a href="https://cn.bing.com/images/search?q=%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&qs=n&form=QBIRMH&sp=-1&pq=%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&sc=1-7&sk=&cvid=573C8DD58DD845E1B18DBC5CA0EE6693" target="_blank">
                                <img src="../assets/images/老薛.jpg"><span>老薛图册</span></a>
                        </ul>
                        <p><a href="https://www.weibo.com/xuezhiqian?is_hot=1" target="_blank">Sekay-Z的好兄弟鸭---老薛</a></p>
                        <figcaption>薛之谦，博主近几年入坑的才华型歌手，薛氏情歌以其特有的风格深深地吸引住了博主，打动了博主的心，从今直至以后，不管老薛会遭受多少非议，博主都会一直支持老薛，不离不弃...</figcaption>
                    </figure>
                    <figure>
                        <ul>
                            <a href="https://cn.bing.com/images/search?q=%E8%B7%AF%E9%A3%9E%E5%9B%BE%E7%89%87&qs=n&form=QBIR&sp=-1&pq=%E8%B7%AF%E9%A3%9E%E5%9B%BE%E7%89%87&sc=8-4&sk=&cvid=6102F5C2787B4653BCAB465FDE341470" target="_blank">
                                <img src="../assets/images/路飞.jpg"><span>路飞图册</span></a>
                        </ul>
                        <p><a href="http://www.iqiyi.com/lib/m_200067914.html" target="_blank">Sekay-Z的好船长鸭---路飞</a></p>
                        <figcaption>海贼王是博主最喜欢的动漫之一，从开播到现今已达20年之久，就算还有下一个20年，博主也会依然追下去...</figcaption>
                    </figure>
                </div>
                <ul class="cbp_tmtimeline">
                    <li>
                        <time class="cbp_tmtime"><span>05-23</span> <span>2019</span></time>
                        <div class="cbp_tmicon"></div>
                        <div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
                            <h2>树凯的自传</h2>
                            <p><span class="blogpic"><img src="../assets/images/t03.jpg"></span>现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...</p>
                            <router-link :to="{name:'article',params:{id:1}}" class="readmore">阅读全文&gt;&gt;</router-link>
                        </div>
                    </li>
                    <li>
                        <time class="cbp_tmtime" ><span>08-08</span> <span>2017</span></time>
                        <div class="cbp_tmicon"></div>
                        <div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
                            <h2>三步实现滚动条触动css动画效果</h2>
                            <p><span class="blogpic"><a href="/"><img src="../assets/images/t02.jpg"></a></span>现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...</p>
                            <a  @click="param(3)" class="readmore">阅读全文&gt;&gt;</a>
                        </div>
                    </li>
                    <li>
                        <time class="cbp_tmtime" ><span>08-08</span> <span>2017</span></time>
                        <div class="cbp_tmicon"></div>
                        <div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
                            <h2>三步实现滚动条触动css动画效果</h2>
                            <p><span class="blogpic"><a href="/"><img src="../assets/images/t01.jpg"></a></span>现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...</p>
                            <router-link to="/about" class="readmore">阅读全文&gt;&gt;</router-link>
                        </div>
                    </li>
                    <li>
                        <time class="cbp_tmtime" ><span>08-08</span> <span>2017</span></time>
                        <div class="cbp_tmicon"></div>
                        <div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
                            <h2>三步实现滚动条触动css动画效果</h2>
                            <p><span class="blogpic"><a href="/"><img src="../assets/images/t03.jpg"></a></span>现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...</p>
                            <a href="/" target="_blank" class="readmore">阅读全文&gt;&gt;</a>
                        </div>
                    </li>
                    <li>
                        <time class="cbp_tmtime" ><span>08-08</span> <span>2017</span></time>
                        <div class="cbp_tmicon"></div>
                        <div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
                            <h2>三步实现滚动条触动css动画效果</h2>
                            <p><span class="blogpic"><a href="/"><img src="../assets/images/t02.jpg"></a></span>现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...</p>
                            <a href="/" target="_blank" class="readmore">阅读全文&gt;&gt;</a>
                        </div>
                    </li>
                    <li>
                        <time class="cbp_tmtime" ><span>08-08</span> <span>2017</span></time>
                        <div class="cbp_tmicon"></div>
                        <div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
                            <h2>三步实现滚动条触动css动画效果</h2>
                            <p><span class="blogpic"><a href="/"><img src="../assets/images/t01.jpg"></a></span>现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...</p>
                            <a href="/" target="_blank" class="readmore">阅读全文&gt;&gt;</a>
                        </div>
                    </li>
                    <li>
                        <time class="cbp_tmtime" ><span>08-08</span> <span>2017</span></time>
                        <div class="cbp_tmicon"></div>
                        <div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
                            <h2>三步实现滚动条触动css动画效果</h2>
                            <p><span class="blogpic"><a href="/"><img src="../assets/images/t03.jpg"></a></span>现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...</p>
                            <a href="/" target="_blank" class="readmore">阅读全文&gt;&gt;</a>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
        <footer>
            Design by DanceSmile <a href="/">蜀ICP备11002373号-1</a>
        </footer>
    </div>
</template>

<script>
    export default {
        methods:{
            param(id){
                this.$router.push({
                    path:'/article',
                    query:{
                        id:id
                    }
                });

            }
        },
    }
</script>

<style scoped>
    @import "../assets/css/index.css";
</style>
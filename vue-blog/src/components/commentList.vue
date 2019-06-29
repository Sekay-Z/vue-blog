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
                    <div class="commentBox">
                        <p v-if="comments.length==0">暂无留言，我来发表第一条留言！<router-link to="/comment" class="readmore">留下足迹</router-link></p>
                        <div v-else>
                            <div class="comment" v-for="comment in comments" >
                                <h3>{{comment.user.username}}&nbsp;&nbsp;<span>{{comment.comment_time}}</span></h3><br/>
                                <p @click="changeCommenter(comment.comment_id,comment.user.username,comment.user.user_id)">{{comment.comment_content}}</p>
                                <div v-if="replyCommentList.length>0">
                                    <div class="reply" v-for="reply in replyCommentList">
                                        <div v-if="comment.comment_id==reply.replyComment_parentid">
                                            <b>{{reply.replyComment_from_name}}&nbsp;&nbsp;回复&nbsp;&nbsp;{{reply.replyComment_to_name}}:</b>
                                            <p @click="changeCommenter(comment.comment_id,reply.replyComment_from_name,reply.replyComment_from_uid)">{{reply.replyComment_content}}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <span class="readmore" @click="showCommit">留下足迹</span>
                        </div>
                    </div>
                    <div class="input-weapper" v-if="showCommitId==1">
                        <h3 v-if="type==1" class="p">你回复{{oldCommenter}}：</h3>
                        <el-input
                                type="textarea"
                                :rows="2"
                                :autosize="{minRows: 4, maxRows: 6}"
                                placeholder="请输入留言"
                                v-model="textarea">
                        </el-input>
                        <div class="btn-control">
                            <span class="cancel" @click="cancel">取消</span>&nbsp;&nbsp;
                            <el-button  type="primary" @click="commit">回复留言</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import { Message } from 'element-ui';
    export default {
        name: "",
        data(){
            return{
                commenter:JSON.parse(sessionStorage.getItem("user")), //评论人，这里从session拿
                type: 0,  //0为评论作者,1为评论别人
                oldCommenter:'', //旧评论者的名字
                oldCommenter_id:'',
                chosedIndex: -1, //被选中的评论的index
                showCommitId:0, //0为不显示留言框，1为显示留言框
                replyComment_parentid:0,
                textarea:"",
                comments: [
                    {
                        user:{},
                        comment_id:'',
                        comment_type:'',
                        comment_time: "",
                        comment_content: "",
                    }
                ],
                replyCommentList:[
                    {
                        replyComment_id:'',
                        replyComment_parentid:'',
                        replyComment_from_name:'',
                        replyComment_to_name:'',
                        replyComment_content:''
                    }
                ]
            }
        },
        mounted(){
            const a=this;
            this.axios.get("http://localhost:8080/comment/findAllComment")
                .then(function (response) {
                    a.comments=response.data.commentList;
                    a.replyCommentList=response.data.replyCommentList;
                    console.log(a.comments);
                });
        },
        methods:{
            changeCommenter: function(parentid,name,id) {
                        this.replyComment_parentid=parentid;
                        this.oldCommenter=name;
                        this.oldCommenter_id=id;
                        this.type=1;
                        this.showCommitId=1
            },
            showCommit(){
                this.type=0;
                this.showCommitId=1
            },
            cancel(){
                this.showCommitId=0
            },
            commit(){
                const a=this;
                if(this.type==0){
                    this.axios.post("http://localhost:8080/comment/addComment",{
                        comment_type:this.type,
                        comment_content:this.textarea,
                        comment_from_uid:this.commenter.user_id,
                        comment_time:2019
                    })
                        .then(function (response) {
                            Message({
                                message:response.data.message,
                                type: 'success'
                            });
                            a.type=0;
                            a.showCommitId=0
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }else{
                    this.axios.post("http://localhost:8080/comment/addReplyComment",{
                        replyComment_parentid:this.replyComment_parentid,
                        replyComment_content:this.textarea,
                        replyComment_from_uid:this.commenter.user_id,
                        replyComment_from_name:this.commenter.username,
                        replyComment_to_uid:this.oldCommenter_id,
                        replyComment_to_name:this.oldCommenter,
                    })
                        .then(function (response) {
                            Message({
                                message:response.data.message,
                                type: 'success'
                            });
                            a.type=0;
                            a.showCommitId=0
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
                }
        }
    }
</script>

<style scoped>
.commentBox{
    margin:0 auto;
}
.comment{
    margin:0 auto;
}
h3{
    text-align: left;
    margin-left: 0;
}
p{
    text-align: left;
}
hr{
    height:1px;border:none;border-top:1px solid #000;
}
.readmore{
    margin:15px 0 4px 0;
}
.btn-control{
    display:flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
    .cancel{
        font-size:16px ;
        color: #606266;
        margin-right: 30px;
        cursor: pointer;
    }
}
.p{
    padding-top: 30px;
}
</style>
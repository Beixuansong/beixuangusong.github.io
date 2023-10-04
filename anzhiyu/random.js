var posts=["2023/08/05/Life/长相思/","2023/09/06/Life/琵琶行/","2023/07/12/Traditional-Chinese-Medicine/中医诊断学/","2023/07/12/Traditional-Chinese-Medicine/中医基础理论/","2023/09/17/Thought/争论/","2023/07/12/Thought/恋爱与婚姻/","2023/07/11/Blog/hello-world/","2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/","2023/08/04/Blog/小白搭建博客与fluid主题运用/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Sydney","link":"https://sydneystory.cn/","avatar":"https://bu.dusays.com/2023/09/30/6517d893c3def.png","descr":"Always keep curiosity","siteshot":"https://bu.dusays.com/2023/09/30/6517de080fd7a.png","color":"speed","tag":"生活"},{"name":"Keats","link":"https://keatsliu.cn/","avatar":"https://bu.dusays.com/2023/09/30/6517da163166e.jpg","descr":"若无闲事挂心头，便是人间好时节","siteshot":"https://bu.dusays.com/2023/09/30/6517dde76ddd9.png","color":"#FFB6C1","tag":"思想"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"Sydney","link":"https://sydneystory.cn/","avatar":"https://bu.dusays.com/2023/09/30/6517d893c3def.png","descr":"Always keep curiosity","recommend":true},{"name":"Keats","link":"https://keatsliu.cn/","avatar":"https://bu.dusays.com/2023/09/30/6517da163166e.jpg","descr":"若无闲事挂心头，便是人间好时节","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
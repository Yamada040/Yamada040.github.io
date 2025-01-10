import Header from "@/components/header";
import "/app/globals.css";

export default function ForthPost(){
    return (
        <>
        <Header/>
        <header>SNSリンク</header>
        <div className="box3">
          <h3>menu</h3>
          <div className="box3-menubar">
          <ul>
            <li><a href="/">トップページ</a></li>
            <li><a href="/posts/page2">活動内容</a></li>
            <li><a href="/posts/page3">活動情報・実績</a></li>
            <li><a href="/posts/page4">選手紹介</a></li>
            <li><a href="/posts/page5">SNSリンク</a></li>
          </ul>
          </div>
        </div>
        </>
    )
}

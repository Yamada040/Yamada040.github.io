import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "/app/layout6.css";
export default function Home(){
    return(
     <>
      <Head>
       <meta charSet="UTF-8"/>
       <title>toppage</title>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com"/>
       <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"/>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com"/>
       <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet"/>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet"/>
      </Head>
      <header>
         <div className="container flex">
          <a href="/" className="logo">SOCCER DOUKOU</a>
            <nav>
             <ul className="header_menu flex">
              <li><Link href="/">トップページ</Link></li>
              <li><Link href="/posts/page2">活動内容</Link></li>
              <li><Link href="/posts/page3">活動情報・実績</Link></li>
              <li><Link href="/posts/page3">選手紹介</Link></li>
             </ul>
            </nav>
                </div>
      </header>
         
      <main>
       <section id="hero" className="container">
        <div className="hero_inner">
            <p>阪大1強いサッカーサークル、国公立の頂点へ</p>
            <h1>「勝つんが一番おもろい」</h1>
        </div>
       </section>
       <section id="intro" className="container">
        <div className="heading">Osaka</div>
        <h2 className="title pop">introduce</h2>
        <div className="flex">
            <div className="column-2">
                <p className="text">
                    阪大で超楽しくて強いサッカーサークルです⚽<br>
                   </br>
                   今年は適塾杯で<span>優勝</span>！強さは間違いなし！<br>
                   </br>
                   阪大1強くて楽しい同好会で本気でサッカーして、たくさん遊んで最高の大学生活を送りましょう！<br>
                   </br>
                   新1・2年生、プレイヤー・マネージャー大募集中！<br>
                   </br>
                   毎週月曜4限終わり豊中キャンパスで練習しています！<br>
                   </br>
                   質問等、詳細は各種SNSまで
                </p>
            </div>
            <div className="column-2 intro-img"></div>
        </div>
       </section>
       <section id="schedule" className="container">
       <div className="heading2">Soccer</div>
        <h2 className="title pop">schedule</h2>
        <div className="schedule_inner flex">
            <div className="column-40">
                <Image src="/photo3.jpg" width={16} height={9} layout="responsive" alt=""/>
            </div>
            <div className="column-55">
                <h3>2024年度 今後の予定</h3>
                 <ul className="text">
                     <li>2024/12/18    忘年会</li>
                     <li>2025/02/12    京極杯予選</li>
                     <li>2025/02/17,18 セカステ国公立全国大会</li>
                     <li>2024/03/11,12 京極杯本選</li>
                     <li>2024/03/17,18 3回生引退合宿</li>
                 </ul>
            </div>
        </div>
        </section>
        <section id="newinfo" className="container">
        <div className="heading2">Doukou</div>
         <h2 className="title pop">latest updates</h2>
         <div className="newinfo_inner flex">
             <div className="update_pho">
                <Image src="/photo2.jpg" width={16} height={9} layout="responsive" alt=""/>
             </div>
             <div className="update_info">
              <h3>Instagram Post</h3>
              <ul className="text">
                <li><a href="">2024/12/18 忘年会</a></li>
                <li><a href="">2024/11,12 リーグ戦結果</a></li>
                <li><a href="">2024/11/09 秋合宿</a></li>
                <li><a href="">2024/11/03 マチカネ祭</a></li>
                <li><a href="https://www.instagram.com/p/C_jyvcAvBpM/?igsh=MXFjdjQ3cjR0c2ZwNg==">2024/09/04 関関同立京阪神カップ</a></li>
             </ul>
             </div>
         </div>
        </section>
        <section id="menu" className="container">
        <div className="heading2">No.1</div>
         <h2 className="title pop">menu</h2>
         <ul className="menu text">
            <li><a href="/">トップページ</a></li>
            <li><a href="/">活動内容</a></li>
            <li><a href="/">活動情報・実績</a></li>
            <li><a href="/">選手紹介</a></li>
            <li><a href="/">SNSリンク</a></li>
         </ul>
         </section>
      </main>

      <footer></footer>
     </>
    )
};
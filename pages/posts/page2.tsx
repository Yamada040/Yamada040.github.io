import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "/app/layout7.css";
import "/app/layout6.css";
export default function Page2(){
    return(
     <>
      <Head>
        <meta charSet="UTF-8"/>
        <title>活動内容</title>
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
              <li><Link href="/posts/page3">活動情報</Link></li>
              <li><Link href="/posts/page4">選手紹介</Link></li>
              <li><Link href="/posts/page5">過去実績</Link></li>
             </ul>
            </nav>
        </div>
      </header>

      <main>
        <section id="fake" className="container">
            <div className="fake_inner">
                <p>阪大サッカー同好会の活動内容</p>
                <h1>「全力で全てを楽しむ」</h1>
            </div>
        </section>
        <section id="activity" className="container">
        <div className="heading">Have fun</div>
         <h2 className="title pop">activities</h2>
         <div className="flex">
            <div className="act-2">
             <h3>主な活動内容</h3>
             <p className="text">
                毎週月曜4限終わり豊中キャンパスで練習しています！<br>
                </br>
                主に練習はゲーム形式で行っています<br>
                </br>
                途中参加、途中退出OKなので、5限終わりでも気軽に参加できます！<br>
                </br>
                また週末は、試合や合宿などにも積極的に参加しており、サッカーをする機会はたくさんあります！<br>
                </br>
                初心者から経験者まで幅広いレベルの選手が在籍しており、レベルに関わらず、楽しくサッカーできます！<br>
                </br>
                各時期ごとにイベントが盛りだくさんなので、選手・マネージャー、学年の垣根を越えて仲良く楽しめます！
             </p>
            </div>
            <div className="act-2 act-img"></div>
         </div>
        </section>
        <section id="event" className="container">
          <div className="heading2">Packed with</div>
          <h2 className="title pop">annual ivents</h2>
          <dl className="flex">
            <dt>4月</dt>
            <dd>新歓時期</dd>
            <dt>5月</dt>
            <dd>新歓BBQ</dd>
            <dt>6月</dt>
            <dd>新歓合宿</dd>
            <dt>7月</dt>
            <dd>浜レクリエーション</dd>
            <dt>8月</dt>
            <dd>夏合宿、適塾杯</dd>
            <dt>9月</dt>
            <dd>関西大会</dd>
            <dt>10月</dt>
            <dd>リーグ戦～</dd>
            <dt>11月</dt>
            <dd>冬合宿</dd>
            <dt>12月</dt>
            <dd>～リーグ戦、忘年会</dd>
            <dt>1月</dt>
            <dd>初蹴り、新年会</dd>
            <dt>2月</dt>
            <dd>国公立全国大会、スキー・スノボ合宿</dd>
            <dt>3月</dt>
            <dd>3回生引退合宿</dd>
          </dl>
        </section>
        <section id="menu" className="container">
         <div className="heading2">No.2</div>
          <h2 className="title pop">menu</h2>
          <ul className="menu text">
            <li><a href="/">トップページ</a></li>
            <li><a href="/posts/page2">活動内容</a></li>
            <li><a href="/posts/page3">活動情報</a></li>
            <li><a href="/posts/page4">選手紹介</a></li>
            <li><a href="/posts/page5">過去実績</a></li>
          </ul>
        </section>
      </main>
      <footer>
        <div className="flex3 container">
            <div className="column-a">
              <a href="https://x.com/osakaunivsoccer?s=11&t=JezDDOZeLsmWzb2O8fGg7w"><Image src="/X.jpg" alt="" width={50} height={50} layout="intrinsic"/></a>
            </div>
            <div className="column-b">
            <a href="https://www.instagram.com/p/DCBQiDhvTKO/?igsh=aWZucDFqb2U1NGo1"><Image src="/insta.png" alt="" width={50} height={50} layout="intrinsic"/></a>
            </div>
            <div className="column-c">
              <a href="/"><Image src="/tiktok.png" alt="" width={50} height={50} layout="intrinsic"/></a>
            </div>
            <div className="column-d">
              <a href="/"><Image src="/bereal.png" alt="" width={50} height={50} layout="intrinsic"/></a>
            </div>
        </div>
       <a href="/" className="logo">SOCCER DOUKOU</a>
       <div className="copyright">© SOCCER DOUKOU Inc.</div>
      </footer>
     </>
    )
}
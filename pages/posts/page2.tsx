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
      </Head>
      <header>
        <div className="container flex">
          <Link href="/" className="logo">SOCCER DOUKOU</Link>
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
            <li><Link href="/">トップページ</Link></li>
            <li><Link href="/posts/page2" >活動内容</Link></li>
            <li><Link href="/posts/page3">活動情報</Link></li>
            <li><Link href="/posts/page4">選手紹介</Link></li>
            <li><Link href="/posts/page5">過去実績</Link></li>
          </ul>
        </section>
      </main>
      <footer>
        <div className="flex3 container">
            <div className="column-a">
              <Link href="https://x.com/osakaunivsoccer?s=11&t=JezDDOZeLsmWzb2O8fGg7w"><Image src="/X.jpg" alt="X link" width={50} height={50} layout="fixed"/></Link>
            </div>
            <div className="column-b">
            <Link href="https://www.instagram.com/p/DCBQiDhvTKO/?igsh=aWZucDFqb2U1NGo1"><Image src="/insta.png" alt="instagram link" width={50} height={50} layout="fixed"/></Link>
            </div>
            <div className="column-c">
              <Link href="/"><Image src="/tiktok.png" alt="tiktok" width={50} height={50} layout="fixed"/></Link>
            </div>
            <div className="column-d">
              <Link href="/"><Image src="/bereal.png" alt="bereal" width={50} height={50} layout="fixed"/></Link>
            </div>
        </div>
       <Link href="/" className="logo">SOCCER DOUKOU</Link>
       <div className="copyright">© SOCCER DOUKOU Inc.</div>
      </footer>
     </>
    )
}
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "/app/layout6.css";
import "/app/layout7.css";
import "/app/layout8.css";
import "/app/layout9.css";
import "/app/layout10.css";
export default function Page2(){
    return(
     <>
      <Head>
        <meta charSet="UTF-8"/>
        <title>選手紹介</title>
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
        <section id="sensyu" className="container">
          <div className="sensyu_inner">
            <h1>選手紹介</h1>
          </div>
        </section>
        <section id="player" className="container">
          <h2 className="title pop">players</h2>
          <div className="heading">soichiro</div>
          <div className="flex2">
            <div className="play">
              <h3><span className="span">会長</span></h3>
              <p>氏名  杉田 聡一朗</p>
              <p>出身高校 三田学園高等部</p>
              <p>ポジション CB/FW/GK</p>
              <p>趣味 ポーカー</p>
              <p>特徴 留年多浪顔</p>
            </div>
            <div className="kaityou-img"></div>
          </div>
          <div className="heading3">naoto</div>
          <div className="flex2">
            <div className="play">
              <h3><span className="span">副会長</span></h3>
              <p>氏名 渡邊 直人</p>
              <p>出身高校 湘南高校</p>
              <p>ポジション OMF/WG/SB</p>
              <p>趣味 飲み会</p>
              <p>特徴 イケメン飲みベ高男</p>
            </div>
            <div className="huku1-img"></div>
          </div>
          <div className="heading4">kanta</div>
          <div className="flex2">
            <div className="play">
              <h3><span className="span">副会長</span></h3>
              <p>氏名 浅田 幹太</p>
              <p>出身高校 市立西宮高校</p>
              <p>ポジション CF</p>
              <p>趣味 ソロウォーク</p>
              <p>特徴 ヴィッセル神戸現地観戦ニキ</p>
            </div>
            <div className="huku2-img"></div>
          </div>
          <div className="heading5">futa</div>
          <div className="flex2">
            <div className="play">
              <h3><span className="span">会計</span></h3>
              <p>氏名 小田 風太</p>
              <p>出身高校 静岡高校</p>
              <p>ポジション DMF</p>
              <p>趣味 Mrs. GREEN APPLE</p>
              <p>特徴 真面目飛び級院生男</p>
            </div>
            <div className="kaikei-img"></div>
          </div>
        </section>
        <section id="menu" className="container">
         <div className="heading2">No.4</div>
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
              <Link href="https://x.com/osakaunivsoccer?s=11&t=JezDDOZeLsmWzb2O8fGg7w"><Image src="/X.jpg" alt="" width={50} height={50} layout="fixed"/></Link>
            </div>
            <div className="column-b">
            <Link href="https://www.instagram.com/p/DCBQiDhvTKO/?igsh=aWZucDFqb2U1NGo1"><Image src="/insta.png" alt="" width={50} height={50} layout="fixed"/></Link>
            </div>
            <div className="column-c">
              <Link href="/"><Image src="/tiktok.png" alt="" width={50} height={50} layout="fixed"/></Link>
            </div>
            <div className="column-d">
              <Link href="/"><Image src="/bereal.png" alt="" width={50} height={50} layout="fixed"/></Link>
            </div>
        </div>
       <Link href="/" className="logo">SOCCER DOUKOU</Link>
       <div className="copyright">© SOCCER DOUKOU Inc.</div>
      </footer>
     </>
    )
}
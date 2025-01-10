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
              <p>氏名</p>
              <p>出身高校・チーム</p>
              <p>ポジション</p>
              <p>趣味</p>
              <p>特徴</p>
            </div>
            <div className="kaityou-img"></div>
          </div>
          <div className="heading3">naoto</div>
          <div className="flex2">
            <div className="play">
              <h3><span className="span">副会長</span></h3>
              <p>氏名</p>
              <p>出身高校・チーム</p>
              <p>ポジション</p>
              <p>趣味</p>
              <p>特徴</p>
            </div>
            <div className="huku1-img"></div>
          </div>
          <div className="heading4">kanta</div>
          <div className="flex2">
            <div className="play">
              <h3><span className="span">副会長</span></h3>
              <p>氏名</p>
              <p>出身高校・チーム</p>
              <p>ポジション</p>
              <p>趣味</p>
              <p>特徴</p>
            </div>
            <div className="huku2-img"></div>
          </div>
          <div className="heading5">futa</div>
          <div className="flex2">
            <div className="play">
              <h3><span className="span">会計</span></h3>
              <p>氏名</p>
              <p>出身高校・チーム</p>
              <p>ポジション</p>
              <p>趣味</p>
              <p>特徴</p>
            </div>
            <div className="kaikei-img"></div>
          </div>
        </section>
        <section id="menu" className="container">
         <div className="heading2">No.4</div>
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
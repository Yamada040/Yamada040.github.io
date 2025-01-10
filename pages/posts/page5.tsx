import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "/app/layout6.css";
import "/app/layout7.css";
import "/app/layout8.css";
import "/app/layout10.css";
export default function Page2(){
    return(
     <>
      <Head>
        <meta charSet="UTF-8"/>
        <title>過去実績</title>
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
        <section id="praise" className="container">
            <div className="praise_inner">
              <h1>過去実績</h1>
            </div>
        </section> 
        <section id="sho" className="container">
          <div className="heading">glory</div>
          <h2 className="title pop">past achievements</h2>
          <div className="flex">
            <div className="achi">
              <h3>主な過去実績</h3>
              <ul>
                <li>2024年 関西同好会リーグ１部 3位🥉</li>
                <li>2024年 Leaders Autumn Cup 優勝🏆</li>
                <li>2024年 関関同立京阪神カップ 優勝🏆</li>
                <li>2024年 適塾杯 優勝🏆</li>
                <li>2024年 国公立Cup 準優勝🥈</li>
                <li>2024年 全国国公立大会 5位</li>
                <li>2023年 SS 国公立大会 優勝🏆</li>
                <li>2023年 SS Spring Cup 優勝🏆</li>
                <li>2022年 SS 国公立杯 優勝🏆</li>
                <li>2022年 適塾杯 優勝🏆</li>
                <li>2022年 SS 国公立 Cup 優勝🏆</li>
              </ul>
            </div>
            <div className="achi-img"></div>
          </div>
        </section>
        <section id="menu" className="container">
         <div className="heading2">No.5</div>
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
              <Link href="https://x.com/osakaunivsoccer?s=11&t=JezDDOZeLsmWzb2O8fGg7w"><Image src="/X.jpg" alt="X link" width={50} height={50} layout="intrinsic"/></Link>
            </div>
            <div className="column-b">
            <Link href="https://www.instagram.com/p/DCBQiDhvTKO/?igsh=aWZucDFqb2U1NGo1"><Image src="/insta.png" alt="instagram link" width={50} height={50} layout="intrinsic"/></Link>
            </div>
            <div className="column-c">
              <Link href="/"><Image src="/tiktok.png" alt="tiktok" width={50} height={50} layout="intrinsic"/></Link>
            </div>
            <div className="column-d">
              <Link href="/"><Image src="/bereal.png" alt="bereal" width={50} height={50} layout="intrinsic"/></Link>
            </div>
        </div>
       <Link href="/" className="logo">SOCCER DOUKOU</Link>
       <div className="copyright">© SOCCER DOUKOU Inc.</div>
      </footer>
     </>
    )
}
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "/app/layout7.css";
import "/app/layout6.css";
import "/app/layout8.css";
export default function Page3(){
    return(
      <>
        <Head>
         <meta charSet="UTF-8"/>
         <title>活動情報</title>
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
          <section id="past" className="container">
            <div className="past_inner">
              <h1>活動情報</h1>
            </div>
          </section>
          <section id="pra" className="container">
          <div className="heading">2024</div>
          <h2 className="title pop">activity infomation</h2>
            <div className="flex">
              <div className="pra_inner">
                <h3>2024年度</h3>
                <ul>
                  <li><Link href="https://www.instagram.com/p/C5sGCbGPW-K/?igsh=aW00b2xraXJqYXkz">2024/04/13 追いコン</Link></li>
                  <li><Link href="https://www.instagram.com/p/C8l5G-7Ps4e/?igsh=cGxuODFmazF2enNs">2024/06/24 新歓合宿 in丹波</Link></li>
                  <li><Link href="https://www.instagram.com/p/C_VbNGvvKSp/?igsh=ajc0ZzkwNXVqYnVl">2024/08/31 適塾杯 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/C_jyvcAvBpM/?igsh=MXFjdjQ3cjR0c2ZwNg==">2024/09/06 関関同立京阪神杯 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/DCBQiDhvTKO/?igsh=aWZucDFqb2U1NGo1">2024/11/06 マチカネ祭</Link></li>
                  <li><Link href="https://www.instagram.com/p/DCNoWBKSqbV/?igsh=cnBoMGJobWVlaWpi">2024/11/11 11月秋合宿</Link></li>
                  <li><Link href="https://www.instagram.com/p/DDwFRFzv_A6/?igsh=MXVjcjFtdmNvOTA0Yw==">2024/12/19 リーグ戦 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/DDwF24-vJvu/?igsh=MWlyYmowaW5zNmEx">2024/12/18 忘年会2024</Link></li>
                </ul>
              </div>
              <div className="pra-img pra_inner"></div>
            </div>
          </section>
          <section id="pra2" className="container">
          <div className="heading2">2023</div>
              <div className="flex2">
                <div className="pra2_pho">
                 <Image src="/pic2.jpg" width={16} height={9} layout="responsive" alt="mie"/>
                 <Image src="/pic3.jpg" width={16} height={9} layout="responsive" alt="athome"/>
                </div>
               <div className="pra2_inner">
               <h3>2023年度</h3>
               <ul>
                  <li><Link href="/">2023/04/03 追いコン</Link></li>
                  <li><Link href="https://www.instagram.com/p/CsvfCkWvPDe/?igsh=em9zdGc2ZXF3bDdp">2023/05/27 三ツ葉カップ 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/CsvzlMiPuxg/?igsh=MThkZ3Q0bmx6NTB5Zw==">2023/05/27 フットサル大会 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/CszAsgUvWOs/?igsh=MTJkeWNnNjNlcHFrbg==">2023/05/29 新歓BBQ</Link></li>
                  <li><Link href="https://www.instagram.com/p/CtS5lm7v5Mq/?igsh=cTJtMTlkNmlmeXZx">2023/06/10 新歓合宿 in丹波</Link></li>
                  <li><Link href="https://www.instagram.com/p/Ctou72lPjaC/?igsh=NXozdmkyMm1iaXA=">2023/06/19 2回生合宿</Link></li>
                  <li><Link href="https://www.instagram.com/p/CxQA0tpoBZK/?igsh=N3E3b3Y0ODh3eGZx">2023/09/16 夏合宿 in伊勢</Link></li>
                  <li><Link href="https://www.instagram.com/p/Cxw-BBEPxag/?igsh=bThmcDBzdXdoNGVo">2023/09/29 9月秋合宿 in長野</Link></li>
                  <li><Link href="https://www.instagram.com/p/CyFeUgkPIQK/?igsh=aTI2MW45cWljcGd0">2023/10/07 ALLWIN in滋賀</Link></li>
                  <li><Link href="https://www.instagram.com/p/CyfXp-aP6ay/?igsh=MXExMjk5ZDZ2YnBvaQ==">2023/10/17 athome championship 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/Cyw9IHfPBsQ/?igsh=aTd5eHhmNHJ4c3Iz">2023/10/24 リーグ戦 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/CzdYgH6Pne-/?igsh=bmduNmNlZXhxMDVx">2023/11/10 マチカネ祭</Link></li>
                  <li><Link href="https://www.instagram.com/p/C0t5TApPVmg/?igsh=MTBsZjh6ZHgzM2lzMw==">2023/12/12 12月冬合宿 in丹波</Link></li>
                  <li><Link href="https://www.instagram.com/p/C1EGPETPeCG/?igsh=cXhtbHQyd3dsM201">2023/12/20 忘年会2023</Link></li>
                  <li><Link href="https://www.instagram.com/p/C3moZTwPHiz/?igsh=MXUzcTh0NTZuNnNuMQ==">2024/02/21 国公立 Champion Ship 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/C3nTSWZv5aB/?igsh=Nmk0MTV5eGVpNnI2">2024/02/22 関西同好会ルーキー杯 予選会 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/C4KEt4TvJ_B/?igsh=MWh4ZjN4YXpjMHMyMQ==">2024/03/06 国公立カップ 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/C4b2PMqPTt6/?igsh=ZjVicHI3dDAxNnZn">2024/03/13 スノボ旅行 in栂池高原</Link></li>
               </ul>
              </div>
            </div>
          </section>
          <section id="pra" className="container">
          <div className="heading">2022</div>
            <div className="flex">
              <div className="pra_inner">
                <h3>2022年度</h3>
                <ul>
                  <li><Link href="https://www.instagram.com/p/Cb6YTukvVHb/?igsh=MWxpYzdkNHV1dWhuOA==">2022/04/04 追いコン</Link></li>
                  <li><Link href="https://www.instagram.com/p/CdItrgBvOmA/?igsh=dG85cTFnMTR0ajg=">2022/05/04 新歓ミニゲーム大会</Link></li>
                  <li><Link href="https://www.instagram.com/p/Cd0lRZlPn5q/?igsh=MWh2MjE2dGhodzIxeQ==">2022/05/21 三ツ葉カップ 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/CfGTsB6vbDu/?igsh=Nmg1eWloaHNtbGR3">2022/06/22 新歓合宿 in丹波</Link></li>
                  <li><Link href="https://www.instagram.com/p/ChkA72aPlMk/?igsh=cG51ZDNrYzI4bzEw">2022/08/22 適塾杯 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/CjOyc0gvfUH/?igsh=enA3cDQ2aWxkb3Fz">2022/10/03 athome championship 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/Cj19-C7PBBs/?igsh=Y2hxNmQ1ZmwxZHJh">2022/10/18 リーグ戦 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/Cld-XCyPDrM/?igsh=MW8wZHppZWRka2tuNg==">2022/11/27 国公立杯 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/CphgLjsPSo6/?igsh=ZThuZm9nOWhiOHpx">2023/03/08 SS Spring Cup 結果</Link></li>
                  <li><Link href="https://www.instagram.com/p/CpyvGM1v3oM/?igsh=c3Vicmt6Nzkyb3k2">2023/03/15 国公立大会 結果</Link></li>
                </ul>
              </div>
              <div className="pra3-img pra_inner"></div>
            </div>
          </section> 
          <section id="menu" className="container">
           <div className="heading2">No.3</div>
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
    )};
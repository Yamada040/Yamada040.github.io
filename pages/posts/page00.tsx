import Image from "next/image";
import Header from "@/components/header";
import "/app/layout2.css";
import "/app/globals.css";
export default function FirstPost(){
    return (
        <>
        <div className="page">
        <Header/>
        <div className="page2box1">
            <h1>活動内容</h1>
            <div className="contents">
                <p>毎週月曜4限終わり豊中キャンパスで練習しています！</p>
                <p>主に練習はゲーム形式で行っています</p>
                <p>途中参加、途中退出OKなので、5限終わりでも気軽に参加できます！</p>
                <p>また週末は、試合や合宿などにも積極的に参加しており、サッカーをする機会はたくさんあります！</p>
                <p>初心者から経験者まで幅広いレベルの選手が在籍しており、レベルに関わらず、楽しくサッカーできます！</p>
                <p>各時期ごとにイベントが盛りだくさんなので、選手・マネージャー、学年の垣根を越えて仲良く楽しめます！</p>
            </div>
        </div>
        <div className="page2box2">
            <h2>年間予定</h2>
           <div className="yotei"> 
            <table>
                <tr>
                    <th>2024年度 年間予定</th>
                </tr>
            <div  className="contents2">
                <tr>
                    <th>4月</th><td>新歓時期</td>
                </tr>
                <tr>
                    <th>5月</th><td>新歓BBQ</td>
                </tr>
                <tr>
                    <th>6月</th><td>新歓合宿</td>
                </tr>
                <tr>
                    <th>7月</th><td>浜レクリエーション</td>
                </tr>
                <tr>
                    <th>8月</th><td>夏合宿、適塾杯</td>
                </tr>
                <tr>
                    <th>9月</th><td>関西大会</td>
                </tr>
                <tr>
                    <th>10月</th><td>リーグ戦～</td>
                </tr>
                <tr>
                    <th>11月</th><td>冬合宿</td>
                </tr>
                <tr>
                    <th>12月</th><td>～リーグ戦、忘年会</td>
                </tr>
                <tr>
                    <th>1月</th><td>新年会</td>
                </tr>
                <tr>
                    <th>2月</th><td>国公立全国大会、スキー・スノボ合宿</td>
                </tr>
                <tr>
                    <th>3月</th><td>3回生引退合宿</td>
                </tr>
            </div>
            </table>
            <div>
            <Image className="pic1" src="/pic1.jpg" alt="BBQ" width={350} height={250}/> 
            <Image className="pic2" src="/pic2.jpg" alt="夏合宿" width={350} height={250}/>
            <Image className="pic3" src="/pic3.jpg" alt="関西大会" width={350} height={250}/>
            <Image className="pic4" src="/pic4.jpg" alt="忘年会" width={350} height={250}/>
            <Image className="pic5" src="/pic5.jpg" alt="スキー・スノボ合宿" width={350} height={250}/>
            <Image className="pic6" src="/pic6.jpg" alt="BB" width={350} height={250}/>
            <Image className="pic7" src="/pic7.jpg" alt="BBQ" width={350} height={250}/>
            <Image className="pic8" src="/pic8.jpg" alt="BBQ" width={350} height={250}/>
            </div>
           </div> 
        </div>
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
        </div>
        </>
    )
}
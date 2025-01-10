import Link from "next/link";
function Header(){
    return (
        <header className="menubar">
                <div className="container">
                    <img  className="mark" src="/mark.png" />
                    <h1 className="title">大阪大学サッカー同好会</h1>
                </div> 
                <nav className="none">
                    <Link href="/">トップページ</Link>
                    <Link href="/posts/page2">活動内容</Link>
                    <Link href="/posts/page3">活動情報・実績</Link>
                    <Link href="/posts/page4">選手紹介</Link>
                    <Link href="/posts/page5">SNSリンク</Link>
                 </nav>   
        </header>
    )
}

export default Header;


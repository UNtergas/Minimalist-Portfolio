import Image from "next/image";
import Link from "next/link";


const DetailPageHeader = () => {
    return (
        <header className={'header'}>
            <div className={'header__logo'}>
                <Link href="/">
                    <Image src={"/logo.png"} alt={"logo"} width={40} height={40}/>
                </Link>
                <p style={{marginLeft: '1rem', fontSize: '3rem'}}>Reflections</p>
            </div>
            <Link href="/" className="to-home-element"> To homepage</Link>
        </header>
    );
}

export default DetailPageHeader;
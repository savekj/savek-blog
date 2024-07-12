import Script from "next/script";

type Props = {
    pId: string;
};

const GoogleAdsense: React.FC<Props> = ({ pId }) => {
    if (process.env.NODE_ENV !== "production") {
        return null;
    }
    return (
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1800188805374827"
            crossOrigin="anonymous" />
    );
};

export default GoogleAdsense;